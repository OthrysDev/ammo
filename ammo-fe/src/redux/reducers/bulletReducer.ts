import { Bullet } from 'shared/types/Bullet';

export enum BulletReducerActionType {
    RECEIVED_BULLET = 'RECEIVED_BULLET',
}

type BulletReducerAction = {
    type: BulletReducerActionType;
    bullet?: Bullet;
};

export type BulletReducerState = Bullet[];

export default function bulletReducer(
    state = [],
    action: BulletReducerAction
): BulletReducerState {
    switch (action.type) {
        case BulletReducerActionType.RECEIVED_BULLET:
            return [...state, action.bullet];
        default:
            return state;
    }
}
