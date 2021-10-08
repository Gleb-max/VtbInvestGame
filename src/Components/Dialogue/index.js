import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import commonStyles from '../../MixIn/commonStyles';

const Dialogue = props => {
  // props:
  //   messages: array
  //   onFinish: function to be called after showing all messages
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    if (props.messages && dialogueIndex < props.messages.length) {
      setText(props.messages[dialogueIndex]);
      return;
    }

    console.log('dialogue finished');
    if (props.onFinish) {
      props.onFinish();
    }
  }, [dialogueIndex]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/mechanic.png')}
        style={styles.image}
      />
      <SafeAreaView style={styles.textContainer}>
        <ScrollView>
          <Text style={commonStyles.text}>{text}</Text>
        </ScrollView>
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => setDialogueIndex(dialogueIndex + 1)}>
          <Image
            source={require('../../../assets/images/next.png')}
            style={styles.nextImage}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Dialogue;
