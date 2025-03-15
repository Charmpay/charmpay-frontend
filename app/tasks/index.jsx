import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Inbox from "@/components/Inbox";
import Task from "@/components/Task";
import Transactions from "@/components/Transactions";

export default function Page() {
  return (
    <View className="flex-1 bg-white">
      <View className="flex-row justify-between items-center px-5">
        <TouchableOpacity className="flex-row justify-normal items-center">
          <Image
            source={require("../../assets/images/OIP.png")}
            className="rounded-full w-[40px]"
          />
          <Text className="text-bold ml-3 font-semibold">
            HI, Chukwuchebem David
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={37} />
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{
          width: "100%", // Makes content full width
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <View className="w-full px-5 ">
          <View className="border-4 border-[#C4BEE1] p-5 rounded-lg">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="shield-checkmark" size={24} color={"#301B92"} />
                <Text className="text-[12px] font-semibold ml-2">
                  Available balance
                </Text>
                <TouchableOpacity>
                  <Ionicons name="eye-sharp" size={24} color={"#301B92"} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity className="flex-row items-center">
                <Text className="text-[12px] font-semibold">
                  Transaction History
                </Text>
                <Ionicons name="chevron-forward" size={15} color={"black"} />
              </TouchableOpacity>
            </View>
            <View className="flex-row items-center mt-10 justify-between">
              <Text className="text-[12px] font-semibold">C$200,000</Text>
              <TouchableOpacity className="bg-blue-700 rounded-full p-2 px-3">
                <Text className="text-white text-[12px] font-semibold">
                  Add money
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
