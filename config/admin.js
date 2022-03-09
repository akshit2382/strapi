module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cb8a660b21a44d75fc0afb4833754b26'),
  },
});
