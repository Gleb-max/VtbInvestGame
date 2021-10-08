import React from 'react';
import {View, Text} from 'react-native';

import commonStyles from '../../MixIn/commonStyles';

import Slider from 'react-native-slider';

import Colors from '../../Constants/Colors';

import SimpleButton from '../../Components/SimpleButton';

import {saveUser, updateUser} from '../../Utils/Storage';

//other deps
// import SwitchSelector from 'react-native-switch-selector';

//components
// import { PressableIcon, CustomDropDown } from 'library/components';

//styles
import styles from './Welcome.styles';
// import { GilroyText, SMIcons } from 'library/components/atoms';

export const WelcomeView = ({onWelcomeComplete}) => {
  const [sliderValue, setSliderValue] = React.useState(1100000);
  const [showAnswer, setShowAnswer] = React.useState(false);

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
            <Text style={[commonStyles.text, styles.text, {marginTop: 20}]}>
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
              onPress={() => {
                updateUser({lookedWelcome: true});
                onWelcomeComplete();
              }}
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
