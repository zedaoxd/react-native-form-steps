import clsx from "clsx";
import { forwardRef } from "react";
import { Controller, UseControllerProps } from "react-hook-form";
import { Text, TextInput, TextInputProps, View } from "react-native";

import { Feather } from "@expo/vector-icons";

import { Show } from "../../utils/show";
import { styles } from "./styles";

type Props = {
  icon: keyof typeof Feather.glyphMap;
  controllerProps: UseControllerProps;
  textInputProps: TextInputProps;
  error?: string;
};

export const Input = forwardRef<TextInput, Props>(
  ({ icon, controllerProps, textInputProps, error = "" }, ref) => {
    return (
      <Controller
        render={({ field: { onChange, value } }) => (
          <View style={styles.container}>
            <View style={styles.group}>
              <View style={styles.icon}>
                <Feather
                  name={icon}
                  size={24}
                  color={clsx({
                    ["#FF4040"]: error.length > 0,
                    ["#C1BCCC"]: !value && error.length === 0,
                    ["#8257e5"]: value && error.length === 0,
                  })}
                />
              </View>

              <TextInput
                ref={ref}
                style={styles.control}
                onChangeText={onChange}
                value={value}
                {...textInputProps}
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
