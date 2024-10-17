import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserEntity1728750002088 implements MigrationInterface {
    name = 'AddUserEntity1728750002088'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "login" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying(10) NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "passwordHash" character varying NOT NULL, "passwordSalt" character varying NOT NULL, "isDeleted" boolean DEFAULT false, CONSTRAINT "PK_758b8ce7c18b9d347461b30228d" PRIMARY KEY ("user_id")); COMMENT ON COLUMN "user"."user_id" IS 'Идентификатор пользователя'; COMMENT ON COLUMN "user"."login" IS 'Логин пользователя'; COMMENT ON COLUMN "user"."email" IS 'E-mail пользователя'; COMMENT ON COLUMN "user"."phone" IS 'Номер телефона пользователя'; COMMENT ON COLUMN "user"."firstName" IS 'Имя'; COMMENT ON COLUMN "user"."lastName" IS 'Фамилия'; COMMENT ON COLUMN "user"."passwordHash" IS 'Хэш пароля'; COMMENT ON COLUMN "user"."passwordSalt" IS 'Соль пароля'; COMMENT ON COLUMN "user"."isDeleted" IS 'Был ли удален аккаунт'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
