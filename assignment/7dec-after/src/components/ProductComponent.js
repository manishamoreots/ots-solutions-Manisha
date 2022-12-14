import React,{useState} from "react";

import {
  Card,
  Icon,
  Image,
  Checkbox,
  Header,
  Rating,
  List,
  Label,
} from "semantic-ui-react";

function ProductComponent(props) {
const[like,setLike]=useState(false);
  return (
    <Card style={{width:"500px"}}> 
      <div style={{display:"flex"}}>
        <div >
          <div
            style={{
              display: "flex",
              padding: "20px",
              justifyContent: "center",
            }}
          >
            <Image style={{ width: "100px" }} src={props.mobileImage}></Image>
            <span onClick={()=>{setLike(!like)}}>
           
            {like? <Icon  color="red"name="heart"></Icon>: <Icon  color="red"name="heart outline"></Icon>}</span>
          </div>

          <div style={{ marginLeft: "15px", display: "flex" }}>
            <Checkbox></Checkbox>
            <span style={{ marginLeft: "6px", paddingBottom: "15px" }}>
              Add To Compare
            </span>
          </div>
        </div>
        <div>
          <div>
            <Header
              as="h3"
              style={{
                color: "blue",
                justifyContent: "center",
               
                paddingTop:"30px"
              }}
            >
              {props.itemName}
            </Header>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ display: "flex" }}>
                <Label
                  color="green"
                  style={{  padding: "7px" }}
                >
                  {props.Rating}
                  <span>
                    <Rating color="white"style={{ paddingLeft: "5px" }} />
                  </span>
                </Label>
              </div>
              <Card.Meta style={{ paddingTop: "5px" }}>
                <span className="rating-number">{props.Reviews}</span>
              </Card.Meta>
            </div>
          </div>

          <div style={{ padding: "20px" }}>
            <List bulleted>
              <List.Item>{props.offer}</List.Item>
              <List.Item>{props.Rom}</List.Item>
              <List.Item>{props.size}</List.Item>
              <List.Item>{props.cameraQuality}</List.Item>
              <List.Item>{props.warranty}</List.Item>
            </List>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ProductComponent;
