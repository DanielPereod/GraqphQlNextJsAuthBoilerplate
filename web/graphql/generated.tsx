import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
export type GoogleLoginMutationFn = Apollo.MutationFunction<GoogleLoginMutation, GoogleLoginMutationVariables>;

/**
 * __useGoogleLoginMutation__
 *
 * To run a mutation, you first call `useGoogleLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGoogleLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [googleLoginMutation, { data, loading, error }] = useGoogleLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useGoogleLoginMutation(baseOptions?: Apollo.MutationHookOptions<GoogleLoginMutation, GoogleLoginMutationVariables>) {
        return Apollo.useMutation<GoogleLoginMutation, GoogleLoginMutationVariables>(GoogleLoginDocument, baseOptions);
      }
export type GoogleLoginMutationHookResult = ReturnType<typeof useGoogleLoginMutation>;
export type GoogleLoginMutationResult = Apollo.MutationResult<GoogleLoginMutation>;
export type GoogleLoginMutationOptions = Apollo.BaseMutationOptions<GoogleLoginMutation, GoogleLoginMutationVariables>;
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
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
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
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const RevokeRefreshTokenForUserDocument = gql`
    mutation RevokeRefreshTokenForUser($userId: String!) {
  revokeRefreshTokenForUser(userId: $userId)
}
    `;
export type RevokeRefreshTokenForUserMutationFn = Apollo.MutationFunction<RevokeRefreshTokenForUserMutation, RevokeRefreshTokenForUserMutationVariables>;

/**
 * __useRevokeRefreshTokenForUserMutation__
 *
 * To run a mutation, you first call `useRevokeRefreshTokenForUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRevokeRefreshTokenForUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [revokeRefreshTokenForUserMutation, { data, loading, error }] = useRevokeRefreshTokenForUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRevokeRefreshTokenForUserMutation(baseOptions?: Apollo.MutationHookOptions<RevokeRefreshTokenForUserMutation, RevokeRefreshTokenForUserMutationVariables>) {
        return Apollo.useMutation<RevokeRefreshTokenForUserMutation, RevokeRefreshTokenForUserMutationVariables>(RevokeRefreshTokenForUserDocument, baseOptions);
      }
export type RevokeRefreshTokenForUserMutationHookResult = ReturnType<typeof useRevokeRefreshTokenForUserMutation>;
export type RevokeRefreshTokenForUserMutationResult = Apollo.MutationResult<RevokeRefreshTokenForUserMutation>;
export type RevokeRefreshTokenForUserMutationOptions = Apollo.BaseMutationOptions<RevokeRefreshTokenForUserMutation, RevokeRefreshTokenForUserMutationVariables>;
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

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;