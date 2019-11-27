import "reflect-metadata"
import { config } from "./config"
import { Server } from "./core/server"

(async () => {
    const serverOptions: ServerOptions = {
        port: config.app.port,
    }

    await new Server(serverOptions).boot(({port}) => {
        console.log(`Server started at port ${port}`)
    })
})()
