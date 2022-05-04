import React from "react";

import styles from "./board.module.css";

interface Props extends React.PropsWithChildren<any> {}

const Board: React.FC<Props> = ({ children }) => {
  return <div className={styles.board}>{children}</div>;
};

export default Board;
