// screens/NotificationsScreen.tsx
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Modal,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomHeader from '../components/custom-header';

// Mock notification data
const initialNotifications = [
  {
    id: '1',
    title: 'Order Shipped',
    description: 'Your order #12345 has been shipped and will arrive in 2-3 business days.',
    time: '2h ago',
    isRead: false,
    type: 'order',
    details: {
      orderNumber: '#12345',
      trackingNumber: 'TRK789456123',
      estimatedDelivery: 'March 3, 2025',
      items: [
        { name: 'Wireless Headphones', quantity: 1 },
        { name: 'USB-C Cable', quantity: 2 }
      ]
    }
  },
  {
    id: '2',
    title: 'Price Drop Alert',
    description: 'Good news! An item in your wishlist is now on sale with 25% off.',
    time: '5h ago',
    isRead: false,
    type: 'price',
    details: {
      productName: 'Smart Watch with Fitness Tracker',
      originalPrice: '$129.99',
      salePrice: '$97.49',
      discount: '25%',
      validUntil: 'March 5, 2025'
    }
  },
  {
    id: '3',
    title: 'New Arrivals',
    description: 'Check out the latest tech gadgets that just arrived in our store!',
    time: '1d ago',
    isRead: true,
    type: 'promotion',
    details: {
      bannerImage: 'new_arrivals_banner.jpg',
      featured: [
        { name: 'Wireless Earbuds Pro', price: '$89.99' },
        { name: 'Ultra HD Action Camera', price: '$199.99' },
        { name: 'Smart Home Assistant', price: '$149.99' }
      ],
      promoCode: 'NEWTECH15'
    }
  },
  {
    id: '4',
    title: 'Order Delivered',
    description: 'Your order #12289 has been delivered. Enjoy your purchase!',
    time: '2d ago',
    isRead: true,
    type: 'order',
    details: {
      orderNumber: '#12289',
      deliveredOn: 'February 26, 2025',
      items: [
        { name: 'Bluetooth Speaker', quantity: 1 },
        { name: 'Phone Case', quantity: 1 }
      ]
    }
  },
  {
    id: '5',
    title: 'Flash Sale: 24 Hours Only',
    description: 'Dont miss our 24-hour flash sale with up to 50% off on selected items!',
    time: '3d ago',
    isRead: true,
    type: 'promotion',
    details: {
      bannerImage: 'flash_sale_banner.jpg',
      saleEnds: 'February 25, 2025 23:59',
      featured: [
        { name: 'Premium Noise-Cancelling Headphones', price: '$149.99', salePrice: '$89.99' },
        { name: '10000mAh Power Bank', price: '$49.99', salePrice: '$29.99' },
        { name: 'Wireless Charging Pad', price: '$39.99', salePrice: '$19.99' }
      ],
      promoCode: 'FLASH50'
    }
  }
];

// Component for a single notification item
const NotificationItem = ({ notification, onPress }) => {
  const getIcon = () => {
    switch (notification.type) {
      case 'order':
        return 'cube-outline';
      case 'price':
        return 'pricetag-outline';
      case 'promotion':
        return 'megaphone-outline';
      default:
        return 'notifications-outline';
    }
  };

  const getIconColor = () => {
    switch (notification.type) {
      case 'order':
        return '#16a34a'; // Green
      case 'price':
        return '#f59e0b'; // Amber
      case 'promotion':
        return '#3b82f6'; // Blue
      default:
        return '#6B7280'; // Gray
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.notificationItem, notification.isRead ? styles.readNotification : styles.unreadNotification]} 
      onPress={onPress}
    >
      <View style={[styles.iconContainer, { backgroundColor: `${getIconColor()}20` }]}>
        <Ionicons name={getIcon()} size={24} color={getIconColor()} />
      </View>
      
      <View style={styles.notificationContent}>
        <View style={styles.notificationHeader}>
          <Text style={styles.notificationTitle} numberOfLines={1}>{notification.title}</Text>
          <Text style={styles.notificationTime}>{notification.time}</Text>
        </View>
        <Text style={styles.notificationDescription} numberOfLines={2}>
          {notification.description}
        </Text>
      </View>
      
      {!notification.isRead && <View style={styles.unreadIndicator} />}
    </TouchableOpacity>
  );
};

