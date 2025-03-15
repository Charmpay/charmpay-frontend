import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  rootStyle,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { router } from "expo-router";
import useApi from "@/hooks/useApi";

const CELL_COUNT = 4;

const Page = ({ navigation }) => {
  const { signup } = useApi;
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <View>
        <Text className="text-blue-900 mr-20 font-[600] text-[20px] p-5">
          Create a transaction pin
        </Text>
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

      <View className="grid">
        <Text className="text-[#3A259C] w-80">
          This is the pin you will use in making transaction from your Charmpay
          account
        </Text>
      </View>

      {/* Next Button */}
      <TouchableOpacity
        className="bg-blue-900 absolute bottom-3 w-96 flex-row justify-center p-3 rounded-lg"
        onPress={() => signup(value, setLoading)}
      >
        {loading && <ActivityIndicator size={25} color={"white"} />}
        <Text className="text-white text-center font-semibold ml-3">NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page;
const styles = StyleSheet.create({
  codeFieldRoot: {
    width: "70%",
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
