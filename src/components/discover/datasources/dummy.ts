import { Datasource } from "../lib/datasource.ts"

export class DummyDatasource implements Datasource {
    async searchServers(query: string): Promise<string[]> {
        return ["server1", "server2"]
    }
}
