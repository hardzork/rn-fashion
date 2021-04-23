import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { Box, Text } from "../../components";

import SocialLogin from "./SocialLogin";

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer = ({ onPress, title, action }: FooterProps) => {
  return (
    <>
      <SocialLogin />
      <Box alignItems="center" marginTop="m" marginBottom="m">
        <TouchableWithoutFeedback {...{ onPress }}>
          <Box flexDirection="row" justifyContent="center" alignItems="center">
            <Text variant="button" color="white">
              {`${title} `}
            </Text>
            <Text color="primary">{action}</Text>
          </Box>
        </TouchableWithoutFeedback>
      </Box>
    </>
  );
};

export default Footer;
