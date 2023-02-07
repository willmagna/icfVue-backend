module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1234),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '065e66d4abc669e7bd377ad1ca127065'),
    },
  },
});
