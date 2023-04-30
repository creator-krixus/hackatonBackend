const createApp = require('./app')
const app = createApp()

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`)
})