import React from "react";

import styles from "./button.module.css";

interface Props extends React.PropsWithChildren<any> {
  outline?: boolean;
  className?: string;
}

const Button: React.FC<Props> = ({
  children,
  className,
  outline = false,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`${styles.button} ${outline && styles.outline}`}
    >
      {children}
    </button>
  );
};

export default Button;
