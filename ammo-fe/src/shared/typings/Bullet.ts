export type Bullet = {
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
        body: unknown;
    };
    response: {
        headers: Record<string, string | string[]>;
        body: unknown;
        status: number;
    };
};
