
interface EnvConfig {
    VITE_APP_NAME: string;
}

const loadEnvVariables = () => {
    const requiredEnvVariables: string[] = [
        "VITE_APP_NAME"
    ];

    requiredEnvVariables.forEach((key: string) => {
        if (!import.meta.env[key]) {
            throw new Error(`Missing required environment variable ${key}`);
        }
    })

    return {
        VITE_APP_NAME: import.meta.env.VITE_APP_NAME as string,
    }
}

export const envVars: EnvConfig = loadEnvVariables();