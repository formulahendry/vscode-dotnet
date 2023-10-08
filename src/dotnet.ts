"use strict";
import * as path from "path";
import * as vscode from "vscode";
import { AppInsightsClient } from "./appInsightsClient";
import { Executor } from "./executor";

export class Dotnet {
    public static build(fileUri: vscode.Uri) {
        if (fileUri && fileUri.fsPath) {
            Executor.runInTerminal(`dotnet build "${fileUri.fsPath}"`);
            AppInsightsClient.sendEvent("build", { fileExtension: path.extname(fileUri.fsPath) });
        }
    }

    public static run(fileUri: vscode.Uri) {
        if (fileUri && fileUri.fsPath) {
            Executor.runInTerminal(`dotnet run --project "${fileUri.fsPath}"`);
            AppInsightsClient.sendEvent("run", { fileExtension: path.extname(fileUri.fsPath) });
        }
    }

    public static watch(fileUri: vscode.Uri) {
        if (fileUri && fileUri.fsPath) {
            Executor.runInTerminal(`dotnet watch --project "${fileUri.fsPath}"`);
            AppInsightsClient.sendEvent("watch", { fileExtension: path.extname(fileUri.fsPath) });
        }
    }

    public static test(fileUri: vscode.Uri) {
        if (fileUri && fileUri.fsPath) {
            Executor.runInTerminal(`dotnet test "${fileUri.fsPath}"`);
            AppInsightsClient.sendEvent("test", { fileExtension: path.extname(fileUri.fsPath) });
        }
    }
}
