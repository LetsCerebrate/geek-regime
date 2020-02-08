import DbAsyncQueryPayload from "types/DbAsyncQueryPayload";
import ModelProps from "types/ModelProps";
import PgQuery from "./PgQuery";

class UpdateAttributesQuery<Type> extends PgQuery<Type> {
    constructor (
        tableName: string,
        recordId: string,
        queryName: string = "update-attributes"
    ) {
        super(tableName, recordId, queryName);
    }

    async query (
        props: ModelProps
    ): DbAsyncQueryPayload<Type> | never {
        try {
            return await this.sendQueryAndGetPayload({
                name: this.queryName,
                text: this.getText(props),
                values: this.getValues(props)
            });
        } catch (error) {
            throw error;
        }
    }

    private getText (
        props: ModelProps
    ): string {
        const { setClause, andClause } = this.createClauses(props);

        return `
            UPDATE ${this.tableName}
            SET ${setClause}
            WHERE id = $1
            AND (${andClause})
            RETURNING *;
        `;
    }

    private createClauses (props: ModelProps) {
        let count = this.offset;

        const setClauseRows: string[] = [];
        const andClauseRows: string[] = [];

        for (const key in props) {
            count++;
            setClauseRows.push(`${key} = COALESCE($${count}, ${key})`);
            andClauseRows.push(`$${count} IS DISTINCT FROM ${key}`);
        }

        return {
            setClause: setClauseRows.join(", "),
            andClause: andClauseRows.join(" OR ")
        };
    }
}

export default UpdateAttributesQuery;