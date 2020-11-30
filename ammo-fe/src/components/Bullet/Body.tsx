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

interface BodyProps {
    uuid: string;
    body?: unknown;
}

const Body = ({ uuid, body }: BodyProps): ReactElement => {
    const classes = useStyles();

    return (
        <Box data-cy={uuid}>
            <Box data-cy={`${uuid}-title`} className={classes.title}>
                <Typography variant="subtitle2">
                    <FormattedMessage id="Body" />
                </Typography>
            </Box>
            {body && (
                <Box data-cy={`${uuid}-value`} className={classes.values}>
                    <Typography variant="subtitle2">
                        {JSON.stringify(body)}
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default Body;
