import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Link from "next/link";

Header.propTypes = {
  openLogin: PropTypes.func,
};

const Styled = styled.header`
  // background-image: linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5);
  background-color: #5772ff;
  color: #fff;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    align-items: center;
    display: flex;
    margin-left: 1rem;

    img {
      height: 28pt;
      cursor: pointer;
      margin-top: 0.2rem;
    }
    a {
      font-size: 10pt;
      font-weight: bold;
      margin-left: -0.8rem;
      color: #fff;
      cursor: pointer;
      text-decoration: none;
    }
  }
  .auth {
    font-size: 10pt;
    margin-right: 1rem;
    span {
      cursor: pointer;
    }
  }
`;

function Header(props) {
  return (
    <Styled>
      <Link href="/">
        <span>
          <img src="/favicon.ico" />
          <a>oter Package</a>
        </span>
      </Link>
      <dev className="auth">
        <Link href="/">
          <span onClick={props.openLogin}>login</span>
        </Link>
      </dev>
    </Styled>
  );
}

export default Header;
