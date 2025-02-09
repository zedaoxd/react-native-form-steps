import { TextInput } from "react-native";
import { TextInputMask } from "react-native-masked-text";

declare module "react-native-masked-text" {
  interface TextInputMask {
    getElement(): TextInput;
  }
}
