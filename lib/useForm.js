import { useEffect } from 'react';
import { useState } from 'react';

//Helper function to create dynamic controlled input components
export default function useForm(initial = {}) {
    //creating state object for inputs
    const [inputs, setInputs] = useState(initial);
    const initialValues = Object.values(initial).join();


    useEffect(() => {
        setInputs(initial)
    }, [initialValues])


    function handleChange(e) {
        let { value, name, type } = e.target;

        if (type === 'number') {
            value = parseInt(value);
        }
        if (type === 'file') {
            [value] = e.target.files;
        }

        setInputs({
            ...inputs,
            [name]: value
        })
    }

    function resetForm() {
        setInputs(initial);
    }

    function clearForm() {
        const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']));
        setInputs(blankState);
    }

    return {
        inputs,
        handleChange,
        resetForm,
        clearForm
    }
}