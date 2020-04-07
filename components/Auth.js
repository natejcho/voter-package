import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { GoX } from "react-icons/go";

Auth.propTypes = {
  closeLogin: PropTypes.func,
};

const Styled = styled.div`
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 110;

  #snatch-em-up {
    align-items: center;
    background: #fff;
    border-radius: 4px;
    box-shadow: 1px 7px 20px 2px rgba(0, 0, 0, 0.4);
    display: grid;
    grid-template-columns: 156px auto;
    height: 550px;
    left: 50%;
    overflow: hidden;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 750px;
    z-index: 111;

    #login-password {
      margin-top: 24px;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      max-width: 440px;
      min-width: 260px;
      padding: 24px;

      button {
        background: #0079d3;
        border-radius: 4px;
        border: none;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        font-weight: 600;
        height: 35px;
        letter-spacing: 0.5px;
        line-height: unset;
        margin-top: 24px;
        min-width: 155px;
        overflow: inherit;
        position: relative;
        text-align: center;
        width: 155px;
      }
      h1 {
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
        margin: 20px 0;
      }
      img {
        height: 60pt;
        width: 60pt;
      }
      .login-input {
        background-color: #fcfcfb;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        font-size: 14px;
        font-weight: 400;
        height: 48px;
        line-height: 21px;
        overflow: visible;
        padding: 22px 12px 10px;
        transition: all 0.2s ease-in-out;
      }
      .other-options {
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        margin: 8px 0;
        max-height: 1000px;

        a {
          color: #0079d3;
          cursor: pointer;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.5px;
          line-height: 24px;
          text-decoration: none;
          text-transform: none;
        }
      }
    }
    svg {
      color: gray;
      cursor: pointer;
      height: 1.5rem;
      margin: 1rem .8rem;
      position: absolute;
      right: 0;
      top: 0;
      width: 1.5rem;
    }
  }
`;

function Auth(props) {
  return (
    <Styled>
      <div id="snatch-em-up">
        <span></span>
        <form>
          <img src="/favicon.ico" />
          <h1>Sign in</h1>
          <input
            id="login-username"
            className="login-input"
            placeholder="Username"
            type="text"
          ></input>
          <input
            id="login-password"
            className="login-input"
            placeholder="Password"
            type="password"
          ></input>
          <button>SIGN IN</button>
          <div className="other-options">
            <a>Forgot username</a> · <a>Forgot password</a>
          </div>
          <span className="other-options">
            New here? <a>Sign Up</a>
          </span>
        </form>
        <GoX className="exit" onClick={props.closeLogin} />
      </div>
    </Styled>
  );
}

export default Auth;
