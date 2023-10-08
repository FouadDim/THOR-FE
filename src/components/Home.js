import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "./Card";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/get-all-opensource")
      .then((response) => response.json())
      .then((responseData) => setData(responseData.payload))
      .catch((error) => console.error("Error:", error));
  }, []);
  

  return (
    <div className="home">
      {data.map((item, index) => (
        <Card
          key={index} // Make sure to provide a unique key when rendering a list
          title={item.osp_title} // Replace 'title' with the actual property name in your data
          project_id={item.project_id}
          author={item.author} // Replace 'author' with the actual property name in your data
          verified={verified}
          members={item.members} // Replace 'members' with the actual property name in your data
          topics={item.osp_topics} // Replace 'topics' with the actual property name in your data
          text={item.osp_description} // Replace 'text' with the actual property name in your data
        />
      ))}
    </div>
  );
}

export default Home;
