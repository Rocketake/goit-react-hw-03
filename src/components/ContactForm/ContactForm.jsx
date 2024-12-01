import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid'
import * as Yup from 'yup';

const ContactForm = ({ onAdd }) => {

	const handleSubmit = (values, options) => {

		onAdd({...values, id: nanoid()})
		options.resetForm()
}

	const initialValues = {
		name: "",
		number: ""
	}

	const contactSchema = Yup.object().shape({
		name: Yup.string().min(3, "занадто коротке ім'я!").max(50, "ім'я задовге!").required("обов'язкове поле!"),
		number: Yup.string().min(10, "номер закороткий").required("обов'язкове поле!")
	})
	
   return (
	   <div>
		   <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactSchema}>
			   <Form>
				   <label htmlFor="name">
					   <span>Name</span>
					   <Field name="name"></Field>
					   <ErrorMessage name='name' component='span' />
				   </label>
				    <label htmlFor="">
					   <span>Number</span>
					   <Field name='number'></Field>
					   <ErrorMessage name='number' component='span' />
				   </label>
				   <button type='submit'>Add contact</button>
			   </Form>
		   </Formik>
	   </div>
	
   )
 }
 
 export default ContactForm