import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import styles from './Styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Post = (props) => {
  const [muted, setMuted] = useState(true);
  const [post, setPost] = useState(props.post);
  const [isLiked, setIsLiked] = useState(false);
  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
    setMuted(!true);
  };

  const onLikePress = () => {
    let likesToAdd = isLiked ? -1 : 1;
    setPost({
      ...post,
      likes: post.likes + likesToAdd,
    });
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={onPlayPausePress}
        onLongPress={onLikePress}
        style={styles.videPlayButton}>
        <View>
          <Video
            source={{
              uri: post.videoUri,
            }}
            style={styles.video}
            resizeMode={'cover'}
            onError={(e: LoadError) => console.error(e)}
            repeat={true}
            paused={paused}
            muted={muted}
          />

          <View style={styles.uiContainer}>
            <View style={styles.rightContainer}>
              <View style={styles.profilePictureContainer}>
                <Image
                  style={styles.profilePicture}
                  source={{
                    uri: post.user.image,
                  }}
                />
                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={onLikePress}>
                  <AntDesign
                    name={'heart'}
                    size={45}
                    color={isLiked ? 'red' : 'white'}
                  />
                  <Text style={styles.statsLabel}>{post.likes}</Text>
                </TouchableOpacity>
                <View style={styles.iconContainer}>
                  <FontAwesome name={'commenting'} size={45} color="white" />
                  <Text style={styles.statsLabel}>{post.comments}</Text>
                </View>
                <View style={styles.iconContainer}>
                  <Entypo name={'forward'} size={50} color="white" />
                  <Text style={styles.statsLabel}>{post.shares}</Text>
                </View>
              </View>
            </View>

            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.handle}>@{post.user.username}</Text>
                <Text style={styles.description}>{post.description}</Text>
                <View style={styles.songRow}>
                  <Entypo
                    style={styles.songRow}
                    name={'beamed-note'}
                    size={24}
                    color="white"
                  />

                  <Text style={styles.songName}>{post.song}</Text>
                </View>
              </View>
              <Image
                style={styles.songImage}
                source={{
                  uri: post.songImage,
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;
