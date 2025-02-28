import { Tabs } from "expo-router";

const ProfileLayout=() => {
    return(
      <Tabs>
        <Tabs.Screen
          name='index'
          options={{ headerShown: false, title: 'Profile' }}
        />
        {/* <Tabs.Screen
          name='orders'
          options={{ headerShown: false, title: 'Categories' }}
        /> */}
        
      </Tabs>
    );
};
export default ProfileLayout;