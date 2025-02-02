// components/categories-list.tsx
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../constant/theme'
import { CATEGORIES } from '../../assets/categories'
import { Link } from 'expo-router'

const CategoriesList = () => {
 const truncateName = (name: string) => {
   return name.length > 15 ? name.substring(0, 10) + '...' : name
 }

 return (
   <View style={styles.categoriesContainer}>
     <View style={styles.sectionHeader}>
       <Text style={styles.sectionTitle}>Categories</Text>
       <Link href="/categories" asChild>
         <TouchableOpacity>
           <Text style={[styles.seeAllText, { color: colors.primary[500] }]}>See All</Text>
         </TouchableOpacity>
       </Link>
     </View>
     <ScrollView
       horizontal
       showsHorizontalScrollIndicator={false} 
       style={styles.categoryScrollView}
     >
       {CATEGORIES.map((category) => (
         <Link 
           href={`/categories/${category.slug}`}
           key={category.id}
           asChild
         >
           <TouchableOpacity style={styles.categoryItem}>
            <Ionicons name={category.icon as any} size={24} color={colors.primary[500]} />
             <Text style={styles.categoryText}>{truncateName(category.name)}</Text>
           </TouchableOpacity>
         </Link>
       ))}
     </ScrollView>
   </View>
 )
}

export default CategoriesList


const styles = StyleSheet.create({
  categoriesContainer: {
    marginTop: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
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
  categoryScrollView: {
    marginTop: 12,
    paddingLeft: 8,
  },
  categoryItem: {
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 8,
    width: 80,
  },
  categoryText: {
    fontSize: 10,
    color: '#4B5563',
    marginTop: 8,
    width: 60,
    textAlign: 'center',
    lineHeight: 16,
  },})



