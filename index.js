import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://playround-1e465-default-rtdb.asia-southeast1.firebasedatabase.app"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const moviesInDB = ref(database, "movies");

const inputFieldEl = document.getElementById("input-field");
const addButonEl = document.getElementById("add-button");

addButonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value;

    push(moviesInDB, inputValue);

    console.log(inputValue);
});
