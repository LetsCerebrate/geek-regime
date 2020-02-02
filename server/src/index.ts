import "module-alias/register";
import dotenv from "dotenv";

import Validator from "utils/Validator";
import terminateProcess from "utils/terminateProcess";

const validator = new Validator();

const { error, value } = validator.validateObject(
    process.env,
    "NODE_ENV"
);

if (error) {
    console.error(error);
    terminateProcess();
}

const nodeEnv = value.NODE_ENV;

if (nodeEnv === "development") {
    dotenv.config();
}

export default require("./app");
