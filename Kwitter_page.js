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
  const app = initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

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