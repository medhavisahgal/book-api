const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Book = require('../../models/Book');
describe('Book Model Unit Tests', () => {
  let mongoServer;
  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });
  afterEach(async () => {
    await Book.deleteMany();
  });
  it('should create and save a book successfully', async () => {
    const validBook = new Book({ title: 'Test Book', author: 'Author', year: 2023 });
    const savedBook = await validBook.save();
    expect(savedBook._id).toBeDefined();
    expect(savedBook.title).toBe('Test Book');
    expect(savedBook.author).toBe('Author');
    expect(savedBook.year).toBe(2023);
  });
  it('should fail to create a book without required fields', async () => {
    const bookWithoutRequiredField = new Book({ title: 'No Author' });
    let err;
    try {
      await bookWithoutRequiredField.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.author).toBeDefined();
    expect(err.errors.year).toBeDefined();
  });

  it('should fail to create a book with invalid year type', async () => {
    const bookWithInvalidYear = new Book({ title: 'Bad Year', author: 'Author', year: 'not-a-number' });
    let err;
    try {
      await bookWithInvalidYear.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.year).toBeDefined();
  });

  it('should call save method (mocked) without touching the database', async () => {
    const saveMock = jest.spyOn(Book.prototype, 'save').mockImplementationOnce(async function () {
      this._id = 'mockedid123';
      return this;
    });
    const book = new Book({ title: 'Mocked Book', author: 'Mock Author', year: 2022 });
    const savedBook = await book.save();
    expect(saveMock).toHaveBeenCalled();
    expect(savedBook.title).toBe('Mocked Book');
    expect(savedBook._id).toBeDefined();
    saveMock.mockRestore();
  });
});
