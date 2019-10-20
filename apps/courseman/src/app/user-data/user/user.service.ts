import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { UserEntity } from './user.entity';
import * as crypto from 'crypto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async findOne(user: {
    username: string;
    password: string;
  }): Promise<UserEntity> {
    console.debug(user.password);
    const findOneOptions = {
      username: user.username,
      password: crypto.createHmac('sha256', user.password).digest('hex')
    };
    return await this.userRepository.findOne({ where: findOneOptions });
  }
  async create(entity: {
    username: string;
    password: string;
  }): Promise<UserEntity> {
    // check uniqueness of username/email
    const user = await this.findOne(entity);

    if (user) {
      const errors = { username: 'Username and email must be unique.' };
      throw new HttpException(
        { message: 'Input data validation failed', errors },
        HttpStatus.BAD_REQUEST
      );
    }

    // create new user
    let userEntity = new UserEntity();
    userEntity.username = entity.username;
    userEntity.password = entity.password;

    const savedUser = await this.userRepository.save(userEntity);
    return savedUser;
  }

  async update(
    id: number,
    user: {
      username: string;
      password: string;
    }
  ): Promise<any> {
    return await this.userRepository.update(id, {
      username: user.username,
      password: user.password
    });
  }

  async delete(username: string): Promise<DeleteResult> {
    return await this.userRepository.delete({ username: username });
  }

  async findById(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      const errors = { User: ' not found' };
      throw new HttpException({ errors }, 401);
    }

    return user;
  }
}
