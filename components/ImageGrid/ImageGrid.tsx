import ImageCard from 'components/ImageCard/ImageCard';
import type { FC } from 'react';
import type { Cards } from 'pages/index';

interface Props {
  cards: Cards;
}

type cardType = {
  poster_path?: string | null;
  id: Number;
};

const ImageGrid: FC<Props> = ({ cards }): React.ReactElement => {
  return (
    <div>
      <div>1</div>
      <div>{cards == null ? <div>loading...</div> : cards.map((card) => <ImageCard card={card} key={card.id} />)}</div>
      <div>3</div>
    </div>
  );
};

export default ImageGrid;
