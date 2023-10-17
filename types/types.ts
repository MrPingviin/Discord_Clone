export type Client_Session_Token = {
    token: string,
    validTill: number
}

export type API_Response = {
    error?: string,
    message: string
} 


export type User = {
    email: string,
    display_name: string,
    username: string,
    password: string,
    registered_at?: {
        day: number,
        month: number,
        year: number,
        raw: number
    },
    birthday: {
        day: number,
        month: number,
        year: number,
        raw: number
    },
    servers?: Array<string>,
    friends?: Array<string>,
    friend_requests?: Array<string>,
    blocked_users?: Array<string>,
    blocked_by?: Array<string>,
    profile_picture?: string,
    permissions?: {
        isDiscordStaff: boolean,
        isNitroUser: boolean
    }
}
