import Form from './styles/Form';
import useForm from '../lib/useForm';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import { useMutation } from '@apollo/client';
import DisplayError from './ErrorMessage';

const SIGNUP_MUTATION = gql`
    mutation SIGNUP_MUTATION($email: String!, $name: String!, $password: String!){
        createUser(data: {
            email: $email
            name: $name
            password: $password
        }) {
            id
            email
            name
        }
    }
`

export default function SignUp() {
    //Setting initial values for form inputs
    const { inputs, handleChange, resetForm } = useForm({
        email: '',
        name: '',
        password: ''
    })

    //submitting input values to backend
    const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
        variables: inputs,
    });

    //Handling form submission
    async function handleSubmit(e) {
        e.preventDefault();
        const res = await signup().catch(console.error);
        console.log(res);
        resetForm();
    }

    return (
        <Form method="POST" onSubmit={handleSubmit}>
            <h2>Create an Account</h2>
            <DisplayError error={error}></DisplayError>
            <fieldset>
                {/* If the user successfully created account, display successful message and prompt to sign in */}
                {data?.createUser && (
                    <p>Signed up with {data.createUser.email} - Please Go Ahead and Sign in!</p>
                )}
                <label htmlFor="email">
                    Email
                    <input type="email" name="email" placeholder="Your Email Address" autoComplete="email" value={inputs.email} onChange={handleChange} />
                </label>
                <label htmlFor="name">
                    Name
                    <input type="text" name="name" placeholder="Your Name" autoComplete="name" value={inputs.name} onChange={handleChange} />
                </label>
                <label htmlFor="password">
                    Password
                    <input type="password" name="password" placeholder="Your Password" autoComplete="password" value={inputs.password} onChange={handleChange} />
                </label>
                <button type="submit">Sign Up</button>
            </fieldset>
        </Form>
    )
}