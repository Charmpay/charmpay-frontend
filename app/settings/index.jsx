import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Importing an icon library

export default function Page() {
  return (
    <View className="bg-[#F2F2F2] flex-1 items-center pt-10 ">
      {/* Settings Options */}
      <View className="">
        <TouchableOpacity
          className="bg-white p-[15px] my-2 flex-row rounded-[10px] justify-between elevation-lg w-96 ml-auto shadow-black"
          // onPress={() => navigation.navigate("LoginSettings")}
        >
          <Text className="text-lg font-bold">Login Settings</Text>
          <Ionicons name="chevron-forward" size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-white p-[15px] my-2 flex-row rounded-[10px] justify-between elevation-lg w-96 ml-3 shadow-black"
          // onPress={() => navigation.navigate("PaymentSettings")}
        >
          <Text className="text-lg font-bold">Payment Settings</Text>
          <Ionicons name="chevron-forward" size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-white p-[15px] my-2 flex-row rounded-[10px] justify-between elevation-lg w-96 ml-3 shadow-black"
          // onPress={() => navigation.navigate("TaskDispute")}
        >
          <Text className="text-lg font-bold">
            Task and Dispute Preferences
          </Text>
          <Ionicons name="chevron-forward" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Sign Out Button */}
      <View className="items-center absolute bottom-3">
        <TouchableOpacity
          className="bg-blue-900 w-96 p-3 rounded-lg ml-4"
          onPress={() => alert("Signed Out")}
        >
          <Text className="text-white text-center font-bold">Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
