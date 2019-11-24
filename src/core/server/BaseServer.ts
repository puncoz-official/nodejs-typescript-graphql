abstract class BaseServer<T> {
    private server: T

    protected constructor(readonly serverOptions: ServerOptions) {}

    public abstract async boot(callback: (options: ServerOptions) => void): Promise<void>

    protected set(server: T) {
        this.server = server
    }

    protected get(): T {
        return this.server
    }
}

export default BaseServer
