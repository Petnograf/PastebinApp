# PastebinApp

Hello and welcome to the Pastebin App.

Here is a step by step on how to run the app. Open the root folder in VS Code. You should open a terminal from the root of the app and type in the following commands.

```
npm install && cd ios && pod install
cd ../
```

3. Add env file to the app
You should create a .env file in the root of the app and add your Pastebin API key:
```
PASTEBIN_API_KEY=examplePastebinApiKey
```

You have 3 different options to run the app.

**Running the app using VS Code Debugger**
1. If you want to launch the app with the VS Code debugger you might need to add a file to the .vscode folder in the root of the app. The file name should be "launch.json" and the following code should be copied into it:

```
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Debug iOS",
            "cwd": "${workspaceFolder}",
            "type": "reactnative",
            "request": "launch",
            "platform": "ios"
        }
    ]
}
```

2. In VS Code select the "Run and Debug" section and start the debugger in the top left corner (Green start button)

**Running the App from a terminal in VS Code**
1. If you are not using the debugger you can run the app from the terminal. Open a terminal in VS Code and run the following command: "react-native run-ios". VS Code should open the simulator automatically and start building the app.

**Running the App from Xcode**
1. You can also run the app using Xcode. You should open Xcode and select "Open a project or file"

2. You need to open the workspace file for the app. It is found in root > ios > PastebinApp.xcworkspace.

3. Select desired simulator from the top bar and press start (Play button next to the top bar)
