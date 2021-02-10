import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

interface UseMQOutput {
    isSMDown: boolean;
}

const useMQ = (): UseMQOutput => {
    const theme = useTheme();
    const isSMDown = useMediaQuery(theme.breakpoints.down('sm'));

    return { isSMDown };
};

export default useMQ;
