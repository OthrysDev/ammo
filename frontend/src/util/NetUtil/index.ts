const urlWithoutOrigin = (url: string): string => {
    const u = new URL(url);
    return u.toString().replace(u.origin, '');
};

const isHttpErrorCode = (code: number): boolean => {
    // https://developer.mozilla.org/fr/docs/Web/HTTP/Status
    return code >= 400;
};

export { urlWithoutOrigin, isHttpErrorCode };
