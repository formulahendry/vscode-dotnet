"use strict";
import * as vscode from "vscode";
import { Dotnet } from "./dotnet";
import { Executor } from "./executor";

export function activate(context: vscode.ExtensionContext) {

    context.subscriptions.push(vscode.commands.registerCommand("dotnet.build", (fileUri: vscode.Uri) => {
        Dotnet.build(fileUri);
    }));

    context.subscriptions.push(vscode.commands.registerCommand("dotnet.run", (fileUri: vscode.Uri) => {
        Dotnet.run(fileUri);
    }));

    context.subscriptions.push(vscode.commands.registerCommand("dotnet.test", (fileUri: vscode.Uri) => {
        Dotnet.test(fileUri);
    }));

    context.subscriptions.push(vscode.window.onDidCloseTerminal((closedTerminal: vscode.Terminal) => {
        Executor.onDidCloseTerminal(closedTerminal);
    }));
}

export function deactivate() {
}
