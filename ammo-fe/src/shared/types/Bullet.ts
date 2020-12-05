// /!\ We cannot extend ConnectorRequest here, as this file is exported to the front-end, whereas ConnectorRequest is not

export type Bullet = {
    id: string;
    date: Date;
    url: string;
    method:
        | 'GET'
        | 'PUT'
        | 'POST'
        | 'DELETE'
        | 'HEAD'
        | 'CONNECT'
        | 'OPTIONS'
        | 'TRACE'
        | 'PATCH';
    request: {
        headers: Record<string, string | string[]>;
        body?: unknown;
    };
    response: {
        headers: Record<string, string | string[]>;
        body?: unknown;
        status?: number;
    };
};
