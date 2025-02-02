import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../../hooks/useTheme';

const TabsLayout = () => {
  const { colors, isDark, activeColors } = useTheme();

  // Create dynamic styles based on theme
  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: activeColors.background,
    },
  });

  return (
    <SafeAreaView edges={['bottom']} style={dynamicStyles.container}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
            backgroundColor: activeColors.background,
            borderTopWidth: 1,
            borderTopColor: activeColors.border,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 8,
            shadowColor: activeColors.text,
            shadowOffset: {
              width: 0,
              height: -4,
            },
            shadowOpacity: 0.05,
            shadowRadius: 8,
          },
          tabBarActiveTintColor: colors.primary[500],
          tabBarInactiveTintColor: isDark ? colors.text.secondary : colors.text.tertiary,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
            marginTop: 4,
          },
          tabBarIconStyle: {
            marginTop: 4,
          },
          tabBarItemStyle: {
            paddingTop: 8,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />
        
        <Tabs.Screen
          name="orders"
          options={{
            title: 'Orders',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cart" size={24} color={color} />
            ),
          }}
        />
        
        <Tabs.Screen
          name="notifications"
          options={{
            title: 'Alerts',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="notifications" size={24} color={color} />
            ),
          }}
        />
        
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;