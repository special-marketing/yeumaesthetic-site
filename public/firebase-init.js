// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyD4OgH5CQJkGIRkil5HiGqT3ndcKKB6gOY",
  authDomain: "sp-esthetic-main.firebaseapp.com",
  projectId: "sp-esthetic-main",
  storageBucket: "sp-esthetic-main.firebasestorage.app",
  messagingSenderId: "2249321266",
  appId: "1:2249321266:web:db1e17bfa3c8d336ecc52b",
  measurementId: "G-R0TJY7MTW4",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Analytics는 환경에 따라 미지원일 수 있어서 안전하게 처리
export let analytics = null;
if (await isSupported()) {
  analytics = getAnalytics(app);
}
