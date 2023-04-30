const request = require('supertest');
const mongoose = require('mongoose');

const createApp = require('../src/app')

describe('test for users path',()=>{
    let app = null;
    let server = null;
    let api = null;
    // Conexion a la base de datos
    beforeAll(async () => {
        await mongoose.connect(process.env.URL_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });
    // Cerrar la conexion a la base de datos despues de terminadas las pruebas
    afterAll(async () => {
        await mongoose.connection.close();
    });

    beforeEach((done)=>{
        app = createApp();
        server = app.listen(9000, () => {
            console.log(`Server started on port ${9000}`);
        });
        api = request(app);
        done();
    });

    describe('Test for POST /users',() => {
    // Mantra de las tres AAA para pruebas arrange, act, assert
        it('Should return a 400 Bad request email invalid', async ()=>{
            // Arrange datos que voy a enviar para probar
            const inputData = {
                nombre:'wilson',
                email:'asdsadas.com',
                password: '12345',
                confirmPassword: '12345'
            }
            // Act
            const response = await api.post('/api/v1/users/register').send(inputData).expect(400).expect('Content-Type', /json/);
            // Assert
            expect(response.body.isOk).toBe(false);
            expect(response.body.msj).toBe('Invalid email');
        })
        it('Should return a 400 Bad request password invalid', async ()=>{
            // Arrange los que le voy a enviar
            const inputData = {
                nombre:'wilson',
                email:'asdsadas.com',
                password: '12345',
                confirmPassword: '1234'
            }
            // Act
            const response = await api.post('/api/v1/users/register').send(inputData).expect(400).expect('Content-Type', /json/);
            // Assert
            expect(response.body.isOk).toBe(false);
            expect(response.body.msj).toBe('Passwords do not match');
        })
        it('Should return a 400 Bad request email duplicate', async ()=>{
            // Arrange lo que le voy a enviar
            const inputData = {
                nombre:'wilson',
                email:'email@gmail.com',
                password: '12345',
                confirmPassword: '12345'
            }
            // Act
            const response = await api.post('/api/v1/users/register').send(inputData).expect(400).expect('Content-Type', /json/);
            // Assert
            expect(response.body.isOk).toBe(false);
            expect(response.body.msj).toBe('Email is already in use');
        })
        it('Return status 200 user create sucessfull', async ()=>{
            // Arrange lo que le voy a enviar
            const inputData = {
                nombre:'prueba',
                email:'email212@gmail.com',
                password: '12345',
                confirmPassword: '12345'
            }
            // Act
            const response = await api.post('/api/v1/users/register').send(inputData).expect(200).expect('Content-Type', /json/);
            // Assert
            expect(response.body.isOk).toBe(true);
            expect(response.body.msj).toBe('User created');
        })
    })

    describe('Test for GET /users',() => {
        it('Get /api/v1/users', async ()=>{
           const response = await api.get('/api/v1/users').expect(200).expect('Content-Type', /json/);
        })
    })
    describe('Test for GET /users/id',() => {
        it('Get /api/v1/users', async ()=>{
           const inputId = '644dcd5964a1a68cdb581721'
           const response = await api.get(`/api/v1/users/${inputId}`).expect(200).expect('Content-Type', /json/);
           console.log(response.body)
        })
        it('Should return 500', async() => {
            const inputId = '62c507f9244fe546cccd31f'
            const response = await api.get(`/api/v1/users/${inputId}`).expect(500).expect('Content-Type', /json/);
            console.log(response.body)
            expect(response.body.isOk).toBe(false);
            expect(response.body.msj).toBe('user not found');
        })
    })

    afterEach((done)=>{
        server.close(done);
    })
})