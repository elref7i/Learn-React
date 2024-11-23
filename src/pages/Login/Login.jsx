import axios from 'axios';
import * as Yup from 'yup'; //* Yup => object كل الحاجات اللى موجوده فيها
import { useFormik } from 'formik';

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
    email: Yup.string()
      .required('email is required')
      .email('email is not valid'),
    password: Yup.string()
      .required('password is required')
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        'password is not valid'
      ),
  });

  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: sendData,
  });

  return (
    <>
      <div className="container mx-auto py-5 bg-gray-200 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Login Now:
        </h1>
        <form className="space-y-4 px-3" onSubmit={formik.handleSubmit}>
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
            {formik.errors.email && formik.touched.email ? (
              <div className="text-xl font-medium text-red-700">
                *{formik.errors.email}
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
            {formik.errors.password && formik.touched.password ? (
              <div className="text-xl font-medium text-red-700">
                *{formik.errors.password}
              </div>
            ) : (
              ''
            )}
          </div>
          <button type="submit" className="btn mx-auto block">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
