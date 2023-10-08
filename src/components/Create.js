import React, {useState} from 'react'
import axios from 'axios';
import "./Create.css"

function Create() {
    const [osp_title, setOSPTitle] = useState(""); // State for password
    const [osp_description, setDescription] = useState(""); // State for password
    const [osp_topics, setOSPTopics] = useState(""); // State for password
  
    const handleUsernameChange = (event) => {
      setOSPTitle(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setDescription(event.target.value);
    };
    const handledChange = (event) => {
      setOSPTopics(event.target.value);
    };
  
    const alert = () => {
      axios
        .post("http://127.0.0.1:8000/create-opensource-project", {
          user_id: localStorage.getItem("user_id"),
          username: localStorage.getItem("username"),
          osp_title: osp_title,
          osp_description: osp_description,
          osp_topics: osp_topics,
        })
        .then((response) => {
          console.log(response.data.message);
          if (response.data.status == 200){
              window.location.replace("/");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

  return (
    <div className='create'>
              <form action="">
        <div className="">
          <label htmlFor="osp_title">
            Please Enter A Title For Your Open Source Project
          </label>
          <input
            type="text"
            name="osp_title"
            id=""
            value={osp_title}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="">
          <label htmlFor="osp_description">Please Enter a Description (You can use HTML / {"<br/>"} for line breaks)</label>
          <textarea
            type="text"
            name="osp_description"
            id=""
            value={osp_description}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="">
          <label htmlFor="osp_topics">Please Enter Topics Separated By Commas</label>
          <input
            type="text"
            name="osp_topics"
            id=""
            value={osp_topics}
            onChange={handledChange}
          />
        </div>
        <button type="button" onClick={alert}>
          Create
        </button>
      </form>
    </div>
  )
}

export default Create