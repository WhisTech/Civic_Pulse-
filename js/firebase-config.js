/**
 * FIREBASE-CONFIG.JS — Firebase Initialization
 * Connects the frontend to the CivicPulse Firebase project.
 */

const firebaseConfig = {
  apiKey: "AIzaSyCLCCr2g3uCIUZa9CvZx-BgPXpmLBoh74c",
  authDomain: "civic-pulse-db186.firebaseapp.com",
  projectId: "civic-pulse-db186",
  storageBucket: "civic-pulse-db186.firebasestorage.app",
  messagingSenderId: "898489659233",
  appId: "1:898489659233:web:495a6c7d1c93b25ca49f20",
  measurementId: "G-7PRTEFX4RJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export commonly used services as global variables
// so auth.js and future scripts can access them directly
const auth = firebase.auth();
const db = firebase.firestore();
// const storage = firebase.storage(); // Uncomment when Blaze plan is activated

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.addScope('email');
