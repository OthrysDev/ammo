import { Bullet } from 'shared/types/Bullet';
import { bulletMock } from 'shared/mocks/Bullets';

const generateMockBullet = (index = 0): Bullet => {
    const mockBullet: Bullet = {
        ...bulletMock,
        id: `id${index}`,
    };

    return mockBullet;
};

const generateMockBullets = (index: number): Bullet[] => {
    const mockBullets = [];
    for (let i = 0; i < index; i += 1) mockBullets.push(generateMockBullet(i));
    return mockBullets;
};

export { generateMockBullet, generateMockBullets };
