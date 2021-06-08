import Link from "next/link";
import { HeaderWrapper } from "./styled-components";

const Header = () => (
  <HeaderWrapper>
    <h1>E-commerce</h1>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Start</a>
          </Link>
        </li>
        <li>
          <Link href="/add-products">
            <a>Add new products</a>
          </Link>
        </li>
      </ul>
    </nav>
  </HeaderWrapper>
);

export default Header;
