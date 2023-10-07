import { useState } from 'react';
import {Input} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import './ET.css'

function ET({ TotalData }) {

    const [Title,SetTitle] =useState("");
    const [Amount,SetAmount] =useState("");
    const [Time,SetTime] =useState("");
    // console.log(Title,Amount,Time);
    const handleSubmit = (event) => {
        event.preventDefault();
    
        // if (!Title || !Amount || !Time) {
        //   alert('Please fill in all fields');
        //   return;
        // }
    
        const expense = {
            Title:Title,
            Amount: Amount,
            Date: new Date(Time),
        };
        console.log(expense);
        TotalData(expense);
        SetTitle('');
        SetAmount('');
        SetTime('');
       
      };

    return(

<div>
  <div className="w-full gap-2 grid grid-cols-12 p-8 bg-stone-200"> 

        <div className="flex flex-col w-full h-[349px] col-span-12 sm:col-span-5 justify-center  items-center">
         <h3 className="font-semibold track"><span>Track,Save</span></h3>
         <p className="text-large font-bold repeat">REPEAT</p>
        </div>        
     
        <form onSubmit={handleSubmit} className="w-full h-[349px] col-span-12 sm:col-span-7">
        <div className="flex w-full  flex-col  gap-4">
        <Input
        isRequired
        isClearable
        size="md"
        label="Title"
        type='text'
        value={Title}
        labelPlacement="outside"
        placeholder="Enter your description "
        onChange={(e) => SetTitle(e.target.value)}>
        </Input>  
      <Input
        isRequired
        isClearable
        value={Amount}
        type='number'
        label="Amount"
        labelPlacement="outside"
        placeholder="Enter Amount"
        onChange={(e) => SetAmount(e.target.value)}
      />
        <Input
        isClearable
        isRequired
        type='date'
        label="Date"
        value={Time}
        labelPlacement="outside"
        placeholder="Select Date"
        onChange={(e) => SetTime(e.target.value)}
      /> 
       <Button  type="submit" className='button'  variant="solid">
        Add an Expense
       </Button>    
       </div>
        </form>
    </div>
 </div>
    )

}
export default ET;