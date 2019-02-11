export const CHAT_MESSAGE = `fragment ChatMessages on Chat {
    id
    messages{
        id
        text
        user {
            id
            email
        }
        read
    }
}`;

export const MESSAGE_USER = `fragment MessageUser on Message {
    id
    text
    read
    user {
        id
        email
    }
    
}`;
