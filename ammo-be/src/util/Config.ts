/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
import config from 'config/config.json';
import packageJSON from 'package.json';
import PackageJSON from 'types/PackageJSON';
import ConfigJSON from 'types/ConfigJSON';

// Final config is a merge of package.json & config.json properties,
// with some added props
interface IConfig extends PackageJSON, ConfigJSON {
    url: string;
}

const buildConfig = (): IConfig => {
    const castPackage = (packageJSON as unknown) as PackageJSON;
    const castConfig = (config as unknown) as ConfigJSON;

    // Merge the config file with the package.json
    const conf: IConfig = {
        name: castPackage.name,
        version: castPackage.version,
        description: castPackage.description,
        url: `${castConfig.protocol}://${castConfig.host}:${castConfig.port}`,
        ...castConfig,
    };

    return conf;
};

export default buildConfig();
