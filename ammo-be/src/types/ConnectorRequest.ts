import HttpMethod from 'shared/types/HttpMethod';

// Documentation of the HTTP protocol for mandatory / optionnal fields : https://quicwg.org/base-drafts/draft-ietf-quic-http.html#name-http-request-lifecycle

export type ConnectorRequest = {
    url: string;
    method: HttpMethod;
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
