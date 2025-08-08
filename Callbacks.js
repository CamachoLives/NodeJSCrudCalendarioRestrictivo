// This begin sincen we are talking about Async, 'cause Javascript is handling beetwen with async, this mean
// that each thing don't execute in orden if not in less process until biggest process
// now, with callbacks we can recive the functions o datas until we required.

    // const Getdata = (Cb, CbFail) => {
    //     if (true) {
    //         setTimeout(() => {
    //             Cb({
    //             name: "Cristian",
    //             Age: 21,
    //             Carrer: "Engineer"
    //             })
    //     }, 2000);
    //     } else {
    //         CbFail(new Error("We can't get the data"))
    //     }
    // }

    // const Print = (data) => console.log(data);

    // Getdata(Print);
        





const operation = (num1,num2,cb) => {

    switch (num1) {
        case 1: 
            cb(num1 + num2)
            break;
        case 2: 
            cb(num1 - num2)
            break;
         case 3:  
            cb(num1 * num2)
            break;
         case 4: 
            cb(num1 % num2)
            break;
        default: cb("Man, have put a number! ")
            break;
    }   
}

operation(5,7,(returned) =>{
    console.log("This is the result --> ",returned);
});