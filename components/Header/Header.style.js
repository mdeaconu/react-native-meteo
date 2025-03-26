import { StyleSheet } from "react-native";

const BACK_BTN_WIDTH = 30;

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  back_button: {
    width: BACK_BTN_WIDTH,
  },
  header_texts: {
    alignItems: "center",
    flex: 1,
    marginRight: BACK_BTN_WIDTH,
  },
  subtitle: {
    fontSize: 20,
  }
});
