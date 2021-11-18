import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Database, getDatabase, ref, set } from "@firebase/database";
import "../sass/format.scss";
// import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyByQWcijM778LTJf2B0jdv87BZjmi1cW1g",
  authDomain: "portal-be7b2.firebaseapp.com",
  projectId: "portal-be7b2",
  storageBucket: "portal-be7b2.appspot.com",
  messagingSenderId: "468751414945",
  appId: "1:468751414945:web:c857565878d1a07e7262e0",
  measurementId: "G-PQGDMPGJMR",
  databaseURL:
    "https://portal-be7b2-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getDatabase();

function Form() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imgurl, setImgurl] = useState("");

  const createTitle = (e) => {
    setTitle(e.target.value);
  };

  const createDesc = (e) => {
    setDesc(e.target.value);
  };

  const createImgurl = (e) => {
    setImgurl(e.target.value);
  };

  const createEntry = () => {
    set(ref(db, "ProductLists/" + title), {
      Title: title,
      Desc: desc,
      Image: imgurl,
    });
  };

  return (
    <div className="inputField">
      <br />
      <label>Title: </label>
      <input type="text" onChange={createTitle}></input>
      <br />
      <label>Description: </label>
      <input type="text" onChange={createDesc}></input>
      <br />
      <label>Image URL: </label>
      <input type="text" onChange={createImgurl}></input>
      <button onClick={createEntry}>Commit</button>
    </div>
  );
}

export default Form;
