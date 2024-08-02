import React, { useState } from 'react'

const [formData, setFormData] = useState({
    // firstName: '',
    // lastName: '',
    email: '',
    phone: '',
    address: '',
    experience: '',
    education: '',
    skills: ''
  });

const preview = () => {
  return (
    <>
     <h2>Step 3: Preview</h2>
     <h3>CV Preview:</h3>
                <p>Name: {formData.firstName} {formData.lastName}</p>
                <p>Experience: {formData.experience}</p>
                <p>Education: {formData.education}</p>
                <p>Skills: {formData.skills}</p>
    </>
  )
}

export default preview