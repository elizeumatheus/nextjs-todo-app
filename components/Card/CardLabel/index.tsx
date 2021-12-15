import { PropsWithChildren } from "react";
import styles from "./CardLabel.module.scss";

export type CardLabelProps = PropsWithChildren<{}>;

export const CardLabel = ({ children }: CardLabelProps) => (
  <span className={styles.container}>{children}</span>
);
