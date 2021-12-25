
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyD_DQBTxHrDMMwPMGAxVmyyM1ALCJnDCns",
      authDomain: "chat-us-rooms.firebaseapp.com",
      databaseURL: "https://chat-us-rooms-default-rtdb.firebaseio.com",
      projectId: "chat-us-rooms",
      storageBucket: "chat-us-rooms.appspot.com",
      messagingSenderId: "23286172345",
      appId: "1:23286172345:web:3afb503bdddf50cee56968"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
