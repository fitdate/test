import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Test } from './entities/test.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private testRepository: Repository<Test>,
  ) {}

  create(createTestDto: CreateTestDto) {
    const test = this.testRepository.create(createTestDto);
    return this.testRepository.save(test);
  }

  findAll() {
    return this.testRepository.find();
  }

  findOne(id: number) {
    return this.testRepository.findOneBy({ id });
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return this.testRepository.update(id, updateTestDto);
  }

  remove(id: number) {
    return this.testRepository.delete(id);
  }
}
