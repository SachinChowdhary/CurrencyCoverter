import React from "react";
export default function input({
   type,
   placeholder,
   currencyOptions=[],
   className,
   set,
   fromTo
})
  {
    const handleChange=((e)=>{
      set(e.target.value)
    })
    return(
        
        <div>
              <label htmlFor={type} className='block text-white mb-2'>{type}</label>
              <select name={type} className={className} onChange={handleChange}>
              <option value="" disabled selected>{placeholder}</option>
                {
                   currencyOptions.map((currency)=>{
                    return(
                        <option key={currency} 
                        value={fromTo}
                        >{currency}</option>
                      )
                   })
                    
                }
              </select>
        </div>
      
    )
}