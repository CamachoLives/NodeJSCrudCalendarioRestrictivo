/**
 * Now we start with the promises 
 */

// const GetData = (Cb) => {
//     return new Promise ((resolve, reject) => {
//         if(Cb){
//             resolve({
//                 name:"Cris",
//                 age:21
//             })
//         }else{
//             reject("No se encontraron los datos");
//         }
//     })
// }
// // 
// GetData(false)
// .then((Cb) => {
//     console.log(Cb);
// })
// .catch((error) => {
//     console.log(error);
// })

//CSCS

const GetData = (Cb, extra) => {
    return new Promise((ok, fail) => {
        if (Cb) {
            ok({ msg: "Todo bien", info: extra });
        } else {
            fail({ error: "Todo mal", info: extra });
        }
    });
}

GetData(false, "Dato extra")
    .then(res => console.log(res))
    .catch(err => console.log(err));