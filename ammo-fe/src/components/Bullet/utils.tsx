import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FormattedMessage } from 'react-intl';
import i18n from 'types/i18n';

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
    uuid: string;
    title: i18n;
    obj: Record<string, string | string[]>;
}

export const TitleAndKeyValuesDesc = ({
    uuid,
    title,
    obj,
}: TitleAndKeyValuesDescProps): ReactElement => {
    const classes = useStyles();

    return (
        <Box data-cy={uuid}>
            <Box data-cy={`${uuid}-title`} className={classes.title}>
                <Typography variant="subtitle2">
                    <FormattedMessage id={title} />
                </Typography>
            </Box>
            {obj &&
                Object.keys(obj).map((key, i) => {
                    return (
                        <Box
                            data-cy={`${uuid}-line-${i}`}
                            key={`${uuid}-value-${i}`}
                            className={classes.values}
                        >
                            <Box>
                                <Typography variant="subtitle2">
                                    <span data-cy={`${uuid}-line-${i}-key`}>
                                        {key}
                                    </span>{' '}
                                    :{' '}
                                    <span data-cy={`${uuid}-line-${i}-value`}>
                                        "{obj[key]}"
                                    </span>
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
    uuid: string;
    title: i18n;
    obj: unknown;
}

export const TitleAndRawValueDesc = ({
    uuid,
    title,
    obj,
}: TitleAndRawValueDescProps): ReactElement => {
    const classes = useStyles();

    return (
        <Box data-cy={uuid}>
            <Box data-cy={`${uuid}-title`} className={classes.title}>
                <Typography variant="subtitle2">
                    <FormattedMessage id={title} />
                </Typography>
            </Box>
            {obj && (
                <Box data-cy={`${uuid}-value`} className={classes.values}>
                    <Box>
                        <Typography variant="subtitle2">
                            {JSON.stringify(obj)}
                        </Typography>
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
    title: i18n;
}

export const Delimiter = ({ title }: DelimiterProps): ReactElement => {
    const classes = useDelimiterStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.border}></Box>
            <Box className={classes.title}>
                <Typography variant="subtitle2">
                    <FormattedMessage id={title} />
                </Typography>
            </Box>
            <Box className={classes.border}></Box>
        </Box>
    );
};
