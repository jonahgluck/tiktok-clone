import {StyleSheet, Dimensions} from 'react-native';

let height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height * '.9',
  },

  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  videPlayButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 100,
  },
  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
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
    marginBottom: 7,
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
    marginLeft: 20,
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
    paddingBottom: 10,
    marginBottom: 20,
    borderColor: '#fff',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 18,
  },
  statsLabel: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 5,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    paddingBottom: 10,
    marginBottom: 20,
    marginRight: -3,
  },
});

export default styles;
