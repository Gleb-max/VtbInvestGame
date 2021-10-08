import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import Slider from 'react-native-slider';
import commonStyles from '../../MixIn/commonStyles';
import {styles} from './styles';
import Colors from '../../Constants/Colors';
import SimpleButton from '../../Components/SimpleButton';

const WelcomeScreen = () => {
  const [sliderValue, setSliderValue] = useState(1100000);
  const [showAnswer, setShowAnswer] = useState(false);

  const getBeautifulValue = () => {
    return sliderValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <View style={commonStyles.container}>
      <View style={styles.infoContainer}>
        <Text style={[commonStyles.text, styles.text]}>
          {'Чтобы шикануть как на миллион\n в 2014 году нужно:'}
        </Text>

        <Text
          style={[commonStyles.text, styles.sliderText, {marginBottom: 20}]}>
          {getBeautifulValue()}
        </Text>

        <Slider
          maximumValue={2000000}
          minimumValue={100000}
          value={sliderValue}
          onValueChange={value => setSliderValue(parseInt(value))}
          minimumTrackTintColor={Colors.darkBlue}
          maximumTrackTintColor={Colors.darkBlue}
          thumbTintColor={Colors.darkBlue}
          step={10000}
        />

        {showAnswer ? (
          <View>
            <Text
              style={[
                commonStyles.text,
                styles.text,
                {marginTop: 20, color: Colors.predarkBlue},
              ]}>
              {
                'Чтобы чувствовать себя так же,\nкак с миллионом в 2014 году,\nсейчас нужно 1.45 млн.'
              }
            </Text>
            <Text
              style={[
                commonStyles.text,
                styles.text,
                {color: Colors.darkBlue},
              ]}>
              {'Инфляция составила 45% 😳'}
            </Text>
            <SimpleButton
              text={'Далее'}
              onPress={() => console.warn('not implement')}
              containerStyle={{alignSelf: 'center', marginTop: 20, width: 100}}
            />
          </View>
        ) : (
          <SimpleButton
            text={'Узнать ответ'}
            containerStyle={{alignSelf: 'center', marginTop: 20}}
            onPress={() => {
              setSliderValue(1450000);
              setShowAnswer(true);
            }}
          />
        )}
      </View>
    </View>
  );
};

export default WelcomeScreen;
