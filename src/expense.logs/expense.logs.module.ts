import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseLogsEntity } from './entity/expense.logs.entity';
import { ExpenseLogsService } from './expense.logs.service';
import { ExpenseLogsController } from './expense.logs.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseLogsEntity])],
  providers: [ExpenseLogsService],
  controllers: [ExpenseLogsController],
})
export class ExpenseLogsModule {}
