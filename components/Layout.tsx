import PropTypes from "prop-types";
import { useState } from "react";
import Auth from "./Auth";
import Header from "./Header";
import styled from "@emotion/styled";

Layout.propTypes = {
  children: PropTypes.node || PropTypes.string,
};

const Styled = styled.div`
  // background-color: #fdfdfd;
  // background-color: #fff;
  color: #333;
  font-family: Verdana, arial, helvetica, sans-serif;
  font-size: 10pt;
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
      {props.children}
    </Styled>
  );
}

export default Layout;
