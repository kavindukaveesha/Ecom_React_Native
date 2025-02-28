import { Stack } from "expo-router";
import useTheme from "../../../hooks/useTheme";

export default function ProductLayout() {
  const { activeColors } = useTheme();
  
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: activeColors.background
        }
      }}
    >
      <Stack.Screen name="index" />
       <Stack.Screen name="[id]" />
    </Stack>
  );
 }