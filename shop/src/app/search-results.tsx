import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/search-bar'
import { ProductListItem } from '../components/product-item-list'
import { Product } from '../../assets/types/product'

const SearchResults = () => {
 const { q } = useLocalSearchParams<{ q: string }>()
 const [results, setResults] = useState<Product[]>([])
 const [loading, setLoading] = useState(true)

 useEffect(() => {
   if (q) searchProducts(q)
 }, [q])

 const searchProducts = async (query: string) => {
   try {
     setLoading(true)
     // Replace with actual API call
     const response = await fetch(`your-api-endpoint?q=${query}`)
     const data = await response.json()
     setResults(data)
   } catch (error) {
     console.error('Search error:', error)
   } finally {
     setLoading(false)
   }
 }

 return (
   <View style={styles.container}>
     <SearchBar />
     {loading ? (
       <View style={styles.centerContent}>
         <Text>Loading...</Text>
       </View>
     ) : (
       <FlatList
         data={results}
         renderItem={({ item }) => <ProductListItem product={item} />}
         keyExtractor={item => item.id.toString()}
         numColumns={2}
         columnWrapperStyle={styles.productRow}
         contentContainerStyle={styles.listContent}
         ListEmptyComponent={
           <View style={styles.centerContent}>
             <Text style={styles.emptyText}>No results found for "{q}"</Text>
           </View>
         }
       />
     )}
   </View>
 )
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
 },
 productRow: {
   justifyContent: 'space-between',
   paddingHorizontal: 16,
 },
 listContent: {
   paddingTop: 16,
 },
 centerContent: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 },
 emptyText: {
   color: '#6B7280',
   fontSize: 16,
 },
})

export default SearchResults