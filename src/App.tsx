import React, { useEffect, useState } from "react";

import AddColumnForm from "./components/addColumnForm/AddColumnForm";
import Layout from "./components/layout/Layout";

const App: React.FC = () => {
  const [columns, setColumns] = useState<string[]>([]);

  function handleSubmit(value: string) {
    setColumns((columns) => [...columns, value]);
  }

  return (
    <Layout>
      <AddColumnForm onSubmit={handleSubmit} />
    </Layout>
  );
};

export default App;
