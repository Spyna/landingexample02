export default function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = 'Please insert an email address';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Please insert a valid email address';
  }
  if (!values.marketing) {
    errors.marketing = 'Please accept the privacy policy';
  } 
  return errors;
};
