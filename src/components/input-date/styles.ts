import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  group: {
    width: "100%",
    height: 56,
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  icon: {
    height: 56,
    width: 56,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRightWidth: 1,
    borderRightColor: "#E6E6F0",
  },
  control: {
    flex: 1,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  error: {
    color: "#FF4040",
    fontSize: 12,
    marginTop: 4,
  },
});
