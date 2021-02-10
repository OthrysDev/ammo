import Bullet from 'shared/types/Bullet';

interface IScripter {
    // Entry point
    script: (index: number, bullet: Bullet) => string;

    // Other public methods
    varName: (index: number, bullet: Bullet) => string;

    // Private methods
    _description: (bullet: Bullet) => string;
    _reqHeaders: (bullet: Bullet) => string[];
    _reqBody: (bullet: Bullet) => string | null;
}

export default IScripter;
