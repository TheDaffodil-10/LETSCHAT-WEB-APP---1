// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGm1R-Y3D_hscyhmXWAf-ZCrrcKrwdbuc",
  authDomain: "kwitter-web-app-b84c5.firebaseapp.com",
  databaseURL: "https://kwitter-web-app-b84c5-default-rtdb.firebaseio.com",
  projectId: "kwitter-web-app-b84c5",
  storageBucket: "kwitter-web-app-b84c5.appspot.com",
  messagingSenderId: "138983753860",
  appId: "1:138983753860:web:c175591c6ec01a72f79ad1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
  
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  }) ;
       
       localStorage.setItem("room_name", room_name);
       window.location = "kwitter_page.html" ;
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name)
  window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter_page.html";
}
function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
 });

document.getElementById("msg").value = "";
}