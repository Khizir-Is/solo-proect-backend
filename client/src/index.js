import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/configureStore";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
//
// let menu = ("#menu");
// window.scroll(function() {
//   let top = (this).scrollTop();
//   if ( top >= 100 ) {
//     return menu.css({background: green})
//   } else if ( top <= 200 ) {
//     return menu.css({background: red})
//   }
// });
