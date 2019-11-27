import { GraphQLServer as Server } from "graphql-yoga"
import { buildSchema } from "type-graphql"
import { config } from "../../config"
import { modulePath } from "../helpers"
import BaseServer from "./BaseServer"

class GraphQLServer extends BaseServer<Server> {
    constructor(serverOptions: ServerOptions) {
        super(serverOptions)
    }

    async boot(callback: (options: ServerOptions) => void): Promise<void> {
        await this.init()

        await this.get().start({port: this.serverOptions.port}, () => {
            callback(this.serverOptions)
        })
    }

    private async schema(): Promise<any> {
        const resolverClassSuffix = config.schema.resolverClassSuffix

        return buildSchema({
            resolvers: [modulePath(`./**/*${resolverClassSuffix}.ts`)],
            emitSchemaFile: config.schema.emitSchemaFile,
        })
    }

    private async init(): Promise<void> {
        const schema = await this.schema()

        const server: Server = new Server({
            schema,
        })

        this.set(server)
    }
}

export default GraphQLServer
