import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// ==========================================================
// ==========================================================
// ==========================================================

const useStyles = makeStyles((theme) => ({
    title: {
        color: theme.palette.secondary.light,
        margin: '8px 0',
    },
    values: {
        marginLeft: '24px',
    },
}));

interface TitleAndKeyValuesDescProps {
    title: string;
    obj: Record<string, string>;
}

export const TitleAndKeyValuesDesc = ({
    title,
    obj,
}: TitleAndKeyValuesDescProps): ReactElement => {
    const classes = useStyles();

    return (
        <Box>
            <Box className={classes.title}>
                <Typography variant="subtitle2">{title}</Typography>
            </Box>
            {obj &&
                Object.keys(obj).map((key, i) => {
                    return (
                        <Box key={i} className={classes.values}>
                            <Box>
                                <Typography variant="subtitle2">
                                    {key} : "{obj[key]}"
                                </Typography>
                            </Box>
                        </Box>
                    );
                })}
        </Box>
    );
};

// ==========================================================

interface TitleAndRawValueDescProps {
    title: string;
    obj: string;
}

export const TitleAndRawValueDesc = ({
    title,
    obj,
}: TitleAndRawValueDescProps): ReactElement => {
    const classes = useStyles();

    return (
        <Box>
            <Box className={classes.title}>
                <Typography variant="subtitle2">{title}</Typography>
            </Box>
            {obj && (
                <Box className={classes.values}>
                    <Box>
                        <Typography variant="subtitle2">{obj}</Typography>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

// ==========================================================
// ==========================================================
// ==========================================================

const useDelimiterStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '8px',
    },
    border: {
        borderTop: `1px solid ${theme.palette.secondary.dark}`,
        width: '100%',
        marginTop: '10px',
    },
    title: {
        margin: '0 7px',
    },
}));

interface DelimiterProps {
    title: string;
}

export const Delimiter = ({ title }: DelimiterProps): ReactElement => {
    const classes = useDelimiterStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.border}></Box>
            <Box className={classes.title}>
                <Typography variant="subtitle2">{title}</Typography>
            </Box>
            <Box className={classes.border}></Box>
        </Box>
    );
};
