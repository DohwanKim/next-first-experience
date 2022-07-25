import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href='/'>
        <a>home</a>
      </Link>
      <Link href='/new_page'>
        <a>new page</a>
      </Link>
    </header>
  );
}
