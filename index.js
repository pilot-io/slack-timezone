import express from 'express';

const app = express();
app.set('port', (process.env.PORT || 5000));

// Start the server
app.listen(app.get('port'), function() {
    console.log('App is running on port', app.get('port'));
});