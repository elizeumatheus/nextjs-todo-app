import { Avatar, AvatarProps as AvatarType } from "../../Avatar";

export type CardAssignedAvatarProps = {
  images: AvatarType[];
};

export const CardAssignedAvatar = ({ images }: CardAssignedAvatarProps) => {
  return (
    <div>
      {images?.map((image) => (
        <Avatar key={image.name} {...image} />
      ))}
    </div>
  );
};
