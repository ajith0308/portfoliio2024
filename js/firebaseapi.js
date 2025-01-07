import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Your web app's Firebase configuration
// Base64 encoded Firebase configuration

const Config = 'eyJhcGlLZXkiOiAiQUl6YVN5Ql80VjN4end6Ml9hS1ZjOTBZS3kxQjhjcDd6d2Fzb1pRIiwgImF1dGhEb21haW4iOiAicG9ydGZvbGlvLTdmNzc4LmZpcmViYXNlYXBwLmNvbSIsICJwcm9qZWN0SWQiOiAicG9ydGZvbGlvLTdmNzc4IiwgInN0b3JhZ2VCdWNrZXQiOiAicG9ydGZvbGlvLTdmNzc4LmZpcmViYXNlc3RvcmFnZS5hcHAiLCAibWVzc2FnaW5nU2VuZGVySWQiOiAiOTM5Mjg3NDkxMTUiLCAiYXBwSWQiOiAiMTo5MzkyODc0OTExNTp3ZWI6MjU5OTRhZDBhNmZkYTI0ZjMyMDQxZSIsICJtZWFzdXJlbWVudElkIjogIkctSEtHUEdHNUhNRyJ9';

// Decode the Base64 string
const decodedConfig = atob(Config);

// Parse the JSON string into an object
const firebaseConfig = JSON.parse(decodedConfig);


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export async function saveData(data) {


    try {
        const docRef = await addDoc(collection(db, "contactus"), data);
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
        throw e;
    }

}


