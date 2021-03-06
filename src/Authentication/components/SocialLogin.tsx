/* eslint-disable max-len */
import React, { ReactNode } from "react";
import { useTheme } from "@shopify/restyle";
import Svg, { Path } from "react-native-svg";

import { Box, Theme } from "../../components/Theme";

const Google = () => (
  <Svg width={20} height={20} viewBox="0 0 48 48" fill="none">
    <Path
      d="M47.532 24.553c0-1.632-.132-3.272-.414-4.877H24.48v9.242h12.963a11.109 
      11.109 0 01-4.797 7.293v5.997h7.734c4.542-4.18 7.152-10.353 7.152-17.655z"
      fill="#4285F4"
    />
    <Path
      d="M24.48 48.002c6.473 0 11.932-2.126 15.909-5.794l-7.734-5.997c-2.152 
      1.464-4.93 2.293-8.166 2.293-6.262 0-11.57-4.224-13.475-9.903H3.033v6.181a
      24.003 24.003 0 0021.447 13.22z"
      fill="#34A853"
    />
    <Path
      d="M11.005 28.6a14.375 14.375 0 010-9.189V13.23H3.033a24.02 24.02 0 000 
      21.553l7.972-6.182z"
      fill="#FBBC04"
    />
    <Path
      d="M24.48 9.5a13.042 13.042 0 019.207 3.597l6.852-6.852A23.066 23.066 0 
      0024.48.002 23.995 23.995 0 003.033 13.23l7.972 6.181C12.901 13.724 18.219 
      9.5 24.48 9.5z"
      fill="#EA4335"
    />
  </Svg>
);

const Facebook = () => (
  <Svg width={12} height={20} viewBox="0 0 21 39" fill="none">
    <Path
      d="M19.342 21.938L20.406 15H13.75v-4.5c0-1.898.93-3.75 
      3.911-3.75h3.026V.844S17.942.375 15.316.375C9.833.375 6.25 3.697 6.25 
      9.713V15H.156v6.938H6.25v16.77c2.485.39 5.015.39 7.5 0v-16.77h5.592z"
      fill="#1877F2"
    />
  </Svg>
);

const Apple = () => (
  <Svg width={23} height={25} viewBox="0 0 48 48" fill="none">
    <Path
      d="M43.584 37.407a26.1 26.1 0 01-2.58 4.64c-1.358 1.935-2.469 3.274-3.325 
      4.018-1.327 1.22-2.75 1.846-4.273 1.881-1.093 
      0-2.411-.311-3.946-.942-1.54-.628-2.955-.94-4.249-.94-1.357 
      0-2.812.312-4.369.94-1.559.63-2.815.96-3.775.992-1.46.063-2.916-.58-4.37-1.931-.927-.81-2.086-2.196-3.476-4.16-1.491-2.098-2.717-4.53-3.677-7.304C4.516 31.606 
      4 28.705 4 25.897c0-3.217.695-5.991 2.087-8.316 1.095-1.868 2.55-3.34 
      4.372-4.422a11.761 11.761 0 015.91-1.668c1.16 0 2.681.359 4.572 1.064 
      1.885.707 3.095 1.066 3.626 1.066.396 0 1.741-.42 4.02-1.256 2.156-.776 
      3.975-1.097 5.465-.97 4.039.326 7.073 1.918 9.09 4.786-3.611 2.188-5.398 
      5.253-5.362 9.185.032 3.063 1.143 5.612 3.327 7.635.99.94 2.095 1.665 
      3.324 2.181a35.927 35.927 0 01-.847 2.225zM34.322.961c0 2.4-.877 
      4.642-2.625 6.716-2.11 2.467-4.661 3.892-7.428 3.667a7.465 7.465 0 
      01-.056-.91c0-2.304 1.003-4.77 2.785-6.787.89-1.021 2.02-1.87 
      3.392-2.547C31.76.433 33.054.064 34.272 0c.035.321.05.642.05.96z"
      fill="#000"
    />
  </Svg>
);

interface SocialIconProps {
  children: ReactNode;
}
const SocialIcon = ({ children }: SocialIconProps) => {
  const theme = useTheme<Theme>();
  const SIZE = theme.borderRadii.l * 2;
  return (
    <Box
      marginHorizontal="s"
      backgroundColor="white"
      width={SIZE}
      height={SIZE}
      borderRadius="l"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

const SocialLogin = () => {
  return (
    <Box flexDirection="row" justifyContent="center" alignItems="center">
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Apple />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
