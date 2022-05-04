import React from "react";

import styles from "./card.module.css";
import texts from "../../texts/texts";

interface Props {
  title: string;
  description: string;
}

const Card: React.FC<Props> = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <p>
        {texts.TITLE}: <strong>{title}</strong>
      </p>
      <p>
        {texts.DESCRIPTION}: <strong>{description}</strong>
      </p>
    </div>
  );
};

export default Card;
