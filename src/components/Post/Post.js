import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import Video from 'react-native-video';
import styles from './Styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
                  'https://cdn.vox-cdn.com/thumbor/lXm_AmbMRRUJVwsfcEdXd7D8D5Q=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/64062111/1_LGFTlvUlC8iJ5mi-UPF7Uw.0.0.0.jpeg',
              }}
            />
            <View style={styles.iconContainer}>
              <AntDesign name={'heart'} size={45} color="white" />
              <Text style={styles.statsLabel}>123</Text>
            </View>
            <View style={styles.iconContainer}>
              <FontAwesome name={'commenting'} size={45} color="white" />
              <Text style={styles.statsLabel}>123</Text>
            </View>
            <View style={styles.iconContainer}>
              <Entypo name={'forward'} size={50} color="white" />
              <Text style={styles.statsLabel}>123</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.handle}>@Nye</Text>
            <Text style={styles.description}>Homework help</Text>
            <View style={styles.songRow}>
              <Entypo
                style={styles.songRow}
                name={'beamed-note'}
                size={24}
                color="white"
              />

              <Text style={styles.songName}>Some Song Name</Text>
            </View>
          </View>
          <Image
            style={styles.songImage}
            source={{
              uri:
                'https://cdn.vox-cdn.com/thumbor/lXm_AmbMRRUJVwsfcEdXd7D8D5Q=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/64062111/1_LGFTlvUlC8iJ5mi-UPF7Uw.0.0.0.jpeg',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Post;
