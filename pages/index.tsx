import { useState } from 'react';
import ImageGrid from 'components/ImageGrid/ImageGrid';
import Head from 'next/head';

export type Cards = Array<string>;

export default function Home() {
  const [cards, setCards] = useState<Cards>(['1', '2', '3']);
  return (
    <div>
      <Head>
        <title>Home | Image Gallery</title>
      </Head>
      container
      <ImageGrid cards={cards} />
    </div>
  );
}
