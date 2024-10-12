import React from 'react';
import { View, Text, FlatList,  StyleSheet, TouchableOpacity } from 'react-native';

const data = [
  {
    "id": "1",
    "name": "Software Developer",
    "customers": [
      {
        "id": "1",
        "name": "Huge IT Solution",
        "products": [
          { "id": "1", "name": "Website", "status": "Open", "total": 10, "completed": 0 },
          
        ]
      },
      
    ]
  },
  {
    "id": "2",
    "name": "Manager",
    "customers": [
      {
        "id": "3",
        "name": "TATA",
        "products": [
          { "id": "2", "name": "AI Mechine", "status": "Open", "total": 10, "completed": 0 }
        ]
      }
    ]
  },
  {
    "id": "3",
    "name": "HR",
    "customers": [
      {
        "id": "3",
        "name": "Huge IT Solution",
        "products": [
          { "id": "3", "name": "Attendance", "status": "Open", "total": 10, "completed": 0 }
        ]
      }
    ]
  },
  {
    "id": "4",
    "name": "Accountant",
    "customers": [
      {
        "id": "4",
        "name": "Google",
        "products": [
          { "id": "3", "name": "Salary", "status": "Open", "total": 10, "completed": 0 }
        ]
      }
    ]
  },
  {
    "id": "5",
    "name": "SalesMan",
    "customers": [
      {
        "id": "5",
        "name": "Amazone",
        "products": [
          { "id": "3", "name": "Server", "status": "Open", "total": 10, "completed": 0 }
        ]
      }
    ]
  },
  {
    "id": "6",
    "name": "Assistant",
    "customers": [
      {
        "id": "5",
        "name": "Huge IT Solution",
        "products": [
          { "id": "3", "name": "Presentation", "status": "Open", "total": 10, "completed": 0 }
        ]
      }
    ]
  },

]

const PicklistScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Employee</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Customers', { customers: item.customers })}
          >
            <Text style={styles.buttonText}>{item.name}</Text>
          </TouchableOpacity>
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
  button: {
    backgroundColor: '#ef900a',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default PicklistScreen;