import { useRef } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";

import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/buttom";
import { Input } from "../../components/input";
import { InputDate } from "../../components/input-date";
import { InputPhone } from "../../components/input-phone";
import { Progress } from "../../components/progress";
import { AccountProps } from "../../context/account-form-context";
import { useAccountForm } from "../../hooks/use-account";
import { styles } from "./styles";

export function FormStepTwo() {
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

  const phoneRef = useRef<TextInputMask>(null);

  function onSubmit(data: AccountProps) {
    // updateFormData(data);
    navigate("FormStepThree");
  }

  return (
    <View style={styles.container}>
      <Progress progress={66} />

      <Text style={styles.title}>Suas informações</Text>

      <InputDate
        error={errors.birth?.message}
        controllerProps={{
          name: "birth",
          control,
          rules: {
            required: "Data de nascimento é obrigatória",
            pattern: {
              value: /^\d{2}\/\d{2}\/\d{4}$/,
              message: "Data de nascimento inválida",
            },
          },
        }}
        textInputProps={{
          placeholder: "Data de nascimento",
          returnKeyType: "next",
          onSubmitEditing: () => phoneRef.current?.getElement().focus(),
        }}
      />

      <InputPhone
        error={errors.phone?.message}
        ref={phoneRef}
        controllerProps={{
          name: "phone",
          control,
          rules: {
            required: "Telefone é obrigatório",
            pattern: {
              value: /^\(\d{2}\) \d{5}-\d{4}$/,
              message: "Telefone inválido",
            },
          },
        }}
        textInputProps={{
          placeholder: "Telefone",
          onSubmitEditing: handleSubmit(onSubmit),
        }}
      />

      <Button title="Próximo" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
