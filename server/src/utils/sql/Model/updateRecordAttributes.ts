import { UpdateAttributes } from "#utils/sql/ModelSqlGenerator";
import generateSqlAndQuery from "#utils/sql/generateSqlAndQuery";

async function updateRecordAttributes<InputType, OutputType> (
    tableName: string,
    id: number,
    props: InputType
): Promise<OutputType | null> | never {
    const queryPayload = await generateSqlAndQuery<InputType, OutputType>(
        new UpdateAttributes(tableName, id),
        props
    );

    return queryPayload[0];
}

export default updateRecordAttributes;

// Returns null if there was nothing to update.
