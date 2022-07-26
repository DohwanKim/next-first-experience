import Grid from 'components/Grid/Grid';
import SEO from 'components/SEO';
import type { Item } from 'types/Item';

interface IProp {
  results: Array<Item>;
}

export default function Home({ results }: IProp) {
  return (
    <div>
      <SEO title='Home' />
      <Grid items={results} />
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
