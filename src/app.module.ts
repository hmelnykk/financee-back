import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ExpenseLogsModule } from './expense.logs/expense.logs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 1488,
      username: 'root',
      password: 'AXProduct2024',
      database: 'financee',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    ExpenseLogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
