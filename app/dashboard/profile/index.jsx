import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function Page() {
  const [image, setImage] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View className="p-16 items-center flex-1 bg-[#F2F2F2]">
      <View className="justify-center items-center">
        <View>
          <View>
            {image ? (
              <Image
                source={{ uri: image }}
                width={200}
                height={200}
                className="w-[200px] h-[200px] rounded-full border-[2px] border-blue-700"
              />
            ) : (
              <View className="w-[200px] h-[200px] rounded-full border-[2px] border-blue-700"></View>
            )}
            <TouchableOpacity
              onPress={pickImage}
              className="absolute bottom-5 right-3 bg-[white] p-[8px] rounded-full"
            >
              <Ionicons name="camera" size={24} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="bg-white mt-10 w-96 p-[20px] rounded-xl elevation-lg shadow-slate-950">
          <View className="flex">
            <View className="flex-row mb-[20px]">
              <Text className="text-lg text-black font-bold">Full name</Text>
              <View className="ml-auto">
                <TouchableOpacity
                  // onPress={() => navigation.navigate("LoginSettings")}
                  className="flex-row items-center"
                >
                  <Text className="text-black">Maxwell Edunfunke</Text>
                  <Ionicons name="pencil" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex-row mb-[20px]">
              <Text className="text-black text-lg font-bold">
                Mobile Number
              </Text>
              <View className="ml-auto">
                <TouchableOpacity
                  // onPress={() => navigation.navigate("LoginSettings")}
                  className="flex-row items-center"
                >
                  <Text className="text-black">+2347068383089</Text>
                  <Ionicons name="pencil" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex-row mb-[20px]">
              <Text className="text-black text-lg font-bold">Email</Text>
              <View className="ml-auto">
                <TouchableOpacity
                  // onPress={() => navigation.navigate("LoginSettings")}
                  className="flex-row items-center"
                >
                  <Text className="text-black">d*****8@gmail.com</Text>
                  <Ionicons name="pencil" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex-row mb-[20px]">
              <Text className="text-black text-lg font-bold">
                Date of Birth
              </Text>
              <View className="ml-auto">
                <Text>**_**_14</Text>
              </View>
            </View>

            <View className="flex-row">
              <Text className="text-black text-lg font-bold">Nick Name</Text>
              <View className="ml-auto">
                <TouchableOpacity
                  // onPress={() => navigation.navigate("LoginSettings")}
                  className="flex-row items-center"
                >
                  <Text className="text-black">Maxwellsmall</Text>
                  <Ionicons name="pencil" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View className="bg-white mt-20 w-96 p-[20px] rounded-xl elevation-lg shadow-slate-950">
          <View className="flex">
            <View className="flex-row mb-[20px]">
              <Text className="text-black text-lg font-bold">
                Account Number
              </Text>
              <View className="ml-auto">
                <TouchableOpacity
                  // onPress={() => navigation.navigate("LoginSettings")}
                  className="flex-row items-center"
                >
                  <Text className="text-blacks">7068383089</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex-row items-center">
              <Text className="text-black text-lg font-bold">Account Tier</Text>
              <View className="ml-auto flex-row items-center">
                <Text className="">Tier 1</Text>
                <TouchableOpacity
                  // onPress={() => navigation.navigate("LoginSettings")}
                  className="flex-row items-center bg-blue-900 w-20 p-2 justify-center rounded-lg"
                >
                  <Text className="text-white font-semibold">Upgrade</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
