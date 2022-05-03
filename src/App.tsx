import React from "react";

import "./App.css";
import Button from "./components/button/Button";
import Layout from "./components/layout/Layout";
import texts from "./texts/texts";

const App: React.FC = () => {
  return (
    <Layout>
      <Button outline>{texts.ADD_COLUMN}</Button>
    </Layout>
  );
};

export default App;
