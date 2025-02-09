import { View } from "react-native";

import { styles } from "./styles";

type ProgressProps = {
  progress: number;
};

export const Progress = ({ progress }: ProgressProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${progress}%` }]} />
    </View>
  );
};
