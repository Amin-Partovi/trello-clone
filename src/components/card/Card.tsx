import React from "react";

import styles from "./card.module.css";
import texts from "../../texts/texts";

interface Props {
  title: string;
  description: string;
  onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
}

const Card: React.FC<Props> = ({ title, description, onDragStart }) => {
  return (
    <div
      className={styles.card}
      draggable={true}
      onDragStart={onDragStart}
      id="card"
    >
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
