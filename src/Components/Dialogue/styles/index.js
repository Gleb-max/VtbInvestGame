import {StyleSheet} from 'react-native';
import Colors from '../../../Constants/Colors';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    width: 340,
    height: 230,
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
    flex: 1,
    elevation: 2,
  },
  nextImage: {
    width: 30,
    height: 30,
  },
  nextBtn: {
    position: 'absolute',
    bottom: 3,
    right: 3,
  },
});
