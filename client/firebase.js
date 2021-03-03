import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAI6bhbuKe2VzisFUpq1_bJhxRxpnvd_PI',
  authDomain: 'followalong-user.firebaseapp.com',
  databaseURL: 'https://followalong-user-default-rtdb.firebaseio.com',
  projectId: 'followalong-user',
  storageBucket: 'followalong-user.appspot.com',
  messagingSenderId: '419886321851',
  appId: '1:419886321851:web:30ddb2bd5796bb3fbb599e'

})

export const auth = app.auth()
export default app
