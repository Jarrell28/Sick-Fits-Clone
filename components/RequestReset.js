import Form from './styles/Form';
import useForm from '../lib/useForm';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import DisplayError from './ErrorMessage';

//Method to request reset 
const REQUEST_RESET_MUTATION = gql`
    mutation REQUEST_RESET_MUTATION($email: String!){
        sendUserPasswordResetLink(email: $email) {
            code
            message
        }
    }
`
//Component to request reset to email address
export default function RequestReset() {
    //setting initial value of email input 
    const { inputs, handleChange, resetForm } = useForm({
        email: '',
    })

    //submitting email input value to backend
    const [requestReset, { data, loading, error }] = useMutation(REQUEST_RESET_MUTATION, {
        variables: inputs,
    });

    //Handling form submission
    async function handleSubmit(e) {
        e.preventDefault();
        const res = await requestReset().catch(console.error);
        console.log(res);
        resetForm();
    }

    return (
        <Form method="POST" onSubmit={handleSubmit}>
            <h2>Request a Password Reset</h2>
            <DisplayError error={error}></DisplayError>
            <fieldset>
                {data?.sendUserPasswordResetLink === null && (
                    <p>Check your email for reset link!</p>
                )}
                <label htmlFor="email">
                    Email
                    <input type="email" name="email" placeholder="Your Email Address" autoComplete="email" value={inputs.email} onChange={handleChange} />
                </label>
                <button type="submit">Request Reset</button>
            </fieldset>
        </Form>
    )
}