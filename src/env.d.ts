/// <reference path="../.astro/types.d.ts" />
import "styled-components"
import { DiscoverConfig } from "./components/discover/lib/config.ts"

declare module "styled-components" {
    export interface DefaultTheme extends DiscoverConfig {}
}
