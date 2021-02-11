import Bullet from 'shared/types/Bullet';

export enum BulletReducerActionType {
    RECEIVED_BULLET = 'RECEIVED_BULLET',
    RESET_BULLETS = 'RESET_BULLETS',
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
        case BulletReducerActionType.RESET_BULLETS:
            return [];
        default:
            return state;
    }
}
