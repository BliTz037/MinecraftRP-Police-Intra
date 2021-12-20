import express, { Application, Request, Response } from 'express';
import routes from './routes';

const app: Application = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

app.use('*', async (req: Request, res: Response): Promise<Response> => {
    return res.status(404).send({ response: `Route not found !` });
})

try {
    app.listen(port, () => {
        console.log(`MinecraftRP intra police API server running on http://localhost:${port}`);
    })
} catch (error) {
    console.log(`Error occured: ${error}`);
};