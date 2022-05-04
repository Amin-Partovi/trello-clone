import React from "react";

import styles from "./textarea.module.css";

interface Props extends React.ComponentPropsWithoutRef<"textarea"> {
  className?: string;
  transparent?: boolean;
}

const Textarea: React.FC<Props> = ({ className, transparent, ...rest }) => {
  return (
    <textarea
      {...rest}
      className={`${styles.textarea} ${
        transparent && styles.transparent
      } ${className}`}
    />
  );
};

export default Textarea;
