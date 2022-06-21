import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o7yfjj14k901xm0dm11bo1/master',
    cache: new InMemoryCache()
})