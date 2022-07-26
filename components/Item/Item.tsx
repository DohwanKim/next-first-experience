import Link from 'next/link';
import type { Item } from 'types/Item';

interface IProp {
  item: Item;
}

export default function ImageCard({ item }: IProp) {
  return (
    <figure>
      <Link href={`/detail/${item.id}`}>{item.original_title}</Link>
    </figure>
  );
}
