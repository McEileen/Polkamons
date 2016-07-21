/* eslint-disable no-param-reassign */
import joi from 'joi';

const polkamonSchema = {
  name: joi.string().required(),
  image: joi.string().uri().required(),
};

module.exports = (req, res, next) => {
  const result = joi.validate(req.body, polkamonSchema);

  if (result.error) {
    res.status(400).send({ messages: result.error.details.map(d => d.message) });
  } else {
    res.locals = result.value;
    next();
  }
};
