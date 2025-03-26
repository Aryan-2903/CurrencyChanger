In this project we are going to learn custom hooks
//default hooks starts with use but its not cumpolosry that we use "use" at starting 

{currencyOptions.map((currency)=>(
         <option key={currency} value={currency}>
          {currency}
         </option>
         ))}

whenever we loop in jsx like above always give keys as not giving key will degrade the react perofrmace alot 
