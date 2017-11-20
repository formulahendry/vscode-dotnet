"use strict";
import appInsights = require("applicationinsights");
import * as vscode from "vscode";
import { Utility } from "./utility";

export class AppInsightsClient {
    public static sendEvent(eventName: string, properties?: { [key: string]: string; }): void {
        if (this._enableTelemetry) {
            this._client.trackEvent({ name: eventName, properties });
        }
    }

    private static _client = new appInsights.TelemetryClient("2bfdfc27-d05c-4d8e-b628-4b0dc7b9a67e");
    private static _enableTelemetry = Utility.getConfiguration().get<boolean>("enableTelemetry");
}
