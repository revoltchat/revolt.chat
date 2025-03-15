import { createContext, useContext } from "react"
import { DummyDatasource } from "../datasources/dummy.ts"

export interface Datasource {
    searchServers(query: string): Promise<string[]>
}

export const DatasourceContext = createContext<Datasource>(
    new DummyDatasource(),
)

export const useDatasource = () => {
    return useContext(DatasourceContext)
}
