import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateOneUserInput{
    @Field()
    nome: string;
    @Field()
    email: string;
}