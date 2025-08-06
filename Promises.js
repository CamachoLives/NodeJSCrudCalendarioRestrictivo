/**
 * Now we start with the promises 
 */

const GetData = (Cb) => {
    return new Promise ((resolve, reject) => {
        if(Cb){
            resolve({
                name:"Cris",
                age:21
            })
        }else{
            reject("No se encontraron los datos");
        }
    })
}
// hola
GetData(false)
.then((Cb) => {
    console.log(Cb);
})
.catch((error) => {
    console.log(error);
})