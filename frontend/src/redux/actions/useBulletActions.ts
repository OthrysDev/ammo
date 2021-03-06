import { useDispatch } from 'react-redux';
import Bullet from 'shared/types/Bullet';
import { BulletReducerActionType } from 'redux/reducers/bulletReducer';

type BulletActions = {
    addBulletAction: (bullet: Bullet) => Record<string, unknown>;
    resetBulletsAction: () => Record<string, unknown>;
};

const useBulletActions = (): BulletActions => {
    const dispatch = useDispatch();

    const addBulletAction = (bullet: Bullet): Record<string, unknown> => {
        return dispatch({
            type: BulletReducerActionType.RECEIVED_BULLET,
            bullet,
        });
    };

    const resetBulletsAction = (): Record<string, unknown> => {
        return dispatch({
            type: BulletReducerActionType.RESET_BULLETS,
        });
    };

    return {
        addBulletAction,
        resetBulletsAction,
    };
};

export default useBulletActions;
