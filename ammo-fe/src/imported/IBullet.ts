interface IBullet {
    url: string;
    method: string;
    date: Date;
    request: {
        body: string;
        headers: Record<string, string>;
    };
    response: {
        body: string;
        headers: Record<string, string>;
        status: number;
    };
}

export default IBullet;
