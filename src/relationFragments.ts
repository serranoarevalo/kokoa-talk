export const CHAT_MESSAGE = `fragment ChatMessages on Chat {
    id
    messages{
        text
        user {
            id
            email
        }
        read
    }
}`;
