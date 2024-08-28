import { useState } from "react";
import { useSnackbar } from "notistack";
import Button from "../../Button/Button";

function AddBalanceForm({setIsOpen,setBalance}){

    const [income,setIncome]=useState('');
    const {enqueSnackbar}=useSnackbar();


    const handleSubmit=(e)=>{
        e.preventDefault();

        if(Number(income)<0){
            enqueSnackbar("Income should be more than 0", {variant:"warning"});
            setIsOpen(false);
            return;
        }
        setBalance((prev)=>prev+ Number(income));
        setIsOpen(false);
}

return(

    <div>

        <h3>Add Balance</h3>
        <form onSubmit={handleSubmit}>
            <input 
            type="number" 
            placeholder="Income Amount"
            value={income}
            onChange={(e)=>setIncome(e.target.value)}
            required
         />

         <Button type="submit" btnstyle="primary" shadow>Add Balance</Button>

         <Button>
            
         </Button>



        </form>

    </div>
)



}