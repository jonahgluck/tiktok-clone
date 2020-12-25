import {StyleSheet, Dimensions} from 'react-native';

let height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height - 0.05 * height,
  },

  //   videPlayButton: {
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     bottom: 0,
  //     right: 0,
  //     zIndex: 100,
  //   },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    padding: 10,
    justifyContent: 'space-between',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  handle: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
    fontWeight: '700',
    marginBottom: 8,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
    fontWeight: '300',
    marginBottom: 5,
    alignContent: 'flex-start',
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 3,
    alignItems: 'flex-start',
  },
  songName: {
    color: '#fff',
    fontSize: 16,
    marginLeft: -20,
  },
  songImage: {
    alignItems: 'flex-start',
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  rightContainer: {
    alignSelf: 'flex-end',
    height: 300,
    justifyContent: 'space-between',
    marginRight: 5,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  iconContainer: {
    alignItems: 'center',
  },
  statsLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
});

export default styles;
