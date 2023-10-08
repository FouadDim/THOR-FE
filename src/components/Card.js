import React, { useState } from "react";
import "./Card.css";

function Card(props) {
  const [much, setMuch] = useState(false);

  function truncateParagraph(paragraph, maxLength = 400) {
    if(paragraph){
      if (paragraph.length <= maxLength) {
        return paragraph; // No need to truncate if it's already within the limit
      }
  
      const truncatedText = paragraph.substring(0, maxLength - 3) + "...";
      return truncatedText;
    }
  }

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

  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <div className="card">
      <div className="card1">
        <div className="one">
          <a href={`/${props.project_id}`} id="h1a"><h1>{props.title}</h1></a>
          <svg
            width="145"
            height="19"
            viewBox="0 0 145 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7247 15.27L18.5292 19L16.7235 11.97L22.7352 7.24L14.8187 6.63L11.7247 0L8.63081 6.63L0.714294 7.24L6.726 11.97L4.92029 19L11.7247 15.27Z"
              fill="#A8A8A8"
            />
            <path
              d="M38.1498 15.27L44.9543 19L43.1485 11.97L49.1603 7.24L41.2437 6.63L38.1498 0L35.0559 6.63L27.1393 7.24L33.1511 11.97L31.3453 19L38.1498 15.27Z"
              fill="#A8A8A8"
            />
            <path
              d="M64.5749 15.27L71.3794 19L69.5737 11.97L75.5854 7.24L67.6688 6.63L64.5749 0L61.481 6.63L53.5645 7.24L59.5762 11.97L57.7704 19L64.5749 15.27Z"
              fill="#A8A8A8"
            />
            <path
              d="M91 15.27L97.8045 19L95.9988 11.97L102.01 7.24L94.094 6.63L91 0L87.9061 6.63L79.9896 7.24L86.0013 11.97L84.1956 19L91 15.27Z"
              fill="#A8A8A8"
            />
            <path
              d="M117.425 15.27L124.229 19L122.424 11.97L128.435 7.24L120.519 6.63L117.425 0L114.331 6.63L106.415 7.24L112.426 11.97L110.621 19L117.425 15.27Z"
              fill="#A8A8A8"
            />
            <path
              d="M139.483 12.0039C139.483 10.5358 139.727 9.42578 140.214 8.67383C140.701 7.91829 141.406 7.54053 142.33 7.54053C144.092 7.54053 144.973 8.96208 144.973 11.8052C144.973 13.2088 144.724 14.283 144.226 15.0278C143.732 15.769 143.037 16.1396 142.142 16.1396C141.297 16.1396 140.642 15.7869 140.176 15.0815C139.714 14.3761 139.483 13.3503 139.483 12.0039ZM140.558 11.9556C140.558 14.1649 141.118 15.2695 142.239 15.2695C143.342 15.2695 143.893 14.147 143.893 11.9019C143.893 9.57796 143.352 8.41602 142.271 8.41602C141.129 8.41602 140.558 9.59587 140.558 11.9556Z"
              fill="#888888"
            />
          </svg>
        </div>
        <div className="two">
          <p className="para">
            {props.author}&nbsp;&nbsp;
            {props.verified ? (
              <svg
                width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7621 7.5L15.8431 5.50714L16.1105 2.87143L13.2714 2.28571L11.785 0L9.11103 1.04286L6.43706 0L4.95065 2.27857L2.11153 2.85714L2.37893 5.5L0.459961 7.5L2.37893 9.49286L2.11153 12.1357L4.95065 12.7214L6.43706 15L9.11103 13.95L11.785 14.9929L13.2714 12.7143L16.1105 12.1286L15.8431 9.49286L17.7621 7.5ZM7.60889 10.8714L4.62034 8.15L5.7843 7.09286L7.60889 8.75714L12.2097 4.56429L13.3736 5.62143L7.60889 10.8714Z"
                  fill="#0038FF"
                />
              </svg>
            ) : (
              ""
            )}
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{formatNumber(props.members)}{" "}
            members&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <strong>Topics:&nbsp;&nbsp;</strong>
            {props.topics}
          </p>
        </div>
        <div className="three">
          <p dangerouslySetInnerHTML={renderHTML(!much ? truncateParagraph(props.text) : props.text)}/>
        </div>
      </div>
      <div className="card2">
        <button>
          <svg
            width="33"
            height="23"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.7348 14.6667V27.445L14.6419 23.5217L4.54901 27.445V3.66667H16.6605V0H4.54901C2.32857 0 0.511841 1.65 0.511841 3.66667V33L14.6419 27.5L28.772 33V14.6667H24.7348ZM32.8092 7.33333H28.772V11H24.7348V7.33333H20.6977V3.66667H24.7348V0H28.772V3.66667H32.8092V7.33333Z"
              fill="#BBBBBB"
            />
          </svg>
        </button>
        <button onClick={() => setMuch(!much)}>
          Read {!much ? "More" : "Less"}
        </button>
      </div>
    </div>
  );
}

export default Card;
