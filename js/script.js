var myArray = [true, "What is the meaning of life?"];
//var dv = document.getElementById('dv');

myArray.push(42);

myArray.shift();

console.log(myArray[0]);
console.log(myArray[1]);
//dv.innerHTML = myArray[0] + myArray[1];

setInterval(displayTime, 1000);

function displayTime() {

    const timeNow = new Date();

    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let today = weekDay[timeNow.getDay()];
    let months = timeNow.toLocaleString("default", {
        month: "long"
    });
    let year = timeNow.getFullYear();
    let period = "AM";

    if (hoursOfDay > 12) {
        hoursOfDay-= 12;
        period = "PM";
    }

    if (hoursOfDay === 0) {
        hoursOfDay = 12;
        period = "AM";
    }

    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hoursOfDay + ":" + minutes + ":" + seconds + period;
    let hr = document.getElementById('hr');
    let mn = document.getElementById('mn');
    let sc = document.getElementById('sc');

    //document.getElementById('Clock').innerHTML = time + " " + today + " " + months + " " + year;
    hr.innerHTML = hoursOfDay;
    mn.innerHTML = minutes;
    sc.innerHTML = seconds;

}
displayTime();

//this is a working wall clock, to edit/add your own JAVASCRIPT, clean out the code in
// here and start, depending on your browser cursor may not show, just go ahead and type//
var secondHand = document.querySelector(".second-hand");
var minsHand = document.querySelector(".min-hand");
var hourHand = document.querySelector(".hour-hand");
setInterval(setDate, 1000);
function setDate() { 
  var now = new Date();

  var seconds = now.getSeconds();
  var secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  var mins = now.getMinutes();
  var minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  var hour = now.getHours();
  var hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setDate();


