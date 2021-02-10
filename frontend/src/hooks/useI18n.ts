import { useIntl } from 'react-intl';
import { FormatXMLElementFn } from 'intl-messageformat';

type I18nValues =
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
    | undefined;

const useI18n = (): ((id: string, values?: I18nValues) => string) => {
    const intl = useIntl();

    const i18n = (id: string, values?: I18nValues): string =>
        intl.formatMessage({ id }, values);

    return i18n;
};

export default useI18n;
