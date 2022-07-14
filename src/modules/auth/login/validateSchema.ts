import * as yup from 'yup';

const schema = yup
  .object({
    username: yup.string().required('is require'),
    password: yup.string().required('is require'),
  })
  .required();

export default schema;
