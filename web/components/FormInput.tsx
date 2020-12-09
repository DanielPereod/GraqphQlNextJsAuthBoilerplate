import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputGroup,
  Button,
  Icon,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import { Field } from "formik";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

interface Props {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
  validation?: any;
}

const FormWrapper = ({ children }) => <Box mb={"1em"}>{children}</Box>;

export const FormInput = ({
  name,
  label,
  placeholder,
  type,
  required,
  validation,
}: Props) => (
  <FormWrapper>
    <Field name={name} validate={validation}>
      {({ field, form }) => (
        <FormControl
          isInvalid={form.errors[name] && form.touched[name]}
          isRequired={required}
        >
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <Input {...field} type={type} id={name} placeholder={placeholder} />
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  </FormWrapper>
);

export const FormInputPassword = ({
  name,
  label,
  placeholder,
  type,
  required,
  validation,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () =>
    setShowPassword((prevState) => !prevState);
  return (
    <FormWrapper>
      <Field name={name} validate={validation}>
        {({ field, form }) => (
          <FormControl
            isInvalid={form.errors[name] && form.touched[name]}
            isRequired={required}
          >
            <FormLabel htmlFor={name}>{label}</FormLabel>

            <InputGroup>
              <Input
                {...field}
                type={showPassword ? "text" : "password"}
                id={name}
                placeholder={placeholder}
              />
              <InputRightElement width="3rem">
                <Button size="sm" onClick={handlePasswordVisibility}>
                  {showPassword ? (
                    <Icon as={ViewOffIcon} />
                  ) : (
                    <Icon as={ViewOffIcon} />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
    </FormWrapper>
  );
};
