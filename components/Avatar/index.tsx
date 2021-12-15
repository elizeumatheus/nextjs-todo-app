import Image from "next/image";
import styles from "./Avatar.module.scss";

export type AvatarProps = {
  src: string;
  name: string;
};

export const Avatar = ({ src, name }: AvatarProps) => (
  <div className={styles.container}>
    <Image src={src} width={60} height={60} alt={name} />
  </div>
);
