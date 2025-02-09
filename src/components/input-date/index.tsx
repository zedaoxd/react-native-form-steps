import clsx from "clsx";
import { forwardRef } from "react";
import { Controller, UseControllerProps } from "react-hook-form";
import { Text, TextInputProps, View } from "react-native";
import { TextInputMask, TextInputMaskProps } from "react-native-masked-text";

import { Feather } from "@expo/vector-icons";

import { Show } from "../../utils/show";
import { styles } from "./styles";

type Props = {
  controllerProps: UseControllerProps;
  textInputProps: Omit<TextInputMaskProps, "value" | "onChangeText" | "type">;
  error?: string;
};

export const InputDate = forwardRef<TextInputMask, Props>(
  ({ controllerProps, textInputProps, error = "" }, ref) => {
    return (
      <Controller
        render={({ field: { onChange, value } }) => (
          <View style={styles.container}>
            <View style={styles.group}>
              <View style={styles.icon}>
                <Feather
                  name="calendar"
                  size={24}
                  color={clsx({
                    ["#FF4040"]: error.length > 0,
                    ["#C1BCCC"]: !value && error.length === 0,
                    ["#8257e5"]: value && error.length === 0,
                  })}
                />
              </View>

              <TextInputMask
                {...textInputProps}
                ref={ref}
                style={styles.control}
                options={{
                  format: "DD/MM/YYYY",
                }}
                value={value}
                onChangeText={onChange}
                type="datetime"
              />
            </View>

            <Show when={error.length > 0}>
              <Text style={styles.error}>{error}</Text>
            </Show>
          </View>
        )}
        {...controllerProps}
      />
    );
  }
);
