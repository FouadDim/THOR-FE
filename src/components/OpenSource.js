import React from "react";
import Card from "./Card";
import "./OpenSource.css";

function OpenSource() {
  const detailList = {
    title: "Welcome To NASA Space Apps Community",
    topics: "Space, Software Development, Tech, Machine Learning, Discovery",
    text: `<h2>What To Do?</h2><br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sequi facere perferendis consequuntur ea, esse doloremque neque sed consectetur, harum ratione porro id non? Facilis in doloribus laboriosam dolor. Consectetur perferendis ut quisquam velit libero nesciunt deleniti porro laborum dolores. Facilis deserunt sequi quod corporis beatae? Ad necessitatibus aliquid perferendis, veniam numquam laboriosam officia incidunt sequi adipisci ipsam nesciunt consequatur similique enim fugiat voluptas tempore modi, inventore eius, nobis eligendi dignissimos deserunt? Eveniet nihil adipisci voluptate asperiores, harum nemo perspiciatis facere voluptatum tenetur esse quo consequatur ducimus ipsam dolor eum voluptates ex nobis sed fugit sunt, excepturi, similique vitae atque!`,
  };

  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <div className="opensource">
      <div className="messageopen">
        <h1>{detailList.title}</h1>
        <p id="p1">
          <strong>Topic: </strong>
          {detailList.topics}
        </p>
        <p id="p2" dangerouslySetInnerHTML={renderHTML(detailList.text)} />
      </div>
    </div>
  );
}

export default OpenSource;
