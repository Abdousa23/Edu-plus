import FormContext from '../../../../context/FormContext';
import { useContext } from 'react';

const useFormContext = () => {
    return useContext(FormContext);
}

export default useFormContext;