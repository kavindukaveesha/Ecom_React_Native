import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function NotFoundScreen() {
  const router = useRouter();
 return (
   <View style={styles.container}>
     <Stack.Screen options={{ headerShown: false }} />
     
     <View style={styles.content}>
       <View style={styles.iconContainer}>
         <Ionicons name="alert-circle-outline" size={120} color="#22c55e" />
       </View>
       
       <Text style={styles.title}>Page Not Found</Text>
       <Text style={styles.description}>
         The page you're looking for doesn't exist or has been moved.
       </Text>

         <TouchableOpacity 
          onPress={() => router.back()}
         style={styles.button}>
           <Ionicons name="home-outline" size={24} color="#fff" />
           <Text style={styles.buttonText}>Back to Home</Text>
         </TouchableOpacity>
     </View>
   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#ffffff',
 },
 content: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   padding: 24,
 },
 iconContainer: {
   marginBottom: 24,
 },
 title: {
   fontSize: 28,
   fontWeight: '700',
   color: '#111827',
   marginBottom: 12,
 },
 description: {
   fontSize: 16,
   color: '#6b7280',
   textAlign: 'center',
   marginBottom: 32,
 },
 button: {
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: '#22c55e',
   paddingVertical: 12,
   paddingHorizontal: 24,
   borderRadius: 12,
   gap: 8,
 },
 buttonText: {
   fontSize: 16,
   fontWeight: '600',
   color: '#fff',
 },
});