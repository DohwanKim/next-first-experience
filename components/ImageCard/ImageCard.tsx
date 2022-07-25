import type { FC } from 'react';

interface Props {
  card: string;
}

const ImageCard: FC<Props> = ({ card }): React.ReactElement => {
  console.log(card);
  console.log('!!');

  return <figure>{card}</figure>;
};

export default ImageCard;
