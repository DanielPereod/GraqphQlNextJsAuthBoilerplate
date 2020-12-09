import { ArgsType, Field, ObjectType } from "type-graphql";

@ArgsType()
export class UsernameEmailPassword {
  @Field(() => String, { nullable: true })
  username?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String)
  password: string;
}

@ObjectType()
export class UserToken {
  @Field(() => String, { nullable: true })
  token?: string;

  @Field(() => [UserError], { nullable: true })
  errors?: UserError[];
}

@ObjectType()
export class UserError {
  @Field(() => String)
  field: string;

  @Field(() => String)
  message: string;
}

@ObjectType()
export class TokenResponse {
  @Field(() => Boolean)
  success: boolean;

  @Field(() => String)
  accessToken: string;
}

@ObjectType()
export class GoogleResponse {
  @Field(() => String, { nullable: true })
  error?: string;
}
