import { Bullet } from 'shared/typings/Bullet';

type BulletReducerAction = {
    type: 'RECEIVED_BULLET';
    bullet: Bullet;
};

export type BulletReducerState = Bullet[];

export default function bulletReducer(
    state = [],
    action: BulletReducerAction
): BulletReducerState {
    switch (action.type) {
        case 'RECEIVED_BULLET':
            return [...state, action.bullet];
        default:
            return state;
    }
}
