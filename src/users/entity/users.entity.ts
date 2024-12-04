import { ExpenseLogsEntity } from 'src/expense.logs/entity/expense.logs.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => ExpenseLogsEntity, (expenseLogs) => expenseLogs.user)
  expenseLogs: ExpenseLogsEntity[];
}
