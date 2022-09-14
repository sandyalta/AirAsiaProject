import React from 'react';
import { Text, View } from './Themed';
import { Image, TouchableOpacity } from 'react-native';
import styles from '../assets/css/detailScreenInfoStyle'
import Family from '../assets/images/icons8-family-80.png';
import Building from '../assets/images/icons8-building-100.png';
import Person from '../assets/images/icons8-person-80.png';
import School from '../assets/images/icons8-school-building-48.png';
import Student from '../assets/images/icons8-graduation-cap-64.png';
import Teacher from '../assets/images/icons8-seminar-64.png';
import numberWithCommas from '../common/CommonFunction';

export default function DetailScreenInfo (props:any){
  const {title, number} = props.data;

  const getButtonIcon = (title:any) => {
    const icon = getIcon(title);
    const getTitleSplit = title.split(' ');
    return (
      <View style={styles.menuHeader}>
        <Image style={styles.menuImage} source={icon}/>
        <Text style={styles.title}>{getTitleSplit[0]}</Text>
        <Text style={styles.subTitle}>{getTitleSplit[1]}</Text>
      </View>
    )
  }

  const getIcon = (title:any) => {
    switch(title){
      case "Internal management": 
        return Person;
      case "Subordinate units":
        return Building;
      case "School management":
        return School;
      case "Teacher management":
        return Teacher;
      case "Student management":
        return Student;
      case "Family management":
        return Family
      default: return null
    }
  }

  return (
    <TouchableOpacity style={styles.detailContainer} onPress={() => props.navigation.navigate("Detail", {title:title})} delayPressIn={70}>
        {getButtonIcon(title)}
        <View style={styles.menuFooter}>
          <Text style={styles.numberTitle} >
            {numberWithCommas(number)}
          </Text>
        </View>
    </TouchableOpacity>
  );
}


