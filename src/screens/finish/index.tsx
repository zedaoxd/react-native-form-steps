import { useFormContext } from "react-hook-form";
import { Text, View } from "react-native";

// import { useAccountForm } from "../../hooks/use-account";
import { styles } from "./styles";

export const Finish = () => {
  // const { accountFormData } = useAccountForm();

  const { getValues } = useFormContext();

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Dados dos steps</Text>

      <View>
        <Text style={styles.titleSection}>Step one</Text>
        <Text>
          <Text style={styles.bold}>Nome: </Text>
          {getValues("name")}
        </Text>
        <Text>
          <Text style={styles.bold}>E-mail: </Text> {getValues("email")}
        </Text>
      </View>

      <View>
        <Text style={styles.titleSection}>Step two</Text>
        <Text>
          <Text style={styles.bold}>Data:</Text> {getValues("birth")}
        </Text>
        <Text>
          <Text style={styles.bold}>Telefone:</Text> {getValues("phone")}
        </Text>
      </View>

      <View>
        <Text style={styles.titleSection}>Step three</Text>
        <Text>
          <Text style={styles.bold}>Senha:</Text> {getValues("password")}
        </Text>
        <Text>
          <Text style={styles.bold}>Confirmar senha:</Text>{" "}
          {getValues("passwordConfirmation")}
        </Text>
      </View>
    </View>
  );
};
