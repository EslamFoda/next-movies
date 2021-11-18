import Link from "next/link";
const Nav = () => {
  return (
    <nav className="text-white">
      <div className="nav-flex">
        <Link href="/">
          <a>
            <h1>logo</h1>
          </a>
        </Link>
        <Link href='/about'>
          <a>Movies</a>
        </Link>
        <a>Tv</a>
        <a href="#">People</a>
        <a href="#">More</a>
      </div>
    </nav>
  );
};

export default Nav;
