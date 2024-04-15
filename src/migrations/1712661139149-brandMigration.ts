import { MigrationInterface, Table, QueryRunner } from "typeorm";

export class BrandMigration1712661139149 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "questions",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    }
                ]
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // const table = await queryRunner.getTable("answer")
        // const foreignKey = table.foreignKeys.find(
        //     (fk) => fk.columnNames.indexOf("questionId") !== -1,
        // )
        // await queryRunner.dropForeignKey("answer", foreignKey)
        // await queryRunner.dropColumn("answer", "questionId")
        // await queryRunner.dropTable("answer")
        // await queryRunner.dropIndex("question", "IDX_QUESTION_NAME")
        // await queryRunner.dropTable("question")
    }

}
