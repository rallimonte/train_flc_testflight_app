import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const images = [
  require('../../assets/images/x1youngfetisch2025.png'),
  require('../../assets/images/x2flc_goes_to_2025.jpg'),
  require('../../assets/images/x3neuetermine2025.png'),
  require('../../assets/images/x3pawnsstammtisch2025.jpg'),
  require('../../assets/images/x4leatherodyssee2025.jpg'),
  require('../../assets/images/x6fetischtreff2025.jpg'),
];

const DynamicImage = ({ source, index }) => {
  const { width } = useWindowDimensions(); // z. B. 390 auf iPhone
  const contentWidth = width - 40; // 20px Padding links + rechts im container
  const [imageHeight, setImageHeight] = useState(300);

  useEffect(() => {
    const { width: imgW, height: imgH } = Image.resolveAssetSource(source);
    if (imgW && imgH) {
      const ratio = imgH / imgW;
      setImageHeight(contentWidth * ratio);
    }
  }, [source, contentWidth]);

  return (
    <View style={styles.imageWrapper}>
      <Text style={styles.debugLabel}>Bild #{index + 1}</Text>
      <Image
        source={source}
        style={{
          width: contentWidth,
          height: imageHeight,
          borderRadius: 8,
          backgroundColor: '#000',
          borderWidth: 1,
          borderColor: 'red',
        }}
        resizeMode="contain"
      />
    </View>
  );
  
};

const Profile = () => {
  const renderItem = ({ item, index }) => (
    <DynamicImage source={item} index={index} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>FLC Infokanal und Termins</Text>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
      />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageWrapper: {
    borderWidth: 2,
    borderColor: 'lime',
    backgroundColor: '#111',
    marginBottom: 8,
    alignItems: 'center',
  },
  debugLabel: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 4,
    fontSize: 12,
    backgroundColor: '#333',
  },
  image: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: 'red',
  },
  list: {
    paddingBottom: 20,
  },
});
