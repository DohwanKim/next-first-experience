import ItemComponent from 'components/Item/Item';
import type { Item } from 'types/Item';

interface IProp {
  items: Array<Item>;
}

export default function ImageGrid({ items }: IProp) {
  return (
    <div>
      <div>1</div>
      <div>
        {items?.map((item: Item) => (
          <ItemComponent item={item} key={item.id} />
        ))}
      </div>
      <div>3</div>
    </div>
  );
}
