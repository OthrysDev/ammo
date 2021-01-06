export default interface HTTPError {
    error: {
        name: string;
        message: string;
        stack?: string;
        status: number;
        text: string;
        method: string;
        path: string;
    };
}
