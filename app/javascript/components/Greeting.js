import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchMessage } from "../redux/messages/messages";
import PropTypes from "prop-types"


const Greeting = () => {

  const message = useSelector((state) => state.messagesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessage());
  }, []);


  return (
    <React.Fragment>
      Message: {message.name}
    </React.Fragment>
  );
}


Greeting.propTypes = {
  message: PropTypes.string
};
export default Greeting
