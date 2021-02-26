import Form from './styles/Form';
import useForm from '../lib/useForm';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import { useMutation } from '@apollo/client';
import DisplayError from './ErrorMessage';

//Query to perform Sign in
const SIGNIN_MUTATION = gql`
    mutation SIGNIN_MUTATION($email: String!, $password: String!){
        authenticateUserWithPassword(email: $email, password: $password){
            ... on UserAuthenticationWithPasswordSuccess{
                item {
                    id
                    email
                    name
                }
            }

            ... on UserAuthenticationWithPasswordFailure {
                code
                message
            }
        }
    }
`

export default function SignIn() {
    //Setting initial values for form inputs
    const { inputs, handleChange, resetForm } = useForm({
        email: '',
        password: ''
    })

    //submitting input values to backend
    const [signin, { data, loading }] = useMutation(SIGNIN_MUTATION, {
        variables: inputs,
        refetchQueries: [{ query: CURRENT_USER_QUERY }] //refetchQueries updates the apollo client with the new data from mutation so no refresh is required
    });

    //handling submission
    async function handleSubmit(e) {
        e.preventDefault();
        const res = await signin();
        resetForm();
    }

    //accounting for different authentication errors received
    const error = data?.authenticateUserWithPassword.__typename === "UserAuthenticationWithPasswordFailure" ? data?.authenticateUserWithPassword : undefined;
    return (
        <Form method="POST" onSubmit={handleSubmit}>
            <h2>Sign Into Your Account</h2>
            <DisplayError error={error}></DisplayError>
            <fieldset>
                <label htmlFor="email">
                    Email
                    <input type="email" name="email" placeholder="Your Email Address" autoComplete="email" value={inputs.email} onChange={handleChange} />
                </label>
                <label htmlFor="password">
                    Password
                    <input type="password" name="password" placeholder="Your Password" autoComplete="password" value={inputs.password} onChange={handleChange} />
                </label>
                <button type="submit">Sign In</button>
            </fieldset>
        </Form>
    )
}