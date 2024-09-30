import { View, Text, TextInput, Button, FlatList, StyleSheet, ToastAndroid, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const App = () => {

  const [state, setState] = useState(" ")
  const [value, setValue] = useState([])
  const [indexValue, setIndexValue] = useState(-1)

  const handleSubmit = () => {
    if (state) {
      if (indexValue !== -1) {
        const updatedValue = [...value]
        updatedValue[indexValue] = state
        setValue(updatedValue)
        setIndexValue(-1)

      } else {
        setValue([...value, state])
      }
      setState("")
    }

  }

  // const renderItem = ({ item, index }) => {
  //   return <View style={styles.valueConatainer}>
  //     <Text style={styles.item}>{item}</Text>
  //     <View style={styles.buttonContainer}>
  //       <TouchableOpacity onPress={()=>handleEdit(index)} style={styles.editButton}>
  //         <Text style={styles.EditText}>Edit</Text>
  //       </TouchableOpacity>

  //       <TouchableOpacity onPress={()=>handleDelete(index)} style={styles.DeleteButton}>
  //         <Text style={styles.DeleteText}>Delete</Text>
  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // }

  const handleEdit = (index) => {
    const EditToValue = value[index]
    setState(EditToValue)
    setIndexValue(index)
  }

  const handleDelete = (index) => {
    const updatedValue = [...value]
    updatedValue.splice(index, 1)
    setValue(updatedValue)
  }



  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={(text) => setState(text)} value={state} placeholder='Enter the value' />
        <Button onPress={handleSubmit} title={indexValue !== -1 ? "Edit" : "Submit"} />
      </View>
      <View>
        <Text style={styles.valueHeader}>List of Value</Text>
        <FlatList 
        data={value}
         
           renderItem={({item,index}) => {
            return (
              <View style={styles.valueConatainer}>
                <Text style={styles.item}>{item}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={() => handleEdit(index)} style={styles.editButton}>
                    <Text style={styles.EditText}>Edit</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => handleDelete(index)} style={styles.DeleteButton}>
                    <Text style={styles.DeleteText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          }}
        keyExtractor={(item,index) => index.toString()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 50
  },
  inputContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingBottom: 10

  },
  input: {
    borderWidth: 1,
    width: "80%",
    borderRadius: 20

  },
  valueConatainer: {
    flexDirection: "row",
    backgroundColor: "blue",
    justifyContent: "space-between",
    height: 40,
    marginTop: 20,
    textAlign: "center",
    padding: 8

  },
  valueHeader: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold"

  },
  header: {
    textAlign: "center",
    fontStyle: 'normal',
    fontWeight: "bold"

  }, buttonContainer: {
    flexDirection: "row"
  },
  editButton: {
    backgroundColor: "green",

  },
  DeleteButton: {
    backgroundColor: "red"
  },
  item: {
    color: "#ccc"
  }, DeleteText: {
    color: "#ccc"
  },
  EditText: {
    color: "#ccc"
  }

})

export default App