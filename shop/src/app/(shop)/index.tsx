import {ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PRODUCTS } from '../../../assets/products';
import TopNavBar from '../../components/top-navbar';
import SearchBar from '../../components/search-bar';
import BannerSlider from '../../components/header-banner';
import CategoriesList from '../../components/categories-list';
import SpecialOffers from '../../components/special-offers';
import { ProductList } from '../../components/product-item-list';
import { useRouter } from 'expo-router';


const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Top Navbar */}
        <TopNavBar cartItems={20} notifications={10}/>
        {/* End of Top Navbar */}

        {/* Searchbar */}
        <SearchBar/>
        {/* End of Searchbar */}

        {/* Header Banner */}
        <BannerSlider />
        {/* End of Header Banner */}

        {/* All Categories */}
        <CategoriesList/>

        {/* end of All Categories */}

        {/* Special Offers */}
        <SpecialOffers/>
         {/* Special Offers */}
        
        {/* Popular Products */}
        <ProductList title="Popular Products" products={PRODUCTS}  onSeeAll={() => router.push('/products')}/>
         {/* Popular Products */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
 
});

export default Home;