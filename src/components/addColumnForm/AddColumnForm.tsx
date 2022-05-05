import React, { useState } from "react";

import texts from "../../texts/texts";
import Input from "../common/input/Input";
import Button from "../common/button/Button";

import styles from "./add-column-form.module.css";

interface Props {
  onSubmit: (arg: string) => void;
}

const AddColumnForm: React.FC<Props> = ({ onSubmit }) => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const [columnName, setColumnName] = useState<string>("");

  function handleClickButton() {
    setShowInput(true);
  }

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setColumnName(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (columnName.trim().length) {
      onSubmit(columnName);
      setColumnName("");
      setShowInput(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} data-testid="add-column-form">
      {!showInput ? (
        <Button
          outline
          className={styles["add-column"]}
          onClick={handleClickButton}
        >
          {texts.ADD_COLUMN}
        </Button>
      ) : (
        <Input
          transparent
          placeholder={texts.COLUMN_NAME}
          className={styles["add-column"]}
          onChange={handleChangeInput}
          autoFocus={true}
          data-testid="add-column-input"
        />
      )}
    </form>
  );
};

export default AddColumnForm;
