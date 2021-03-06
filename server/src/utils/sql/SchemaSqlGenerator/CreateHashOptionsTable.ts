import { HASH_OPTIONS, USERS } from "#utils/const/database/tableNames";
import { PUBLIC } from "#utils/const/database/schemaNames";
import SchemaSqlGenerator from "./SchemaSqlGenerator";

class CreateHashOptionsTable extends SchemaSqlGenerator<unknown> {
    constructor () {
        super(PUBLIC);
    }

    protected getText (): string {
        return `
            CREATE TABLE IF NOT EXISTS "${HASH_OPTIONS}" (
                "id" SERIAL PRIMARY KEY,
                "hash" BYTEA NOT NULL,
                "salt" VARCHAR(255) NOT NULL,
                "digest" VARCHAR(255) NOT NULL,
                "iterations" INTEGER NOT NULL,
                "keyLength" INTEGER NOT NULL,
                "createdAt" TIMESTAMP DEFAULT NOW() NOT NULL,
                "updatedAt" TIMESTAMP DEFAULT NOW() NOT NULL,
                "userId" INTEGER UNIQUE NOT NULL
                    REFERENCES "${USERS}" ("id")
                    ON DELETE CASCADE
                    ON UPDATE CASCADE
            );

            CREATE INDEX IF NOT EXISTS idx_ho_hash ON "${HASH_OPTIONS}" ("hash");
            CREATE INDEX IF NOT EXISTS idx_ho_user_id ON "${HASH_OPTIONS}" ("userId");
        `;
    }
}

export default CreateHashOptionsTable;
