import { MongoClient } from 'mongodb';
import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';

const client: MongoClient = new MongoClient(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function database(req: NextApiRequest, res: NextApiResponse, next) {
    if (!client.isConnected()) await client.connect();
    (req as any).dbClient = client;
    (req as any).db = client.db(process.env.MONGO_DB);
    return next();
}

const middleware = nc().use(database);
export default middleware;
