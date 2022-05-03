import React from "react";

import styles from "./input.module.css";

interface Props extends React.ComponentPropsWithoutRef<"input"> {
  className?: string;
  transparent?: boolean;
}

const Input: React.FC<Props> = ({ className, transparent, ...rest }) => {
  return (
    <input
      {...rest}
      className={`${styles.input} ${
        transparent && styles.transparent
      } ${className}`}
    />
  );
};

export default Input;
