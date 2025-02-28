import { Stack } from 'expo-router';


export default function RootLayout() {
  return (
   
              <Stack>
                <Stack.Screen
                  name='(shop)'
                  options={{ headerShown: false, title: 'Shop' }}
                />
                <Stack.Screen
                  name='categories'
                  options={{ headerShown: false, title: 'Categories' }}
                />
                <Stack.Screen
                  name='products'
                  options={{ headerShown: false, title: 'Product' }}
                />
                <Stack.Screen
                  name='cart'
                  options={{
                    presentation: 'modal',
                    title: 'Shopping Cart',
                  }}
                />
                 <Stack.Screen name='notifications' options={{ headerShown: false }} />

                 <Stack.Screen
                  name='search-results'
                 
                />
                <Stack.Screen name='auth' options={{ headerShown: false }} />
              </Stack>
           
  );
}