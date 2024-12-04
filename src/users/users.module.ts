import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/users.entity';
import { ExpenseLogsEntity } from 'src/expense.logs/entity/expense.logs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, ExpenseLogsEntity])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
