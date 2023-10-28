import React from 'react'

export default function Login() {
  return (
    <div>
      <form>
        <label htmlFor="">Email</label><br />
        <input type="email" placeholder='Isi email anda'/>
        <br />
        <label htmlFor="">Password</label><br />
        <input type="password" placeholder='Isi password anda'/>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
