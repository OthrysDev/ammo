## Bind your VSCode with Prettier

-   On Mac press Cmd + Shift + P, and go to "Preferences: Open Settings (JSON)"
-   Once there, lookup for the "[typescript]" line, and replace the actual editor value by this :
    ```json
    "editor.defaultFormatter": "esbenp.prettier-vscode"
    ```
-   Add both of this lines aswell if you haven't yet :
    ```json
    "editor.formatOnSave": true,
    ```

Doing so, you'll automatically format your files using prettier each time you save your changes.
