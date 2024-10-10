import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon('postgresql://accounts:Sbwh92WHZvXO@ep-withered-tooth-a5ov8b4e.us-east-2.aws.neon.tech/Id-Expo?sslmode=require');
export const db = drizzle(sql,{schema});
