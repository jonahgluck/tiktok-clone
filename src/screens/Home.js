import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import Post from '../components/Post/Post';
import postData from '../../data/posts';

const Home = () => {
  return (
    <View>
      <FlatList
        data={postData}
        renderItem={({item}) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height * 0.9}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default Home;
