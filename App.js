import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import RecipeInput from "./components/RecipeInput";
import RecipeList from "./components/RecipeList";

const App = () => {
  const [recipeText, setRecipeText] = useState("");
  const [recipes, setRecipes] = useState([]);

  const recipeInputHandler = (enteredText) => {
    setRecipeText(enteredText);
  };

  const addRecipeHandler = () => {
    setRecipes((oldRecipes) => [
      ...oldRecipes,
      { id: Math.random().toString(), text: recipeText },
    ]);
    setRecipeText("");
  };

  return (
    <View style={styles.container}>
      <RecipeInput
        addRecipeHandler={addRecipeHandler}
        recipeText={recipeText}
        recipeInputHandler={recipeInputHandler}
      />
      <RecipeList recipes={recipes} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});

export default App;
