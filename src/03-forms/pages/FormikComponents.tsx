import {  Formik, Form, Field, ErrorMessage   } from "formik";
import * as Yup from "yup";
import '../styles/styles.css';




export const FormikComponents = () => {

   

  return (
    <div>
        <h1>Formik Yup Page</h1> 

        <Formik
                initialValues={{
                                firstName:'',
                                lastName:'',
                                email:'',
                                terms:false,
                                jobType:''
                            }}

                onSubmit= { (values)=>{
                    console.log(values);
                        }}
                        
                validationSchema={ Yup.object({     
                                                    firstName: Yup.string()
                                                                    .max(15, 'Must be 15 characters or less')
                                                                    .required('Required'),
                                        
                                                    lastName: Yup.string()
                                                                    .max(10, 'Must be 10 characters or less')
                                                                    .required('Required'),
                                        
                                                    email: Yup.string()
                                                                .email('Must be a valid email')
                                                                .required('Required'),
                                                    terms: Yup.boolean()
                                                                .isTrue('Terms should be marked'),

                                                    jobType: Yup.string()
                                                                .required('Required')
                                                                .notOneOf(['it-jr'], 'This option is not permitted')

                                                })

                }
        >
            {
              (formik) => (
                <Form >

                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" type="text" />
                    <ErrorMessage name="firstName" component="span" />                   

                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" type="text" />
                    <ErrorMessage name="lastName" component="span"/>

                    <label htmlFor="email">Email</label>
                    <Field name="email" type="text" />
                    <ErrorMessage name="email" component="span"/>

                    <label htmlFor="jobType">Job Type</label>
                    <Field name="jobType" as="select" >
                        <option value="">Pick Something</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="it-jr">IT Junior</option>
                        <option value="it-sr">IT Senior</option>
                    </Field>
                    <ErrorMessage name="jobType" component="span"/>



                    <label >
                    <Field name="terms" type="checkbox" />
                    Terms and conditions
                    </label>
                    <ErrorMessage name="terms" component="span"/>

                    
                    <button type='submit'>
                        Submit
                    </button>



                </Form>
              )   
            }

        </Formik>

        
    </div>
  )
}
