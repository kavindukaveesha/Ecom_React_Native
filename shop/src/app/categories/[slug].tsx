import { Redirect, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { CATEGORIES } from '../../../assets/categories';
import ProductCard from '../../components/product-card';
import CustomHeader from '../../components/custom-header';

const CategoryPage = () => {
  const { slug } = useLocalSearchParams();
  const category = CATEGORIES.find((cat) => cat.slug === slug);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  if (!category) return <Redirect href="/404"/>;

  const paginatedProducts = category.products.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerImage}>
        <Image source={category.imageUrl} style={styles.bannerImage} />
        <View style={styles.headerOverlay}>
          <CustomHeader />
        </View>
      </View>

      <View style={styles.contentContainer}>
        {category.products.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="cube-outline" size={48} color="#9CA3AF"/>
            <Text style={styles.emptyText}>No products available in this category</Text>
          </View>
        ) : (
          <FlatList
            data={paginatedProducts}
            ListHeaderComponent={() => (
              <View style={styles.content}>
                <Text style={styles.sectionTitle}>{category.name} Products</Text>
              </View>
            )}
            renderItem={({item}) => <ProductCard product={item} />}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.productRow}
            contentContainerStyle={styles.productsContainer}
            ListFooterComponent={
              category.products.length > itemsPerPage ? (
                <View style={styles.pagination}>
                  <TouchableOpacity 
                    style={[styles.pageButton, page === 1 && styles.pageButtonDisabled]}
                    onPress={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                  >
                    <Ionicons name="chevron-back" size={20} color={page === 1 ? "#9CA3AF" : "#111827"} />
                  </TouchableOpacity>

                  {[...Array(Math.ceil(category.products.length / itemsPerPage))].map((_, i) => (
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
                      page === Math.ceil(category.products.length / itemsPerPage) && styles.pageButtonDisabled
                    ]}
                    onPress={() => setPage(p => Math.min(Math.ceil(category.products.length / itemsPerPage), p + 1))}
                    disabled={page === Math.ceil(category.products.length / itemsPerPage)}
                  >
                    <Ionicons name="chevron-forward" size={20} color={
                      page === Math.ceil(category.products.length / itemsPerPage) ? "#9CA3AF" : "#111827"
                    } />
                  </TouchableOpacity>
                </View>
              ) : null
            }
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImage: {
    height: 350,
    position: 'relative',
    top: 40,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  headerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  contentContainer: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  productsContainer: {
    padding: 16,
  },
  productRow: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  emptyText: {
    marginTop: 12,
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginVertical: 24,
  },
  pageButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
  },
  pageButtonActive: {
    backgroundColor: '#16a34a',
  },
  pageButtonDisabled: {
    opacity: 0.5,
  },
  pageButtonText: {
    fontSize: 14,
    color: '#111827',
  },
  pageButtonTextActive: {
    color: '#fff',
    fontWeight: '500',
  },
});

export default CategoryPage;