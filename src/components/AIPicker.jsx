import React from 'react';
import CustomButton from './CustomButton';
const AIPicker = ({prompt,setPrompt,generatingImg,handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea className='aipicker-container'
      placeholder='Ask AI ...'
      rows={5}
      value={prompt}
      onChange={(e)=> setPrompt(e.target.value)}/>
      <div className='flex flex-wrap gap-3'>
        { generatingImg ?(
        <CustomButton 
        type='outline'
        title='Asking AI...'
        customStyles='text-xs'
        />):(
          <>
           <CustomButton
          type='outline'
          title='AI LOGO'
          handleClick={()=>handleSubmit('logo')}
        customStyles='text-xs'
          />
           <CustomButton
          type='filled'
          title='AI FULL'
          handleClick={()=>handleSubmit('full')}
        customStyles='text-xs'
          />
          </>
         
          
        )
        }
      </div>
    </div>
  )
}

export default AIPicker