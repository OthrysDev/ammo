// Here's the documentation used to figure out the mandatory fields of the HTTP protocol : https://quicwg.org/base-drafts/draft-ietf-quic-http.html#name-http-request-lifecycle

//* Side note, we cannot combine the ConnectorRequest type here, as this file is exported to the front-end, it'll not resolve the path to ConnectorRequest

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
        status: number;
    };
};
