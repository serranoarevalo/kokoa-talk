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
