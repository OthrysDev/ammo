import express from 'express';

const VersionRouter = express.Router();

VersionRouter.get(
    '/version',
    (req, res): express.Response => {
        return res.status(200).json({ version: '0.0.1' });
    }
);

export default VersionRouter;
