import React, { useState } from 'react';
import {Select, SelectItem} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import {Progress} from "@nextui-org/react";
import './filter.css'

function Filter({expenses})
{ 
    let haveitems = false;
    let havefilter=false;

    const monthNames = [  "January",  "February","March", "April","May","June", "July",  "August", "September","October", "November","December" ];

    const [value, setValue] = useState([]);
    const[yearselect,SetYearSelect]=useState('');
    const[filterexpenses,SetFilterExpenses]=useState([]);

     console.log(yearselect);

   const handleYearChange=(event)=>
    {    console.log(event.target.value);
        setValue([event.target.value]);
        SetYearSelect(event.target.value);
        FilterbyYear(event.target.value);
        //SetYearSelect("");
    }
    const FilterbyYear = (yearselect)=>
    {  console.log(`called by filter function ${yearselect}`);
        if(yearselect ==="")
      { 
         SetFilterExpenses(expenses);
         console.log("inside no year selected");
      }
      else{
        console.log("inside  year selected");
        const filtered =expenses.filter((item) => item.Date.getFullYear() == parseInt(yearselect));
         SetFilterExpenses(filtered);
      }

    }
    console.log(filterexpenses);

    if(yearselect != "" && filterexpenses.length >0)
    {  
        havefilter=true;
    }

 // console.log(expenses);
  if(expenses.length <= 0)
  {
    haveitems=true;
  }
  //console.log(expenses.length);
  return (
    <div>
         <div className="w-full gap-2 grid grid-cols-12 p-8">
            <Card className='w-full h-full col-span-12 md:col-span-5 bg-orange-100'>
                <CardHeader className=' justify-between '>
                <p className='year'>Filter By Year</p>
                <div className="w-[300px]">
                 <Select
        label="Select Year"
        variant="bordered"
        placeholder="select a year"
        selectedKeys={value}
        className="max-w-xs"
        onChange={handleYearChange}
      >
          <SelectItem key="2020" value="2020">2020</SelectItem>
          <SelectItem key="2021" value="2021">2021</SelectItem>
          <SelectItem key="2022" value="2022">2022</SelectItem>
          <SelectItem key="2023" value="2023">2023</SelectItem>
          <SelectItem key="2024" value="2024">2024</SelectItem>
      </Select>
                      </div>
                </CardHeader>
                <CardBody>  <div>
      { haveitems ? ( <h1>no expense found</h1>)  :(havefilter ? (  <div>
      <ul>
        {filterexpenses.map((item, index) => (
          <li key={index}>
            <div className='pb-3 '>
            <Card className='flex w-full flex-row'>
            <Card className='w-[150px] '>
                <CardBody className=' flex-col justify-center items-center'>
                <h4 className="font-bold text-small">{monthNames[item.Date.getMonth()]}</h4>
                <p className="font-semibold ">{item.Date.getFullYear()}</p>
                <h4 className="font-bold text-large">{item.Date.getDate()}</h4>
               </CardBody>    
            </Card>
            <CardBody className='flex flex-row justify-between items-center'>
                <p className="text-large uppercase font-bold">{item.Title}</p>
                <p className="text-large uppercase font-bold border-3 p-1 rounded border-yellow-700 ">${item.Amount}</p>
            </CardBody>
           
            </Card>
            </div>
          </li>
        ))}
      </ul>
    </div>) :(<div>
      <ul>
        {expenses.map((item, index) => (
          <li key={index}>
               <div className='pb-3'>
            <Card className='flex w-full flex-row'>
            <Card className='w-[150px]'>
                <CardBody className=' flex-col justify-center items-center'>
                <h4 className="font-bold text-small">{monthNames[item.Date.getMonth()]}</h4>
                <p className="font-semibold ">{item.Date.getFullYear()}</p>
                <h4 className="font-bold text-large">{item.Date.getDate()}</h4>
               </CardBody>    
            </Card>
            <CardBody className='flex flex-row justify-between items-center'>
                <p className="text-large uppercase font-bold">{item.Title}</p>
                <p className="text-large uppercase font-bold border-4 rounded-xl border-blue-500 ">${item.Amount}</p>
            </CardBody>
           
            </Card>
            </div>

          </li>
        ))}
      </ul>
    </div>
) )} 
</div>

                </CardBody>
            </Card>

            <Card isFooterBlurred className="w-full h-full col-span-12 md:col-span-7 ">
                <CardHeader>  <p className='year'>Expense Chart</p>
                </CardHeader>
                <CardBody>  
                    <div>
      { haveitems ? ( <h1>no Expense Chart found</h1>)  :(havefilter ? (  <div>
      <ul>
        {filterexpenses.map((item, index) => (
          <li key={index}>
            <div>
            <Progress
      label={monthNames[item.Date.getMonth()]}
      size="sm"
      value={item.Amount}
      maxValue={10000}
      color="warning"
      formatOptions={{style: "currency", currency: "USD"}}
      showValueLabel={true}
      className="max-w-md"
    />
            </div>
          </li>
        ))}
      </ul>
    </div>) :(<div>
      <ul>
        {expenses.map((item, index) => (
          <li key={index}>
                   <div>
            <Progress
      label={monthNames[item.Date.getMonth()]}
      size="sm"
      value={item.Amount}
      maxValue={10000}
      color="warning"
      formatOptions={{style: "currency", currency: "USD"}}
      showValueLabel={true}
      className="max-w-md"
    />
            </div>
          </li>
        ))}
      </ul>
    </div>
) )} 
</div>

                </CardBody>
            </Card>
</div>

</div>
  );

}
export default Filter;