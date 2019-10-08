var loader=document.getElementById("loader");
window.addEventListener('load',function() {
  loader.style.display='none';
});

'use strict';

(function () {

  var deadlineDate = new Date('May 18, 2018 08:00:00').getTime();


  var countdownDays = document.querySelector('.countdown__days .number');
  var countdownHours = document.querySelector('.countdown__hours .number');
  var countdownMinutes = document.querySelector('.countdown__minutes .number');
  var countdownSeconds = document.querySelector('.countdown__seconds .number');
  
  setInterval(function () {

    var currentDate = new Date().getTime();
    var distance = deadlineDate - currentDate;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / 1000);

    countdownDays.innerHTML = days;
    countdownHours.innerHTML = hours;
    countdownMinutes.innerHTML = minutes;
    countdownSeconds.innerHTML = seconds;
  }, 1000);
})();
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

var config = {
  apiKey: "AIzaSyAZ0noL6Eyt1qemFWwNQ_RROZdJ6CvgUac",
  authDomain: "jmun-1510492585424.firebaseapp.com",
  databaseURL: "https://jmun-1510492585424.firebaseio.com",
  projectId: "jmun-1510492585424",
  storageBucket: "jmun-1510492585424.appspot.com",
  messagingSenderId: "465157348404"
};
firebase.initializeApp(config);

var messagesRef=firebase.database().ref('emails');


document.getElementById('contactForm').addEventListener('submit',submitForm);


function submitForm(e) {
  e.preventDefault();
  
  var email= document.getElementById('form-email').value;

  saveMessage(email);

  document.getElementById('contactForm').reset();
}


function saveMessage(email) {
  var newMessageRef= messagesRef.push();
  newMessageRef.set({
    email:email
  })
}