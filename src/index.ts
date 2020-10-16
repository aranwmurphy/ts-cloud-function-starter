// tslint:disable-next-line: no-submodule-imports
import { Context } from "@google-cloud/functions-framework/build/src/functions";
import { Request, Response } from "express";

const { env } = process;

// TODO: create event interfaces for different event types
// tslint:disable-next-line: no-empty-interface
interface IEvent {}

async function httpTemplate(req: Request, res: Response): Promise<any> {
    // ... Insert body here
}

async function eventTemplate(event: IEvent, ctx: Context): Promise<any> {
    // ... Insert body here
}

exports.httpTemplate = httpTemplate;
exports.eventTemplate = eventTemplate;