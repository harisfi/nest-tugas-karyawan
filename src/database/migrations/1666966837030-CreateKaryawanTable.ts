import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateKaryawanTable1666966837030 implements MigrationInterface {
  name = 'CreateKaryawanTable1666966837030';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "karyawan" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_fdb8d1ca3cdb99f669a0d9085a9" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "karyawan"`);
  }
}
