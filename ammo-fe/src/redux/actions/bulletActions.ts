import { BulletReducerActionType } from 'redux/reducers/bulletReducer';
import { Bullet } from 'shared/types/Bullet';

export const addBullet = (bullet: Bullet): Record<string, unknown> => {
    return { type: BulletReducerActionType.RECEIVED_BULLET, bullet };
};

// Keep until we have more than one export, otherwise eslint complain
export default {};
