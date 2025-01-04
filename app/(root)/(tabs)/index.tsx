import { Link } from "expo-router";
import { Text, View } from "react-native";
const links = [
  {
    name: "Explore",
    link: "/explore"
  },
  {
    name: "Profile",
    link: "/profile"
  },
  {
    name: "Sign Up",
    link: "/sign-in"
  },
  {
    name: "Property",
    link: "/properties/5"
  },
]

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-xl py-5 font-rubik">Welcome to React Native</Text>
      <View className="flex gap-5 flex-col p-5 rounded-md">
        {
          links.map((item) => (
            <Link key={item.name} href={item.link} className="bg-gray-300 px-5 py-4 rounded-lg font-rubik">{item.name}</Link>
          ))
        }
      </View>
    </View>
  );
}
