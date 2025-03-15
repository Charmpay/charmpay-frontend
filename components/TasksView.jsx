import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function Inbox() {
  const router = useRouter();
  return (
    <View
      className=" mt-4 mb-4 bg-slate-400 flex-row justify-between items-center p-12 px-3 py-4 rounded-lg"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <Text>Build Infastructure</Text>
      <TouchableOpacity
        className=" border-4 border-[#C4BEE1] p-2 rounded-lg"
        onPress={() => router.navigate("/tasks/")}
      >
        <Text className="text-[#c8c4dd]">Open</Text>
      </TouchableOpacity>
    </View>
  );
}
