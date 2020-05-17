import styled from "@emotion/styled";
import tw from "@tailwindcssinjs/macro";
import { GoX } from "react-icons/go";

interface AuthInterface {
  isLoginOpen: boolean;
  closeLogin: () => void;
}

const Styled = styled.div`
  ${tw`bg-black bg-opacity-50 h-full w-full fixed left-0 top-0 z-30`}

  #snatch-em-up {
    ${tw`grid-cols-4 items-center bg-white z-40 w-1/2 rounded top-1/2 left-1/2 overflow-hidden fixed grid`}
    height: 34rem;
    transform: translate(-50%, -50%);

    #login-password {
      ${tw`mt-6`}
    }

    form {
      ${tw`flex col-span-3 p-6 justify-start flex-col`}

      button {
        ${tw`bg-indigo-500 mt-6 w-40 rounded border-none tracking-wide text-white text-sm font-semibold inline-block h-8`}
      }
      h1 {
        ${tw`my-5 text-lg`}
      }
      img {
        ${tw`h-16 w-16 bg-indigo-500 rounded-full`}
      }
      .login-input {
        ${tw`bg-gray-100 p-3 pt-5 transition-all duration-200 ease-in-out rounded border border-opacity-25 box-border text-sm h-12`}

        &:hover::-webkit-input-placeholder ,
        &:focus::-webkit-input-placeholder {
          transform: translateX(-1%) translateY(-150%);
          ${tw`font-medium text-xs`}
      }
      }
      .other-options {
        ${tw`text-xs my-2`}

        a {
          ${tw`cursor-pointer text-blue-400 text-xs tracking-wider leading-6`}
        }
      }
    }
    svg {
      ${tw`top-0 right-0 my-4 mx-3 h-6 w-6 text-gray-500 cursor-pointer absolute`}
    }
    .this-might-be-something-later {
      ${tw`bg-indigo-500 shadow h-full`}
      background-image: linear-gradient(#7e93ff,#6b82ff 60%,#5772ff);
    }
  }
`;

const Auth: React.FC<AuthInterface> = (props) => {
  return (
    <Styled>
      <div id="snatch-em-up">
        <span className="this-might-be-something-later"></span>
        <form>
          <img src="/favicon.ico" />
          <h1>Sign in</h1>
          <input
            id="login-username"
            className="login-input"
            placeholder="USERNAME"
            type="text"
          ></input>
          <input
            id="login-password"
            className="login-input"
            placeholder="PASSWORD"
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
};

export default Auth;
