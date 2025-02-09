import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Finish } from "../screens/finish";
import { FormStepOne } from "../screens/form-step-one";
import { FormStepThree } from "../screens/form-step-three";
import { FormStepTwo } from "../screens/form-step-two";

const { Navigator, Screen } = createNativeStackNavigator();

export function AccountRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false, animation: "none" }}>
      <Screen name="FormStepOne" component={FormStepOne} />
      <Screen name="FormStepTwo" component={FormStepTwo} />
      <Screen name="FormStepThree" component={FormStepThree} />
      <Screen name="Finish" component={Finish} />
    </Navigator>
  );
}
