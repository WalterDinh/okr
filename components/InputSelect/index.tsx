import React from 'react'

type Props = {
    lable:string
    placehoder:string
    listOption:any
}

function InputSelect({lable,placehoder,listOption}: Props) {
  return (
    <div>
        <p className='lable-input'>{lable}</p>
        <div>
            <select className='select-input'>
                <option value="" disabled >{placehoder}</option>
                {listOption.map((item:any,index:number)=><option key={index} value={item}>{item}</option>)}
            </select>
            
        </div>
    </div>
  )
}

export default InputSelect