import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  me: UserResponse;
  refreshToken: TokenResponse;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type TokenResponse = {
  __typename?: 'TokenResponse';
  success: Scalars['Boolean'];
  accessToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  revokeRefreshTokenForUser: Scalars['Boolean'];
  register: UserToken;
  login: UserToken;
  googleLogin: UserToken;
};


export type MutationRevokeRefreshTokenForUserArgs = {
  userId: Scalars['String'];
};


export type MutationRegisterArgs = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};


export type MutationGoogleLoginArgs = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserToken = {
  __typename?: 'UserToken';
  token?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<UserError>>;
};

export type UserError = {
  __typename?: 'UserError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type GoogleLoginMutationVariables = Exact<{
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
}>;


export type GoogleLoginMutation = (
  { __typename?: 'Mutation' }
  & { googleLogin: (
    { __typename?: 'UserToken' }
    & Pick<UserToken, 'token'>
    & { errors?: Maybe<Array<(
      { __typename?: 'UserError' }
      & Pick<UserError, 'field' | 'message'>
    )>> }
  ) }
);

export type LoginMutationVariables = Exact<{
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserToken' }
    & Pick<UserToken, 'token'>
    & { errors?: Maybe<Array<(
      { __typename?: 'UserError' }
      & Pick<UserError, 'field' | 'message'>
    )>> }
  ) }
);

export type RegisterMutationVariables = Exact<{
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserToken' }
    & Pick<UserToken, 'token'>
    & { errors?: Maybe<Array<(
      { __typename?: 'UserError' }
      & Pick<UserError, 'field' | 'message'>
    )>> }
  ) }
);

export type RevokeRefreshTokenForUserMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type RevokeRefreshTokenForUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'revokeRefreshTokenForUser'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'email'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);


export const GoogleLoginDocument = gql`
    mutation GoogleLogin($username: String, $email: String, $password: String!) {
  googleLogin(username: $username, email: $email, password: $password) {
    token
    errors {
      field
      message
    }
  }
}
    `;

export function useGoogleLoginMutation() {
  return Urql.useMutation<GoogleLoginMutation, GoogleLoginMutationVariables>(GoogleLoginDocument);
};
export const LoginDocument = gql`
    mutation Login($username: String, $email: String, $password: String!) {
  login(username: $username, email: $email, password: $password) {
    token
    errors {
      field
      message
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const RegisterDocument = gql`
    mutation Register($username: String, $email: String, $password: String!) {
  register(username: $username, email: $email, password: $password) {
    token
    errors {
      field
      message
    }
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const RevokeRefreshTokenForUserDocument = gql`
    mutation RevokeRefreshTokenForUser($userId: String!) {
  revokeRefreshTokenForUser(userId: $userId)
}
    `;

export function useRevokeRefreshTokenForUserMutation() {
  return Urql.useMutation<RevokeRefreshTokenForUserMutation, RevokeRefreshTokenForUserMutationVariables>(RevokeRefreshTokenForUserDocument);
};
export const MeDocument = gql`
    query me {
  me {
    user {
      id
      username
      email
    }
    errors {
      field
      message
    }
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};