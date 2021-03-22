import React from "react";
import { View } from "react-native";

import { Button, Container, Text, Box } from "../../components";
import SocialLogin from "../components/SocialLogin";

const Login = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button
          variant="transparent"
          onPress={() => {
            alert("Criar Conta");
          }}
        >
          <Box flexDirection="row" justifyContent="center">
            <Text variant="button" color="white">
              Ainda não possui uma conta?
            </Text>
            <Text variant="button" color="primary" marginLeft="s">
              Registre-se aqui
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );
  return (
    <Container {...{ footer }}>
      <View />
    </Container>
  );
};

export default Login;
