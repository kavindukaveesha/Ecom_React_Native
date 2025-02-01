import { Tabs } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProductLayout=() => {
    return(
      <Tabs>
        <Tabs.Screen
          name='index'
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
export default ProductLayout;