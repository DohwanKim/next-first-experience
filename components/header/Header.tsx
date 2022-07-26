import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Image src='/img/dummy_img.png' alt='dummy' height='300' width='300' />
      <Link href='/'>
        <a>home</a>
      </Link>
      <Link href='/new_page'>
        <a>new page</a>
      </Link>
    </header>
  );
}
