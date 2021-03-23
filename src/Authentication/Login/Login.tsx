import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import { Button, Container, Text, Box } from "../../components";
import TextInput from "../components/Form/TextInput";
import Checkbox from "../components/Form/Checkbox";
import SocialLogin from "../components/SocialLogin";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Formato de email inválido").required("Required"),
  password: Yup.string()
    .min(6, "Senha muito curta")
    .max(200, "Limite máximo de caracteres atingido (200)")
    .required("Required"),
});

interface FormData {
  email: string;
  password: string;
  remember: boolean;
}

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
  const initialValues: FormData = { email: "", password: "", remember: true };
  return (
    <Container {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="m">
          Bem-vindo de volta
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use suas credenciais abaixo e acesse sua conta
        </Text>
        <Formik
          {...{ initialValues }}
          validationSchema={LoginSchema}
          onSubmit={(values: FormData, actions) => {
            console.log({ values, actions });
            // alert(JSON.stringify(values, null, 2));
            // actions.setSubmitting(false);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            errors,
            touched,
            values,
          }) => (
            <Box>
              <Box marginBottom="m">
                <TextInput
                  icon="mail"
                  placeholder="Digite seu Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors.email}
                  touched={touched.email}
                />
              </Box>
              <TextInput
                icon="lock"
                placeholder="Informe sua senha"
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                error={errors.password}
                touched={touched.password}
              />
              <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Checkbox
                  label="Manter-me conectado"
                  checked={values.remember}
                  onChange={() => setFieldValue("remember", !values.remember)}
                />
                <Button variant="transparent" onPress={() => true}>
                  <Text color="primary">Esqueci minha senha</Text>
                </Button>
              </Box>
              <Box alignItems="center" marginTop="m">
                <Button
                  variant="primary"
                  label="Acessar sua conta"
                  onPress={handleSubmit}
                />
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
