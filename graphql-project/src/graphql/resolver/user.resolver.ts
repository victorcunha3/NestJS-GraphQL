import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CreateOneUserArgs } from "../args/create-one-user.args";

@Resolver()
export class UserResolver {
    @Query(() => String)
    users() {
        return "Hello";
    }

    @Mutation(() => String)
    CreateOneUser(@Args() args: CreateOneUserArgs) {
        console.log(args)
        return "Usuario Criado com Sucesso";
    }
}
