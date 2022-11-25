import {
    Route,
    NavLink,
    Routes,
    Navigate,
    BrowserRouter
  } from 'react-router-dom';
  
  import logo from '../logo.svg';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { routes } from './routes';
import { Suspense } from 'react';
  
  export const Navigation = () => {
    return (
        <Suspense fallback={null} >

            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } alt="React Logo" />
                        <ul>
                            {/* <li>
                            <NavLink to="/lazy1" className={ ({isActive})=> isActive?'nav-active':'' } >LazyPage1</NavLink>
                            </li>
                            <li>
                            <NavLink to="/lazy2" className={ ({isActive})=> isActive?'nav-active':'' }>LazyPage2</NavLink>
                            </li>
                            <li>
                            <NavLink to="/lazy3" className={ ({isActive})=> isActive?'nav-active':'' }>LazyPage3</NavLink>
                            </li> */}

                            {
                                routes.map( e=>{
                                    return <li key={ e.name }><NavLink  to= { e.to }  className={ ({isActive})=> isActive?'nav-active':'' }> { e.name } </NavLink></li>
                                } )
                            }

                        </ul>
                    </nav>


                    <Routes>            
                        {/* <Route path="/lazy1" element ={ <LazyPage1 /> } />
                        <Route path="/lazy2" element={ <LazyPage2/> } />
                        <Route path="/lazy3" element={ <LazyPage3/> } />
                        <Route path="/*" element={ <Navigate to='/lazy1' replace />  } /> */}
                        {
                            routes.map( e=>{
                                return <Route key={ e.name } path={ e.path }  element={ <e.Component />  }  />;
                            } )
                        }

                        {/* <Route path="/*" element={ <Navigate to= { routes[0].to }  replace />  } />  */}
                    </Routes>

                </div>
                
            </BrowserRouter>
        </Suspense>
    );
  }