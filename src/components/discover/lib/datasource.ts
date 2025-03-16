import { createContext, useContext } from "react"
import { DummyDatasource } from "../datasources/dummy.ts"
import type { RevoltTheme } from "./decl.ts"

export interface Datasource {
    getThemes: () => Promise<RevoltTheme[]>
    searchThemes: (query: string) => Promise<RevoltTheme[]>
}

export const DatasourceContext = createContext<Datasource>(
    new DummyDatasource(),
)

export const useDatasource = () => {
    return useContext(DatasourceContext)
}
