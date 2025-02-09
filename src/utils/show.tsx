import { View, ViewProps } from "react-native";

interface ShowProps extends ViewProps {
  when: boolean;
  children: React.ReactNode;
}

export const Show = ({ when, children, ...rest }: ShowProps) => {
  return when ? <View {...rest}>{children}</View> : null;
};
