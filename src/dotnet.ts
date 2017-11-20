"use strict";
import * as vscode from "vscode";
import { AppInsightsClient } from "./appInsightsClient";
import { Executor } from "./executor";

export class Dotnet {
    public static build(fileUri: vscode.Uri) {
        if (fileUri && fileUri.fsPath) {
            Executor.runInTerminal(`dotnet build "${fileUri.fsPath}"`);
            AppInsightsClient.sendEvent("build");
        }
    }

    public static run(fileUri: vscode.Uri) {
        if (fileUri && fileUri.fsPath) {
            Executor.runInTerminal(`dotnet run --project "${fileUri.fsPath}"`);
            AppInsightsClient.sendEvent("run");
        }
    }

    public static test(fileUri: vscode.Uri) {
        if (fileUri && fileUri.fsPath) {
            Executor.runInTerminal(`dotnet test "${fileUri.fsPath}"`);
            AppInsightsClient.sendEvent("test");
        }
    }
}
