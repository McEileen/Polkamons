/* eslint-disable new-cap */

import express from 'express';
import Polkamon from '../models/polkamon';
import bodyValidator from '../validators/body';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Polkamon.find().exec((err, polkamons) => {
    res.send({ polkamons });
  });
});

router.post('/', bodyValidator, (req, res) => {
  Polkamon.create(res.locals, (err, polkamon) => {
    res.send({ polkamon });
  });
});

