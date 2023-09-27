let form = document.getElementById("userForm");
form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;

    var userData = {
        name: name,
        age: age
    };
    
    localStorage.setItem("userData", JSON.stringify(userData));
     alert("User data has been saved to Local Storage.");
});

document.getElementById("retrieveButton").addEventListener("click", function() {
    var userDataJSON = localStorage.getItem("userData");

    if (userDataJSON) {
        var userData = JSON.parse(userDataJSON);

        var table = document.getElementById("userDataTable");
        var tbody = userDataTable.querySelector("tbody");
        tbody.innerHTML = "<tr><td>" + userData.name + "</td><td>" + userData.age + "</td></tr>";
        table.style.display = "block";
    } else {
         alert("No user data found in Local Storage.");
        }
});