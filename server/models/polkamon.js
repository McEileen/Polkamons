import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const polkamonSchema = new Schema({
  name: { type: String },
  image: { type: String },
  dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Polkamon', polkamonSchema);
