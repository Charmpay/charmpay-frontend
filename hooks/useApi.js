import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { router } from "expo-router";

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const validatePhoneNumber = (phoneNumber) => {
  const phoneRegex = /^\d+$/; // Only allows digits (0-9)
  return phoneRegex.test(phoneNumber);
};

const signup = async (transactionPin, setLoading) => {
  try {
    // router.navigate("/auth/signup/verify/success");
    setLoading(true);
    if (!transactionPin) {
      Alert.alert("", "Create a transaction pin before submission");
      return;
    }
    const storedData = await AsyncStorage.getItem("credentials");
    const credentials = JSON.parse(storedData);

    credentials.transactionPin = transactionPin;
    console.log(credentials);
    const response = await axios.post(
      "https://charmpay-backend.vercel.app/api/auth/signup",
      credentials
    );
    console.log(response.data);
    Alert.alert("", "Created a bonified account successfully");
    router.navigate("/auth/signup/verify/success");
    return response.data;
  } catch (error) {
    console.log(error);
    console.log(error.response.data.message);
    Alert.alert("", error.response.data.message);
  } finally {
    setLoading(false);
  }
};
const login = async (phoneNumber, passCode, setLoading) => {
  try {
    router.navigate("/(tabs)/dashboard");
    setLoading(true);
    if (!phoneNumber || !passCode) {
      Alert.alert("", "Input your details before submission");
      return;
    }

    const response = await axios.post(
      "https://charmpay-backend.vercel.app/api/auth/login",
      {
        phoneNumber,
        passCode,
      }
    );
    console.log(response.data);
    const token = response.data.token;
    console.log(token);
    AsyncStorage.setItem("token", token);

    // check if user have verified thier email
    if (!response.data.user.emailVerified) {
      router.navigate("/auth/signup/verify");
      await requestOtp();
      Alert.alert(
        "",
        "Logged in successfully, verify your account to continue"
      );

      return response.data;
    }
    Alert.alert("", "Logged in successfully");

    router.navigate("/(tabs)/dashboard");
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    Alert.alert(
      "",
      (error.response.data.message && error.response.data.message) ||
        "Check your internet connection"
    );
  } finally {
    setLoading(false);
  }
};

const storeData = async (
  firstName,
  lastName,
  phoneNumber,
  countryCode,
  email
) => {
  try {
    if (!firstName || !lastName || !phoneNumber || !countryCode || !email) {
      Alert.alert("", "Please fill up form before submission");
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert("", "Invalid email format");
      return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      Alert.alert("", "Invalid phone number");
      return;
    }
    await AsyncStorage.setItem(
      "credentials",
      JSON.stringify({
        firstName,
        lastName,
        phoneNumber,
        countryCode,
        email,
      })
    );

    const data = await AsyncStorage.getItem("credentials");
    const credentials = JSON.parse(data);

    console.log(credentials);
    router.navigate("/auth/signup/otp/");
  } catch (error) {
    console.error("Error storing data:", error);
  }
};

const updateStorage = async (passcode, confirmPasscode) => {
  try {
    if (!passcode || !confirmPasscode) {
      Alert.alert("", "Please insert passcode before submission");
      return;
    }
    if (passcode !== confirmPasscode) {
      Alert.alert("", "The passcodes does not match");
      return;
    }
    const data = await AsyncStorage.getItem("credentials");
    const credentials = JSON.parse(data);

    credentials.passCode = passcode;
    await AsyncStorage.setItem("credentials", JSON.stringify(credentials));

    router.navigate("/auth/signup/otp/passcode");
  } catch (error) {
    console.log(error);
  }
};

const verify = async (otp, setLoading) => {
  try {
    router.navigate("/auth/login");
    setLoading(true);
    const storedData = await AsyncStorage.getItem("credentials");
    const credentials = JSON.parse(storedData);

    const email = credentials.email;
    console.log(email, otp);
    const response = await axios.post(
      "https://charmpay-backend.vercel.app/api/auth/verify/account",
      {
        email,
        otp,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.error);
    Alert.alert("", error.response.data.error.message);
  } finally {
    setLoading(false);
  }
};
const requestOtp = async (setLoading) => {
  try {
    setLoading(true);
    const storedData = await AsyncStorage.getItem("credentials");
    const credentials = JSON.parse(storedData);

    const email = credentials.email;
    console.log(email);
    const response = await axios.post(
      "https://charmpay-backend.vercel.app/api/auth/verify/requestOTP",
      {
        email,
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    // console.log(error.response.data.error);
    Alert.alert("", error.response.data.error.message);
  } finally {
    setLoading(false);
  }
};

export default { signup, login, storeData, updateStorage, verify, requestOtp };
