// components/ProductList.tsx
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { Product } from '../../assets/types/product';
import { colors } from '../constant/theme';
import { Ionicons } from '@expo/vector-icons';

interface Props {
 title?: string;
 products: Product[];
 onSeeAll?: () => void;
}

export const ProductList = ({ title = "Popular Products", products, onSeeAll }: Props) => {
 // Render single product item
 const renderProductItem = (product: Product) => (
   <Link 
     href={`/product/${product.id}`} 
     key={product.id} 
     asChild
   >
     <TouchableOpacity style={styles.productCard}>
       {/* Product Image */}
       <Image
         source={product.heroImage}
         style={styles.productImage}
         resizeMode="cover"
       />
       
       {/* Product Details */}
       <View style={styles.productDetails}>
         <Text 
           style={styles.productName}
           numberOfLines={2}
         >
           {product.title}
         </Text>
         
         {/* Rating */}
         <View style={styles.ratingContainer}>
           <Ionicons name="star" size={14} color="#FFD700" />
           <Text style={styles.ratingText}>{product.rating}</Text>
         </View>
         
         {/* Price */}
         <Text style={[styles.productPrice, { color: colors.primary[500] }]}>
           ${product.price.toLocaleString()}
         </Text>
       </View>
     </TouchableOpacity>
   </Link>
 );

 return (
   <View style={styles.productsContainer}>
     {/* Section Header */}
     <View style={styles.sectionHeader}>
       <Text style={styles.sectionTitle}>{title}</Text>
       {onSeeAll && (
         <TouchableOpacity onPress={onSeeAll}>
           <Text style={[styles.seeAllText, { color: colors.primary[500] }]}>
             See All
           </Text>
         </TouchableOpacity>
       )}
     </View>

     {/* Products Grid */}
     <View style={styles.productsGrid}>
       {products.map(renderProductItem)}
     </View>
   </View>
 );
};

const styles = StyleSheet.create({
 productsContainer: {
   marginTop: 24,
 },
 sectionHeader: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   paddingHorizontal: 16,
   marginBottom: 12,
 },
 sectionTitle: {
   fontSize: 18,
   fontWeight: '600',
   color: '#111827',
 },
 seeAllText: {
   fontSize: 14,
   fontWeight: '500',
 },
 productsGrid: {
   flexDirection: 'row',
   flexWrap: 'wrap',
   justifyContent: 'space-between',
   paddingHorizontal: 16,
 },
 productCard: {
   backgroundColor: 'white',
   borderRadius: 12,
   marginBottom: 16,
   width: '48%',
   shadowColor: '#000',
   shadowOffset: {
     width: 0,
     height: 2,
   },
   shadowOpacity: 0.1,
   shadowRadius: 4,
   elevation: 3,
 },
 productImage: {
   width: '100%',
   height: 160,
   borderTopLeftRadius: 12,
   borderTopRightRadius: 12,
 },
 productDetails: {
   padding: 12,
 },
 productName: {
   fontSize: 14,
   fontWeight: '500',
   color: '#111827',
   height: 40, // Fixed height for 2 lines
 },
 ratingContainer: {
   flexDirection: 'row',
   alignItems: 'center',
   marginTop: 4,
 },
 ratingText: {
   fontSize: 12,
   color: '#6B7280',
   marginLeft: 4,
 },
 productPrice: {
   fontSize: 16,
   fontWeight: '600',
   marginTop: 8,
 },
});