import { Tabs } from "expo-router";

const OrdersLayout=() => {
    return(
      <Tabs>
        <Tabs.Screen
          name='index'
          options={{ headerShown: false, title: 'Orders' }}
        />
        {/* <Tabs.Screen
          name='orders'
          options={{ headerShown: false, title: 'Categories' }}
        /> */}
        
      </Tabs>
    );
};
export default OrdersLayout;