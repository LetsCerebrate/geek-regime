import redis from "redis";

import { DEFAULT_EXPIRE_IN_SEC } from "#utils/const/caching";
import ParamsWithId from "#types/ParamsWithId";
import RedisPromises from "./RedisPromises";
import { createKey, stringifyValue } from "./helpers";
import isJSON from "#utils/helpers/isJSON";

class RedisClient {
    private methods: RedisPromises

    constructor (private client: redis.RedisClient) {
        this.client = client;
        this.methods = new RedisPromises(client);
    }

    getClient (): redis.RedisClient {
        return this.client;
    }

    createKey (originalUrl: string, params: ParamsWithId): string {
        return (params.id)
            ? createKey(originalUrl)
            : "";
    }

    async get (key: string): Promise<any> | never {
        const value = await this.methods.get(key);

        return (value && isJSON(value))
            ? JSON.parse(value)
            : value;
    }

    set (key: string, value: unknown): Promise<string> | never {
        return this.methods.set(key, stringifyValue(value));
    }

    setEX (
        key: string,
        value: unknown,
        expireInSec = DEFAULT_EXPIRE_IN_SEC
    ): Promise<string> | never {
        return this.methods.setex(key, expireInSec, stringifyValue(value));
    }

    async delete (...keys: string[]): Promise<boolean> | never {
        const result = await this.methods.del(...keys);
        return Boolean(result);
    }
}

export default RedisClient;
