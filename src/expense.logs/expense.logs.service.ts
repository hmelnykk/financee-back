import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExpenseLogsEntity } from './entity/expense.logs.entity';

@Injectable()
export class ExpenseLogsService {
  constructor(
    @InjectRepository(ExpenseLogsEntity)
    private expenseLogRepository: Repository<ExpenseLogsEntity>,
  ) {}

  create(log: Partial<ExpenseLogsEntity>): Promise<ExpenseLogsEntity> {
    const newLog = this.expenseLogRepository.create(log);
    return this.expenseLogRepository.save(newLog);
  }

  findAll(): Promise<ExpenseLogsEntity[]> {
    return this.expenseLogRepository.find({ relations: ['user'] });
  }

  findOne(id: number): Promise<ExpenseLogsEntity> {
    return this.expenseLogRepository.findOne({
      where: { id },
      relations: ['user'],
    });
  }

  update(
    id: number,
    log: Partial<ExpenseLogsEntity>,
  ): Promise<ExpenseLogsEntity> {
    return this.expenseLogRepository.save({ id, ...log });
  }

  async remove(id: number): Promise<void> {
    await this.expenseLogRepository.delete(id);
  }
}
