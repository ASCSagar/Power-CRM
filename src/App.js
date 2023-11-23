import React from "react";
import { ConfigProvider } from "antd";
import Main from "./jsx";
import "antd/dist/antd.variable.min.css";
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./css/style.css";

import ThemeContextProvider from "./context/ThemeContext";

const App = () => {
  ConfigProvider.config({
    componentSize: "large",
    theme: {
      primaryColor: "#363062",
    },
  });

  return (
    <ThemeContextProvider>
      <Main />
    </ThemeContextProvider>
  );
};

export default App;
