import styled from "@emotion/styled";
import Link from "next/link";

const Styled = styled.header`
  background-image: linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5);
  color: #fff;
  height: 24px;
  display: flex;
  align-items: center;
img {
  height: 28pt;
  cursor: pointer;
  margin-left: 1rem;
  margin-top: .2rem;
}
  a {
    font-size: 10pt;
    font-weight: bold;
    margin-left: -.8rem;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
  }
`;

function Header(props) {
  return (
    <Styled>
      <Link href="/">
        <>
          <img src="/favicon.ico" />
          <a>oter Package</a>
        </>
      </Link>
    </Styled>
  );
}

export default Header;
