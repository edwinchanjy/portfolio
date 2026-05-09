Search for API endpoints across Postman workspaces.

**Usage:** `/postman-search <query>`

---

Query: $ARGUMENTS

## Steps

### 1. Search private network

Call `mcp__plugin_postman_postman__searchPostmanElementsInPrivateNetwork` with the query from $ARGUMENTS.
This searches across all collections, APIs, and workspaces your team has published to the private API network.

### 2. If few/no results, also search collections directly

If the private network search returns fewer than 3 results:
- Call `mcp__plugin_postman_postman__getWorkspaces` to get all workspaces.
- For each workspace, call `mcp__plugin_postman_postman__getCollections`.
- Filter collection names that contain the query term (case-insensitive).

### 3. Present results

For each match, show:
- **Name** — collection or request name
- **Method** — HTTP method (GET, POST, PUT, DELETE, PATCH)
- **URL** — endpoint path
- **Workspace** — which workspace it belongs to
- **Collection ID** — for use with other commands

Group results by collection. If a result is a full collection rather than a specific request, say so and suggest drilling in with `/postman-browse <workspace-id>/<collection-id>`.

### 4. Suggest next steps

After showing results, tell the user:
- `/postman-browse <workspace-id>/<collection-id>` — explore the full collection
- `/postman-implement <collection-id>/<request-name>` — generate typed client code for an endpoint
