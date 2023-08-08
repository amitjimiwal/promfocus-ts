import {GiNextButton} from 'react-icons/gi'

interface Props{
         OnClick:()=> void;
}
const NextButton = ({OnClick}:Props) => {
  return (
    <div onClick={OnClick} className='text-5xl text-white '>
      <GiNextButton/>
    </div>
  )
}

export default NextButton
