import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const App = () => {
  const [recipeText, setRecipeText] = useState("");
  const [recipes, setRecipes] = useState([]);

  const recipeInputHandler = (enteredText) => {
    setRecipeText(enteredText);
  };

  const addRecipeHandler = () => {
    setRecipes((oldRecipes) => [...oldRecipes, recipeText]);
    setRecipeText("");
  };

  return (
    <View style={styles.container}>
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
      <View>
        {recipes.map((recipe, index) => (
          <Text style={styles.recipeItem} key={index}>
            {recipe}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
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
  recipeItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#CB6011",
    color: "white",
  },
});

export default App;
