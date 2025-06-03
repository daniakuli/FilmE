export default ({ config }) => ({
  ...config,
  extra: {
    ...config.extra,
    serverUrl: process.env.SERVER_URL || 'http://localhost:4000',
  },
});
