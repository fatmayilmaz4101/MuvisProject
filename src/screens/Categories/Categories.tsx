import React from 'react';
import {  ImageBackground, SafeAreaView, View } from 'react-native';
import { styles } from './categories.styles';
import { Card, Text, Title } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
const data = [
  { id: '1', src: 'https://picsum.photos/300/200', title: 'Komedi'},
  { id: '2', src: 'https://picsum.photos/300/200', title: 'Komedi' },
  { id: '3', src: require('../../../assets/images/rick-avatar.png'), title: 'Bilim Kurgu', description: 'Description for Image 3' },
  { id: '4', src: require('../../../assets/images/rick-avatar.png'), title: 'Tarih', description: 'Description for Image 4' },
];

const Categories = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Kategoriler</Text>
    <ScrollView contentContainerStyle={styles.scrollView}>
      {data.map((item) => (
        <Card key={item.id} style={styles.card}>
          <ImageBackground source={typeof item.src === 'string' ? { uri: item.src } : item.src} 
           style={styles.image}>
            <View style={styles.overlay}>
              <Title style={styles.categoryTitle}>{item.title}</Title>
            </View>
          </ImageBackground>
        </Card>
      ))}
    </ScrollView>
  </SafeAreaView>
);
};
export default Categories;
