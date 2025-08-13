

const getdata = (data) => {
    return new Promise ((Resolve,reject) => { 
        if (data) {
               const array = {
                    name:"Cristian",
                    age:21,
                    Weight:1.80
                }
            Resolve(() =>{
                let v = 0
                setTimeout(() => {
                    console.log("Name --> ",array.name);    
                    v = 1 
                }, 1000);
                setTimeout(() => {
                   console.log("Age --> ",array.age); 
                   v = v + 1
                }, 2000);
                setTimeout(() => {
                   console.log("Weight --> ",array.Weight);
                   v = v + 1 
                }, 3000);
                setTimeout(() => {
                    return console.log("Cantidad de valores en el array --> ", v)
                }, 4000);
            })
        } else {
            reject(console.log("there's a error!"))
        }  
    })
}


const main = async() => {
    try {
         let r = await getdata(false)
         r()
    } catch (error) {
        console.log("Next error --> ", error);
           
    }
}

main()
