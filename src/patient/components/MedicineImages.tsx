/* eslint-disable react-native/no-inline-styles */
import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Text,
  Dimensions,
  StyleSheet,
  View,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {API_URL} from '@env';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.84);

const CarouselCardItem = ({item}) => {
  const [load, setload] = useState(true);
  return (
    <View style={styles.container}>
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

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
        style={{
          padding: 3,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <Text style={{fontSize: 18, fontWeight: '700', color: 'grey'}}>
          {item[0].date}
        </Text>
      </View>
      <View style={{height: 340, backgroundColor: 'white'}}>
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
          containerStyle={{
            position: 'relative',
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: 'red',
          }}
          inactiveDotStyle={{
            backgroundColor: 'black',
            // Define styles for inactive dots here
          }}
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

const styles = StyleSheet.create({
  container: {
    height: '20%',
    backgroundColor: 'white',
    borderRadius: 20,
    width: ITEM_WIDTH,
    shadowColor: '#000',
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 2,
  },
  image: {
    width: ITEM_WIDTH,
    height: 200,
    borderRadius: 10,
  },
  header: {
    color: '#222',
    fontSize: 12,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default MedicineImages;
