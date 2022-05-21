/* eslint-disable react-native/no-inline-styles */
import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Text,
  Dimensions,
  View,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {API_URL} from '@env';
import styles from '../patientStyles/MedicineImagesStyles';


const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.84);

const CarouselCardItem = ({item}) => {
  const [load, setload] = useState(true);
  return (
    <View style={styles.container1}>
      <Image
        source={{
          uri: `${API_URL}/upload/static/images/${item.imageUrl}`,
        }}
        style={styles.image}
        onLoadStart={() => setload(true)}
        onLoadEnd={() => setload(false)}
      />
      <Text style={styles.header}>{item.time}</Text>
      {load && <ActivityIndicator />}

      <View style={styles.bodyView}>
        <Text style={styles.body}>{item.caretakerName}</Text>
        <Text style={styles.body}>{item.date}</Text>
      </View>
    </View>
  );
};

const SingleImageComponent = ({item}) => {
  console.log('item', item);
  const [index, setindex] = React.useState(0);

  return (
    <>
      <View
        style={styles.container}>
        <Text style={styles.date}>
          {item[0].date}
        </Text>
      </View>
      <View style={styles.carousel}>
        <Carousel
          layoutCardOffset={9}
          data={item}
          onSnapToItem={inde => setindex(inde)}
          renderItem={({item}) => (
            <CarouselCardItem item={item}></CarouselCardItem>
          )}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
        />
        <Pagination
          dotsLength={item.length}
          activeDotIndex={index}
          containerStyle={styles.pageContainer}
          dotStyle={styles.pageDot}
          inactiveDotStyle={styles.inactiveDot}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </>
  );
};

const MedicineImages = ({route}) => {
  const [imageData, setImageData] = useState();
  const {medId} = route.params;
  function fetchImages() {
    fetch(`${API_URL}/api/v1/medicine-images?medId=${medId}`)
      .then(resp => resp.json())
      .then(response => {
        let map = new Map();
        for (let re = 0; re < response.length; re++) {
          if (map.has(response[re].date)) {
            map.get(response[re].date).push(response[re]);
          } else {
            let newarr = [];
            newarr.push(response[re]);
            map.set(response[re].date, newarr);
          }
        }
        let Arr = [];
        map.forEach(it => Arr.push(it));
        setImageData(Arr);
      });
  }
  useFocusEffect(
    React.useCallback(() => {
      let isActive = false;
      fetchImages();
      return () => {
        isActive = true;
      };
    }, []),
  );

  return (
    <FlatList
      data={imageData}
      renderItem={({item}) => <SingleImageComponent item={item} />}
    />
  );
};

export default MedicineImages;
