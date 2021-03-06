import React, { useState } from 'react'
import axios from 'axios'

import NavHeader from '../PatientHeader/index.js'

export const DoctorOnboarding = props => {
  const [doctor, setDoctor] = useState({name: ''})
  const [doctorID, setDoctorID] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const token =localStorage.getItem('token')
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    const user = currentUser.map(id => id.userid)
    console.log('current user id', currentUser)
    console.log('user', user[0])
    axios.post('https://rcm-immunization-tracker.herokuapp.com/doctors/doctor', doctor, {
      headers: {
        Authorization: `bearer ${token}`,
        //'context-type': 'placeholder'

      }
    })
      .then(res => {
        //setDoctorID({ doctorid: res.data.doctorid})
        localStorage.setItem('currentDoctor', `${res.data.doctorid}`, 'token')
        console.log('id response from adding a doctor',res.data.doctorid)
         axios.put(`https://rcm-immunization-tracker.herokuapp.com/doctors/doctor/${res.data.doctorid}/user/${user[0]}`)
         .then(res => console.log('put doctors to user id', res))
         .catch(err => console.log('doctor put not working', err.response))
         //window.location.href = '/DoctorDashboard'
         //const token =localStorage.getItem('token')
         console.log(token)
          props.history.push('/DoctorDashboard')
         //console.log('doctorID', doctorID)
        })
        .catch(err => console.log('error from posting doctor', err.response))
      
   // console.log('doctor submit', doctor)
  }

  const handleChange = event => {
    setDoctor({
      ...doctor,
      [event.target.name]: event.target.value
    })
   // console.log('doctor', doctor)
  }

//console.log('doctro id in state', doctorID)

  return (
    <>
      <NavHeader />
      <form className="sign-up-form" onSubmit={event => handleSubmit(event)}>
      <img src='./assets/logo.png' alt='Immunify Logo' />
        <label>Name</label>
        <input className='signUpInput'
          name='name'
          type='text'
          value={doctor.name}
          onChange={event => handleChange(event)}
        />
        {/* <label>Last name</label>
        <input
          name='lastname'
          type='text'
          value={doctor.lastname}
          onChange={event => handleChange(event)}
        /> */}

        <button className='signUpButton'>Submit</button>
      </form>
    </>
  )
}
