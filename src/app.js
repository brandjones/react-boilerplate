import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/router";
import "./styles/styles.scss";

const jsx = <AppRouter />;

ReactDOM.render(jsx, document.getElementById("app"));
