const request = require('supertest');

const app = require('../../src/app');
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');


describe("Authenticate", () => {

    beforeEach(async () => {
        await truncate();
    });

    it("should authenticate with valid credentials", async () => {
        
        const user = await User.create({name: 'junior', email: 'junior@gmail.com', password: '123'})

        const response = await request(app)
            .post('/Sessions')
            .send({
                email: user.email,
                password: '123'
            })

        expect(response.status).toBe(200);
    })

    it("should not authenticate with invalid credentials", async () => {
        const user = await User.create({name: 'junior', email: 'junior@gmail.com', password: '123'})

        const response = await request(app)
            .post('/Sessions')
            .send({
                email: user.email,
                password: '321'
            })

        expect(response.status).toBe(401);
    })

    it("should return jwt token when authenticated", async () => {
        const user = await User.create({name: 'junior', email: 'junior@gmail.com', password: '123'})

        const response = await request(app)
            .post('/Sessions')
            .send({
                email: user.email,
                password: '123'
            })

        expect(response.body).toHaveProperty('token'); // falta terminar essa funcionalidade no models User
    })
});