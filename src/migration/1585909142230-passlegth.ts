import {MigrationInterface, QueryRunner} from "typeorm";

export class passlegth1585909142230 implements MigrationInterface {
    name = 'passlegth1585909142230'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_638bac731294171648258260ff2"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(255) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_638bac731294171648258260ff2" UNIQUE ("password")`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_638bac731294171648258260ff2"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(50) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_638bac731294171648258260ff2" UNIQUE ("password")`, undefined);
    }

}
