import React, { useEffect, useState } from "react";

import AddColumnForm from "./components/addColumnForm/AddColumnForm";
import Layout from "./components/layout/Layout";
import Board from "./components/board/Board";
import Column from "./components/column/Column";
import Button from "./components/common/button/Button";
import texts from "./texts/texts";

import styles from "./app.module.css";

export interface Card {
  title: string;
  description: string;
  status: string;
  id: string;
}

const App: React.FC = () => {
  const [columns, setColumns] = useState<string[]>(
    JSON.parse(localStorage.getItem("columns")) || []
  );
  const [cards, setCards] = useState<Card[]>(
    JSON.parse(localStorage.getItem("cards")) || []
  );

  useEffect(() => {
    localStorage.setItem("columns", JSON.stringify(columns));
  }, [columns]);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  function handleClickReset() {
    localStorage.removeItem("cards");
    localStorage.removeItem("columns");
    setCards([]);
    setColumns([]);
  }

  function handleSubmitCard(newCard: Card) {
    setCards([...cards, newCard]);
  }

  function handleSubmitColumn(newColumn: string) {
    setColumns([...columns, newColumn]);
  }

  function handleDrop(droppedCard: Card, status: string) {
    let copyOfCards = [...cards];
    for (let i in copyOfCards) {
      if (copyOfCards[i].id === droppedCard.id) {
        copyOfCards[i].status = status;
      }
    }
    setCards(copyOfCards);
  }

  return (
    <Layout>
      <div className={styles["form-container"]}>
        <AddColumnForm onSubmit={handleSubmitColumn} />
        {columns.length > 0 && (
          <Button outline onClick={handleClickReset}>
            {texts.RESET}
          </Button>
        )}
      </div>
      <Board>
        {columns.map((col, index) => (
          <Column
            status={col}
            key={index}
            cards={cards}
            onSubmitForm={handleSubmitCard}
            onDrop={handleDrop}

          />
        ))}
      </Board>
    </Layout>
  );
};

export default App;
