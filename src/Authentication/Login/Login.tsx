import React from "react";

import { Button, Container, Text, Box } from "../../components";
import TextInput from "../components/Form/TextInput";
import Checkbox from "../components/Form/Checkbox";
import SocialLogin from "../components/SocialLogin";

const emailValidator = (email: string) =>
  // eslint-disable-next-line max-len
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

const passwordValidator = (password: string) => password.length >= 6;

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
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="m">
          Bem-vindo de volta
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use suas credenciais abaixo e acesse sua conta
        </Text>
        <Box marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Digite seu Email"
            validator={emailValidator}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </Box>
        <TextInput
          icon="lock"
          placeholder="Informe sua senha"
          validator={passwordValidator}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Checkbox label="Manter-me conectado" />
          <Button variant="transparent" onPress={() => true}>
            <Text color="primary">Esqueci minha senha</Text>
          </Button>
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Acessar sua conta"
            onPress={() => true}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
