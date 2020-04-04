import {MigrationInterface, QueryRunner} from "typeorm";

export class profile1585912879837 implements MigrationInterface {
    name = 'profile1585912879837'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile" ALTER COLUMN "name" SET DEFAULT ''`, undefined);
        await queryRunner.query(`ALTER TABLE "profile" ALTER COLUMN "surname" SET DEFAULT ''`, undefined);
        await queryRunner.query(`ALTER TABLE "profile" ALTER COLUMN "city" SET DEFAULT ''`, undefined);
        await queryRunner.query(`ALTER TABLE "profile" ALTER COLUMN "country" SET DEFAULT ''`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile" ALTER COLUMN "country" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "profile" ALTER COLUMN "city" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "profile" ALTER COLUMN "surname" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "profile" ALTER COLUMN "name" DROP DEFAULT`, undefined);
    }

}
