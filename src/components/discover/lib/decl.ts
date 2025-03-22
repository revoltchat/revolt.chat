export interface RevoltThemesCuratedCategory {
    title: string
    description: string
    themes: RevoltTheme[]
}

export interface RevoltTheme {
    version: string
    slug: string
    name: string
    creator: string
    description: string
    tags: string[]
    variables: RT_Variables
    css?: string
    commit?: string
    versions?: string
}

interface RT_Variables {
    light?: boolean
    accent?: string
    background: string
    foreground?: string
    block?: string
    mention: string
    "message-box"?: string
    success?: string
    warning?: string
    error?: string
    hover: string
    tooltip?: string
    scrollbar?: RT_Scrollbar
    primary: RT_PrimarySecondary
    secondary: RT_PrimarySecondary
    tertiary?: RT_Tertiary
    status?: RT_Status
    border?: RT_Border
    sidebar?: RT_Sidebar
    "sidebar-sidebar-active"?: string
    "border-color"?: string
    fonts?: RT_Fonts
    borders?: RT_Borders
    "scrollbar-thumb"?: string
    "scrollbar-track"?: string
}

interface RT_Border {
    color: string
}

interface RT_Borders {
    "border-color": string
    "status-border-color": string
}

interface RT_Fonts {
    font: string
    monospace: string
}

interface RT_PrimarySecondary {
    background: string
    header?: string
    foreground?: string
}

interface RT_Scrollbar {
    thumb: string
    track: string
}

interface RT_Sidebar {
    active?: string
    "sidebar-active"?: string
}

interface RT_Status {
    online: string
    away: string
    busy: string
    invisible: string
    streaming?: string
    focus?: string
    font?: string
    monospaceFont?: string
    "sidebar-active"?: string
    "border-color"?: string
    light?: boolean
    tags?: string[]
    version?: string
}

interface RT_Tertiary {
    background: string
    foreground: string
}
