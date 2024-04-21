import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

const CartPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Your cart is ready</Text>
      <Text>And your Id is {id}</Text>
      <StatusBar />
    </View>
  );
};

export default CartPage;
