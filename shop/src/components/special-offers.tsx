// components/special-offers.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const offers = [
 {
   id: '1',
   title: 'MacBook Pro',
   description: '25% Student Discount',
   icon: 'laptop-outline',
   link: '/products/macbook-pro',
   borderColor: '#22c55e'
 },
 {
   id: '2',
   title: 'Gaming Deal', 
   description: '50% Off PS5 Games',
   icon: 'game-controller-outline',
   link: '/categories/gaming',
   borderColor: '#22c55e'
 },
 {
   id: '3',
   title: 'Apple Bundle',
   description: 'iPhone + AirPods Pro',
   icon: 'phone-portrait-outline',
   link: '/products/iphone-bundle',
   borderColor: '#22c55e'
 }
];

const { width } = Dimensions.get('window');

const SpecialOffers = () => {
 const [activeIndex, setActiveIndex] = useState(0);

 const renderOffer = ({ item }: { item: typeof offers[0] }) => (
   <Link href={item.link} asChild>
     <TouchableOpacity activeOpacity={0.8}>
       <View style={[styles.offerContainer, { borderColor: item.borderColor }]}>
         <View style={styles.iconContainer}>
           <Ionicons 
             name={item.icon as any} 
             size={24} 
             color="#16a34a"
           />
         </View>
         <View style={styles.textContainer}>
           <Text style={styles.title}>{item.title}</Text>
           <Text style={styles.description}>{item.description}</Text>
         </View>
         <Ionicons name="chevron-forward" size={20} color="#16a34a" />
       </View>
     </TouchableOpacity>
   </Link>
 );

 const renderDots = () => (
   <View style={styles.pagination}>
     {offers.map((_, i) => (
       <View
         key={i}
         style={[
           styles.dot,
           { 
             backgroundColor: i === activeIndex ? '#16a34a' : 'transparent'
           }
         ]}
       />
     ))}
   </View>
 );

 return (
   <View style={styles.container}>
     <View style={styles.header}>
       <Text style={styles.headerTitle}>Special Offers</Text>
       <TouchableOpacity>
         <Text style={styles.seeAll}>See All</Text>
       </TouchableOpacity>
     </View>
     <FlatList
       data={offers}
       renderItem={renderOffer}
       horizontal
       pagingEnabled
       showsHorizontalScrollIndicator={false}
       onScroll={e => {
         const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
         setActiveIndex(newIndex);
       }}
       keyExtractor={item => item.id}
       contentContainerStyle={styles.listContainer}
     />
     {renderDots()}
   </View>
 );
};

const styles = StyleSheet.create({
 container: {
   marginVertical: 16,
 },
 header: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   paddingHorizontal: 16,
   marginBottom: 12,
 },
 headerTitle: {
   fontSize: 18,
   fontWeight: '600',
   color: '#111827',
 },
 seeAll: {
   fontSize: 14,
   color: '#16a34a',
   fontWeight: '500',
 },
 listContainer: {
   paddingVertical: 8,
 },
 offerContainer: {
   width: width - 32,
   height: 100,
   marginHorizontal: 16,
   borderRadius: 16,
   borderWidth: 1.5,
   padding: 16,
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: '#fff',
   shadowColor: '#000',
   shadowOffset: {
     width: 0,
     height: 4,
   },
   shadowOpacity: 0.1,
   shadowRadius: 12,
   elevation: 5,
 },
 iconContainer: {
   width: 48,
   height: 48,
   borderRadius: 24,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#dcfce7',
   borderWidth: 1.5,
   borderColor: '#22c55e',
 },
 textContainer: {
   flex: 1,
   marginLeft: 16,
   marginRight: 8,
 },
 title: {
   fontSize: 18,
   fontWeight: '700',
   color: '#16a34a',
   marginBottom: 4,
 },
 description: {
   fontSize: 14,
   color: '#374151',
 },
 pagination: {
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: 12,
 },
 dot: {
   width: 6,
   height: 6,
   borderRadius: 3,
   marginHorizontal: 4,
   borderWidth: 1,
   borderColor: '#22c55e',
 },
});

export default SpecialOffers;