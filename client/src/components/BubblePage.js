import React, { useEffect } from "react";
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const { getColors } = props;

  useEffect(() => {
    getColors()
  }, [])


  return (
    <>
      <ColorList />
      <Bubbles />
    </>
  );
};

export default connect(
  state => state,
  actionCreators
)(BubblePage);
