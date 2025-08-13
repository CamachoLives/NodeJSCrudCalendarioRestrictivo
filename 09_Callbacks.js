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
  return new Promise((Resolve, Reject) => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let x = cb;
    console.log("We'll get fibonacci with this number --> ", cb);
    for (let z = 0; z <= array.length; z++) {
      x = x + z;
    }
    const error = "There'was a error getting fibonacci";

    setTimeout(() => {
      if (x) {
        Resolve(x);
      } else {
        Reject(new Error(console.log(error)));
      }
    }, 3000);
  });
};

const SecondtStep = (cb) => {
  return new Promise((resolve, reject) => {
    const p = cb * 1;
    console.log("Now we'll get solution a math problem with this number --> ",p);

    if (p) {
      resolve(
        setTimeout(() => {
          console.log("Solution's problem --> ", p);
        }, 2000)
      );
    } else {
      reject(new error("Unexpected Error happened!"));
    }
  });
};

FirstStep(5)
  .then((Result) => SecondtStep(Result))
  .then((Final) => console.log("Final result --> ", Final))
  .catch((e) => console.log("There's an error --> ", e));
