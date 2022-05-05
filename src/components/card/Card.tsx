import React from "react";

import texts from "../../texts/texts";
import Edit from "../../assets/edit.png";
import { Card as CardInterface } from "../../App";

import styles from "./card.module.css";

interface Props {
  card: CardInterface;
  onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
  onEdit: (card: CardInterface) => void;
}

const Card: React.FC<Props> = ({ card, onDragStart, onEdit }) => {
  const { title, description } = card;

  function handleClick() {
    onEdit(card);
  }
  
  return (
    <div
      className={styles.card}
      draggable={true}
      onDragStart={onDragStart}
      id="card"
    >
      <div className={styles["edit-box"]}>
        <img src={Edit} className={styles.edit} onClick={handleClick} />
      </div>
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
