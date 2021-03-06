// tslint:disable-next-line: no-submodule-imports
import { Context } from "@google-cloud/functions-framework/build/src/functions";
import { Request, Response } from "express";

const { env } = process;

// tslint:disable-next-line: no-empty-interface
interface IEvent {}

async function httpTemplate(req: Request, res: Response): Promise<any> {
    try {
        // ... insert body here
        return res.status(200).json({});
    } catch (err) {
        // ... handle errors here
    }
}

async function eventTemplate(event: IEvent, ctx: Context): Promise<any> {
    try {
        // ... insert body here
    } catch (err) {
        // ... handle errors here
    }
}

exports.httpTemplate = httpTemplate;
exports.eventTemplate = eventTemplate;