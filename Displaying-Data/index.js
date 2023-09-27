let display = document.getElementById("main");
let button = document.querySelector("button");



button.addEventListener("click",()=>{
    fetch("https://reqres.in/api/users")
   .then ((resolve) =>{
       return resolve.json();
    })
    .then((resolve)=>{
       printData(resolve.data);
    })
     .catch((error)=>{
        console,log(error);
    })
})

function printData(data){
    data.forEach(user => {
        let userCard = document.createElement("div");
        userCard.className = "card";

        let photo = document.createElement("img");
        photo.src = user.avatar; 

        let Id = document.createElement("P")
        Id.textContent = "Id: "+ user.id;
    
        let email = document.createElement("p");
        email.textContent ="Email: " +user.email;

        let name = document.createElement("p");
        name.textContent ="Name: " +user.first_name + " " + user.last_name;

        userCard.append(Id,photo,name,email);

        display.append(userCard);
    });

}