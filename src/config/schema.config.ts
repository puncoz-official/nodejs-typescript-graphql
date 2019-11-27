import { rootPath } from "../core/helpers"

export const schemaConfig: SchemaConfig = {
    resolverClassSuffix: "Resolver",
    emitSchemaFile: rootPath("./schemas.graphql"),
}
