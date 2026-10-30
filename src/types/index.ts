export type TabId = 'home' | 'search' | 'add' | 'chats' | 'profile'
export type Route = 'chats' | 'chat' | 'search'
export interface Chat{
    id: string;
    name:string;
    preview: string;
    avatar:string
}

export interface Message{
    id:number;
    from: 'me' | 'them';
    text:string
}

export interface Images{
    id:string;
    tag:'dog' | 'cat';
    src: string;
    alt: string;
}