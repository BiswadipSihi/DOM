let myFrom = document.querySelector("form");
let inTask = document.getElementById("task");
let prio   = document.getElementById("priority");
let tbody = document.querySelector("tbody");

let AllTask =[];
myFrom.addEventListener("submit",function(e){
    e.preventDefault();
    let data = {
        input : inTask.value,
        priority: prio.value,
    }
    AllTask.push(data);
    
    tbody.innerHTML="";
    AllTask.map((ele)=>{
        let tr=document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        td1.innerText = ele.input;
        td2.innerText = ele.priority;
        tr.append(td1,td2);
        tbody.append(tr);
    
    })
})
