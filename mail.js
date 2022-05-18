const firebaseConfig = {
  apiKey: "AIzaSyCw9LkQfYMnxTCDAPgD2RnSz1VJceK1y0Y",
  authDomain: "p300-678cc.firebaseapp.com",
  databaseURL: "https://p300-678cc-default-rtdb.firebaseio.com",
  projectId: "p300-678cc",
  storageBucket: "p300-678cc.appspot.com",
  messagingSenderId: "216663618691",
  appId: "1:216663618691:web:bf8368b23f5e37cdfd17b6",
  measurementId: "G-K1JJPZH2QW"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
