import type { FC } from 'react';

interface Props {
  card: string;
}

const ImageCard: FC<Props> = ({ card }): React.ReactElement => {
  return <figure>{card.original_title}</figure>;
};

export default ImageCard;
