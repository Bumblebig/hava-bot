export default function ChatBox({ status, message }) {
    return (
        <figure className={`${status} chat`}>
            <p className="chat-content">{message}</p>
            <p className="name">{status == "send" ? "You" : "Bot"}</p>

        </figure>
    )
}