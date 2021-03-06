import DbQueryFilter from "#types/DbQueryFilter";
import findAllRecords from "./findAllRecords";

async function findOneRecord<InputType, OutputType> (
    tableName: string,
    filter: DbQueryFilter<InputType>,
    returningFields?: string[]
): Promise<OutputType | null> | never {
    const filterWithLimit = {
        ...filter,
        limit: 1
    };

    const records = await findAllRecords<InputType, OutputType>(
        tableName,
        filterWithLimit,
        returningFields
    );

    return records[0];
}

export default findOneRecord;
