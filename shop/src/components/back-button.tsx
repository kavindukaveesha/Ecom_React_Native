import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function BackButton() {
 const router = useRouter();
 
 return (
   <TouchableOpacity 
     onPress={() => router.back()}
     style={styles.button}
   >
     <Ionicons name="arrow-back" size={24} color="#111827" />
   </TouchableOpacity>
 );
}

const styles = StyleSheet.create({
 button: {
   marginLeft: 16,
   backgroundColor: 'rgba(255,255,255,0.8)',
   padding: 8,
   borderRadius: 20
 }
});
