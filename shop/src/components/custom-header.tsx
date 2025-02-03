// components/app-header.tsx
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function CustomHeader() {
 const router = useRouter();

 return (
   <View style={styles.header}>
     <TouchableOpacity 
       onPress={() => router.back()}
       style={styles.backButton}
     >
       <Ionicons name="arrow-back" size={24} color="#16a34a" />
     </TouchableOpacity>

     <View style={styles.rightIcons}>
       <TouchableOpacity 
         style={styles.iconButton}
         onPress={() => router.push('/search')}
       >
         <Ionicons name="search" size={24} color="#111827" />
       </TouchableOpacity>
       
       <TouchableOpacity 
         style={styles.iconButton}
         onPress={() => router.push('/cart')} 
       >
         <Ionicons name="cart-outline" size={24} color="#111827" />
         <View style={styles.badge}>
           <Text style={styles.badgeText}>2</Text>
         </View>
       </TouchableOpacity>
     </View>
   </View>
 );
}

const styles = StyleSheet.create({
 header: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: 16,
 },
 backButton: {
   backgroundColor: '#dcfce7',
   padding: 8,
   borderRadius: 20,
 },
 rightIcons: {
   flexDirection: 'row',
   gap: 16,
   alignItems: 'center',
 },
 iconButton: {
   position: 'relative',
 },
 badge: {
   position: 'absolute',
   top: -6,
   right: -6,
   backgroundColor: '#16a34a',
   borderRadius: 10,
   width: 18,
   height: 18,
   justifyContent: 'center',
   alignItems: 'center',
 },
 badgeText: {
   color: 'white',
   fontSize: 10,
   fontWeight: 'bold',
 }
});