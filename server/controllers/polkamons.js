/* eslint-disable new-cap */

import express from 'express';
import Polkamon from '../models/polkamon';
// import bodyValidator from '../validators/body';
import passport from 'passport';
const auth = passport.authenticate('jwt', { session: false });
const router = module.exports = express.Router();

router.get('/', auth, (req, res) => {
  Polkamon.find().exec((err, polkamons) => {
    res.send({ polkamons });
  });
});

router.post('/', auth, (req, res) => {
  Polkamon.create(req.body, (err, polkamon) => {
    res.send({ polkamon });
  });
});

