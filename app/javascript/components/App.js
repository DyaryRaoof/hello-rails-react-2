import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Greeting from "./Greeting";
import { Provider } from "react-redux";
import store from '../redux/configureStore';

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" exact element={<Greeting message="hi" />} />
          </Routes>
        </Router>
      </Provider>
    </React.Fragment>
  );
};


export default App
