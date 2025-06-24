const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const request = require('supertest');
const app = require('../../index');
const Book = require('../../models/Book');
// API Tests for /api/books endpoints using Supertest
describe('Book API Endpoint Tests', () => {
  let mongoServer;
  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });
  afterEach(async () => {
    await Book.deleteMany();
  });
  it('should create a new book', async () => {
    const res = await request(app)
      .post('/api/books')
      .send({ title: 'API Test Book', author: 'API Author', year: 2024 });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('API Test Book');
    expect(res.body.author).toBe('API Author');
    expect(res.body.year).toBe(2024);
  });
  it('should fetch all books', async () => {
    await Book.create({ title: 'Book1', author: 'Author1', year: 2020 });
    await Book.create({ title: 'Book2', author: 'Author2', year: 2021 });
    const res = await request(app).get('/api/books');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(2);
  });
  it('should fetch a book by ID', async () => {
    const book = await Book.create({ title: 'Book3', author: 'Author3', year: 2022 });
    const res = await request(app).get(`/api/books/${book._id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Book3');
    expect(res.body.author).toBe('Author3');
    expect(res.body.year).toBe(2022);
  });
  it('should update a book', async () => {
    const book = await Book.create({ title: 'Book4', author: 'Author4', year: 2023 });
    const res = await request(app)
      .put(`/api/books/${book._id}`)
      .send({ title: 'Updated Book4', author: 'Updated Author4', year: 2025 });
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Updated Book4');
    expect(res.body.author).toBe('Updated Author4');
    expect(res.body.year).toBe(2025);
  });
  it('should delete a book', async () => {
    const book = await Book.create({ title: 'Book5', author: 'Author5', year: 2024 });
    const res = await request(app).delete(`/api/books/${book._id}`);
    expect(res.statusCode).toBe(204);
    const found = await Book.findById(book._id);
    expect(found).toBeNull();
  });
  it('should return 404 for non-existent book', async () => {
    const fakeId = new mongoose.Types.ObjectId();
    const res = await request(app).get(`/api/books/${fakeId}`);
    expect(res.statusCode).toBe(404);
  });
});
