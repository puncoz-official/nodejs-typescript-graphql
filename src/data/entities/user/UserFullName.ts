import { Field, InterfaceType } from "type-graphql"

@InterfaceType()
abstract class UserFullName {
    @Field()
    firstName: string

    @Field()
    lastName: string
}

export default UserFullName
