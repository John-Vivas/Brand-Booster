import paymentRoutes from './src/routes/payment.routes.js'
import express from 'express';
import { PORT } from './src/config/config.js';

const app = express()
const port = PORT

app.get('/', (req, res) => {
    res.send('Hello world')
})
app.use(paymentRoutes)
app.listen(port, () => {
    console.log('app listening on port ' + port)
})