import { Tabs } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CategoriesLayout=() => {
    return(
      <Tabs>
        <Tabs.Screen
          name='[slug]'
          options={({navigation})=>({ 
            headerShown: true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            )
            
          })}
        />
    
      </Tabs>
    );
};
export default CategoriesLayout;