import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

import { Box, Text, theme } from "../../../components";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <RectButton onPress={onChange} style={{ justifyContent: "center" }}>
      <Box flexDirection="row" alignItems="center">
        <Box
          borderRadius="s"
          backgroundColor={checked ? "primary" : "white"}
          height={20}
          width={20}
          borderWidth={StyleSheet.hairlineWidth}
          borderColor={checked ? "primary" : "text"}
          marginRight="m"
          justifyContent="center"
          alignItems="center"
        >
          {checked && (
            <Icon name="check" size={14} color={theme.colors.white} />
          )}
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};

export default Checkbox;
