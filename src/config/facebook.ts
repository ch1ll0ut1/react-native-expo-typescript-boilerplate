import {
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
} from 'react-native-dotenv';

const facebook = Object.freeze({
  appId: FACEBOOK_APP_ID as string || '',
  appSecret: FACEBOOK_APP_SECRET as string || '',
});

export default facebook;
