import { useFormik } from "formik";
import * as yup from "yup";

const suggestionSchema = yup.object({
  name: yup.string().required("Name is Required"),
  email: yup
    .string()
    .nullable()
    .email("Email should be valid")
    .required("Email is Required"),
  mobile: yup
    .string()
    .default("")
    .nullable()
    .required("Mobile Number is Required"),
  suggestion: yup
    .string()
    .default("")
    .nullable()
    .required("Suggestion is Required"),
});

export default function Sugggestion() {
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      suggestion: "",
    },
    validationSchema: suggestionSchema,
    onSubmit: (values) => {
      //   dispatch(
      //     createQuery({
      //       name: values.name,
      //       email: values.email,
      //       mobile: values.mobile,
      //       suggestion: values.suggestion,
      //     })
      //   );
    },
  });
  return (
    <div className="row">
      <div className="col-md-6 mt-5 m-auto mb-5">
        <div className="">
          <h3 className="contactus-title mb-4">Suggestion</h3>
          <form
            action=""
            onSubmit={formik.handleSubmit}
            className="d-flex flex-column gap-15"
          >
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                onChange={formik.handleChange("name")}
                onBlur={formik.handleBlur("name")}
                value={formik.values.name}
              />
              <div className="errors">
                {formik.touched.name && formik.errors.name}
              </div>
            </div>
            <div>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
                value={formik.values.email}
              />
              <div className="errors">
                {formik.touched.email && formik.errors.email}
              </div>
            </div>
            <div>
              <input
                type="tel"
                className="form-control"
                placeholder="Mobile Number"
                name="mobile"
                onChange={formik.handleChange("mobile")}
                onBlur={formik.handleBlur("mobile")}
                value={formik.values.mobile}
              />
              <div className="errors">
                {formik.touched.mobile && formik.errors.mobile}
              </div>
            </div>
            <div>
              <textarea
                id=""
                className="w-100 form-control"
                cols="30"
                rows="4"
                placeholder="Suggestion"
                name="suggestion"
                onChange={formik.handleChange("suggestion")}
                onBlur={formik.handleBlur("suggestion")}
                value={formik.values.suggestion}
              >
                <div className="errors">
                  {formik.touched.suggestion && formik.errors.suggestion}
                </div>
              </textarea>
            </div>
            <div>
              <button className="button border-0">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
