import 'dotenv/config'
import express from 'express'
import { searchMovies, getMovieDetails } from './controllers/movieController.js';
import movieRoutes from './routes/movieRoutes.js'

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use('/api', movieRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})

