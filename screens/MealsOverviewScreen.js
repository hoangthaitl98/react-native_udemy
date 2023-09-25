import { Text, View } from "react-native";

function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  return (
    <View>
      <Text>qweqw - {catId}</Text>
    </View>
  );
}

export default MealsOverviewScreen;
