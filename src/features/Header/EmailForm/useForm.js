import { useState, useEffect } from "react";

const useForm = (onSuccess, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      onSuccess();
    }
  }, [errors]);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = event => {
      delete errors[event.target.name];
    event.persist();
    let value = event.target.value;
    if(event.target.type==='checkbox'){
        value = event.target.checked
    }
    setValues(values => ({
      ...values,
      [event.target.name]: value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
