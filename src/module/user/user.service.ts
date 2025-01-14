import * as crypto from 'node:crypto';
import * as argon from 'argon2';
import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { GetUsersFilterDto } from './dto/get-user-filter.dto';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(user: CreateUserDto): Promise<UserDto> {
    console.log('Creating user with data:', user); // Логируем данные пользователя

    const userExist = await this.userRepository.checkExistUser({ phone: user.phone, login: user.login });

    if (userExist) {
      console.log('User already exists:', user); // Логируем, что пользователь уже существует
      throw new ConflictException('User already exists');
    }

    const salt = crypto.randomBytes(32);
    const hash = await argon.hash(user.password, { salt });

    const createdUser = await this.userRepository.createUser({
      passwordHash: hash,
      passwordSalt: salt.toString('hex'),
      ...user,
    });

    console.log('User created successfully:', createdUser); // Логируем успешное создание пользователя

    return new UserDto(createdUser); // Возвращаем объект UserDto
  }

  async findAll(getUserFilterDto: GetUsersFilterDto): Promise<{
    items: UserDto[];
    total: number;
  }> {
    const { items: users, total } = await this.userRepository.findAndCount(getUserFilterDto);
    const dtos = users.map((user) => new UserDto(user));
    return { items: dtos, total };
  }

  findOne(id: string) {
    return this.userRepository.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.updateUser({ userId: id, ...updateUserDto });
  }

  remove(id: string) {
    return this.userRepository.deleteUser(id);
  }
}
