import { Stack } from "expo-router";

const CategoriesLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="[slug]" />
    </Stack>
  );
};

export default CategoriesLayout;