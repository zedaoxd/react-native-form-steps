import { useRef } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/buttom";
import { Input } from "../../components/input";
import { Progress } from "../../components/progress";
import { AccountProps } from "../../context/account-form-context";
import { useAccountForm } from "../../hooks/use-account";
import { styles } from "./styles";

export function FormStepThree() {
  // const { updateFormData } = useAccountForm();
  const { navigate } = useNavigation();
  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  //   getValues,
  // } = useForm<AccountProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useFormContext<AccountProps>();

  console.log(errors);

  const passwordConfirmationRef = useRef<TextInput>(null);

  function onSubmit(data: AccountProps) {
    // updateFormData(data);
    navigate("Finish");
  }

  function validationPasswordConfirmation(value: string) {
    return value === getValues("password") || "As senhas não coincidem";
  }

  return (
    <View style={styles.container}>
      <Progress progress={95} />

      <Text style={styles.title}>Escolha sua senha</Text>

      <Input
        icon="key"
        error={errors.password?.message}
        controllerProps={{
          name: "password",
          control,
          rules: {
            required: "Senha é obrigatório",
            minLength: {
              value: 6,
              message: "A senha deve ter no mínimo 6 caracteres",
            },
            maxLength: {
              value: 12,
              message: "A senha deve ter no máximo 12 caracteres",
            },
          },
        }}
        textInputProps={{
          placeholder: "Senha",
          returnKeyType: "next",
          onSubmitEditing: () => passwordConfirmationRef.current?.focus(),
          secureTextEntry: true,
        }}
      />

      <Input
        icon="key"
        error={errors.passwordConfirmation?.message}
        ref={passwordConfirmationRef}
        controllerProps={{
          name: "passwordConfirmation",
          control,
          rules: {
            required: "Confirmação de senha é obrigatório",
            validate: validationPasswordConfirmation,
          },
        }}
        textInputProps={{
          placeholder: "Confirmação de senha",
          onSubmitEditing: handleSubmit(onSubmit),
          secureTextEntry: true,
        }}
      />

      <Button title="Próximo" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
