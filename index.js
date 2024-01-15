function World_Clock(){

document.getElementById('t1').innerHTML = "Current Time and Date: ";
document.getElementById('main1').innerHTML = "Tic-Toc! Tic-Toc! Time is always running ";
setInterval(() => {
a = new Date();
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
let time = a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();
document.getElementById('time').innerHTML = "Time: " + time;

let date = a.toLocaleDateString(undefined, options);
document.getElementById('date').innerHTML = "Date: " + date;
}, 1); 

document.getElementById('timebar').innerHTML = "Thank you for visiting";
}
