import React from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { Text, View } from '../components/Themed';
import styles from '../assets/css/detailScreenStyle';

export default function DetailScreen({navigation, route}: {navigation:any, route:any}) {
  const data = [
    {
      title: 'Educational Affairs',
      data: [
        {
          title: 'Test',
          icon: require('../assets/images/icons8-write-64.png'),
        },
        {
          title: 'Notice',
          icon: require('../assets/images/icons8-mail-48.png'),
        },
        {
          title: 'Classroom',
          icon: require('../assets/images/icons8-classroom-40.png'),
        },
        {
          title: 'Lesson Plan',
          icon: require('../assets/images/icons8-log-document-64.png'),
        },
        {
          title: 'Reflection',
          icon: require('../assets/images/icons8-search-client-40.png'),
        },
        {
          title: 'Lectures',
          icon: require('../assets/images/icons8-lecturer-40.png'),
        },
        {
          title: 'Blackboard',
          icon: require('../assets/images/icons8-class-48.png'),
        }
      ]
    },
    {
      title: 'Resources',
      data: [
        {
          title: 'Resources',
          icon: require('../assets/images/icons8-resources-62.png'),
        },
        {
          title: 'School Diagram',
          icon: require('../assets/images/icons8-school-48.png'),
        },
        {
          title: 'Teacher Report',
          icon: require('../assets/images/icons8-tuition-100.png'),
        },
      ]
    },
    {
      title: 'Application',
      data: [
        {
          title: 'Overview',
          icon: require('../assets/images/icons8-overview-64.png'),
        },
        {
          title: 'Log In',
          icon: require('../assets/images/icons8-open-door-40.png'),
        },
        {
          title: 'Teaching',
          icon: require('../assets/images/icons8-open-book-64.png'),
        },
        {
          title: 'Work',
          icon: require('../assets/images/icons8-todo-list-64.png'),
        },
        {
          title: 'Competition',
          icon: require('../assets/images/icons8-awards-64.png'),
        },
        {
          title: 'Challenge',
          icon: require('../assets/images/icons8-challenge-58.png'),
        },
      ]
    },
  ]

  const renderListItem = (items:any, idx:any) => {
    return(
      <View key={idx}>
        <View style={styles.menuHeader}>
          <Text style={styles.title}>{items.title}</Text>
        </View>
        <FlatList style={styles.list}
          data={items.data}
          horizontal={false}
          numColumns={4}
          keyExtractor= {(item) => {
            return item.title;
          }}
          key={idx}
          nestedScrollEnabled={true}
          renderItem={({item}) => {
            return(
              <TouchableOpacity style={styles.detailContainer} onPress={() => {}}>
                <View style={styles.menuFooter}>
                  <Image style={styles.menuImage} source={item.icon}/>
                  <Text style={styles.subTitle}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
          scrollEnabled={true}
        />
      </View>
      
    )
  }

  return (
    <View style={styles.container}>
        {
          data && data.map((i:any, idx:any) => {
            switch(i.title){
              case "Educational Affairs": 
                return renderListItem(i,idx);
              case "Resources":
                return renderListItem(i,idx);
              case "Application":
                return renderListItem(i,idx);
              default: return null
            }
          })
        }
    </View>
  );
}