// Detail view component for a notification
const NotificationDetail = ({ notification, onClose }) => {
  if (!notification) return null;
  
  const renderContent = () => {
    switch (notification.type) {
      case 'order':
        return (
          <View style={styles.detailContent}>
            <Text style={styles.detailLabel}>Order Number:</Text>
            <Text style={styles.detailValue}>{notification.details.orderNumber}</Text>
            
            {notification.details.trackingNumber && (
              <>
                <Text style={styles.detailLabel}>Tracking Number:</Text>
                <Text style={styles.detailValue}>{notification.details.trackingNumber}</Text>
                
                <Text style={styles.detailLabel}>Estimated Delivery:</Text>
                <Text style={styles.detailValue}>{notification.details.estimatedDelivery}</Text>
              </>
            )}
            
            {notification.details.deliveredOn && (
              <>
                <Text style={styles.detailLabel}>Delivered On:</Text>
                <Text style={styles.detailValue}>{notification.details.deliveredOn}</Text>
              </>
            )}
            
            <Text style={styles.detailLabel}>Items:</Text>
            {notification.details.items.map((item, index) => (
              <Text key={index} style={styles.detailItem}>
                • {item.name} × {item.quantity}
              </Text>
            ))}
          </View>
        );
        
      case 'price':
        return (
          <View style={styles.detailContent}>
            <Text style={styles.detailLabel}>Product:</Text>
            <Text style={styles.detailValue}>{notification.details.productName}</Text>
            
            <View style={styles.priceContainer}>
              <Text style={styles.originalPrice}>{notification.details.originalPrice}</Text>
              <Text style={styles.salePrice}>{notification.details.salePrice}</Text>
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>-{notification.details.discount}</Text>
              </View>
            </View>
            
            <Text style={styles.detailLabel}>Valid Until:</Text>
            <Text style={styles.detailValue}>{notification.details.validUntil}</Text>
            
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>View Product</Text>
            </TouchableOpacity>
          </View>
        );
        
      case 'promotion':
        return (
          <View style={styles.detailContent}>
            <View style={styles.promoBanner}>
              <Text style={styles.promoBannerText}>
                {notification.title}
              </Text>
            </View>
            
            {notification.details.featured && (
              <>
                <Text style={styles.detailLabel}>Featured Products:</Text>
                {notification.details.featured.map((product, index) => (
                  <View key={index} style={styles.featuredProduct}>
                    <Text style={styles.featuredProductName}>• {product.name}</Text>
                    {product.salePrice ? (
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.originalPrice}>{product.price}</Text>
                        <Text style={styles.salePrice}>{product.salePrice}</Text>
                      </View>
                    ) : (
                      <Text style={styles.productPrice}>{product.price}</Text>
                    )}
                  </View>
                ))}
              </>
            )}
            
            {notification.details.promoCode && (
              <View style={styles.promoCodeContainer}>
                <Text style={styles.promoCodeLabel}>Promo Code:</Text>
                <View style={styles.promoCode}>
                  <Text style={styles.promoCodeText}>{notification.details.promoCode}</Text>
                </View>
                <TouchableOpacity style={styles.copyButton}>
                  <Ionicons name="copy-outline" size={16} color="#fff" />
                  <Text style={styles.copyButtonText}>Copy</Text>
                </TouchableOpacity>
              </View>
            )}
            
            {notification.details.saleEnds && (
              <Text style={styles.saleEndsText}>Sale ends: {notification.details.saleEnds}</Text>
            )}
            
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Shop Now</Text>
            </TouchableOpacity>
          </View>
        );
        
      default:
        return (
          <View style={styles.detailContent}>
            <Text style={styles.detailDescription}>{notification.description}</Text>
          </View>
        );
    }
  };
  
  return (
    <View style={styles.detailContainer}>
      <View style={styles.detailHeader}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.detailTitle}>{notification.title}</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="ellipsis-vertical" size={20} color="#111827" />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.detailScrollView}>
        {renderContent()}
      </ScrollView>
    </View>
  );
};

