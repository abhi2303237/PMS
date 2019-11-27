import * as joi from "@hapi/joi";
import { ValidationsInterface } from "validations.i";

export const unitInsert: ValidationsInterface = {
    body: {
        name: joi.string().required(),
        description: joi.string().optional()
    },
    params: {},
    query: {}
};

export const unitSearch: ValidationsInterface = {
    body: {},
    params: {},
    query: {
        searchKey: joi.string().optional()
    }
};