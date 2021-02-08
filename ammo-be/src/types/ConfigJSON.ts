import HTTPProtocol from 'types/HTTPProtocol';

export default interface ConfigJSON {
    protocol: HTTPProtocol;
    host: string;
    port: number;
    feUrl: string;
}
