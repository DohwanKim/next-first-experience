import { useEffect, useState } from 'react';
import ImageGrid from 'components/ImageGrid/ImageGrid';
import SEO from 'components/SEO';

interface serverSideProps {
  results: Array<object>;
}

export default function Home({ results }: serverSideProps) {
  return (
    <div>
      <SEO title='Home' />
      <ImageGrid cards={results} />
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();

  return {
    props: {
      results,
    },
  };
}
