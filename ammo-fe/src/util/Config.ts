interface IConfig {
    beUrl: string;
    port: number;
}

const buildConfig = (): IConfig => {
    return {
        beUrl: process.env.REACT_APP_BE_URL,
        port: parseInt(process.env.PORT, 10),
    };
};

export default buildConfig();
