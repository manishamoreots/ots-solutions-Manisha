import React from "react";
import { Card } from "semantic-ui-react";
import CardData from "./carddata";
import "./card.css";

const CardComponent = () => {
  return (
    <>
      <div className="container" style={{width:"90%",margin:"0 auto"}}>
        <div style={{ display: "grid", gridTemplateColumns: "auto auto auto"}}>
          {CardData.map((cardItem) => {
            return (
              <Card style={{margin:"20px"}}
                image={cardItem.img}
                header={cardItem.service}
                description={cardItem.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CardComponent;
