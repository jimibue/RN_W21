import React, {useState} from 'react';
import {
  Button,
  Pressable,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import AppText from './AppText';
import AppView from './AppView';

const Demo1 = props => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('press');
  return (
    <AppView border>
      <AppText large centered style={{color: 'red'}}>
        {props.title}
      </AppText>
      <AppView border>
        <AppText small>Count: {count}</AppText>
      </AppView>
      <AppView style={styles.btnGroup}>
        <TouchableOpacity style={styles.border}>
          <AppText onPress={() => setCount(count + 1)}>Add</AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.border}
          onPress={() => setCount(count - 1)}>
          <AppText>Minus</AppText>
        </TouchableOpacity>
      </AppView>
      <Button onPress={() => setCount(0)} title="reset" />
      <Pressable
        onPressIn={() => setText('onPressIn')}
        onPressOut={() => setText('onPressOut')}
        onPress={() => setText('onPress')}
        onLongPress={() => setText('onLongPress')}>
        <AppText centered>{text}</AppText>
      </Pressable>
    </AppView>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    margin: 20,
    borderWidth: 2,
    borderColor: '#456789',
    display: 'flex',
    justifyContent: 'center',
  },
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  border: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#456789',
  },
});

export default Demo1;
