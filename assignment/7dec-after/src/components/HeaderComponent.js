import React from "react";
import {  Menu} from "semantic-ui-react";

const HeaderComponent = () => {
  return (
    <div>
      <Menu>
        <Menu.Item name="home" />
        <Menu.Item name="About Us" />
        <Menu.Item name="Contact" />
      </Menu>
     
    </div>
  );
};

export default HeaderComponent;