export default function NotificationsScreen({ navigation }) {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  
  const unreadCount = notifications.filter(n => !n.isRead).length;
  
  const handleNotificationPress = (notification) => {
    // Mark notification as read
    if (!notification.isRead) {
      setNotifications(prevNotifications =>
        prevNotifications.map(n =>
          n.id === notification.id ? { ...n, isRead: true } : n
        )
      );
    }
    
    // Show notification detail
    setSelectedNotification(notification);
    setShowDetail(true);
  };
  
  const closeDetail = () => {
    setShowDetail(false);
  };
  
  const markAllAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(n => ({ ...n, isRead: true }))
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {!showDetail ? (
        <>
          <CustomHeader title="Notifications" showBackButton={true} />
          
      <View style={styles.notificationHeader}>
      <Text style={styles.notificationCount}>
        {unreadCount > 0 
          ? `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}`
          : 'No new notifications'}
      </Text>
  
  {unreadCount > 0 && (
    <TouchableOpacity 
      style={styles.markAllReadButton}
      onPress={markAllAsRead}
    >
      <Text style={styles.markAllReadText}>Mark all as read</Text>
    </TouchableOpacity>
  )}
</View>
          
          <FlatList
            data={notifications}
            renderItem={({ item }) => (
              <NotificationItem 
                notification={item} 
                onPress={() => handleNotificationPress(item)}
              />
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.notificationsList}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Ionicons name="notifications-off-outline" size={64} color="#D1D5DB" />
                <Text style={styles.emptyText}>No notifications yet</Text>
              </View>
            }
          />
        </>
      ) : (
        <NotificationDetail 
          notification={selectedNotification} 
          onClose={closeDetail} 
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
  },
  notificationHeaderStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    marginBottom: 8,
  },
  notificationCount: {
    fontSize: 14,
    color: '#6B7280',
    flex: 1,
    paddingRight: 8,
  },
  markAllReadButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  markAllReadText: {
    fontSize: 14,
    color: '#16a34a',
    fontWeight: '500',
  },
  notificationsList: {
    padding: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  unreadNotification: {
    backgroundColor: '#F0FDF4', // Light green background for unread
  },
  readNotification: {
    backgroundColor: '#fff',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    flex: 1,
  },
  notificationTime: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 8,
  },
  notificationDescription: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
  unreadIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#16a34a',
    marginLeft: 8,
    alignSelf: 'center',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  emptyText: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 16,
  },
  
  // Detail View Styles
  detailContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  closeButton: {
    padding: 4,
  },
  detailTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginLeft: 16,
  },
  menuButton: {
    padding: 4,
  },
  detailScrollView: {
    flex: 1,
  },
  detailContent: {
    padding: 16,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginTop: 16,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    color: '#111827',
    marginBottom: 8,
  },
  detailItem: {
    fontSize: 14,
    color: '#4B5563',
    marginLeft: 8,
    marginTop: 4,
  },
  detailDescription: {
    fontSize: 16,
    color: '#4B5563',
    lineHeight: 24,
  },
  
  // Price drop specific styles
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  originalPrice: {
    fontSize: 16,
    color: '#6B7280',
    textDecorationLine: 'line-through',
    marginRight: 12,
  },
  salePrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#16a34a',
    marginRight: 12,
  },
  discountBadge: {
    backgroundColor: '#16a34a',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  discountText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fff',
  },
  
  // Promo specific styles
  promoBanner: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    marginBottom: 16,
  },
  promoBannerText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  featuredProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
  },
  featuredProductName: {
    fontSize: 15,
    color: '#111827',
    flex: 1,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  promoCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  promoCodeLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginRight: 8,
  },
  promoCode: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  promoCodeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#16a34a',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginLeft: 8,
  },
  copyButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    marginLeft: 4,
  },
  saleEndsText: {
    fontSize: 14,
    color: '#EF4444',
    fontWeight: '500',
    marginTop: 12,
  },
  
  // Action button
  actionButton: {
    backgroundColor: '#16a34a',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});