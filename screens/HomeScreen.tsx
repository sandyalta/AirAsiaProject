import React from 'react';
import { View } from '../components/Themed';
import styles from '../assets/css/homeScreenStyle';
import DetailScreenInfo from '../components/DetailScreenInfo';
import { FlatList, SafeAreaView, ScrollView } from 'react-native'

export default function HomeScreen({navigation} : {navigation:any}){
  const data = [
    {
      title: 'Internal management',
      number: 12
    },
    {
      title: 'Subordinate units',
      number: 9
    },
    {
      title: 'School management',
      number: 326
    },
    {
      title: 'Teacher management',
      number: 8541
    },
    {
      title: 'Student management',
      number: 23678
    },
    {
      title: 'Family management',
      number: 349
    }
  ]
  return (
    <View style={styles.container}>
      <FlatList style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={data}
        horizontal={false}
        numColumns={2}
        keyExtractor= {(item) => {
          return item.title;
        }}
        renderItem={({item}) => {
          return (
            <DetailScreenInfo data={{...item}} navigation={navigation}/> 
          )
        }}/>
    </View>
  );
}


