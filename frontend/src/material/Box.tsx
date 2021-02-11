import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import classNames from 'classnames';

// /!\ We override the Material-UI <Box> component because its performance is awful.
// We keep a specific component though, for a few convenience utilities implemented hereunder

const useStyles = makeStyles(() => ({
    boxShadow2: {
        boxShadow:
            'rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px',
    },
}));

// Extends <div> props
interface BoxProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {
    boxShadow?: number;
    children?: React.ReactNode;
}

const Box = React.forwardRef(
    (props: BoxProps, ref: React.RefObject<HTMLInputElement>): ReactElement => {
        const classes = useStyles();

        const { children, boxShadow, ...otherProps } = props;

        return (
            <div
                {...otherProps}
                ref={ref}
                className={classNames({
                    [props.className]: Boolean(props.className),
                    [classes.boxShadow2]: boxShadow === 2,
                })}
            >
                {children}
            </div>
        );
    }
);

export default Box;
