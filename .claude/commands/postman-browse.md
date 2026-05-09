Browse Postman workspaces, collections, and endpoints.

**Usage:**

- `/postman-browse` — list all accessible workspaces
- `/postman-browse <workspace-id>` — list all collections in a workspace
- `/postman-browse <workspace-id>/<collection-id>` — list all requests in a collection

---

Arguments: $ARGUMENTS

Parse $ARGUMENTS to determine what to fetch:

## If $ARGUMENTS is empty — list workspaces

1. Call `mcp__plugin_postman_postman__getWorkspaces` to retrieve all workspaces.
2. Present each workspace with its ID, name, and type (personal/team/public) in a clear table.
3. Tell the user to run `/postman-browse <workspace-id>` to explore a workspace.

## If $ARGUMENTS contains one segment (workspace ID) — list collections

1. Call `mcp__plugin_postman_postman__getCollections` with the workspace ID.
2. Present each collection with its ID, name, and description.
3. Also call `mcp__plugin_postman_postman__getAllSpecs` with the workspace ID to list any OpenAPI specs.
4. Tell the user to run `/postman-browse <workspace-id>/<collection-id>` to drill into a collection.

## If $ARGUMENTS contains two segments separated by `/` — list requests in collection

1. Call `mcp__plugin_postman_postman__getCollection` with the collection ID (second segment).
2. Walk through the collection's `item` array recursively — folders contain nested `item` arrays.
3. Present all requests in a flat list showing: method (GET/POST/etc.), name, and URL path.
4. Group by folder if folders exist.
5. Tell the user to run `/postman-implement <collection-id>/<request-name>` to generate typed client code for a specific endpoint.

Format results as a concise, scannable list. IDs should be clearly visible for copy-pasting.
