import express from 'express';
import productRoutes from './routes/product.routes';

const app = express();

app.use(express.json());
app.use('/products', productRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
