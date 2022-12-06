import '../styles/styles.css';
import { Formik, FormikHelpers, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

// name:'waldo',
// email:'waldo@gmail.com',
// password1:'123456',
// password2:'123456' 

export const RegisterFormikPage = () => {

   

  return (
    <div>

        <h1>Register Formik Page</h1>

        <Formik initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                        }}
                onSubmit = { (values)=>{
                    console.log(values);
                }}

                validationSchema={ 
                    Yup.object({
                        name: Yup.string()
                                .min(2, 'El nombre debe tener como minimo 2 carcteres')
                                .max(15, 'El nombre debe tener como maximo 15 caracteres')
                                .required('Requerido'),
                        email: Yup.string().email('El valor debe ser un email valido')
                                            .required('Requerido'),
                        password1: Yup.string()
                                        .min(6, 'Este campo debe tener como minimo 6 caracteres')
                                        .required('Requerido'),
                        password2: Yup.string()
                                        .oneOf([Yup.ref( 'password1' )], 'Las contraseñas deben ser iguales')
                                        .required('Requerido')
                    })
                }

            >
           
            {
                (formik) =>(
                    <Form>
                        <MyTextInput label='Nombre' name='name'  placeholder='Escriba su nombre' />
                        <MyTextInput label='Email' name='email'  placeholder='Escriba su correo' type='email' />
                        <MyTextInput label='Contraseña' name='password1' type='password' placeholder='Ingrese su contraseña' />
                        <MyTextInput label='Confirmar Contraseña' name='password2' type='password'  placeholder='Repita su contraseña' />


                    <button type="submit">
                        Create
                    </button>

                    <button
                        onClick={ formik.handleReset }>
                        Reset Form
                    </button>



                    </Form>
                )   
            }
            
        </Formik>

        

       
    </div>
  )
}
