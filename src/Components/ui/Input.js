import React from 'react'

const Input = ({ type, placeholder, name }) => {
    return (
        <input type={type} placeholder={placeholder} name={name} className="bg-[#eee] border-0 outline-none my-[8px] px-[15px] py-[10px] text-[13px] rounded-[8px] w-full" />
    )
}

export default Input