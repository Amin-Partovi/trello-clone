import React, { useEffect, useState } from "react";

import AddColumnForm from "./components/addColumnForm/AddColumnForm";
import Layout from "./components/layout/Layout";
import Board from "./components/board/Board";
import styles from "./app.module.css";
import Column from "./components/column/Column";

const App: React.FC = () => {
  const [columns, setColumns] = useState<string[]>([]);

  function handleSubmit(value: string) {
    setColumns((columns) => [...columns, value]);
  }

  return (
    <Layout>
      <AddColumnForm onSubmit={handleSubmit} />
      <Board>
        {columns.map((col) => (
          <Column name={col} key={col} />
        ))}
      </Board>
    </Layout>
  );
};

export default App;
