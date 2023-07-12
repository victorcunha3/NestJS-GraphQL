import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserObject{
    @Field()
    name: String;
    @Field()
    email: String;
}
