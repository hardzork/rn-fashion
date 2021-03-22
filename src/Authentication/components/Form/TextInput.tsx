import React, { useState } from "react";
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, theme } from "../../../components";

interface TextInputProps extends RNTextInputProps {
  icon: keyof typeof Icon.glyphMap;
  validator: (input: string) => boolean;
}

const SIZE = theme.borderRadii.m * 2;

const _VALID = true;
const _INVALID = false;
const _PRISTINE = null;
type InputState = typeof _VALID | typeof _INVALID | typeof _PRISTINE;

const TextInput = ({ icon, validator, ...props }: TextInputProps) => {
  const [input, setInput] = useState("");
  const [state, setState] = useState<InputState>(_PRISTINE);
  const reColor: keyof typeof theme.colors =
    // eslint-disable-next-line no-nested-ternary
    state === _PRISTINE ? "text" : state === _VALID ? "primary" : "danger";
  const color = theme.colors[reColor];

  const onChangeText = (value: string) => {
    if (!value) {
      setState(_PRISTINE);
    }
    setInput(value);
    if (state !== _PRISTINE) {
      validate();
    }
  };

  const validate = () => {
    if (!input) {
      setState(_PRISTINE);
    } else {
      const valid = validator(input);
      setState(valid);
    }
  };

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
          onBlur={() => validate()}
          {...{ onChangeText }}
          {...props}
        />
      </Box>
      {(state === _VALID || state === _INVALID) && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="m"
          justifyContent="center"
          alignItems="center"
          backgroundColor={state === _VALID ? "primary" : "danger"}
        >
          <Icon
            name={state === _VALID ? "check" : "x"}
            color="white"
            size={16}
          />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
