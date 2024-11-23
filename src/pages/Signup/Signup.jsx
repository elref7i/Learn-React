import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function Signup() {
  //* UNControlled => Controlled on notion
  //^ [1] => Create State =>  input in state
  //^ [2] => link between InputValue , State => value = state
  //^ [3] => onCahnge Update state => Update UI
  async function sendData(values) {
    let { data } = await axios.request({
      url: 'url API',
      method: 'POST',
      data: values,
    });
  }
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('this is required')
      .min(4, 'must me name more than 4')
      .max(25, 'must me name less than 25'),
    email: Yup.string()
      .required('this is required')
      .email('email is not valid'),
    phone: Yup.string()
      .required('this is required')
      .matches(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/, 'this phone not egypt'),
    password: Yup.string()
      .required('password is required')
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        'password is not valid'
      ),
    rePassword: Yup.string()
      .required('re-password is required')
      .oneOf([Yup.ref('password')], 'repassword not equal password'),
  });
  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      rePassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: sendData,
  });

  return (
    <>
      <div className="container mx-auto py-5 bg-gray-200 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Register Now:
        </h1>
        <form className="space-y-4 px-3" onSubmit={formik.handleSubmit}>
          <div className="username ">
            <input
              className="form-control"
              type="text"
              placeholder="Username"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error text-red-700 font-medium text-lg">
                *{formik.errors.name}
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="email">
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error text-red-700 font-medium text-lg">
                *{formik.errors.email}
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="phone">
            <input
              className="form-control"
              type="tel"
              placeholder="Phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="error text-red-700 font-medium text-lg">
                *{formik.errors.phone}
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="password">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error text-red-700 font-medium text-lg">
                *{formik.errors.password}
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="confirm-password">
            <input
              className="form-control"
              type="password"
              placeholder="Confirm Password"
              name="rePassword"
              value={formik.values.rePassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.rePassword && formik.errors.rePassword ? (
              <div className="error text-red-700 font-medium text-lg">
                *{formik.errors.rePassword}
              </div>
            ) : (
              ''
            )}
          </div>
          <button type="submit" className="btn mx-auto block">
            Sumbit
          </button>
        </form>
      </div>
    </>
  );
}
// async function sendData(values) {
//   let { data } = await axios.request({
//     url: 'url API',
//     method: 'POST',
//     data: values,
//   });
// }
// function formValidtin(values) {
//   const errors = {};
//   if (!values.name) {
//     //*!fasle
//     errors.name = 'name is required';
//   } else if (!(values.name.length > 3)) {
//     // !1>3 ==> !2>3 , !3>3
//     errors.name = 'name is vailed please inter name more than 3 Char';
//   } else if (!(values.name.length < 25)) {
//     errors.name = 'name is vailed please inter name less than 25 Char';
//   }
//   if (!values.email) {
//     errors.email = 'email is required';
//   } else if (!emailRgex.test(values.mail)) {
//     errors.email = 'please enter the valid email';
//   }
//   console.log(errors);
//   return errors;
// }
// const errors = Yup.object({
//   name: Yup.string()
//     .required('name is required')
//     .min(3, 'must me more than 3')
//     .max(25, 'must be less than 25'),
//   email: Yup.string()
//     .required('email is required')
//     .email('email is not valid'),
//   phone: Yup.string()
//     .required('phone is required')
//     .matches(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/, 'phone is not valid'),
//   password: Yup.string()
//     .required('password is required')
//     .matches(
//       /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
//       'password is not valid'
//     ),
//   rePassword: Yup.string()
//     .required('re-password is required')
//     .oneOf([Yup.ref('password')], 'repassword not equal password'),
// });

// let formik = useFormik({
//   initialValues: {
//     name: '',
//     email: '',
//     password: '',
//     rePassword: '',
//     phone: '',
//   },
//   validationSchema: errors,
//   onSubmit: sendData,
// });
