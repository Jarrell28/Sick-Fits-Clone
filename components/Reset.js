import Form from './styles/Form';
import useForm from '../lib/useForm';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import { useMutation } from '@apollo/client';
import DisplayError from './ErrorMessage';

const RESET_MUTATION = gql`
    mutation RESET_MUTATION($email: String!, $token: String!, $password: String!){
        redeemUserPasswordResetToken(email: $email, token: $token, password: $password) {
            code
            message
        }
    }
`

//Component to reset the password
export default function Reset({ token }) {
    //setting initial values of inputs
    const { inputs, handleChange, resetForm } = useForm({
        email: '',
        password: '',
        token
    })

    //passing input values to backend
    const [reset, { data, loading, error }] = useMutation(RESET_MUTATION, {
        variables: inputs,
    });

    //handling form submission
    async function handleSubmit(e) {
        e.preventDefault();
        const res = await reset().catch(console.error);
        console.log(res);
        resetForm();
    }

    //accounting for error received from password reset
    const successfulError = data?.redeemUserPasswordResetToken?.code ? data?.redeemUserPasswordResetToken : undefined;
    return (
        <Form method="POST" onSubmit={handleSubmit}>
            <h2>Reset Your Password</h2>
            <DisplayError error={error || successfulError}></DisplayError>
            <fieldset>
                {data?.redeemUserPasswordResetToken === null && (
                    <p>Password Reset Complete! Please sign in</p>
                )}
                <label htmlFor="email">
                    Email
                    <input type="email" name="email" placeholder="Your Email Address" autoComplete="email" value={inputs.email} onChange={handleChange} />
                </label>
                <label htmlFor="password">
                    Password
                    <input type="password" name="password" placeholder="Your Password" autoComplete="password" value={inputs.password} onChange={handleChange} />
                </label>
                <button type="submit">Request Reset</button>
            </fieldset>
        </Form>
    )
}