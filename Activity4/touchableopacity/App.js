import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Cooking',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Social Media',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145465571e29d72',
    title: 'Breakfast',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145231571e29d72',
    title: 'Exercise',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557187686e29d72',
    title: 'Taking a bath',
  },
];

const DATA1 = [
  {
    id: '58694a0f-3da1-471f-bd96-14557187686e29d73',
    title: 'Lunch',
  },
  {
    id: '586924a0f-3da1-471f-bd9653-14557187686e29d74',
    title: 'Playing Games',
  },
  {
    id: '586945a0f-3d3a1-471f-bd96-14557187686e292d75',
    title: 'Reading',
  },
  {
    id: '58693a0f-3da1-45471f-bd96-145571876386e29d76',
    title: 'Singing',
  },
  {
    id: '58694a0f-3d213a1-432171f-bd96-14557187686e29d77',
    title: 'Writing Poems',
  },
  {
    id: '58694a0f-3da3211-471f-bd96-14557187686e321329d78',
    title: 'Coding',
  },
  {
    id: '58694a3210f-3da3211-471f-bd96-14557187686e321329d79',
    title: 'Patting my cat',
  },
  {
    id: '58694a0f-3da3512211-471f-bd96-14557187686e321329d80',
    title: 'Washing Dishes',
  },
  {
    id: '58694a0f-3da3211-471f-bd96-1455718721312686e321329d81',
    title: 'Watching Tiktok',
  },
];

const DATA2 = [
  {
    id: '58694a53240f-3da1-471f-bd96-14557187686e29d82',
    title: 'Half bath',
  },
  {
    id: '58694a0f-23da1-42371f-bd32196-14557187686e29d83',
    title: 'Cooking Dinner',
  },
  {
    id: '58694a0f-3da1-472311f-b15d96-1432557dsa187686e29d84',
    title: 'Watching Television',
  },
  {
    id: '58694a0f-3da1-471f-bd1596-1455713287dsa686e29d85',
    title: 'Playing Minecraft',
  },
  {
    id: '5869421a0f-3da1-471f-bd916-14557187686e29d86',
    title: 'Talk to other',
  },
  {
    id: '58655494a0f-3da541-471f-bd967D-14557187sd686e29d87',
    title: 'Giving advice in the Community',
  },
  {
    id: '58694a0f-3da1-471f-bd9SD-14557187686dse29d88',
    title: 'Listening to Music',
  },
  {
    id: '58694ada0f-3da1-471f-bAS96-14557187686eds29d89',
    title: 'Relapse',
  },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <Text style={styles.header}>Morning</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text style={styles.header}>Afternoon</Text>
      <FlatList
        data={DATA1}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text style={styles.header}>Evening</Text>
      <FlatList
        data={DATA2}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
       </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#98DED9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default App;