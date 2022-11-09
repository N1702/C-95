var firebaseConfig = {
      apiKey: "AIzaSyBl5LhWxFxfLbGg8FxKCAt3o7l08_DfQK4",
      authDomain: "c-93-kwitter-37669.firebaseapp.com",
      databaseURL: "https://c-93-kwitter-37669-default-rtdb.firebaseio.com",
      projectId: "c-93-kwitter-37669",
      storageBucket: "c-93-kwitter-37669.appspot.com",
      messagingSenderId: "249723592926",
      appId: "1:249723592926:web:3772456940231f4d62224f",
      measurementId: "G-NFZ3X9NKQF"
    };
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome "+ user_name+"!";
function add_room(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
      {
      childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name =" + Room_names);
      row = "<div class = 'room_name' id = "+ Room_names +" onclick = 'redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;


      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      
}