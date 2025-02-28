// app/product/[id].tsx
import { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { PRODUCTS } from '../../../../assets/products';
import CustomHeader from '../../../components/custom-header';

export default function ProductDetails() {
 const { id } = useLocalSearchParams();
 const [quantity, setQuantity] = useState(1);
 const [activeImageIndex, setActiveImageIndex] = useState(0);
 
 const product = PRODUCTS.find(p => p.id === Number(id));
 if (!product) return null;

 const handleQuantityChange = (increment: boolean) => {
   if (increment && quantity < product.maxQuantity) {
     setQuantity(prev => prev + 1);
   } else if (!increment && quantity > 1) {
     setQuantity(prev => prev - 1);
   }
 };

 return (
   <>
    <Stack.Screen options={{ 
      title: product.title,
      headerTransparent: true,
      headerTintColor: '#000',
      
    }}/>

     <ScrollView style={styles.container}>
     <View style={styles.headerOverlay}>
          <CustomHeader />
        </View>
       {/* Image Carousel */}
       <ScrollView
         horizontal
         pagingEnabled
         showsHorizontalScrollIndicator={false}
         onScroll={e => {
           const offset = e.nativeEvent.contentOffset.x;
           setActiveImageIndex(Math.round(offset / width));
         }}
         scrollEventThrottle={16}
       >
         {product.imagesUrl.map((image, index) => (
           <View key={index} style={styles.imageContainer}>
             <Image source={image} style={styles.image} resizeMode="cover"/>
           </View>
         ))}
       </ScrollView>

       {/* Image Pagination */}
       <View style={styles.pagination}>
         {product.imagesUrl.map((_, index) => (
           <View
             key={index}
             style={[
               styles.paginationDot,
               activeImageIndex === index && styles.paginationDotActive
             ]}
           />
         ))}
       </View>

       <View style={styles.contentContainer}>
         {/* Header Info */}
         <View style={styles.header}>
           <Text style={styles.title}>{product.title}</Text>
           <Text style={styles.price}>${product.price.toLocaleString()}</Text>
           
           <View style={styles.ratingRow}>
             <View style={styles.rating}>
               <Ionicons name="star" size={18} color="#FFD700" />
               <Text style={styles.ratingText}>{product.rating}</Text>
             </View>
             <Text style={styles.stock}>
               {product.maxQuantity > 0 ? `In Stock (${product.maxQuantity})` : 'Out of Stock'}
             </Text>
           </View>
         </View>

         {/* Offers */}
         <View style={styles.offerContainer}>
           {product.maxQuantity > 0 && (
             <View style={styles.offer}>
               <Ionicons name="flash" size={18} color="#16a34a"/>
               <Text style={styles.offerText}>Special Discount 10% Off</Text>
             </View>
           )}
           <View style={styles.offer}>
             <Ionicons name="shield-checkmark" size={18} color="#16a34a"/>
             <Text style={styles.offerText}>1 Year Warranty</Text>
           </View>
         </View>

         {/* Quantity Selector */}
         <View style={styles.quantityContainer}>
           <Text style={styles.sectionTitle}>Quantity</Text>
           <View style={styles.quantityControls}>
             <TouchableOpacity 
               onPress={() => handleQuantityChange(false)}
               style={[styles.quantityButton, quantity <= 1 && styles.quantityButtonDisabled]}
               disabled={quantity <= 1}
             >
               <Ionicons name="remove" size={20} color={quantity <= 1 ? "#9CA3AF" : "#111827"}/>
             </TouchableOpacity>
             
             <Text style={styles.quantityText}>{quantity}</Text>
             
             <TouchableOpacity 
               onPress={() => handleQuantityChange(true)}
               style={[styles.quantityButton, quantity >= product.maxQuantity && styles.quantityButtonDisabled]}
               disabled={quantity >= product.maxQuantity}
             >
               <Ionicons name="add" size={20} color={quantity >= product.maxQuantity ? "#9CA3AF" : "#111827"}/>
             </TouchableOpacity>
           </View>
         </View>

         {/* Description */}
         <View style={styles.section}>
           <Text style={styles.sectionTitle}>Description</Text>
           <Text style={styles.description}>{product.description}</Text>
         </View>

         {/* Specifications */}
         <View style={styles.section}>
           <Text style={styles.sectionTitle}>Specifications</Text>
           {product.specifications.map((spec, index) => (
             <View key={index} style={styles.specRow}>
               <Text style={styles.specLabel}>{spec.label}</Text>
               <Text style={styles.specValue}>{spec.value}</Text>
             </View>
           ))}
         </View>

         {/* Reviews */}
         <View style={styles.section}>
           <View style={styles.reviewHeader}>
             <Text style={styles.sectionTitle}>Reviews</Text>
             <Text style={styles.reviewCount}>({product.reviews.length})</Text>
           </View>
           
           {product.reviews.map((review, index) => (
             <View key={index} style={styles.reviewCard}>
               <View style={styles.reviewTop}>
                 <Text style={styles.reviewUser}>{review.user}</Text>
                 <Text style={styles.reviewDate}>{review.date}</Text>
               </View>
               
               <View style={styles.reviewRating}>
                 {[...Array(5)].map((_, i) => (
                   <Ionicons
                     key={i}
                     name="star"
                     size={14}
                     color={i < review.rating ? "#FFD700" : "#E5E7EB"}
                   />
                 ))}
               </View>
               
               <Text style={styles.reviewText}>{review.comment}</Text>
             </View>
           ))}
         </View>
       </View>
     </ScrollView>

     {/* Bottom Buttons */}
     <View style={styles.bottomBar}>
       <TouchableOpacity style={[styles.button, styles.cartButton]}>
         <Ionicons name="cart-outline" size={20} color="#16a34a"/>
         <Text style={styles.cartButtonText}>Add to Cart</Text>
       </TouchableOpacity>

       <TouchableOpacity style={[styles.button, styles.buyButton]}>
         <Text style={styles.buyButtonText}>Buy Now</Text>
       </TouchableOpacity>
     </View>
   </>
 );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   marginTop:40,
 },
 headerOverlay: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,
  paddingTop: 20,
  paddingHorizontal: 16,
},
 imageContainer: {
   width: width,
   height: width,
 },
 image: {
   width: '100%',
   height: '100%',
 },
 pagination: {
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   paddingVertical: 16,
 },
 paginationDot: {
   width: 8,
   height: 8,
   borderRadius: 4,
   backgroundColor: '#E5E7EB',
   marginHorizontal: 4,
 },
 paginationDotActive: {
   backgroundColor: '#16a34a',
 },
 contentContainer: {
   padding: 16,
 },
 header: {
   marginBottom: 16,
 },
 title: {
   fontSize: 24,
   fontWeight: '600',
   color: '#111827',
   marginBottom: 8,
 },
 price: {
   fontSize: 28,
   fontWeight: '700',
   color: '#16a34a',
   marginBottom: 8,
 },
 ratingRow: {
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between',
 },
 rating: {
   flexDirection: 'row',
   alignItems: 'center',
   gap: 4,
 },
 ratingText: {
   fontSize: 16,
   color: '#111827',
 },
 stock: {
   fontSize: 14,
   color: '#6B7280',
 },
 offerContainer: {
   marginBottom: 24,
 },
 offer: {
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: '#dcfce7',
   paddingHorizontal: 12,
   paddingVertical: 8,
   borderRadius: 8,
   marginBottom: 8,
 },
 offerText: {
   marginLeft: 8,
   color: '#16a34a',
   fontWeight: '500',
 },
 quantityContainer: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   backgroundColor: '#F3F4F6',
   padding: 16,
   borderRadius: 12,
   marginBottom: 24,
 },
 quantityControls: {
   flexDirection: 'row',
   alignItems: 'center',
   gap: 16,
 },
 quantityButton: {
   width: 36,
   height: 36,
   borderRadius: 18,
   backgroundColor: '#FFFFFF',
   justifyContent: 'center',
   alignItems: 'center',
 },
 quantityButtonDisabled: {
   opacity: 0.5,
 },
 quantityText: {
   fontSize: 16,
   fontWeight: '600',
   color: '#111827',
 },
 section: {
   marginBottom: 24,
 },
 sectionTitle: {
   fontSize: 18,
   fontWeight: '600',
   color: '#111827',
   marginBottom: 12,
 },
 description: {
   fontSize: 15,
   color: '#4B5563',
   lineHeight: 22,
 },
 specRow: {
   flexDirection: 'row',
   paddingVertical: 12,
   borderBottomWidth: 1,
   borderBottomColor: '#E5E7EB',
 },
 specLabel: {
   flex: 1,
   fontSize: 14,
   color: '#6B7280',
 },
 specValue: {
   flex: 2,
   fontSize: 14,
   color: '#111827',
 },
 reviewHeader: {
   flexDirection: 'row',
   alignItems: 'center',
   gap: 8,
 },
 reviewCount: {
   color: '#6B7280',
   fontSize: 14,
 },
 reviewCard: {
   paddingVertical: 12,
   borderBottomWidth: 1,
   borderBottomColor: '#E5E7EB',
 },
 reviewTop: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginBottom: 4,
 },
 reviewUser: {
   fontSize: 14,
   fontWeight: '600',
   color: '#111827',
 },
 reviewDate: {
   fontSize: 12,
   color: '#6B7280',
 },
 reviewRating: {
   flexDirection: 'row',
   gap: 2,
   marginBottom: 8,
 },
 reviewText: {
   fontSize: 14,
   color: '#4B5563',
   lineHeight: 20,
 },
 bottomBar: {
   flexDirection: 'row',
   padding: 16,
   paddingBottom: 32,
   borderTopWidth: 1,
   borderTopColor: '#E5E7EB',
   backgroundColor: '#FFFFFF',
 },
 button: {
   flex: 1,
   height: 48,
   borderRadius: 24,
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'row',
   gap: 8,
 },
 cartButton: {
   backgroundColor: '#dcfce7',
   marginRight: 8,
 },
 cartButtonText: {
   fontSize: 16,
   fontWeight: '600',
   color: '#16a34a',
 },
 buyButton: {
   backgroundColor: '#16a34a',
   marginLeft: 8,
 },
 buyButtonText: {
   fontSize: 16,
   fontWeight: '600',
   color: '#FFFFFF',
 },
});