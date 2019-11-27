import { config as dotEnvConfig } from "dotenv"
import * as pathHelper from "./path.helper"

dotEnvConfig({path: pathHelper.rootPath(".env")})

export const env = <K extends keyof ENV, T>(key: K, defaultValue?: T): T => {
    const value = process.env[key] || defaultValue
    if (typeof value === "undefined") {
        throw new Error(`Environment variable ${key} not set.`)
    }

    return value as T
}
