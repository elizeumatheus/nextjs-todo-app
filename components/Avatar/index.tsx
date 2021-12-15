import Image from "next/image";

export type AvatarProps = {
  src: string;
  name: string;
};

export const Avatar = ({ src, name }: AvatarProps) => {
  return <Image src={src} width={60} height={60} alt={name} />;
};
