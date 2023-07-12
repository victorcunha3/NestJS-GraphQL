import { Args, ArgsType, Field } from "@nestjs/graphql";
import { UserObject } from "../objetcts/user.objects";
import { CreateOneUserInput } from "../inputs/create-one-user.input";

@ArgsType()
export class CreateOneUserArgs{
    @Field()
    data: CreateOneUserInput
}