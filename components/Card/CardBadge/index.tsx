import { PropsWithChildren } from "react";
import styles from "./CardBadge.module.scss";

export type CardBadgeProps = PropsWithChildren<{}>;

export const CardBadge = ({ children }: CardBadgeProps) => (
  <span className={styles.container}>{children}</span>
);
