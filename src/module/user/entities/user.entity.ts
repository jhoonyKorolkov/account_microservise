import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user',
})
export class UserEntity {
  @PrimaryGeneratedColumn('uuid', {
    comment: 'Идентификатор пользователя',
    name: 'user_id',
  })
  readonly userId: string;

  @Column('varchar', {
    comment: 'Логин пользователя',
    nullable: false,
  })
  login: string;

  @Column('varchar', {
    comment: 'E-mail пользователя',
    nullable: false,
  })
  email: string;

  @Column('varchar', {
    comment: 'Номер телефона пользователя',
    nullable: false,
    length: 10,
  })
  phone: string;

  @Column('varchar', {
    comment: 'Имя',
  })
  firstName: string;

  @Column('varchar', {
    comment: 'Фамилия',
  })
  lastName: string;

  @Column('varchar', {
    comment: 'Хэш пароля',
  })
  passwordHash: string;

  @Column('varchar', {
    comment: 'Соль пароля',
  })
  passwordSalt: string;

  @Column('boolean', {
    comment: 'Был ли удален аккаунт',
    nullable: true,
    default: false,
  })
  isDeleted: boolean;
}
