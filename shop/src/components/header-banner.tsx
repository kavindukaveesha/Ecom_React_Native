import { View, Image, StyleSheet, Dimensions, FlatList } from 'react-native'
import React, { useRef, useEffect } from 'react'

const banners = [
 require('../../assets/images/hero.png'),
 require('../../assets/images/hero1.jpg'), 
 require('../../assets/images/hero2.jpg'),
]

const BannerSlider = () => {
const flatListRef = useRef<FlatList>(null)
 const screenWidth = Dimensions.get('window').width

useEffect(() => {
  // Declare and initialize currentIndex variable
  let currentIndex = 0;
  const timer = setInterval(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: (currentIndex + 1) % banners.length,
        animated: true
      })
      currentIndex = (currentIndex + 1) % banners.length; // Update currentIndex
    }
  }, 3000)
  return () => clearInterval(timer)
}, [])

const renderItem = ({ item }: { item: any }) => (
   <View style={[styles.heroContainer, { width: screenWidth }]}>
     <Image source={item} style={styles.heroImage} />
   </View>
 )

 return (
   <FlatList
     ref={flatListRef}
     data={banners}
     renderItem={renderItem}
     horizontal
     pagingEnabled
     showsHorizontalScrollIndicator={false}
     keyExtractor={(_, index) => index.toString()}
   />
 )
}

const styles = StyleSheet.create({
 heroContainer: {
   height: 200,
   padding:15,
   borderRadius: 10,
   boxShadow: '0 0 10px rgba(0,0,0,0.1)',
 },
 heroImage: {
   width: '100%',
   height: '100%',
   resizeMode: 'cover',
   borderRadius: 10,
 }
})

export default BannerSlider