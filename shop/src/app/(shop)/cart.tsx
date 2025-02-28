// screens/CartScreen.tsx
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  TouchableOpacity, 
  Image,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomHeader from '../../components/custom-header'

// Sample cart data (you'll replace this with your actual cart state)
const initialCartItems = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 79.99,
    image: require('../../../assets/images/dell-1.jpg'),
    quantity: 1,
  },
  {
    id: '2',
    name: 'Smart Watch with Fitness Tracker',
    price: 129.99,
    image: require('../../../assets/images/i-phone-1.jpg'),
    quantity: 2,
  },
  {
    id: '4',
    name: 'USB-C Fast Charging Cable',
    price: 14.99,
    image: require('../../../assets/images/ps-5-1.jpg'),
    quantity: 3,
  },
];

export default function CartScreen({ navigation }: { navigation: any }) {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  
  // Calculate cart totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const discount = promoApplied ? subtotal * 0.1 : 0; // 10% discount if promo applied
  const total = subtotal + shipping - discount;
  
  // Update item quantity
  const updateQuantity = (id: string, change: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change); // Ensure minimum quantity is 1
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };
  
  // Remove item from cart
  const removeItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  // Apply promo code
  const applyPromoCode = () => {
    // Simple validation - in a real app, you'd verify with your backend
    if (promoCode.toUpperCase() === 'SAVE10') {
      setPromoApplied(true);
    } else {
      // You could show an error message here
      setPromoApplied(false);
    }
  };
  
  // Render a cart item
  const renderCartItem = ({ item }: { item: any }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.productImage} />
      
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        
        <View style={styles.quantityContainer}>
          <TouchableOpacity 
            style={styles.quantityButton}
            onPress={() => updateQuantity(item.id, -1)}
          >
            <Ionicons name="remove" size={18} color="#16a34a" />
          </TouchableOpacity>
          
          <Text style={styles.quantityText}>{item.quantity}</Text>
          
          <TouchableOpacity 
            style={styles.quantityButton}
            onPress={() => updateQuantity(item.id, 1)}
          >
            <Ionicons name="add" size={18} color="#16a34a" />
          </TouchableOpacity>
        </View>
      </View>
      
      <TouchableOpacity 
        style={styles.removeButton}
        onPress={() => removeItem(item.id)}
      >
        <Ionicons name="trash-outline" size={22} color="#EF4444" />
      </TouchableOpacity>
    </View>
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      
      {cartItems.length === 0 ? (
        <View style={styles.emptyCart}>
          <Ionicons name="cart-outline" size={80} color="#D1D5DB" />
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
          <TouchableOpacity 
            style={styles.continueShoppingButton}
            onPress={() => navigation.navigate('Products')}
          >
            <Text style={styles.continueShoppingText}>Continue Shopping</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.cartList}
          ListFooterComponent={
            <View style={styles.cartFooter}>
              {/* Promo Code Section */}
              <View style={styles.promoSection}>
                <View style={styles.promoInputContainer}>
                  <Ionicons name="ticket-outline" size={20} color="#6B7280" style={styles.promoIcon} />
                  <Text style={styles.promoPlaceholder}>Add Promo Code</Text>
                </View>
                <TouchableOpacity 
                  style={styles.applyButton}
                  onPress={applyPromoCode}
                >
                  <Text style={styles.applyButtonText}>Apply</Text>
                </TouchableOpacity>
              </View>
              
              {/* Order Summary */}
              <View style={styles.summaryContainer}>
                <Text style={styles.summaryTitle}>Order Summary</Text>
                
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>Subtotal</Text>
                  <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
                </View>
                
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>Shipping</Text>
                  <Text style={styles.summaryValue}>${shipping.toFixed(2)}</Text>
                </View>
                
                {promoApplied && (
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Discount</Text>
                    <Text style={[styles.summaryValue, styles.discountText]}>-${discount.toFixed(2)}</Text>
                  </View>
                )}
                
                <View style={[styles.summaryRow, styles.totalRow]}>
                  <Text style={styles.totalLabel}>Total</Text>
                  <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
                </View>
              </View>
              
              {/* Checkout Button */}
              <TouchableOpacity 
                style={styles.checkoutButton}
                onPress={() => {
                  // Navigate to checkout or payment screen
                  // navigation.navigate('Checkout');
                }}
              >
                <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
              </TouchableOpacity>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cartList: {
    padding: 16,
  },
  cartItem: {
    flexDirection: 'row',
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#16a34a',
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 12,
  },
  removeButton: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#6B7280',
    marginTop: 16,
    marginBottom: 24,
  },
  continueShoppingButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#16a34a',
    borderRadius: 8,
  },
  continueShoppingText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  cartFooter: {
    marginTop: 16,
  },
  promoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  promoInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    marginRight: 12,
  },
  promoIcon: {
    marginRight: 8,
  },
  promoPlaceholder: {
    color: '#6B7280',
    fontSize: 14,
  },
  applyButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#16a34a',
    borderRadius: 8,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
  summaryContainer: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  discountText: {
    color: '#16a34a',
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#16a34a',
  },
  checkoutButton: {
    backgroundColor: '#16a34a',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});