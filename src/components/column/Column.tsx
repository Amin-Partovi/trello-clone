import React from "react";
import texts from "../../texts/texts";
import Input from "../common/input/Input";

import styles from "./column.module.css";

interface Props {
  name: string;
}

const Column: React.FC<Props> = ({ name }) => {
  return (
    <div className={styles.column}>
      <div className={styles.header}>
        <h3>{name}</h3>
      </div>

      <Input placeholder={texts.ADD_CARD} />
    </div>
  );
};

export default Column;
