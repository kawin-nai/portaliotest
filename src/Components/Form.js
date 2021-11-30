import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { Database, getDatabase, ref, set, child } from "@firebase/database";
import "../sass/format.scss";

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
const db = getDatabase();

function Form(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [goal, setGoal] = useState();
  const [minGoal, setMinGoal] = useState();
  var contract = props.mycontract;

  const createTitle = (e) => {
    setTitle(e.target.value);
  };

  const createDesc = (e) => {
    setDesc(e.target.value);
  };

  const createImgurl = (e) => {
    setImgurl(e.target.value);
  };

  const createGoal = (e) => {
    setGoal(parseInt(e.target.value));
  };

  const createMinGoal = (e) => {
    setMinGoal(parseInt(e.target.value));
  };

  const createEntry = async () => {
    if (
      title !== "" &&
      desc !== "" &&
      imgurl !== "" &&
      goal !== undefined &&
      minGoal !== undefined &&
      goal != 0 &&
      minGoal != 0 &&
      goal > minGoal
    ) {
      set(ref(db, "ProductLists/" + title), {
        Title: title,
        Desc: desc,
        Image: imgurl,
        Goal: goal,
        MinGoal: minGoal,
        Stage: 0,
        Raised: 0,
      });
      // console.log(title, desc, imgurl, typeof goal, typeof minGoal);
      await contract
        .createProject(title, "test-desc", goal, minGoal)
        .then(() => {
          props.onClick();
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Please fill all the form correctly");
    }
  };

  return (
    <div className="modal">
      <div className="text-fields">
        <div>
          <label>Title: </label>
          <br />
          <input
            type="text"
            className="inputfield"
            placeholder="Project Title"
            onChange={createTitle}
          ></input>
        </div>

        <br />
        <div>
          <label>Description: </label>
          <br />
          {/* <input
            type="text"
            className="inputfield"
            onChange={createDesc}
          ></input> */}
          <textarea
            name="description"
            id=""
            cols="52"
            rows="10"
            id="desc-text-area"
            placeholder="A brief description of your project"
            onChange={createDesc}
          ></textarea>
        </div>

        <br />
        <div>
          <label>Image URL: </label>
          <br />
          <input
            type="text"
            className="inputfield"
            placeholder="Link to Image URL"
            onChange={createImgurl}
          ></input>
        </div>

        <br />
        <div>
          <label>Total Goal: </label>
          <br />
          <input
            type="number"
            className="inputfield"
            placeholder="Amount in HKD"
            onChange={createGoal}
          ></input>
        </div>

        <br />
        <div>
          <label>Minimum Goal: </label>
          <br />
          <input
            type="number"
            className="inputfield"
            placeholder="Amount in HKD"
            onChange={createMinGoal}
          ></input>
        </div>
      </div>

      <br />
      <button onClick={createEntry} className="topbarbutton">
        Commit
      </button>
    </div>
  );
}

export default Form;
