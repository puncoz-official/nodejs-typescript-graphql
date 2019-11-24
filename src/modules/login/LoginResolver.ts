import { Arg, Mutation, Resolver } from "type-graphql"
import User from "../../data/entities/user/User"
import LoginInput from "./LoginInput"

@Resolver(of => User)
export default class {
    @Mutation()
    login(@Arg("input") credential: LoginInput): string {
        return `username: ${credential.username} and password: ${credential.password}`
    }
}
