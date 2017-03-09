import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';

let router = express();

//connect to the database
initializeDb(db => {

    //internal middleware
    router.use(middleware({config, fb}));
    //api routes v1 (/v1)
});

export default router;
