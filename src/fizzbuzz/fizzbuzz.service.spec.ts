import { Test, TestingModule } from '@nestjs/testing';
import { FizzbuzzService } from './fizzbuzz.service';

describe('FizzbuzzService', () => {
  let service: FizzbuzzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FizzbuzzService],
    }).compile();

    service = module.get<FizzbuzzService>(FizzbuzzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return Fizz when number is multiple of 3', () => {
    expect(service.fizzbuzz(3)).toBe('Fizz');
  });

  it('should return Buzz when number is multiple of 5', () => {
    expect(service.fizzbuzz(5)).toBe('Buzz');
  });

  it('should return FizzBuzz when number is multiple of 15', () => {
    expect(service.fizzbuzz(15)).toBe('FizzBuzz');
  });

  it('should return the number when number is neither mulitple of 3, 5 nor 15', () => {
    expect(service.fizzbuzz(2)).toBe(2);
  });

  it('should return nothing when number is not between 1 and 100', () => {
    expect(service.fizzbuzz(0)).toBeUndefined();
    expect(service.fizzbuzz(101)).toBeUndefined();
  });
});
