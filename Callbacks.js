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

//NICE



const FirstStep = (cb) => {
     const array = [1,2,3,4,5,6,7,8,9,10];
     console.log("We'll get fibonacci");
     let x = 0
     for(let z = 0; z <= array.length; z++ ){
            x = x + z
            console.log(x);
     }
     setTimeout(() => {
        console.log("Result's fibonacci code --> ", x);
        return cb();
     }, 2000);
}
const SecondtStep = (cb) => {

        const p = 12 * 8
        setTimeout(() => {
            console.log("Solution's problem --> ", p);
            return cb();
        }, 2000);
}


FirstStep(() => {
    SecondtStep(() => {
         console.log("Executed successful");
    })
})