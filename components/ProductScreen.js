import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ProductScreen = ({ route }) => {
  const { products } = route.params;
  const [productList, setProductList] = useState(products);

  const updateProductStatus = (product) => {
    let newStatus;
    if (product.status === "Open") {
      newStatus = "Partially Completed";
      product.completed = 5; // Example of partial completion
    } else if (product.status === "Partially Completed") {
      newStatus = "Completed";
      product.completed = product.total; // Mark as completed
    } else {
      newStatus = "Open";
      product.completed = 0; // Reset to open
    }

    product.status = newStatus; // Update status
    setProductList([...productList]); // Update state
    Alert.alert("Product Status Updated", `${product.name} is now ${newStatus}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={productList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Text style={styles.productText}>{item.name} - {item.status} ({item.completed}/{item.total})</Text>
            <TouchableOpacity
              style={styles.updateButton}
              onPress={() => updateProductStatus(item)}
            >
              <Text style={styles.updateButtonText}>Update Status</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
  },
  productContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  productText: {
    fontSize: 16,
    color: '#000',
  },
  updateButton: {
    backgroundColor: '#ef900a',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  updateButtonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default ProductScreen;
