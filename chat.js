// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIjz7oIdvsW8VefC4IDQfRNdbbUlvDDgQ",
    authDomain: "kwitter-ea385.firebaseapp.com",
    projectId: "kwitter-ea385",
    storageBucket: "kwitter-ea385.appspot.com",
    messagingSenderId: "490490667232",
    appId: "1:490490667232:web:0f5c7460948e8dbead7085",
    measurementId: "G-57Z2YG603G"
}
//ADD YOUR FIREBASE LINKS HERE
https://console.firebase.google.com/u/0/project/kwitter-ea385/database/kwitter-ea385-default-rtdb/data/~2F

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });



    /*
    localStorage.setItem("user_name", user_name);




 

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}


