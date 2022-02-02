
const dateH1=document.querySelector('#dateH1')
const kun = document.querySelector("#kun")
let today = new Date();
let day = today.getDay();
let dayList = ['Sunday',"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log('today is :' + dayList[day] + ".");
kun.textContent= 'Today is : ' + dayList[day] + "."
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let prepand = (hour >= 12) ? " PM" : "AM";
if(hour === 0 && prepand === " PM"){
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = "NOON";
    }else{
        hour = 12;
        prepand = " PM"
    }
}else if(hour === 0 && prepand === "AM"){
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = "MIDNIGHT"
    }else{
        hour = 12;
        prepand = "AM"
    }
}
console.log(`Current time is: ${hour} ${prepand} : ${minute} : ${second}`);


setInterval(() => {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let prepand = (hour >= 12) ? " PM" : "AM";
    let dateTime=`Current time is: ${hour} ${prepand} : ${minute} : ${second}`;
    dateH1.textContent=dateTime    
}, 1000);