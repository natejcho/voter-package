import styled from "@emotion/styled";
import Link from "next/link";

const Styled = styled.header`
  background-image: linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5);
  color: #fff;
  height: 24px;
  display: flex;
  align-items: center;

  a {
    color: #fff;
    font-size: 10pt;
    font-weight: bold;
    margin-left: 1rem;
    text-decoration: none;
  }
`;

function Header(props) {
  return (
    <Styled>
      <Link href="/">
        <a>Voter Package</a>
      </Link>
    </Styled>
  );
}

export default Header;
