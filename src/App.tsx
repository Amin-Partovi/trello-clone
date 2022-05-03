import React, { useState } from "react";

import Button from "./components/common/button/Button";
import Layout from "./components/layout/Layout";
import texts from "./texts/texts";
import Input from "./components/common/input/Input";
import styles from "./app.module.css";

const App: React.FC = () => {
  const [showInput, setShowInput] = useState<boolean>(false);

  function handleClick() {
    setShowInput(true);
  }
  return (
    <Layout>
      {!showInput ? (
        <Button outline className={styles["add-column"]} onClick={handleClick}>
          {texts.ADD_COLUMN}
        </Button>
      ) : (
        <Input
          transparent
          placeholder={texts.COLUMN_NAME}
          className={styles["add-column"]}
        />
      )}
    </Layout>
  );
};

export default App;
