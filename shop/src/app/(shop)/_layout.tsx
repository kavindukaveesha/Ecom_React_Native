import { Tabs } from "expo-router";

const TabsLayout=() => {
    return(
      <Tabs>
        <Tabs.Screen
          name='index'
          options={{ headerShown: false, title: 'Home' }}
        />
        {/* <Tabs.Screen
          name='orders'
          options={{ headerShown: false, title: 'Categories' }}
        /> */}
        
      </Tabs>
    );
};
export default TabsLayout;