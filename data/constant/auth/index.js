import { deepFreeze } from '../../../lib/util/deepFreeze';

export const AUTH = deepFreeze({
    LOGIN_AUTHORIZATION_KEY: (process.env.NODE_ENV === 'production') ? 'emV5b191c2VyOmlhbXVzZXI=' : 'emV5b191c2VyOmlhbXVzZXI=',
    ZEYO_API_KEY: (process.env.NODE_ENV === 'production') ? 'QVntgqTsu6jqt7hQSVpF7ZS8Tw==' : 'QVntgqTsu6jqt7hQSVpF7ZS8Tw==',
    HERONATION_API_LOGIN_KEY: (process.env.NODE_ENV === 'production') ? '66Gc6re4T1Prk5zsnKDsl5RaRVlU7J24VEU=' : '66Gc6re4T1Prk5zsnKDsl5RaRVlU7J24VEU=',

    kakaoClientId: { client_id: (process.env.NODE_ENV === 'production') ? '4c6e3906dac73254b51d6eff39f3deca' : '4c6e3906dac73254b51d6eff39f3deca' },
    naverClientId: { client_id: (process.env.NODE_ENV === 'production') ? '2Yqnyyq6DASU2fLKyIrA' : '2Yqnyyq6DASU2fLKyIrA' },
    googleClientId: { client_id: (process.env.NODE_ENV === 'production') ? '377318499072-4an5a9pv4l60m57f99gnr1asi7q0al20.apps.googleusercontent.com' : '377318499072-4an5a9pv4l60m57f99gnr1asi7q0al20.apps.googleusercontent.com' },
});
