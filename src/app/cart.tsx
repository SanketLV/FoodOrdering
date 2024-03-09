import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useCart } from "@/providers/CartProvider";
import CartListItem from "@/components/CartListItem";

const CartScreen = () => {
  const { items } = useCart();

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <CartListItem cartItem={item} key={item.id} />
        )}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      />

      {/* <Text>Cart items length: {items.length}</Text> */}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
