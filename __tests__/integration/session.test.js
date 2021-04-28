const request = require('supertest');

const app = require('../../src/app');
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');


describe("Authenticate", () => {

    beforeEach(async () => {
        await truncate();
    });

    it("should authenticate with valid credentials", async () => {
        
        const user = await User.create({name: 'junior', email: 'junior@gmail.com', password_hash: '123'})

        const response = await request(app)
            .post('/Sessions')
            .send({
                email: user.email,
                password: '123'
            })

        expect(response.status).toBe(200);
    })
});