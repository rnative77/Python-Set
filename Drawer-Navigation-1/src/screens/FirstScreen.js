import * as React from 'react';

import {
  Button,
  View,
  Text,
} from 'react-native';

const FirstScreen = ({ navigation }) => {
  return (
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            This is the First Page under First Page Option
          </Text>
          <Button
            onPress={
              () => navigation.navigate('SecondScreen')
            }
            title="Go to Second Page"
          />
          <Button
            onPress={
              () => navigation.navigate('ThirdScreen')
            }
            title="Go to Third Page"
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          React Navigate Drawer
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.aboutreact.com
        </Text>
      </View>
  );
}

export default FirstScreen;