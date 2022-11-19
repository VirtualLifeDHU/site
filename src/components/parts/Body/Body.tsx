import React from "react";
import styles from "./Body.module.scss";

type BodyProps = { children: React.ReactNode } & JSX.IntrinsicElements["p"];

export const Body = (props: BodyProps) => {
  const { children, className, ...otherProps } = props;
  return (
    <p {...otherProps} className={`${styles.body}  ${className}`}>
      {children}
    </p>
  );
};
