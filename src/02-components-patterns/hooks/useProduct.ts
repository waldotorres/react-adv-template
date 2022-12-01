import { useEffect, useState, useRef } from 'react';
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';


interface useProductArgs {
  product: Product,
  onChange?:(args:onChangeArgs) => void,
  value?:number,
  initialValues?:InitialValues
}


export const useProduct = ({ onChange, product, value = 0, initialValues }:useProductArgs) => {

    
    const [counter, setCounter] = useState<number>( initialValues?.count || value);
   
    const isMounted = useRef(false);

    //console.log(  initialValues?.count ,  value )
    const maxCount = initialValues?.maxCount || -1;

    const increaseBy = (value:number)=>{

        //const newValue = Math.max( counter + value ,0);
        
        let newValue = Math.max( counter + value ,0);
        newValue =   maxCount< 0  ? newValue
                                  : Math.min(  newValue, maxCount);

        setCounter( newValue );
        onChange && onChange({product, count:newValue});
    }

    const reset =()=>{
      setCounter(initialValues?.count || value);
    }
    

    useEffect(() => {
      if( !isMounted.current ) 
      {
        return;
      }
      setCounter(value);
    }, [value])
    
    
    // useEffect(() => {
    //   isMounted.current = true;
    // }, [])
  

  return {
    counter, 
    increaseBy, 
    isMaxCountReached: maxCount>=0 && counter>=maxCount,
    maxCount,
    reset

  }
  
}
