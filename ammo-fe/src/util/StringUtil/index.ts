const isString = (obj: unknown): boolean => {
    return typeof obj === 'string';
};

const isJSON = (obj: unknown): boolean => {
    try {
        JSON.parse(obj as string);
        return true;
    } catch (e) {
        return false;
    }
};

const prettifyJSON = (json: string): string => {
    return JSON.stringify(JSON.parse(json), null, 4);
};

export { isString, isJSON, prettifyJSON };
