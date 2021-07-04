
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCUsI8tnjLkjT_LH02bQ_NAvNnFBhJ9fJo",
      authDomain: "kwitter-88642.firebaseapp.com",
      databaseURL: "https://kwitter-88642-default-rtdb.firebaseio.com",
      projectId: "kwitter-88642",
      storageBucket: "kwitter-88642.appspot.com",
      messagingSenderId: "662885715494",
      appId: "1:662885715494:web:92446dc3baf796fa1960e7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);    

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{

  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
   
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName'>#"+Room_names+"</div><hr>";
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location;"kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

