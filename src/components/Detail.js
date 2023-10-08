import React, { useState, useEffect } from "react";
import "./Detail.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  const [data, setData] = useState([]);

  function formatNumber(num) {
    if (isNaN(num)) {
      return "Invalid input";
    }

    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    } else {
      return num.toString();
    }
  }

  // Create a function to render HTML safely
  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };

  let { id } = useParams();

  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/get-opensource-project", { project_id: id })
      .then((response) => setData(response.data.payload))
      .catch((error) => console.error("Error:", error));
  }, [id]);

  const join = (proj_id) => {
    if (localStorage.getItem("user_id") == "") {
      window.location.replace("/login");
    } else {
      
      axios
      .post("http://127.0.0.1:8000/join-opensource-project", {
        "user_id": localStorage.getItem("user_id"),
        "project_id": proj_id,
      })
        .then((response) => {
          console.log(response);
          if (response.data.message == 200) {
            window.location.replace(`/open-source/${proj_id}`);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className="detail">
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <div className="oned">
            <h1>{item.osp_title}</h1>
            <button onClick={() => join(item.project_id)}>Join Project</button>
          </div>
          <div className="twod">
            <p className="para">
              {item.author}&nbsp;&nbsp;
              {item.verified ? (
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7621 7.5L15.8431 5.50714L16.1105 2.87143L13.2714 2.28571L11.785 0L9.11103 1.04286L6.43706 0L4.95065 2.27857L2.11153 2.85714L2.37893 5.5L0.459961 7.5L2.37893 9.49286L2.11153 12.1357L4.95065 12.7214L6.43706 15L9.11103 13.95L11.785 14.9929L13.2714 12.7143L16.1105 12.1286L15.8431 9.49286L17.7621 7.5ZM7.60889 10.8714L4.62034 8.15L5.78430 7.09286L7.60889 8.75714L12.2097 4.56429L13.3736 5.62143L7.60889 10.8714Z"
                    fill="#0038FF"
                  />
                </svg>
              ) : (
                ""
              )}
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              {formatNumber(item.members)}{" "}
              members&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <strong>Topics:&nbsp;&nbsp;</strong>
              <span dangerouslySetInnerHTML={renderHTML(item.osp_topics)} />
            </p>
          </div>
          <div className="threed">
            <p dangerouslySetInnerHTML={renderHTML(item.osp_description)} />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Detail;
