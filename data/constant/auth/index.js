import { deepFreeze } from '../../../lib/util/deepFreeze';

export const AUTH = deepFreeze({
    LOGIN_AUTHORIZATION_KEY: (process.env.NODE_ENV === 'production') ? 'NjdpVTY2R2M2cmU0N1lLazdKeUU3WUcwNjUyODdKYTQ6N1lLazdKeUU2N2lVNjZHYzZyZTQ3SXVjN1lHczY2YTg=' : 'NjdpVTY2R2M2cmU0N1lLazdKeUU3WUcwNjUyODdKYTQ6N1lLazdKeUU2N2lVNjZHYzZyZTQ3SXVjN1lHczY2YTg=',
});
