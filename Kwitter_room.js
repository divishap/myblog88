const firebaseConfig = {
  apiKey: "AIzaSyBJBKzxRCOz7eLLPVw3QHI5Nl5OfcPmlzU",
  authDomain: "cp94-bf27e.firebaseapp.com",
  databaseURL: "https://cp94-bf27e-default-rtdb.firebaseio.com",
  projectId: "cp94-bf27e",
  storageBucket: "cp94-bf27e.appspot.com",
  messagingSenderId: "546383833324",
  appId: "1:546383833324:web:185bacac0cb629f9081dc9"
};

// Initialize Firebase


firebase.initializeApp(firebaseConfig);

 user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";


function addRoom()
  {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick'redirectToRoomName(this.id)' >8"+ Room_names +"</div><br>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}