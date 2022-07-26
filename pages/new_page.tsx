import SEO from 'components/SEO';
import type { NextPage } from 'next';

const newPage: NextPage = () => {
  return (
    <div>
      <SEO title='New Page' />
      <div>page1</div>
    </div>
  );
};

export default newPage;
