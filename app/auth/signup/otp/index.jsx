import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { router } from "expo-router";
import useApi from "@/hooks/useApi";

const CELL_COUNT = 6; // Number of digits in the passcode

const Page = ({ navigation }) => {
  const { updateStorage } = useApi;
  const [value, setValue] = useState("");
  const [confirmValue, setConfirmValue] = useState("");

  // Separate refs for each input
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const confirmRef = useBlurOnFulfill({
    value: confirmValue,
    cellCount: CELL_COUNT,
  });

  // Separate props for each input
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [confirmProps, getConfirmCellOnLayoutHandler] = useClearByFocusCell({
    value: confirmValue,
    setValue: setConfirmValue,
  });

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <View>
        <Text className="text-blue-900 text-start w-80 mr-10 mb-3 font-bold text-20">
          Create a Passcode
        </Text>

        <View>
          <Text className="text-[#3A259C] mb-3">
            This is the code you will use in logging into your account
          </Text>
        </View>
      </View>

      {/* Passcode Input */}
      <CodeField
        ref={ref}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="password"
        {...props}
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
          >
            <Text style={styles.cellText}>
              {symbol ? "●" : isFocused ? <Cursor /> : null}
            </Text>
          </View>
        )}
      />

      {/* Confirm Section */}
      <View>
        <Text className="text-blue-900 p-6 font-bold text-start w-96">
          Confirm
        </Text>
      </View>

      <CodeField
        ref={confirmRef}
        value={confirmValue}
        onChangeText={setConfirmValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="password"
        {...confirmProps}
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
          >
            <Text style={styles.cellText}>
              {symbol ? "●" : isFocused ? <Cursor /> : null}
            </Text>
          </View>
        )}
      />

      {/* Next Button */}
      <TouchableOpacity
        className="bg-blue-900 absolute bottom-3 w-96 p-3 rounded-lg"
        onPress={updateStorage}
      >
        <Text className="text-white text-center font-semibold">NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  codeFieldRoot: {
    width: "80%",
    alignSelf: "center",
    marginBottom: 20,
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
