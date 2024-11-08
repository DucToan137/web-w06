import express from 'express';
import path from 'path';
import productRouter from "./src/Product/route.js";
import productDetailsRouter from "./src/ProductDetails/route.js";
import serviceFactory from './src/Factory/serviceFactory.js';

const productService=serviceFactory.getProductSerVice();

const app = express();
const PORT = 3000;
app.use(express.static(path.join(process.cwd(), 'public')));
app.set('view engine', 'ejs');

app.set('views', path.join(process.cwd(), 'public', 'views'));


app.use("/products", productRouter);
app.use("/productDetails",productDetailsRouter);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
