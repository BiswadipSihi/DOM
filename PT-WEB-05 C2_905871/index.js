// fill in javascript code here
let myFrom = document.querySelector("form");
let inName = document.getElementById("name");
let inDocId = document.getElementById("docID");
let inDepart = document.getElementById("dept");
let inExp = document.getElementById("exp");
let inEmai = document.getElementById("email");
let inMobi = document.getElementById("mbl");
let tbody = document.querySelector("tbody");
let role = "";


let bag =[];
myFrom.addEventListener("submit",function(e){
    e.preventDefault();
    let experience = inExp.value;
    if (experience > 5) {
      role = "Senior";
    } else if (experience >= 2 && experience <= 5) {
      role = "Junior";
    } else {
      role = "Trainee";
    }
    let Data = {
        input1 : inName.value,
        input2 : inDocId.value,
        input3 : inDepart.value,
        input4 : inExp.value,
        input5 : inEmai.value,
        input6 : inMobi.value,
        input7 : role,
    }
    bag.push(Data);
    tbody.innerHTML="";
    bag.map((ele)=>{
        let tr=document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");
        let deB = document.createElement("button");
        td8.id = "delete";
        deB.id = "deleB"
        deB.addEventListener("click",function(){
          tr.innerHTML="";
          console.log("Hit")
          for(let i=0;i<bag.length;i++){
           if(bag[i].name==ele.name) bag.splice(i,1);
           break;
          }
        })
        td1.innerText = ele.input1;
        td2.innerText = ele.input2;
        td3.innerText = ele.input3;
        td4.innerText = ele.input4;
        td5.innerText = ele.input5;
        td6.innerText = ele.input6;
        td7.innerText = ele.input7;
        deB.innerText = "Delete";
        
        td8.append(deB);
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
        tbody.append(tr);
    })
})


