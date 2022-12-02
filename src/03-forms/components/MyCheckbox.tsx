import { useField, ErrorMessage } from 'formik';
interface Props {
    label:string,
    name:string,
    [x:string]:any;

}

export const MyCheckbox = ( {label, ...props}:Props ) => {

    const [field, meta] = useField( props );

  return (
    <>
        <label> 
          <input type="checkbox" className="text-input"  { ...field  } { ...props } />
          {
            label
          }
        </label>
        <ErrorMessage name={ props.name } component="span" />
        {/* {
          meta.touched && meta.error && <span className="error">{ meta.error}</span>
        } */}
    </>
  )
}
