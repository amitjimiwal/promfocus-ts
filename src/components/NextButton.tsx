import {GiNextButton} from 'react-icons/gi'
import React from 'react';
interface Props{
         OnClick:()=> void;
}
const NextButton :React.FC<Props> = ({OnClick}) => {
  return (
    <div onClick={OnClick} className='text-5xl text-white '>
      <GiNextButton/>
    </div>
  )
}

export default NextButton
