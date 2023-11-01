export default () => ({
  port: parseInt(process.env.PORT, 10) || 3001,
  mongodb: {
    uri: process.env.MONGODB_URI,
  },
});
