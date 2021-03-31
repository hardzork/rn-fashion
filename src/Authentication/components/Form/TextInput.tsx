import React from "react";
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";

import { Box } from "../../../components";
import { Theme } from "../../../components/Theme";

interface TextInputProps extends RNTextInputProps {
  icon: keyof typeof Icon.glyphMap;
  touched?: boolean;
  error?: string;
}

const TextInput = ({ icon, touched, error, ...props }: TextInputProps) => {
  const theme = useTheme<Theme>();
  // eslint-disable-next-line no-nested-ternary
  const reColor = !touched ? "text" : error ? "danger" : "primary";
  const color = theme.colors[reColor];
  const SIZE = theme.borderRadii.m * 2.5;
  return (
    <Box
      flexDirection="row"
      height={48}
      alignItems="center"
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}
      padding="s"
    >
      <Box padding="s">
        <Icon name={icon} size={16} {...{ color }} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          {...props}
        />
      </Box>
      {touched && (
        <Box
          height={SIZE}
          width={SIZE}
          justifyContent="center"
          alignItems="center"
          backgroundColor={!error ? "primary" : "danger"}
          style={{ borderRadius: SIZE / 2 }}
        >
          <Icon
            name={!error ? "check" : "x"}
            color="white"
            size={16}
            style={{ textAlign: "center" }}
          />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
