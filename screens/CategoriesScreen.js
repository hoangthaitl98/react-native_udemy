import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  const renderCategoryItem = (item) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: item.item.id,
      });
    };

    return (
      <CategoryGridTile
        title={item.item.title}
        color={item.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      key={"_"}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
