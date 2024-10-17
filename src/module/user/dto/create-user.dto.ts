import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Индентификатор пользователя',
    required: true,
    type: String,
  })
  @Expose()
  @IsString()
  userId: string;

  @ApiProperty({
    description: 'Логин пользователя',
    required: true,
    type: String,
  })
  @Expose()
  @IsString()
  login: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    required: true,
    type: String,
  })
  @Expose()
  @IsString()
  password: string;

  @ApiProperty({
    description: 'Телефон пользователя',
    required: true,
    type: String,
  })
  @Expose()
  @IsString()
  phone: string;

  @ApiProperty({
    description: 'Имя пользователя',
    required: true,
    type: String,
  })
  @Expose()
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'Фамилия пользователя',
    required: true,
    type: String,
  })
  @Expose()
  @IsString()
  lastName: string;

  @ApiProperty({
    description: 'Отчесвто пользователя',
    type: String,
  })
  @Expose()
  @IsString()
  middleName: string;

  @ApiProperty({
    description: 'E-mail пользователя',
    required: true,
    type: String,
  })
  @Expose()
  @IsString()
  @IsNotEmpty()
  email: string;
}
