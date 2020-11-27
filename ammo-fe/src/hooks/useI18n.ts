import { useIntl } from 'react-intl';
import { FormatXMLElementFn } from 'intl-messageformat';

const useI18n = (): ((
    id: string,
    values?:
        | Record<
              string,
              | string
              | number
              | boolean
              | Date
              | FormatXMLElementFn<string, string>
              | null
              | undefined
          >
        | undefined
) => string) => {
    const intl = useIntl();

    const i18n = (
        id: string,
        values?:
            | Record<
                  string,
                  | string
                  | number
                  | boolean
                  | Date
                  | FormatXMLElementFn<string, string>
                  | null
                  | undefined
              >
            | undefined
    ): string => intl.formatMessage({ id }, values);

    return i18n;
};

export default useI18n;
