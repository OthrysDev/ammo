import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import classNames from 'classnames';

// /!\ We override the Material-UI <Typography> component because its performance is awful.

const useStyles = makeStyles(() => ({
    subtitle1: {
        fontSize: '1rem',
        fontFamily: 'Arial',
        fontWeight: 400,
        lineHeight: '1.5',
    },
    subtitle2: {
        fontSize: '0.875rem',
        fontFamily: 'Arial',
        lineHeight: '1.57',
        fontWeight: 500,
    },
    h4: {
        fontSize: '2.125rem',
        fontFamily: 'Arial',
        fontWeight: 400,
        lineHeight: '1.235',
    },
    button: {
        fontSize: '0.875rem',
        fontFamily: 'Arial',
        fontWeight: 500,
        lineHeight: '1.75',
        textTransform: 'uppercase',
    },
}));

type Variant = 'subtitle1' | 'subtitle2' | 'h4' | 'button';

interface TypographyProps {
    variant?: Variant;
    children: React.ReactNode;
}

const Typography = ({
    variant = 'subtitle1',
    children,
}: TypographyProps): ReactElement => {
    const classes = useStyles();

    return (
        <span
            className={classNames({
                [classes[variant]]: true,
            })}
        >
            {children}
        </span>
    );
};

export default Typography;
