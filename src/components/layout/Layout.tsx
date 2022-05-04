import React from "react";

import texts from "../../texts/texts";

import styles from "./layout.module.css";

interface Props extends React.PropsWithChildren<any> {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{texts.TRELLO_CLONE}</h1>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
