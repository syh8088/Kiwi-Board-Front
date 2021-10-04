import { deepFreeze } from '../../../lib/util/deepFreeze';

export const AUTH = deepFreeze({
    LOGIN_AUTHORIZATION_KEY: (process.env.NODE_ENV === 'production') ? 'NjdpVTY2R2M2cmU0N1lLazdKeUU3WUcwNjUyODdKYTQ6N1lLazdKeUU2N2lVNjZHYzZyZTQ3SXVjN1lHczY2YTg=' : 'NjdpVTY2R2M2cmU0N1lLazdKeUU3WUcwNjUyODdKYTQ6N1lLazdKeUU2N2lVNjZHYzZyZTQ3SXVjN1lHczY2YTg=',
    KAKAO_CLIENT_ID: { CLIENT_ID: (process.env.NODE_ENV === 'production') ? '1734a25f48770457e8140ea7a41a4cc9' : '1734a25f48770457e8140ea7a41a4cc9' },
});
