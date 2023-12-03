import { WebSocketLink } from "@apollo/client/link/ws";

const wsLink = new WebSocketLink({
    url: 'ws://localhost:3000/graphql',
    options: {
        reconnect: true,
        connectionParams: {
            Authorization: `Berer ${localStorage.getItem("accessToken")}`
        }
    }
});
