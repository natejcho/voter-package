import PropTypes from "prop-types";
import { useState } from "react";
import Auth from "./Auth";
import Header from "./Header";
import styled from "@emotion/styled";
import tw from "@tailwindcssinjs/macro";

Layout.propTypes = {
  children: PropTypes.node || PropTypes.string,
};

const Styled = styled.div`
  .container {
    max-width: 1100px;
    min-width: 320px;
    ${tw`mx-auto`}

    @media (max-width: 768px) {
      ${tw`mt-5 px-3`}
    }

    @media (min-width: 769px) {
      flex-flow: row;
      ${tw`flex justify-between mt-8 px-4`}
    }
    main {
      ${tw`w-full`}
    }

    aside {
      background: red;

      @media (min-width: 1200px) {
        width: 330px;
        ${tw`ml-5`}
      }
      @media (max-width: 1199px) {
        ${tw`hidden`}
      }
    }
  }
`;

function Layout(props) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <Styled>
      <Header openLogin={() => setIsLoginOpen(true)} />
      {isLoginOpen && (
        <Auth
          isLoginOpen={isLoginOpen}
          closeLogin={() => setIsLoginOpen(false)}
        />
      )}
      <div className="container">
        <main>{props.children}</main>
        <aside></aside>
      </div>
    </Styled>
  );
}

export default Layout;
