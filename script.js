/* Using the 'namey' API Service we can request random names */
function changeName(){
    var e = document.querySelector(".main > h2");
    const response =  fetch("https://namey.muffinlabs.com/name.json" , {
        method : 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((data) => {
        e.innerText = data[0];
    });
}

/* Remove Element */
function remove(id , func){
    var item = document.getElementById(id);                         
    item.remove();
    var request_number = document.getElementById('request_number');
    request_number.innerText--;
    if(func == "add"){
        var total_connections = document.getElementById("total_connections");
        total_connections.innerText++;
    }
}