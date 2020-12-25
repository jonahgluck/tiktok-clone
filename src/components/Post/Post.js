import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import Video from 'react-native-video';
import styles from './Styles';
import Entypo from 'react-native-vector-icons/Entypo';

const Post = () => {
  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={{
            uri:
              'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
          }}
          style={styles.video}
          resizeMode={'cover'}
          onError={(e: LoadError) => console.error(e)}
          repeat={true}
          paused={paused}
        />
      </TouchableWithoutFeedback>

      <View style={styles.uiContainer}>
        <View style={styles.rightContainer}>
          <View style={styles.profilePictureContainer}>
            <Image
              style={styles.profilePicture}
              source={{
                uri:
                  'https://st3.depositphotos.com/11095424/15758/i/600/depositphotos_157587288-stock-photo-spiderman-mask-illustration-red-color.jpg',
              }}
            />
            <View style={styles.iconContainer}>
              <Entypo name={'beamed-note'} size={45} color="white" />
              <Text style={styles.statsLabel}>123</Text>
            </View>
            <View style={styles.iconContainer}>
              <Entypo name={'beamed-note'} size={45} color="white" />
              <Text style={styles.statsLabel}>123</Text>
            </View>
            <View style={styles.iconContainer}>
              <Entypo name={'beamed-note'} size={45} color="white" />
              <Text style={styles.statsLabel}>123</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.handle}>@Nye</Text>
          <Text style={styles.description}>Homework help</Text>
        </View>

        <View style={styles.songRow}>
          <Entypo
            style={styles.songImage}
            name={'beamed-note'}
            size={24}
            color="white"
          />

          <Text style={styles.songName}>Some Song Name</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;
