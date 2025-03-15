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

const CELL_COUNT = 4; // Number of digits in the passcode

const Page = ({ navigation }) => {
  const { verify, requestOtp } = useApi;
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View className="flex-1 justify-start items-center bg-white">
      <View>
        <Text className="text-blue-900 mr-20 font-bold p-5">
          Verify your account
        </Text>
        <View className="grid p-3">
          <Text className="text-[#3A259C] ml-5">
            An OTP has been sent to your Email address paste,
          </Text>
          <Text className="text-[#3A259C] ml-5">to verify.</Text>
        </View>
      </View>
      {/* Passcode Input */}
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
        className="p-3 rounded-lg flex-row justify-center items-center"
        onPress={() => requestOtp(setLoading)}
      >
        <Text className="text-black text-right font-semibold">Resend Otp</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-blue-900 w-96 p-3 rounded-lg absolute bottom-5 flex-row justify-center items-center"
        onPress={() => verify(value, setLoading)}
      >
        {loading && <ActivityIndicator size={24} color={"white"} />}
        <Text className="text-white text-center font-semibold">NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page;
const styles = StyleSheet.create({
  codeFieldRoot: {
    width: "60%",
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
