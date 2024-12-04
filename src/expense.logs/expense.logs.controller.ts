import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ExpenseLogsService } from './expense.logs.service';
import { ExpenseLogsEntity } from './entity/expense.logs.entity';

@Controller('expense-logs')
export class ExpenseLogsController {
  constructor(private readonly expenseLogsService: ExpenseLogsService) {}

  @Post()
  create(@Body() log: Partial<ExpenseLogsEntity>): Promise<ExpenseLogsEntity> {
    return this.expenseLogsService.create(log);
  }

  @Get()
  findAll(): Promise<ExpenseLogsEntity[]> {
    return this.expenseLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ExpenseLogsEntity> {
    return this.expenseLogsService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() log: Partial<ExpenseLogsEntity>,
  ): Promise<ExpenseLogsEntity> {
    return this.expenseLogsService.update(id, log);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.expenseLogsService.remove(id);
  }
}
