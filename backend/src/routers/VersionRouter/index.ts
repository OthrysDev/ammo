import express from 'express';
import Config from 'util/Config';

const VersionRouter = express.Router();

VersionRouter.get(
    '/version',
    (req, res): express.Response => {
        return res.status(200).json({ version: Config.version });
    }
);

export default VersionRouter;
