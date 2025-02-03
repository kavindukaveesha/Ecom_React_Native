// screens/ProductsScreen.tsx
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import { Ionicons } from '@expo/vector-icons'
import { CATEGORIES } from '../../../assets/categories'
import { PRODUCTS } from '../../../assets/products'
import BannerSlider from '../../components/header-banner'
import ProductCard from '../../components/product-card'
import CustomHeader from '../../components/custom-header'

export default function ProductsScreen() {
 const [selectedCategory, setSelectedCategory] = useState('all')
 const [page, setPage] = useState(1)
 const itemsPerPage = 6

 const filteredProducts = selectedCategory === 'all' 
   ? PRODUCTS 
   : PRODUCTS.filter(p => p.category.slug === selectedCategory)

 const paginatedProducts = filteredProducts.slice(
   (page - 1) * itemsPerPage,
   page * itemsPerPage
 )

 return (
   <View style={styles.container}>
    <CustomHeader/>

     <BannerSlider />

  

     {/* Categories Filter */}
     <View style={styles.filterContainer}>
       <ScrollView 
         horizontal 
         showsHorizontalScrollIndicator={false}
         contentContainerStyle={styles.filterScroll}
       >
         <TouchableOpacity 
           style={[
             styles.filterChip,
             selectedCategory === 'all' && styles.filterChipActive
           ]}
           onPress={() => setSelectedCategory('all')}
         >
           <Text style={[
             styles.filterText,
             selectedCategory === 'all' && styles.filterTextActive
           ]}>All</Text>
         </TouchableOpacity>

         {CATEGORIES.map(category => (
           <TouchableOpacity
             key={category.slug}
             style={[
               styles.filterChip,
               selectedCategory === category.slug && styles.filterChipActive
             ]}
             onPress={() => setSelectedCategory(category.slug)}
           >
             <Text style={[
               styles.filterText,
               selectedCategory === category.slug && styles.filterTextActive
             ]}>{category.name}</Text>
           </TouchableOpacity>
         ))}
       </ScrollView>
     </View>

     {/* Products Grid */}
     <FlatList
       data={paginatedProducts}
       renderItem={({item}) => <ProductCard product={item} />}
       keyExtractor={item => item.id.toString()}
       numColumns={2}
       columnWrapperStyle={styles.productRow}
       contentContainerStyle={styles.productsContainer}
       ListEmptyComponent={
         <Text style={styles.emptyText}>No products found</Text>
       }
       ListFooterComponent={
         filteredProducts.length > itemsPerPage ? (
           <View style={styles.pagination}>
             <TouchableOpacity 
               style={[styles.pageButton, page === 1 && styles.pageButtonDisabled]}
               onPress={() => setPage(p => Math.max(1, p - 1))}
               disabled={page === 1}
             >
               <Ionicons name="chevron-back" size={20} color={page === 1 ? "#9CA3AF" : "#111827"} />
             </TouchableOpacity>

             {[...Array(Math.ceil(filteredProducts.length / itemsPerPage))].map((_, i) => (
               <TouchableOpacity
                 key={i}
                 style={[styles.pageButton, page === i + 1 && styles.pageButtonActive]}
                 onPress={() => setPage(i + 1)}
               >
                 <Text style={[
                   styles.pageButtonText,
                   page === i + 1 && styles.pageButtonTextActive
                 ]}>{i + 1}</Text>
               </TouchableOpacity>
             ))}

             <TouchableOpacity
               style={[
                 styles.pageButton, 
                 page === Math.ceil(filteredProducts.length / itemsPerPage) && styles.pageButtonDisabled
               ]}
               onPress={() => setPage(p => Math.min(Math.ceil(filteredProducts.length / itemsPerPage), p + 1))}
               disabled={page === Math.ceil(filteredProducts.length / itemsPerPage)}
             >
               <Ionicons name="chevron-forward" size={20} color={
                 page === Math.ceil(filteredProducts.length / itemsPerPage) ? "#9CA3AF" : "#111827"
               } />
             </TouchableOpacity>
           </View>
         ) : null
       }
     />
   </View>
 )
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   marginTop:40,
 },
 filterContainer: {
   paddingVertical: 12,
   borderBottomWidth: 1,
   borderBottomColor: '#E5E7EB',
   marginTop: 16
 },
 filterScroll: {
   paddingHorizontal: 16,
   gap: 8
 },
 filterChip: {
   paddingHorizontal: 16,
   paddingVertical: 8,
   borderRadius: 20,
   backgroundColor: '#F3F4F6'
 },
 filterChipActive: {
   backgroundColor: '#16a34a'
 },
 filterText: {
   fontSize: 14,
   color: '#6B7280'
 },
 filterTextActive: {
   color: '#fff',
   fontWeight: '500'
 },
 productsContainer: {
   padding: 16
 },
 productRow: {
   justifyContent: 'space-between',
   marginBottom: 16
 },
 emptyText: {
   textAlign: 'center',
   color: '#6B7280',
   marginTop: 24
 },
 pagination: {
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   gap: 8,
   marginTop: 16,
   marginBottom: 32
 },
 pageButton: {
   width: 36,
   height: 36,
   borderRadius: 18,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F3F4F6'
 },
 pageButtonActive: {
   backgroundColor: '#16a34a'
 },
 pageButtonDisabled: {
   opacity: 0.5
 },
 pageButtonText: {
   fontSize: 14,
   color: '#111827'
 },
 pageButtonTextActive: {
   color: '#fff',
   fontWeight: '500'
 }
})