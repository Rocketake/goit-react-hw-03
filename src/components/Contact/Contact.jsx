import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import s from "./Contact.module.css"

const Contact = ({ data, onDelete }) => {
  return (
	  <div className={s.wrapper}>
		  <div className={s.info}>
			 <div className={s.row}> <IoPersonSharp />
			  <span>{data.name}</span></div>
			  <div className={s.row}><BsFillTelephoneFill />
			  <span>{data.number}</span></div>
		  </div>
		<button onClick={() => onDelete(data.id)}>Delete</button>
	</div>
  )
}

export default Contact