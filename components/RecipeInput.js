import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";

const RecipeInput = ({ recipeText, recipeInputHandler, addRecipeHandler }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={recipeText}
        placeholder="Ingrese el nombre de la receta"
        onChangeText={recipeInputHandler}
      />
      <View style={styles.buttonInput}>
        <Button onPress={addRecipeHandler} title="Agregar receta" />
      </View>
    </View>
  );
};

export default RecipeInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    marginRight: 8,
    marginVertical: 15,
    padding: 8,
  },
  buttonInput: {
    width: "50%",
    alignSelf: "flex-end",
  },
});
