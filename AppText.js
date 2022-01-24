import React from 'react';
import {Text} from 'react-native';

const AppText = props => {
  const getFontSize = () => {
    if (props.large) {
      return 40;
    }
    if (props.small) {
      return 10;
    }
    return 20;
  };

  const getTextAlign = () => {
    return props.centered ? 'center' : 'left';
  };

  return (
    <Text
      style={{
        fontSize: getFontSize(),
        textAlign: getTextAlign(),
        ...props.style,
      }}>
      {' '}
      {props.children}
    </Text>
  );
};

export default AppText;
