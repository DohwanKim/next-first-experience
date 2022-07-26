import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Detail() {
  const [detail, setDetail] = useState(null);
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const detailUpdated = await (await fetch(`/api/movies/${router.query.id}`)).json();
    })();
  });

  console.log(router.query);

  return (
    <>
      <div>this is detail page!</div>
      <div>name: {detail}</div>
      <div>id: {router.query.id}</div>
    </>
  );
}
