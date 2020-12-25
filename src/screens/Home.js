import React from 'react';
import {View, Text} from 'react-native';
import Post from '../components/Post/Post';

const postData = {
  id: 'p1',
  user: {
    id: 'u1',
    username: 'Nye',
    image:
      'https://cdn.vox-cdn.com/thumbor/lXm_AmbMRRUJVwsfcEdXd7D8D5Q=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/64062111/1_LGFTlvUlC8iJ5mi-UPF7Uw.0.0.0.jpeg',
  },
  videoUri:
    'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
  description: 'hello from hw help!',
  song: 'the beatles',
  songImage:
    'https://cdn.vox-cdn.com/thumbor/lXm_AmbMRRUJVwsfcEdXd7D8D5Q=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/64062111/1_LGFTlvUlC8iJ5mi-UPF7Uw.0.0.0.jpeg',
  likes: 1223,
  comments: 212,
  shares: 2,
};

const postData1 = {
  id: 'p1',
  user: {
    id: 'u1',
    username: 'Nye',
    image:
      'https://cdn.vox-cdn.com/thumbor/lXm_AmbMRRUJVwsfcEdXd7D8D5Q=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/64062111/1_LGFTlvUlC8iJ5mi-UPF7Uw.0.0.0.jpeg',
  },
  videoUri:
    'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
  description: 'hello from hw help!',
  song: 'the beatles',
  songImage:
    'https://cdn.vox-cdn.com/thumbor/lXm_AmbMRRUJVwsfcEdXd7D8D5Q=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/64062111/1_LGFTlvUlC8iJ5mi-UPF7Uw.0.0.0.jpeg',
  likes: 1223,
  comments: 212,
  shares: 2,
};

const Home = () => {
  return (
    <View>
      <Post post={postData} />
      <Post post={postData1} />
    </View>
  );
};

export default Home;
