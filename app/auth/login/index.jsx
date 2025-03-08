import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  rootStyle,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { router } from "expo-router";
const CELL_COUNT = 6; // Number of digits in the passcode

const Page = ({ navigation }) => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View className="flex-1 justify-start pt-10 items-center bg-white">
      <View>
        <Text className="w-[90%] font-bold mb-5 text-left text-[29px] text-[#3A259C]">
          Login
        </Text>
        <TextInput
          className="px-4 pt-4 placeholderTextColor-[#F5F5F5] bg-[#F5F5F5] w-96 rounded-md"
          placeholder="Email address"
        />
      </View>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      <TouchableOpacity
        className="bg-blue-900 absolute bottom-3 w-96 p-3 rounded-lg"
        onPress={() => router.navigate("dashboard/")}
      >
        <Text className="text-white text-center font-semibold">NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page;
const styles = StyleSheet.create({
  codeFieldRoot: {
    width: "90%",
    alignSelf: "center",
    marginTop: 40,
  },
  cell: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
  },
  focusCell: {
    borderColor: "#5A67D8",
  },
  cellText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
