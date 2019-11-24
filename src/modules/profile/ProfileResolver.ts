import { Query, Resolver } from "type-graphql"
import User from "../../data/entities/user/User"

@Resolver(of => User)
export default class {
    @Query()
    me(): string {
        return "hello"
    }
}
