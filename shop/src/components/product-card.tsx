// components/ProductCard.tsx
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../constant/theme'
import { Product } from '../../assets/types/product'

type Props = {
 readonly product: Product
}

export default function ProductCard({ product }: Props) {
 return (
   <Link href={`/products/${product.id}`} asChild>
     <TouchableOpacity style={styles.card}>
       <Image
         source={product.heroImage}
         style={styles.image}
         resizeMode="cover"
       />
       
       <View style={styles.details}>
         <Text 
           style={styles.title}
           numberOfLines={2}
         >
           {product.title}
         </Text>
         
         <View style={styles.ratingRow}>
           <Ionicons name="star" size={14} color="#FFD700" />
           <Text style={styles.rating}>{product.rating}</Text>
         </View>
         
         <Text style={[styles.price, { color: colors.primary[500] }]}>
           ${product.price.toLocaleString()}
         </Text>
       </View>
     </TouchableOpacity>
   </Link>
 )
}

const styles = StyleSheet.create({
 card: {
   backgroundColor: 'white',
   borderRadius: 12,
   width: '48%',
   shadowColor: '#000',
   shadowOffset: {width: 0, height: 2},
   shadowOpacity: 0.1,
   shadowRadius: 4,
   elevation: 3,
   marginBottom:20
 },
 image: {
   width: '100%',
   height: 160,
   borderTopLeftRadius: 12,
   borderTopRightRadius: 12,
 },
 details: {
   padding: 12,
 },
 title: {
   fontSize: 14,
   fontWeight: '500',
   color: '#111827',
   height: 40,
 },
 ratingRow: {
   flexDirection: 'row',
   alignItems: 'center',
   marginTop: 4,
 },
 rating: {
   fontSize: 12,
   color: '#6B7280',
   marginLeft: 4,
 },
 price: {
   fontSize: 16,
   fontWeight: '600',
   marginTop: 8,
 }
})