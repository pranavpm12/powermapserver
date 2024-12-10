const express = require('express');
const cors =require('cors')
const authRouter = require('./src/routes/authRouter');
const product = require('./src/routes/product');
const contact = require('./src/routes/contact');
const viewUsers = require('./src/routes/viewUsers');
const viewContact = require('./src/routes/viewContact');
const vehicleModelRoutes = require('./src/routes/vehicleModelRoutes');
const feedbackRouter = require('./src/routes/feedback');
const { default: mongoose } = require('mongoose');
const stationRouter = require('./src/routes/stationRouter');

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('home page');
});

app.use('/auth', authRouter);
app.use('/product', product);
app.use('/contact', contact);
app.use('/viewUsers', viewUsers);
app.use('/viewContact', viewContact);
app.use('/vehicleModels', vehicleModelRoutes);
app.use('/feedback', feedbackRouter);
app.use('/station', stationRouter);

mongoose.connect('mongodb+srv://pranavpm12:pranavpm12@cluster0.kpo3v.mongodb.net/powermapdb?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        app.listen('4000', () => {
            console.log('Server is running at http://localhost:4000/');
        });
    })
    .catch((error) => {
        console.log(error);
    });
