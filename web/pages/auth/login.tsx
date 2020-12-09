import { Box, Button, Link, Text } from "@chakra-ui/react";
import { Form, Formik, FormikHelpers } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import { FormInput, FormInputPassword } from "../../components/FormInput";
import { AuthFormLayout } from "../../components/layouts/authFormLayout";
import { validatePassword } from "../../components/validations/validateUsername";
import { useLoginMutation } from "../../graphql/generated";
import { clientOptions } from "../../utils/createClient";

interface RegisterValues {
  usernameOrEmail: string;
  password: string;
}

const Login = () => {
  const [{ fetching }, login] = useLoginMutation();
  const router = useRouter();
  return (
    <Formik
      initialValues={{
        usernameOrEmail: "",
        password: "",
      }}
      onSubmit={async (
        values: RegisterValues,
        { setSubmitting }: FormikHelpers<RegisterValues>
      ) => {
        try {
          await login({
            username: values.usernameOrEmail,
            email: values.usernameOrEmail,
            password: values.password,
          });
          router.push("/");
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {({ isSubmitting, values }) => (
        <AuthFormLayout title="Iniciar sesión" type="login">
          <Form>
            <FormInput
              name="usernameOrEmail"
              type="text"
              label="Usuario o email"
              placeholder="Inserta tu usuario o email"
              required={true}
            />

            <FormInputPassword
              name="password"
              type="password"
              label="Contraseña"
              placeholder="Inserta tu contraseña"
              required={true}
              validation={validatePassword}
            />

            <Box w="100%" textAlign="right" mb="1em">
              <Link>
                <Text variant="smallText">{"Olvidaste tu contraseña?"}</Text>
              </Link>
            </Box>

            <Button
              size="xl"
              mt={4}
              isFullWidth
              isLoading={isSubmitting}
              type="submit"
            >
              Iniciar sesión
            </Button>
          </Form>
        </AuthFormLayout>
      )}
    </Formik>
  );
};

export default withUrqlClient(clientOptions, { ssr: false })(Login);
