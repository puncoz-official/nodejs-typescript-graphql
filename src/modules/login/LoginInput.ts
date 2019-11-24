import { MaxLength } from "class-validator"
import { Field, InputType } from "type-graphql"
import User from "../../data/entities/user/User"

@InputType()
class LoginInput implements Partial<User> {
    @Field()
    @MaxLength(50)
    username: string

    @Field()
    password: string
}

export default LoginInput
