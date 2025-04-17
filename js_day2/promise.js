// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data ="Hello, World!";

//             if(Math.random()*100 > 70)
//             {
//                 resolve(data);
//             }
//             else{
//                 reject("random under 70");
//             }
//         }, 1000);
//     });
// }

// fetchData()
//     .then((data) => {
//         console.log("Received data:", data);
//     })
//     .catch((error) => {
//         console.log("Error:",error)
//     });

function fetchUserData() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const userData = { id:1, name:'John Doe'};
            resolve(userData);
        }, 1000);
    });
}

function fetchProductData() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const productData = { id:1, name:'Product 1'};
            resolve(productData);
        }, 5000);
    });
}

async function fetchData() {
    try{
        const [userData, productData] = await Promise.all([fetchUserData(), fetchProductData()]);
        console.log('User data:',userData);
        console.log('Product data:',productData);
    } catch(error){
        console.error('Error:',error);
    }
}

fetchData();