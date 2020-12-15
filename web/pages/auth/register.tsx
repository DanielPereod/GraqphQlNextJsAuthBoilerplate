import { Box, Button, Link, Text } from "@chakra-ui/react";
import { Form, Formik, FormikHelpers } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import { FormInput, FormInputPassword } from "../../components/FormInput";
import { AuthFormLayout } from "../../components/layouts/authFormLayout";
import {
  validateEmail,
  validatePassword,
  validatePasswordRepeat,
  validateUsername,
} from "../../components/validations/validateUsername";
import { useRegisterMutation } from "../../graphql/generated";
import { clientOptions } from "../../utils/createClient";

interface RegisterValues {
  username: string;
  email: string;
  password: string;
  repeat_password: string;
}

const Register = () => {
  const [
    register,
    { loading: registerLoading, error: registerError },
  ] = useRegisterMutation();
  const router = useRouter();
  const sendData = () => {};
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        repeat_password: "",
      }}
      onSubmit={async (
        values: RegisterValues,
        { setSubmitting }: FormikHelpers<RegisterValues>
      ) => {
        try {
          await register({
            variables: {
              username: values.username,
              email: values.email,
              password: values.password,
            },
          });
          router.push("/");
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {({ isSubmitting, values }) => (
        <AuthFormLayout title="Registro" type="signup">
          <Form>
            <FormInput
              name="username"
              type="text"
              label="Usuario"
              placeholder="Inserta tu usuario"
              required={true}
              validation={validateUsername}
            />

            <FormInput
              name="email"
              type="text"
              label="Email"
              placeholder="Inserta tu email"
              required={true}
              validation={validateEmail}
            />
            <FormInputPassword
              name="password"
              type="password"
              label="Contraseña"
              placeholder="Inserta tu contraseña"
              required={true}
              validation={validatePassword}
            />

            <FormInputPassword
              name="repeat_password"
              type="password"
              label="Reptetir contraseña"
              placeholder="Repite tu contraseña"
              required={true}
              validation={() =>
                validatePasswordRepeat(values.password, values.repeat_password)
              }
            />

            <Button
              size="xl"
              mt={4}
              isFullWidth
              isLoading={isSubmitting}
              type="submit"
            >
              Crear cuenta
            </Button>
          </Form>
        </AuthFormLayout>
      )}
    </Formik>
  );
};

export default Register;
