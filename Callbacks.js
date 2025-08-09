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
        





const FirstStep = (cb) => {
        console.log("first step");
    return cb();
}
const SecondtStep = (cb) => {
    setTimeout(() => {
        console.log("Second step");
    }, 2000);
    return cb();
}
const ThirdStep = (cb) => {
    setTimeout(() => {
        console.log("Third step");
    }, 4000);
    return cb();
}
const FourthtStep = (cb) => {
    setTimeout(() => {
        console.log("Fourth step");
    }, 6000);
    return cb();
}


FirstStep(() => {
    SecondtStep(() =>{
        ThirdStep(() => {
            FourthtStep(() => {
                setTimeout(() => {
                    console.log("The steps were completed");
                }, 8000);
            })
        })
    })
})