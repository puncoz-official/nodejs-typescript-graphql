interface Config {
    app: AppConfig
    schema: SchemaConfig
}

interface AppConfig {
    port: number
}

interface SchemaConfig {
    resolverClassSuffix: string
    emitSchemaFile: string | boolean
}
