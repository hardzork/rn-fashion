import React from "react";
import { Dimensions, Image } from "react-native";

import { Button } from "../../components";
import theme, { Box, Text } from "../../components/Theme";
import { Routes, StackNavigationProps } from "../../types/Navigation";
const { width } = Dimensions.get("window");
const picture = {
  src: require("../assets/5.png"),
  width: 3383,
  height: 5074,
};
export const assets = [picture.src];
const Welcome = ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          alignItems="center"
          flex={1}
          padding="xl"
        >
          <Text variant="title2">Vamos Começar</Text>
          <Text variant="body" textAlign="center">
            Faça login na sua conta abaixo ou inscreva-se para uma experiência
            incrível
          </Text>
          <Button
            variant="primary"
            label="Já possui conta? Faça o Login"
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
          <Button
            label="Cadastre-se, é grátis"
            onPress={() => {
              return;
            }}
          />
          <Button
            variant="transparent"
            label="Esqueceu a senha?"
            onPress={() => {
              return;
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
