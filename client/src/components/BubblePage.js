import React, { useState, useEffect } from "react";
import axios from "axios";
import {connect} from 'react-redux';
import * as actionCreators from '../state/actionCreators';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const {getColors} = props;
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    getColors()
  },[])


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default connect(
  state => state,
  actionCreators
)(BubblePage);
