// Firebase Config (Replace with Your Own from Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyB4pf1A72dVABIxg3c1PY6nhBdr-BynJck",
    authDomain: "coolinksea-7b9f5.firebaseapp.com.firebaseapp.com",
    projectId: "coolinksea-7b9f5",
    storageBucket: "coolinksea-7b9f5.firebasestorage.app",
    messagingSenderId: "776825837413",
    appId: "1:776825837413:web:17c3983449efc53441338c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Sign Up Function
function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            document.getElementById("message").innerText = "Sign-up successful!";
        })
        .catch((error) => {
            document.getElementById("message").innerText = error.message;
        });
}

// Login Function
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            document.getElementById("message").innerText = "Login successful!";
            document.getElementById("logoutBtn").style.display = "block";
        })
        .catch((error) => {
            document.getElementById("message").innerText = error.message;
        });
}

// Logout Function
function logout() {
    auth.signOut().then(() => {
        document.getElementById("message").innerText = "Logged out!";
        document.getElementById("logoutBtn").style.display = "none";
    });
}
