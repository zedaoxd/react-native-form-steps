import { FormProvider, useForm } from "react-hook-form";

import { NavigationContainer } from "@react-navigation/native";

import { AccountRoutes } from "./account.routes";

export function Routes() {
  const methods = useForm();
  return (
    <NavigationContainer>
      <FormProvider {...methods}>
        <AccountRoutes />
      </FormProvider>
    </NavigationContainer>
  );
}
