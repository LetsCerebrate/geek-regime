import express from "express";

import envLoader from "./env";
import expressLoader from "./express";
import logger from "#logger";
import pgLoader from "./pg";

async function init (app: express.Application): Promise<void> {
    envLoader();
    logger.info("🔵 Environment variables are ready");

    await pgLoader();
    logger.info("🔵 Database is ready");

    expressLoader({ app });
    logger.info("🔵 Express is ready");
}

export default {
    init
};
