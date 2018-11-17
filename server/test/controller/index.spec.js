import requests from 'supertest';
import app from '../../server';

const api = new requests(app);

describe('GET /', () => {
  it('hould serve welcome route', (done) => {
    api.get('/')
      .end((err, res) => {
        expect(res.status).toEqual(200);
        expect(JSON.parse(res.text).message).toEqual('Welcome to phone number generator');
        done();
      });
  });
});

describe('GET /numbers', () => {
  it('should return all completed number jobs', (done) => {
    api.get('/numbers')
      .end((err, res) => {
        expect(res.status).toEqual(200);
        expect(JSON.parse(res.text).message).toEqual('Completed Job loaded sucessfully');
        expect(Array.isArray(JSON.parse(res.text).data)).toBe(true);
        expect(JSON.parse(res.text).data.length).toBeGreaterThan(0);
        done();
      });
  });
});


describe('POST /numbers', () => {
  it('should create numbers', (done) => {
    api.post('/numbers')
      .end((err, res) => {
        expect(res.status).toEqual(201);
        expect(JSON.parse(res.text).message).toEqual('Numbers Created');
        expect(Array.isArray(JSON.parse(res.text).data.numbers)).toBe(true);
        expect(JSON.parse(res.text).data.numbers.length).toBeGreaterThan(0);
        expect(JSON.parse(res.text).data.size).not.toBe(undefined);
        expect(JSON.parse(res.text).data.minNumber).not.toBe(undefined);
        expect(JSON.parse(res.text).data.maxNumber).not.toBe(undefined);
        expect(JSON.parse(res.text).data.filePath).not.toBe(undefined);
        expect(JSON.parse(res.text).data.name).not.toBe(undefined);
        expect(JSON.parse(res.text).data.numbers[0]).toEqual(JSON.parse(res.text).data.minNumber);
        expect(JSON.parse(res.text).data.numbers[JSON.parse(res.text).data.numbers.length -1])
          .toEqual(JSON.parse(res.text).data.maxNumber);
        done();
      });
  });
});

describe('GET /all_numbers', () => {
  it('should get all created numbers', (done) => {
    api.get('/all_numbers')
      .end((err, res) => {
        expect(res.status).toEqual(200);
        expect(JSON.parse(res.text).message).toEqual('Numbers loaded sucessfully');
        expect(Array.isArray(JSON.parse(res.text).data.numbers)).toBe(true);
        expect(JSON.parse(res.text).data.numbers.length).toBeGreaterThan(0);
        done();
      });
  });
});
