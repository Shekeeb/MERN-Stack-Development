import React, { useState } from 'react';

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [error, setError] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target

    setError((error) => ({
      ...error,
      [name]: '',
    }));

    setForm((form) => ({
      ...form,
      [name]: value,
    }))
  }

  const validEmail = (email) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    return emailRegex.test(email)
  }

  const validPhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/
    return phoneRegex.test(phone)
  };

  const handleSubmit = (event) => {
    event.preventDefault()

    const newError = {}

    if (form.name.trim() === '') {
      newError.name = 'Name is required'
    }

    if (form.phone.trim() === '') {
      newError.phone = 'Phone is required'
    } else if (!validPhone(form.phone)) {
      newError.phone = 'Please enter a valid phone number'
    }

    if (form.email.trim() === '') {
      newError.email = 'E-mail is required'
    } else if (!validEmail(form.email)) {
      newError.email = 'Please enter a valid e-mail'
    }

    setError(newError)

    if (Object.keys(newError).length === 0) {
      console.log('Form submitted successfully', form)
    }

    setForm({
      name:'',
      phone:'',
      email:''
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table>

            <tr>
              <td><label htmlFor="name">Name</label></td>
              <td><input type="text" name="name" value={form.name} onChange={handleChange} /></td>
              {error.name && <span style={{ color: 'red' }}>{error.name}</span>}
            </tr>

            <tr>
              <td><label htmlFor="phone">Phone</label></td>
              <td><input type="text" name="phone" value={form.phone} onChange={handleChange} /></td>
              {error.phone && <span style={{ color: 'red' }}>{error.phone}</span>}
            </tr>

            <tr>
              <td><label htmlFor="email">E-mail</label></td>
              <td><input type="text" name="email" value={form.email} onChange={handleChange} /></td>
              {error.email && <span style={{ color: 'red' }}>{error.email}</span>}
            </tr>

            <tr>
              <td><button type="submit">Submit</button></td>
            </tr>
            
        </table>
      </form>
    </div>
  )
}

export default Form;
