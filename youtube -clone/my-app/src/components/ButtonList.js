import React from 'react'
import Button from './Button';

//const list = ["All","Live",];

const ButtonList = () => {
  return (
    <div className="flex w-full overflow-x-scroll no-scrollbar n my-1 "> 
      <Button name="All"/>
      <Button name="Gmaing"/>
      <Button name="Songs"/>
      <Button name ="Live"/>
      <Button name ="Soccer"/>
      <Button name ="Cricket"/>
      <Button name ="Cooking"/>
      <Button name ="News"/>
      <Button name ="Valentines"/>
      <Button name ="TakeUforward"/>
      <Button name ="Codehelp"/>
      <Button name ="CodewithHarry"/>
      <Button name ="NamasteJs"/>
      <Button name ="Technology"/> 
      <Button name ="Blogs"/>
      <Button name ="Coding"/>
      <Button name ="CID"/>
    </div>
  )
}

export default ButtonList