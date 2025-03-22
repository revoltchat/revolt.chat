import type { Datasource } from "../lib/datasource.ts"
import type { RevoltTheme } from "../lib/decl.ts"

export interface RevoltServers {
    _id: string
    owner: string
    name: string
    channels: string[]
    system_messages?: SystemMessages
    icon?: Icon
    banner?: Banner
    description?: string
    default_permissions: DefaultPermissions
    categories?: Category[]
    roles?: { [key: string]: Role }
    flags?: number
    analytics: boolean
    discoverable: boolean
}

export interface Banner {
    _id: string
    tag: BannerTag
    filename: string
    metadata: Metadata
    content_type: ContentType
    size: number
}

export enum ContentType {
    ImageGIF = "image/gif",
    ImageJPEG = "image/jpeg",
    ImagePNG = "image/png",
    ImageWebp = "image/webp",
}

export interface Metadata {
    type: Type
    width: number
    height: number
}

export enum Type {
    Image = "Image",
}

export enum BannerTag {
    Banners = "banners",
}

export interface Category {
    id: string
    title: string
    channels: string[]
}

export interface DefaultPermissions {
    $numberLong: string
}

export interface Icon {
    _id: string
    tag: IconTag
    filename: string
    metadata: Metadata
    content_type: ContentType
    size: number
    hash?: string
    uploaded_at?: Date
    uploader_id?: string
}

export enum IconTag {
    Icons = "icons",
}

export interface Role {
    name: string
    permissions: Permissions
    colour?: string
    hoist?: boolean
    rank?: DefaultPermissions | number
}

export interface Permissions {
    a: number
    d: number
}

export interface SystemMessages {
    user_joined?: null | string
    user_left?: null | string
    user_kicked?: null | string
    user_banned?: null | string
}

export class DummyDatasource implements Datasource {
    private analyticsServersCache: {
        _id: string
        members: number
        volume?: number
        discoverable: boolean
    }[] = []
    private analyticsBotsCache: {
        _id: string
        servers: number
        usage?: number
        discoverable: boolean
    }[] = []
    private revoltUsersCache: {
        _id: string
        username: string
        bot: {
            owner: string
        }
        relations?: {
            _id: string
            status: string
        }[]
        discriminator: string
        display_name?: string
        avatar?: {
            _id: string
            tag: string
            filename: string
            metadata: {
                type: string
                width: number
                height: number
            }
            content_type: string
            size: number
            hash?: null
            uploaded_at?: null
        }
        profile?: {
            content: string
            background?: {
                _id: string
                tag: string
                filename: string
                metadata: {
                    type: string
                    width: number
                    height: number
                }
                content_type: string
                size: number
                hash?: null
                uploaded_at?: null
            }
        }
        status?: {
            text?: string
            presence?: string
        }
        badges?: number
    }[] = []
    private revoltServersCache: RevoltServers[] = []
    private revoltBotsCache: {
        _id: string
        owner: string
        public: boolean
        analytics: boolean
        discoverable: boolean
    }[] = []
    private revoltThemesCache: RevoltTheme[] = []

    private async fetchAllIfEmpty() {
        if (this.revoltServersCache.length === 0) {
            const response = await fetch(
                "/dummydata/revolt.servers.json",
            )
            if (response.status === 404) {
                alert(
                    "Dummy data is not installed! Cannot use dummy datasource!",
                )
                location.assign("/")
                return
            }
            this.revoltServersCache = await response.json()
        }
        if (this.revoltBotsCache.length === 0) {
            this.revoltBotsCache = await fetch(
                "/dummydata/revolt.bots.json",
            ).then((r) => r.json())
        }
        if (this.revoltUsersCache.length === 0) {
            this.revoltUsersCache = await fetch(
                "/dummydata/revolt.users.json",
            ).then((r) => r.json())
        }
        if (this.analyticsServersCache.length === 0) {
            this.analyticsServersCache = await fetch(
                "/dummydata/analytics.servers.json",
            ).then((r) => r.json())
        }
        if (this.analyticsBotsCache.length === 0) {
            this.analyticsBotsCache = await fetch(
                "/dummydata/analytics.bots.json",
            ).then((r) => r.json())
        }
    }

    constructor() {
        this.fetchAllIfEmpty()
    }

    // deno-lint-ignore require-await
    async getThemes(): Promise<RevoltTheme[]> {
        return this.revoltThemesCache
    }

    // deno-lint-ignore require-await
    async searchThemes(query: string): Promise<RevoltTheme[]> {
        return this.revoltThemesCache.filter((theme) =>
            theme.name.toLowerCase().includes(query.toLowerCase()) ||
            theme.creator.toLowerCase().includes(query.toLowerCase()) ||
            theme.description.toLowerCase().includes(query.toLowerCase()) ||
            theme.tags.some((tag) =>
                tag.toLowerCase().includes(query.toLowerCase())
            ) ||
            theme.slug.toLowerCase().includes(query.toLowerCase())
        )
    }
}
