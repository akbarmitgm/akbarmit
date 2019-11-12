module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  //mongoUri: process.env.MONGODB_URI ||
  //  process.env.MONGO_HOST ||
  //  'mongodb://' + (process.env.IP || 'localhost') + ':' +
  //  (process.env.MONGO_PORT || '27017') +
  //  '/conalumni',
  mongoUri: 'mongodb+srv://starinfoteckdotcom:STARinfoteck17051977@cluster0-kcwzr.mongodb.net/conalumni?retryWrites=true&w=majority',
  secretOrKey: 'secret'
};

//export default config
