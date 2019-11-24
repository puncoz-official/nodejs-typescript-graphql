import { Field, ID, ObjectType } from "type-graphql"
import UserFullName from "./UserFullName"

@ObjectType()
class User {
    @Field(type => ID)
    protected id: number

    @Field()
    protected email: string

    @Field()
    protected username: string

    protected password: string

    @Field(type => UserFullName)
    protected fullName: UserFullName
}

export default User
