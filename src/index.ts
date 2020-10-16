// tslint:disable-next-line: no-submodule-imports
import { CloudEventsContext } from "@google-cloud/functions-framework/build/src/functions";
import { Request, Response } from "express";

function httpTemplate(req: Request, res: Response) {
    // ... Insert body here
}

exports.httpTemplate = httpTemplate;

function eventTemplate(data: {}, context: CloudEventsContext, callback: Function) {
    // ... Insert body here
}

exports.eventTemplate = eventTemplate;