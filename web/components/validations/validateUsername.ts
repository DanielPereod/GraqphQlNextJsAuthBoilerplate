export const validateUsername = (value?: string): String => {
  if (!value) {
    return "El usuario es requerido";
  } else if (value.length < 3) {
    return "El usuario debe tener al menos 3 letras";
  }
  return;
};

export const validateEmail = (value?: string): String => {
  const reg = RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  if (!value) {
    return "El email es requerido";
  } else if (!reg.test(value)) {
    return "Inserta un email correcto";
  }
  return;
};

export const validatePassword = (value?: string): String => {
  const reg = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm);
  if (!value) {
    return "La contraseña es requerida";
  } else if (!reg.test(value)) {
    return `La contraseña debe ener una longitud de al menos 8 caracteres.
    Contenter un número.\n
    Contener un símbolo.\n
    Contener una mayúsucla.\n
    `;
  }
  return;
};

export const validatePasswordRepeat = (
  password: string,
  value?: string
): String => {
  console.log(password, value);
  if (!value) {
    return "Reptie la contraseña";
  } else if (value !== password) {
    return "Las contraseñas no coinciden";
  }
  return;
};
