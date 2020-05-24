import styled from "@emotion/styled";
import tw from "@tailwindcssinjs/macro";
import { FC } from "react";

interface AsideInterface {}

const StyledAside = styled.div`
  ${tw`flex flex-col mt-3`}

  .header {
    ${tw`mb-1 font-semibold`}
  }

  .widget {
    ${tw`w-full h-full rounded bg-white`}

    #rtv-iframe {
      height: 49rem;
      ${tw`rounded w-full overflow-hidden`}

      body {
        ${tw`pb-0`}
      }
    }
  }
`;

// const ROCK_THE_VOTE = `<script type="text/javascript" src="https://register.rockthevote.com/assets/rtv-iframe.js"></script>
// <script type="text/javascript">
//     RtvIframe.init({
//       partner: 38435
//     })
// </script>
// `;

const Aside: FC<AsideInterface> = (props) => {
  // useEffect(() => {
  //   const iframe = document.createElement("div");
  //   iframe.id = "rockthevote";
  //   iframe.innerHTML = ROCK_THE_VOTE;
  //   document.getElementById("widgets").appendChild(iframe);

  //   return () => {
  //     document.getElementById("widgets").removeChild(iframe);
  //   };
  // }, []);

  return (
    <StyledAside>
      <div className="header">Register to Vote</div>
      <div className="widget">
        <iframe
          id="rtv-iframe"
          src="https://register.rockthevote.com?partner=38435"
          scrolling="no"
        ></iframe>
      </div>
    </StyledAside>
  );
};

export default Aside;
