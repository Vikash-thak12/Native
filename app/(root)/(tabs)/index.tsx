import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-xl py-5">Welcome to React Native</Text>
      <Link href={"/explore"}>Explore</Link>
      <Link href={"/profile"}>Profile</Link>
      <Link href={"/sign-in"}>Sign Up</Link>
      <Link href={"/properties/5"}>Property</Link>
    </View>
  );
}
