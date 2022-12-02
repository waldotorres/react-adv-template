import { useFormik  } from "formik";
import * as Yup from "yup";
import '../styles/styles.css';



export const FormikYupPage = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:''

        },
        onSubmit:(e)=>{
            console.log(e);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),

            lastName: Yup.string()
                            .max(10, 'Must be 10 characters or less')
                            .required('Required'),

            email: Yup.string()
                        .email('Must be a valid email')
                        .required('Required')
        })
    });

  return (
    <div>
        <h1>Formik Yup Page</h1> 
        <form noValidate onSubmit={handleSubmit}>

            <label htmlFor="firstName">First Name</label>
            <input type="text" 
                    // onBlur={handleBlur}
                    // name='firstName'
                    // value={ values.firstName }
                    // onChange={ handleChange }
                    { ...getFieldProps('firstName') }
                    className={ `${touched.firstName && errors.firstName && 'has-error'}` }
            />
            { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

            <label htmlFor="lastName">Last Name</label>
            <input type="text" 
                    // onBlur={handleBlur}
                    // name='lastName'
                    // value={ values.lastName }
                    // onChange={ handleChange }
                    { ...getFieldProps('lastName') }
                    className={ `${touched.lastName && errors.lastName && 'has-error'}` }
            />
            { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

            <label htmlFor="email">Email</label>
            <input type="text" 
                    // onBlur={handleBlur}
                    // name='email'
                    // value={ values.email }
                    // onChange={ handleChange }
                    { ...getFieldProps('email') }
                    className={ `${touched.email && errors.email && 'has-error'}` }
            />
            { touched.email && errors.email && <span>{ errors.email }</span>}
            

            <button type='submit'>
                Submit
            </button>



        </form>
    </div>
  )
}
