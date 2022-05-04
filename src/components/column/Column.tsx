import React, { useState } from "react";
import texts from "../../texts/texts";
import Card from "../card/Card";
import Input from "../common/input/Input";
import Button from "../common/button/Button";

import styles from "./column.module.css";
import Textarea from "../common/textarea/Textarea";

interface Props {
  name: string;
}

interface Card {
  title: string;
  description: string;
}

const Column: React.FC<Props> = ({ name }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [cards, setCards] = useState<Card[]>([]);
  const [showCardForm, setShowCardForm] = useState<boolean>(false);

  function handleChangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleChangeDescription(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setDescription(event.target.value);
  }

  function handleClickAddCard() {
    setShowCardForm(true);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (title.trim()) {
      setCards((cards) => [...cards, { title, description }]);
      setTitle("");
      setDescription("");
      setShowCardForm(false);
    }
  }

  return (
    <div className={styles.column}>
      <div className={styles.header}>
        <h3>{name}</h3>
      </div>
      <div className={styles["card-box"]}>
        {cards.map((card) => (
          <Card
            title={card.title}
            description={card.description}
            key={card.title}
          />
        ))}
      </div>
      {showCardForm && (
        <form onSubmit={handleSubmit} className={styles["add-card-form"]}>
          <Input
            placeholder={texts.ADD_TITLE}
            onChange={handleChangeTitle}
            className={styles.title}
          />
          <Textarea
            placeholder={texts.ADD_DESCRIPTION}
            onChange={handleChangeDescription}
            className={styles.description}
          />
          <Button>{texts.SAVE}</Button>
        </form>
      )}
      <Button onClick={handleClickAddCard}>{texts.ADD_CARD}</Button>
    </div>
  );
};

export default Column;
