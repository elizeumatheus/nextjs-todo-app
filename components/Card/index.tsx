import { CardAssignedAvatar } from "./CardAssignedAvatar";
import { CardBadge } from "./CardBadge";
import { CardLabel } from "./CardLabel";

import styles from "./Card.module.scss";

export const Card = () => {
  return (
    <article className={styles.container}>
      <h1 className={styles.title}>Create new components</h1>
      <div className={styles.details}>
        <CardBadge>#BL-43</CardBadge>
        <CardLabel>Design System</CardLabel>
      </div>
      {/* <CardAssignedAvatar /> */}
    </article>
  );
};
