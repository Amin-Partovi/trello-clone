import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import texts from "../../texts/texts";
import Card from "../card/Card";
import Input from "../common/input/Input";
import Button from "../common/button/Button";
import Textarea from "../common/textarea/Textarea";
import { Card as CardInterface } from "../../App";

import styles from "./column.module.css";

interface Props {
  status: string;
  cards: CardInterface[];
  onSubmitForm: (value: CardInterface) => void;
  onDrop: (value: CardInterface, status: string) => void;
}

const Column: React.FC<Props> = ({
  status,
  cards = [],
  onSubmitForm,
  onDrop,
}) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [showCardForm, setShowCardForm] = useState<boolean>(false);
  const [cardId, setCardId] = useState<string>("");

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

  function handleDragStart(
    event: React.DragEvent<HTMLDivElement>,
    card: CardInterface
  ) {
    event.dataTransfer.setData("Object", JSON.stringify(card));
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>, status: string) {
    event.preventDefault();
    var data = JSON.parse(event.dataTransfer.getData("Object"));
    onDrop(data, status);
  }

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  function handleEdit(card: CardInterface) {
    setShowCardForm(true);
    setDescription(card.description);
    setTitle(card.title);
    setCardId(card.id);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (title.trim().length) {
      if (cardId) {
        onSubmitForm({ title, description, status, id: cardId });
      } else {
        onSubmitForm({ title, description, status, id: uuidv4() });
      }
      setCardId("");
      setTitle("");
      setDescription("");
      setShowCardForm(false);
    }
  }

  return (
    <div className={styles.column} data-testid="column">
      <div className={styles.header}>
        <h3>{status}</h3>
      </div>
      <div
        className={styles["card-box"]}
        onDrop={(event) => handleDrop(event, status)}
        onDragOver={handleDragOver}
      >
        {cards.map((card) => {
          if (card.status === status) {
            return (
              <Card
                card={card}
                key={card.id}
                onDragStart={(event) => handleDragStart(event, card)}
                onEdit={handleEdit}
              />
            );
          }
        })}
      </div>
      {showCardForm && (
        <form onSubmit={handleSubmit} className={styles["add-card-form"]}>
          <Input
            placeholder={texts.ADD_TITLE}
            onChange={handleChangeTitle}
            className={styles.title}
            autoFocus={true}
            value={title}
          />
          <Textarea
            placeholder={texts.ADD_DESCRIPTION}
            onChange={handleChangeDescription}
            className={styles.description}
            value={description}
          />
          <Button>{texts.SAVE}</Button>
        </form>
      )}
      <Button onClick={handleClickAddCard}>{texts.ADD_CARD}</Button>
    </div>
  );
};

export default Column;
