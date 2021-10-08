import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import commonStyles from '../../MixIn/commonStyles';

const Dialogue = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/mechanic.png')}
        style={styles.image}
      />
      <SafeAreaView style={styles.textContainer}>
        <ScrollView>
          <Text style={commonStyles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            consectetur dignissimos dolore dolores et eum, explicabo facere hic,
            illo maxime mollitia nam nobis placeat reiciendis sapiente, sequi
            unde voluptatibus. Optio.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Dialogue;
