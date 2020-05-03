import { DestroyById } from "#utils/sql/ModelSqlGenerator";
import generateSqlAndQuery from "#utils/sql/generateSqlAndQuery";

async function destroyRecordById<OutputType> (
    tableName: string,
    id: number
): Promise<number | null> | never {
    const queryPayload = await generateSqlAndQuery<unknown, OutputType>(
        new DestroyById(tableName, id)
    );

    const deletedRecord = queryPayload[0];
    const deletedUserId = (deletedRecord as any)?.id || null;

    return deletedUserId;
}

export default destroyRecordById;