
import formJson from '../data/custom-forms.json';
import { Formik, FormikHelpers, FormikValues, Form } from 'formik';
import { MyTextInput } from '../components';
import { MySelect } from '../components/MySelect';
import * as Yup from 'yup';

const initialValues: {[key:string]:any} = {};
const requiredFields: {[key:string]:any} = {};


for (const input of formJson) {
    initialValues[input.name]= input.value
    if( !input.validations  ) continue;
    
    let schema = Yup.string();

    for (const rule of input.validations) {
        if( rule.type = 'required' )
        {
            schema = schema.required('Requerido');
        }

        if( rule.type = 'minLength' )
        {
            schema = schema.min(rule.value, `Debe tener como minimo ${rule.value}`)
        }
        if( rule.type = 'email' )
        {
            schema = schema.email('Debe ingresar un correo válido')
        }
    }

    requiredFields[input.name]= schema;
    
}


const validationSchema = Yup.object({ ...requiredFields });


export const DynamicForm = () => {
  return (
    <div>
        <h1>DynamicForm</h1>
        <Formik 
                initialValues= {initialValues}

                onSubmit = {(values)=>{
                                console.log(values)
                        }} 
                
                validationSchema= {validationSchema}
                >
                     {

                        (formik) => (                                            
                            <Form noValidate>
                               { 
                                formJson.map(( {  label, type, placeHolder, name, options  } )=>{
                                    
                                    if( type === "email" || type === "password" || type === "input" )
                                    {
                                        return <MyTextInput key={name}
                                                            type={ type as any } 
                                                            name={name} 
                                                            label = { label } 
                                                            placeholder= { placeHolder } 
                                                />
                                    }
                                    else if (type === "select")
                                    {
                                    

                                        return    <MySelect key={name} label={label} name={name} >
                                                        <option value="" > Select an option </option>
                                                        {
                                                            options.map( (e)=>( <option key={e.id } value={e.id} > { e.label } </option>  ) )
                                                        }
                                                    </MySelect>
                                    }
                                    
                                    throw new Error(`El type ${type}, no es soportado`);
                                                         
                                            
                                } )
                               }

                               <button type="submit">Submit</button>
                               <button onClick={ formik.handleReset }>Reset</button>
                            </Form>
                        )

                     }
        </Formik>
    </div>
  )
}
