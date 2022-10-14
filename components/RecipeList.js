import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";

const RecipeList = ({ recipes }) => {
  const deleteRecipeHandler = (id) => {
    console.log(id);
  };

  return (
    <FlatList
      data={recipes}
      renderItem={(itemData) => (
        <Pressable onPress={() => deleteRecipeHandler(itemData.item.id)}>
          <Text style={styles.recipeItem}>{itemData.item.text}</Text>
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RecipeList;

const styles = StyleSheet.create({
  recipeItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#CB6011",
    color: "white",
  },
});
