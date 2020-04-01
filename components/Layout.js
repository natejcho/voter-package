import PropTypes from "prop-types";
import Header from "./Header";
import styled from "@emotion/styled";

Layout.propTypes = {
  children: PropTypes.node || PropTypes.string,
};

const Styled = styled.div`
  background-color: #ffffff;
  display:flex;
  justify-content: center;

  #body {
    width 85%;
  }
`;
function Layout(props) {
  return (
    <Styled>
      <div id="body">
        <Header />
        {props.children}
      </div>
    </Styled>
  );
}

export default Layout;
