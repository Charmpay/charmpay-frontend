import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Page() {
  return (
    <View className="flex-1 bg-white">
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
              <View className="flex-row items-center">
                <Text className="text-[12px] font-semibold">
                  Transaction History
                </Text>
                <Ionicons name="chevron-forward" size={24} color={"black"} />
              </View>
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
          <View className="mt-10 w-full p-[20px]">
            <View className="flex">
              <View className="flex-row mb-[30px]">
                <View className="flex-row items-center">
                  <Ionicons
                    name="reorder-three-outline"
                    className="me-[10px]"
                    size={24}
                  />
                  <Text className="text-black font-bold text-lg">
                    Transaction History
                  </Text>
                </View>
                <View className="ml-auto">
                  <TouchableOpacity
                    // onPress={() => navigation.navigate("LoginSettings")}
                    className="flex-row items-center"
                    onPress={() => router.navigate("/transaction/index")}
                  >
                    <Ionicons name="chevron-forward" size={20} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-row mb-[30px]">
                <View className="flex-row items-center">
                  <Ionicons
                    name="speedometer-outline"
                    size={20}
                    className="me-[10px]"
                  />
                  <Text className="text-black font-bold text-lg">
                    Account Limits
                  </Text>
                </View>
                <View className="ml-auto">
                  <TouchableOpacity
                    // onPress={() => navigation.navigate("LoginSettings")}
                    className="flex-row items-center"
                  >
                    <Ionicons name="chevron-forward" size={20} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-row mb-[30px]">
                <View className="flex-row items-center">
                  <Ionicons name="headset" size={20} className="me-[10px]" />
                  <Text className="text-black font-bold text-lg">
                    Customer Care Service
                  </Text>
                </View>
                <View className="ml-auto">
                  <TouchableOpacity
                    // onPress={() => navigation.navigate("LoginSettings")}
                    className="flex-row items-center"
                  >
                    <Ionicons name="chevron-forward" size={20} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-row mb-[30px]">
                <View className="flex-row items-center">
                  <Ionicons
                    name="reorder-three-outline"
                    size={20}
                    className="me-[10px]"
                  />
                  <Text className="text-black font-bold text-lg">
                    Invitation
                  </Text>
                </View>
                <View className="ml-auto">
                  <TouchableOpacity
                    // onPress={() => navigation.navigate("LoginSettings")}
                    className="flex-row items-center"
                  >
                    <Ionicons name="chevron-forward" size={20} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-row mb-[30px]">
                <View className="flex-row items-center">
                  <Ionicons
                    name="star-outline"
                    size={20}
                    className="me-[10px]"
                  />
                  <Text className="text-black font-bold text-lg">Rate Us</Text>
                </View>
                <View className="ml-auto">
                  <TouchableOpacity
                    // onPress={() => navigation.navigate("LoginSettings")}
                    className="flex-row items-center"
                  >
                    <Ionicons name="chevron-forward" size={20} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-row mb-[30px]">
                <View className="flex-row items-center">
                  <Ionicons name="pencil" size={20} className="me-[10px]" />
                  <Text className="text-black font-bold text-lg">
                    Edit Your Profile
                  </Text>
                </View>
                <View className="ml-auto">
                  <TouchableOpacity
                    // onPress={() => navigation.navigate("LoginSettings")}
                    className="flex-row items-center"
                  >
                    <Ionicons name="chevron-forward" size={20} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-row mb-[30px]">
                <View className="flex-row items-center">
                  <Ionicons
                    name="speedometer-outline"
                    size={20}
                    className="me-[10px]"
                  />
                  <Text className="text-black font-bold text-lg">
                    Account Limits
                  </Text>
                </View>
                <View className="ml-auto">
                  <TouchableOpacity
                    // onPress={() => navigation.navigate("LoginSettings")}
                    className="flex-row items-center"
                  >
                    <Ionicons name="chevron-forward" size={20} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-row">
                <View className="flex-row items-center">
                  <Ionicons name="headset" size={20} className="me-[10px]" />
                  <Text className="text-black font-bold text-lg">
                    Customer Care Services
                  </Text>
                </View>
                <View className="ml-auto">
                  <TouchableOpacity
                    // onPress={() => navigation.navigate("LoginSettings")}
                    className="flex-row items-center"
                  >
                    <Ionicons name="chevron-forward" size={20} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
