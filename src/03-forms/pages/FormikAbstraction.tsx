import { Formik, Form} from "formik";
import * as Yup from "yup";
import '../styles/styles.css';
import { MySelect, MyCheckbox, MyTextInput } from "../components";




export const FormikAbstraction = () => {

   

  return (
    <div>
        <h1>Formik Abstraction</h1> 

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

                    <MyTextInput label="First Name" name="firstName" placeholder="First Name" />

                    <MyTextInput label="Last Name" name="lastName" placeholder="Last Name" />

                    <MyTextInput label="Email" name="email" type="email" placeholder="Email"  />

                    <MySelect label="Job Type" name="jobType" >
                        <option value="">Pick Something</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="it-jr">IT Junior</option>
                        <option value="it-sr">IT Senior</option>
                    </MySelect>

                    <MyCheckbox label="Terms and Conditions" name="terms"/>

                    
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
