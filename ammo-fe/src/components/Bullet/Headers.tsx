import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles((theme) => ({
    title: {
        color: theme.palette.secondary.light,
        margin: '8px 0',
    },
    values: {
        marginLeft: '24px',
        wordBreak: 'break-word',
    },
}));

interface HeadersProps {
    uuid: string;
    headers: Record<string, string | string[]>;
}

const Headers = ({ uuid, headers }: HeadersProps): ReactElement => {
    const classes = useStyles();

    return (
        <Box data-cy={uuid}>
            <Box data-cy={`${uuid}-title`} className={classes.title}>
                <Typography variant="subtitle2">
                    <FormattedMessage id="Headers" />
                </Typography>
            </Box>
            {Object.keys(headers).map((key, i) => (
                <Box
                    data-cy={`${uuid}-line-${i}`}
                    key={`${uuid}-value-${i}`}
                    className={classes.values}
                >
                    <Typography variant="subtitle2">
                        <span data-cy={`${uuid}-line-${i}-key`}>{key}</span> :{' '}
                        <span data-cy={`${uuid}-line-${i}-value`}>
                            "{headers[key]}"
                        </span>
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};

export default Headers;
