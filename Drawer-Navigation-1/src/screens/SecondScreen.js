import * as React from 'react';

import {
  Button,
  View,
  Text,
} from 'react-native';

const SecondScreen = ({ navigation }) => {
  return (
      <View style={{ flex: 1, padding: 16 }}>
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
            This is Second Page under Second Page Option
          </Text>
          <Button
            title="Go to First Page"
            onPress={
              () => navigation.navigate('FirstScreen')
            }
          />
          <Button
            title="Go to Third Page"
            onPress={
              () => navigation.navigate('ThirdScreen')
            }
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

export default SecondScreen;