/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.jsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://accounts:Sbwh92WHZvXO@ep-withered-tooth-a5ov8b4e.us-east-2.aws.neon.tech/Id-Expo?sslmode=require',
  }
};