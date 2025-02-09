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

export function FormStepOne() {
  // const { updateFormData } = useAccountForm();
  const { navigate } = useNavigation();
  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<AccountProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormContext<AccountProps>();

  console.log(errors);

  const emailRef = useRef<TextInput>(null);

  function onSubmit(data: AccountProps) {
    // updateFormData(data);
    navigate("FormStepTwo");
  }

  return (
    <View style={styles.container}>
      <Progress progress={33} />

      <Text style={styles.title}>Crie sua conta</Text>

      <Input
        icon="user"
        error={errors.name?.message}
        controllerProps={{
          name: "name",
          control,
          rules: { required: "Nome é obrigatório" },
        }}
        textInputProps={{
          placeholder: "Nome",
          returnKeyType: "next",
          onSubmitEditing: () => emailRef.current?.focus(),
        }}
      />

      <Input
        icon="mail"
        error={errors.email?.message}
        ref={emailRef}
        controllerProps={{
          name: "email",
          control,
          rules: {
            required: "E-mail é obrigatório",
            pattern: {
              value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
              message: "E-mail inválido",
            },
          },
        }}
        textInputProps={{
          placeholder: "E-mail",
          keyboardType: "email-address",
          onSubmitEditing: handleSubmit(onSubmit),
        }}
      />

      <Button title="Próximo" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
