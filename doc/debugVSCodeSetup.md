# Vscode Debug Setup

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch",
            "type": "node",
            "request": "launch",
            "program": "${workspaceRoot}/src/app.js",
            "stopOnEntry": false,
            "args": [],
            "cwd": "${workspaceRoot}",
            "preLaunchTask": null,
            "runtimeExecutable": null,
            "runtimeArgs": ["--nolazy", "--require", "babel-register"],
            "env": {
                "NODE_ENV": "development"
            },
            "console": "integratedTerminal",
            "sourceMaps": true,
            "outFiles": ["${workspaceRoot}/dist/**/*.js"]
        },
        {
            "name": "Attach",
            "type": "node",
            "request": "attach",
            "port": 5858,
            "address": "localhost",
            "restart": false,
            "sourceMaps": false,
            "outFiles": [],
            "localRoot": "${workspaceRoot}",
            "remoteRoot": null
        },
        {
            "name": "Attach to Process",
            "type": "node",
            "request": "attach",
            "processId": "${command:PickProcess}",
            "port": 5858,
            "sourceMaps": false,
            "outFiles": []
        }
    ]
}
```
