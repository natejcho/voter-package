import PropTypes from "prop-types";
import Header from "./Header";
import styled from "@emotion/styled";

Layout.propTypes = {
  children: PropTypes.node || PropTypes.string,
};

const Styled = styled.div`
  // background-color: #fdfdfd;
  background-color: #fff;
  color: #333;
  font-family: Verdana, arial, helvetica, sans-serif;
  font-size: 10pt;
`;
function Layout(props) {
  return (
    <Styled>
      <Header />
      {props.children}
    </Styled>
  );
}

export default Layout;
