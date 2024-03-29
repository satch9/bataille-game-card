import { Client, Account, Databases } from 'appwrite';


export const appwriteConfig = {
    url: import.meta.env.VITE_APP_APPWRITE_API_ENDPOINT,
    projectId: import.meta.env.VITE_APP_APPWRITE_PROJECT_ID,
    databaseId: import.meta.env.VITE_APP_APPWRITE_DATABASE_ID,
    exercicesCollectionId: import.meta.env.VITE_APP_APPWRITE_EXERCISES_COLLECTION_ID,
    workersCollectionId: import.meta.env.VITE_APP_APPWRITE_WORKERS_COLLECTION_ID,
    messagesCollectionId: import.meta.env.VITE_APP_APPWRITE_MESSAGES_COLLECTION_ID,
    jwt: import.meta.env.VITE_APP_APPWRITE_JWT,
}

export const client = new Client()



client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);
//client.setJWT(appwriteConfig.jwt)

export const account = new Account(client);
export const databases = new Databases(client);