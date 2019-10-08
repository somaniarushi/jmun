jQuery(document).ready(function() {
  $('textarea').blur(function () {
      $('#hire textarea').each(function () {
          $this = $(this);
          if ( this.value != '' ) {
            $this.addClass('focused');
            $('textarea + label + span').css({'opacity': 1});
          }
          else {
            $this.removeClass('focused');
            $('textarea + label + span').css({'opacity': 0});
          }
      });
  });

  $('#hire .field:first-child input').blur(function () {
      $('#hire .field:first-child input').each(function () {
          $this = $(this);
          if ( this.value != '' ) {
            $this.addClass('focused');
            $('.field:first-child input + label + span').css({'opacity': 1});
          }
          else {
            $this.removeClass('focused');
            $('.field:first-child input + label + span').css({'opacity': 0});
          }
      });
  });

  $('#hire .field:nth-child(2) input').blur(function () {
      $('#hire .field:nth-child(2) input').each(function () {
          $this = $(this);
          if ( this.value != '' ) {
            $this.addClass('focused');
            $('.field:nth-child(2) input + label + span').css({'opacity': 1});
          }
          else {
            $this.removeClass('focused');
            $('.field:nth-child(2) input + label + span').css({'opacity': 0});
          }
      });
  });
  $('#map').focusin(function(event) {
    $('section').fadeOut('400', function() {});
  });
  $('#map').focusout(function(event) {
    $('section').fadeIn('400', function() {});
    });
});
var config = {
 apiKey: "AIzaSyAZ0noL6Eyt1qemFWwNQ_RROZdJ6CvgUac",
 authDomain: "jmun-1510492585424.firebaseapp.com",
 databaseURL: "https://jmun-1510492585424.firebaseio.com",
 projectId: "jmun-1510492585424",
 storageBucket: "jmun-1510492585424.appspot.com",
 messagingSenderId: "465157348404"
};
firebase.initializeApp(config);

var messagesRef=firebase.database().ref('messages');


document.getElementById('contactForm').addEventListener('submit',submitForm);
function submitForm(e) {
e.preventDefault();

var name= getInputVal('name');
var email= getInputVal('email');
var message= getInputVal('msg');

saveMessage(name, email, message);

document.querySelector('.alert').style.display= 'block';

setTimeout(function(){
  document.querySelector('.alert').style.display ='none';
},3000);

document.getElementById('contactForm').reset();
}
function getInputVal(id) {
return document.getElementById(id).value;
}

function saveMessage(name, email, message) {
var newMessageRef= messagesRef.push();
newMessageRef.set({
  name:name,
  email:email,
  message: message
})
}
function initMap() {
  
 var location = {lat: 26.852482, lng: 81.01140499999997};
 var location1 = {lat: 26.865000, lng: 81.01140499999997};
 var map = new google.maps.Map(document.getElementById('map'), {center: location1,zoom: 15});
 var marker= new google.maps.Marker({position: location,map:map});
};