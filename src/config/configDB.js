const mongoose =  require('mongoose');

const connection = async (app) => {
    try {
        await mongoose.connect(process.env.URL_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
};

module.exports = connection;

