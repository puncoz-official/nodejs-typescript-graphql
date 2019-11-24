import { env } from "../core/helpers"

export const appConfig: AppConfig = {
    port: env("APP_PORT"),
}
