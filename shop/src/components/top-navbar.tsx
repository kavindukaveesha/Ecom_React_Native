import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../constant/theme'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

/**
 * TopNavBar Component
 * @param {Object} props - Component props
 * @param {number} props.cartItems - Number of items in cart
 * @param {number} props.notifications - Number of unread notifications
 */
const TopNavBar = ({ cartItems = 0, notifications = 0 }) => {
  return (
    <View style={styles.headerContainer}>
      {/* Welcome Header */}
      <View>
        <Text style={styles.headerTitle}>Hi, Welcome 👋</Text>
        <Text style={styles.headerSubtitle}>Find your favorite products</Text>
      </View>

      {/* Icons Container */}
      <View style={styles.iconsContainer}>
        {/* Cart Link */}
        <Link href="/cart" asChild>
          <Pressable style={styles.iconWrapper}>
            <Ionicons name="cart-outline" size={24} color={colors.text.primary} />
            {cartItems > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  {cartItems > 99 ? '99+' : cartItems}
                </Text>
              </View>
            )}
          </Pressable>
        </Link>

        {/* Notifications Link */}
        <Link href="/notifications" asChild>
          <Pressable style={styles.iconWrapper}>
            <Ionicons name="notifications-outline" size={24} color={colors.text.primary} />
            {notifications > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  {notifications > 99 ? '99+' : notifications}
                </Text>
              </View>
            )}
          </Pressable>
        </Link>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginLeft:5,
    marginRight:5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconWrapper: {
    position: 'relative',
    padding: 4,
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#EF4444',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
})

export default TopNavBar