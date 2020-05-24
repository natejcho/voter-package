import PropTypes from "prop-types";
import styled from "@emotion/styled";
import tw from "@tailwindcssinjs/macro";

import Link from "next/link";

Header.propTypes = {
  openLogin: PropTypes.func,
};

const Styled = styled.header`
  // background-image: linear-gradient(#54b4eb, #2fa4e7 60%, #1d9ce5);
  ${tw`bg-indigo-500`}

  .container {
    ${tw`h-16 flex justify-between items-center text-white`}
    span {
      ${tw`flex items-center`}

      img {
        height: 28pt;
        cursor: pointer;
        margin-top: 0.2rem;
      }
      a {
        ${tw`text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white`}
      }
    }
    .auth {
      font-size: 10pt;
      span {
        ${tw`cursor-pointer px-3 py-2 flex items-center text-xs  font-bold leading-snug text-white hover:opacity-75`}
      }
    }
  }
`;

function Header(props) {
  return (
    <Styled>
      <div className="container">
        <Link href="/">
          <span>
            <img src="/favicon.ico" />
            <a>Voter Package</a>
          </span>
        </Link>
        <div className="auth">
          <Link href="/">
            <span onClick={props.openLogin}>login</span>
          </Link>
        </div>
      </div>
    </Styled>
  );
}

export default Header;
