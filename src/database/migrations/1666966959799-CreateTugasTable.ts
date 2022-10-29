import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTugasTable1666966959799 implements MigrationInterface {
  name = 'CreateTugasTable1666966959799';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tugas" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" text NOT NULL, "assigneeId" integer, CONSTRAINT "REL_a4cb3c4a55d5f1a57530719667" UNIQUE ("assigneeId"), CONSTRAINT "PK_c47128bea268a373b07dd6ba74a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "tugas" ADD CONSTRAINT "FK_a4cb3c4a55d5f1a575307196670" FOREIGN KEY ("assigneeId") REFERENCES "karyawan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tugas" DROP CONSTRAINT "FK_a4cb3c4a55d5f1a575307196670"`,
    );
    await queryRunner.query(`DROP TABLE "tugas"`);
  }
}
