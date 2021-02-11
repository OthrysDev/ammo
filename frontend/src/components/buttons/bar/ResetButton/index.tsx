import React, { ReactElement } from 'react';
import ResetIcon from 'assets/icons/reset.svg';
import BarButton from 'components/buttons/bar/BarButton';
import useBulletActions from 'redux/actions/useBulletActions';

const ResetButton = (): ReactElement => {
    const { resetBulletsAction } = useBulletActions();

    return (
        <BarButton uuid="reset" icon={ResetIcon} onClick={resetBulletsAction} />
    );
};

export default ResetButton;
