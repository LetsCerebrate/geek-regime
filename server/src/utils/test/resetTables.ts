import createTablesIfNotExist from "#utils/helpers/createTablesIfNotExist";
import resetSchema from "#utils/test/resetSchema";

async function resetTables (schemaName?: string): Promise<void> {
    await resetSchema(schemaName);
    await createTablesIfNotExist();
}

export default resetTables;
