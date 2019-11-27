import * as joi from "@hapi/joi";
import { ValidationsInterface } from "validations.i";

export const medicineInsert: ValidationsInterface = {
    body: {
        name: joi.string().required(),
        description: joi.string().optional()
    },
    params: {},
    query: {}
};

export const medicineSearch: ValidationsInterface = {
    body: {},
    params: {},
    query: {
        searchKey: joi.string().optional()
    }
};