function fetchData(callback) {
    setTimeout(()=> {
        const data = "Hello World!";
        callback(data)
    }, 2000);
}

function handleData(data){
    console.log("Received data : ", data);
}


fetchData(handleData);