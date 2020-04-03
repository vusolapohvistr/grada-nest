import {MigrationInterface, QueryRunner} from "typeorm";

export class usernamelength1585909232385 implements MigrationInterface {
    name = 'usernamelength1585909232385'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_78a916df40e02a9deb1c4b75ed"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "username" character varying(100) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username")`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying(100) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`, undefined);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_78a916df40e02a9deb1c4b75ed" ON "user" ("username") `, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_78a916df40e02a9deb1c4b75ed"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying(50) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "username" character varying(50) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username")`, undefined);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_78a916df40e02a9deb1c4b75ed" ON "user" ("username") `, undefined);
    }

}
