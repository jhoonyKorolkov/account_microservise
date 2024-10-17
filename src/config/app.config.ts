import { IsEnum, IsString, IsNumber } from 'class-validator';
import { Enviroment } from './types/configurations.enum';

export class ApplicationConfig {
  @IsEnum(Enviroment, { always: true })
  NODE_ENV: Enviroment;

  @IsString({ always: true })
  SERVICE_NAME: string;

  @IsNumber({}, { always: true })
  HTTP_PORT: number;

  @IsString({ always: true })
  HTTP_HOST: string;

  @IsString({ always: true })
  HTTP_PREFIX: string;

  @IsNumber({}, { always: true })
  HTTP_VERSION: number;
}
