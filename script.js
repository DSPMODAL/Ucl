// 🔥 Firebase Config (APNA CONFIG DALO)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// 📱 Mobile ko email jaisa use karenge
function mobileToEmail(mobile) {
  return mobile + "@mobilelogin.com";
}

// 📝 Register
function register() {
  const mobile = document.getElementById("mobile").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(
    mobileToEmail(mobile),
    password
  )
  .then(() => {
    document.getElementById("msg").innerHTML =
      "✅ Registration Successful";
  })
  .catch(err => alert(err.message));
}

// 🔑 Login
function login() {
  const mobile = document.getElementById("mobile").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(
    mobileToEmail(mobile),
    password
  )
  .then(() => {
    document.getElementById("msg").innerHTML =
      "🎉 Login Successful";
  })
  .catch(err => alert("❌ Wrong mobile or password"));
}