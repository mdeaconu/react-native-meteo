import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 30,
    height: 30
  },
  date: {
    fontSize: 20,
    textAlign: "center",
    minWidth: 70
  },
  day: {
    fontSize: 20,
    textAlign: "center",
    minWidth: 70
  },
  temperature: {
    minWidth: 50,
    textAlign: "right"
  }
});
