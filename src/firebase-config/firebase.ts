import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyANK7BnninJI22Pgp2YCFAoFsBOpfZPIUs",
	authDomain: "trello-daac1.firebaseapp.com",
	databaseURL: "https://trello-daac1.firebaseio.com",
	projectId: "trello-daac1",
	storageBucket: "trello-daac1.appspot.com",
	messagingSenderId: "156075503965",
	appId: "1:156075503965:web:8aeaf73cb0322a5f0938b4",
	measurementId: "G-J329L2VVBD",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export { db };
