// tslint:disable-next-line: no-submodule-imports
import { Context } from "@google-cloud/functions-framework/build/src/functions";
import { Request, Response } from "express";

const { env } = process;

/*
 * If creating an event function, it is recommended to create an
 * interface for the type of event. The example below is a basic
 * (incomplete) interface for pub/sub functions
 */
interface IPubSubEvent {
    data: string;
}

async function httpTemplate(req: Request, res: Response): Promise<any> {
    // ... Insert body here
}

async function eventTemplate(event: IPubSubEvent, ctx: Context): Promise<any> {
    // ... Insert body here
}

exports.httpTemplate = httpTemplate;
exports.eventTemplate = eventTemplate;