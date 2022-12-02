import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

const initialState = {
    name:'waldo',
    email:'waldo@gmail.com',
    password1:'123456',
    password2:'123456' 
 } 

export const RegisterPage = () => {

  
    const {  onChange, formData, resetForm, isValidEmail } =  useForm(initialState);
    const {name, email, password1, password2 } = formData;


    const onSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        //
        console.log(formData);
    } 

  return (
    <div>
        <h1>Register Page</h1>
        <form onSubmit={onSubmit}  >
            <input type="text" 
                    placeholder="Name"
                    value={name}
                    name='name'
                    onChange={onChange}
                    className={ `${(name.trim().length <= 0)&& 'has-error'  } ` }
            />
            { (name.trim().length <= 0) && <span>Este campo es necesario</span>}

            <input type="text" 
                    placeholder="Email"
                    name='email'
                    value={email}
                    onChange={onChange}
                    className={ `${ !isValidEmail(email) && 'has-error' }` }
            />
            { !isValidEmail(email) && <span>Este campo es necesario</span>}

            <input type="password" 
                    placeholder="Password"
                    value={password1}
                    name='password1'
                    onChange={onChange}
                    className={`${(password1.trim().length < 6) && 'has-error' }`}
            />
            { (password1.trim().length <= 0  ) && <span>Este campo es necesario</span>}
            { ((password1.trim().length < 6  )&&(password1.trim().length >0  )) 
                && <span>El password debe tener como minimo 6 caracteres</span>}

            <input type="password" 
                    placeholder="Repeat Password"
                    value={password2}
                    name='password2'
                    onChange={onChange}
                    className={  `${((password2.trim().length <= 0  ) || (password2.trim() !== password1.trim()) ) && 'has-error'}` }
            />
            { (password2.trim().length <= 0  ) && <span>Este campo es requerido</span>}
            { ((password2.trim().length > 0 )&&(password2.trim() !== password1.trim()) ) && <span>Los password deben ser iguales</span>}

            <button type="submit"
                    >

                Create
            </button>
            <button
                onClick={()=> resetForm() }>
                Reset Form
            </button>

        </form>
    </div>
  )
}
