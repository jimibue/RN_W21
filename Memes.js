import React, {useState, useEffect} from 'react';
import AppView from './AppView';
import AppText from './AppText';
import axios from 'axios';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Memes = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [imgURL, setImageURL] = useState('');
  useEffect(() => {
    getMemes();
  }, []);
  const getMemes = async () => {
    try {
      let res = await axios.get('https://heroku-w21.herokuapp.com/api/memes');
      setMemes(res.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      Alert.alert('Err occured', JSON.stringify(err.response.status), [
        {
          cancelable: true,
          onDismiss: () =>
            Alert.alert(
              'This alert was dismissed by tapping outside of the alert dialog.',
            ),
        },
      ]);
    }
  };

  const renderMemes = () => {
    return memes.map(m => {
      return (
        <AppView border>
          <AppText large>{m.title}</AppText>
          <AppText small>{m.image_url}</AppText>
          <Image
            style={{width: 300, height: 300}}
            source={{uri: m.image_url}}
          />
        </AppView>
      );
    });
  };

  const addMeme = async () => {
    try {
      let res = await axios.post(
        'https://heroku-w21.herokuapp.com/api/memes_url',
        {
          title: title,
          image_url: imgURL,
        },
      );
      setMemes([res.data, ...memes]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AppView border>
      <AppText large centered>
        Memes
      </AppText>
      <AppText>New Meme</AppText>
      <TextInput
        style={{height: 40, borderWidth: 1}}
        value={title}
        onChangeText={setTitle}
      />
      <AppText>Image url</AppText>
      <TextInput
        style={{height: 40, borderWidth: 1}}
        value={imgURL}
        onChangeText={setImageURL}
      />
      <TouchableOpacity onPress={addMeme}>
        <AppText>add</AppText>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" />}
      {!loading && renderMemes()}
    </AppView>
  );
};

export default Memes;
