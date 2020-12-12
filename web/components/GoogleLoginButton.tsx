import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import GoogleLogin from "react-google-login";
import {
  useGoogleLoginMutation,
  useRegisterMutation,
} from "../graphql/generated";
import { GoogleIcon } from "../styles/icons";

interface Props {}

export const GoogleLoginButton = (props: Props) => {
  const [{ fetching }, googleLogin] = useGoogleLoginMutation();
  const router = useRouter();

  const responseGoogle = async (response) => {
    try {
      await googleLogin({
        email: response.profileObj.email,
        username: response.profileObj.givenName,
        password: "googleAuth",
      });
      return router.push("/");
    } catch (error) {
      return error;
    }
  };
  return (
    <GoogleLogin
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
      render={(renderProps) => (
        <Button
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          size="xl"
          w="100%"
          variant="whiteWithBorder"
          leftIcon={<GoogleIcon />}
        >
          Inicia sesión con Google
        </Button>
      )}
    />
  );
};
