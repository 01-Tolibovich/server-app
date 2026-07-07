import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './create-users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  getAllUsers() {
    return this.usersRepository.find();
  }

  getUserById(id: number) {
    const user = this.usersRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  createUser(body: CreateUserDto) {
    const name = body.name;
    const age = body.age;
    const bio = body.bio;

    const newUser = this.usersRepository.create({ name, age, bio });

    return this.usersRepository.save(newUser);
  }
}
