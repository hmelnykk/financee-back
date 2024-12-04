import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/users.entity';
import { CreateUserDto } from './dto/create.user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async getAll() {
    return this.usersRepository.find({ relations: ['expenseLogs'] });
  }

  async getOne(id: number): Promise<UserEntity> {
    return this.usersRepository.findOne({
      where: { id: id },
      relations: ['expenseLogs'],
    });
  }

  async getOneByEmail(email: string): Promise<UserEntity> {
    return this.usersRepository.findOne({ where: { email: email } });
  }

  create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = new UserEntity();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.email = createUserDto.email;
    user.password = createUserDto.password;

    return this.usersRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete({ id: id });
  }

  async updateUser(id: number, body) {
    const user = await this.usersRepository.findOneBy({ id: id });
    if (!user) {
      throw new Error(`Not found id ${id}`);
    }

    Object.assign(user, {
      ...user,
      ...body,
    });

    this.usersRepository.save(user);
  }
}
