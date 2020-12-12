const urlWithoutOrigin = (url: string): string => {
    const u = new URL(url);
    return u.toString().replace(u.origin, '');
};

export default urlWithoutOrigin;
