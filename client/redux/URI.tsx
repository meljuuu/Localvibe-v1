import {Platform} from 'react-native';

let URI = '';

if (Platform.OS === 'ios') {
  URI = 'https://localvibe-delta.vercel.app/api/v1';
} else {
  URI = 'https://localvibe-delta.vercel.app/api/v1';
}

export {URI};
