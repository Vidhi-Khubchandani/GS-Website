import React from 'react'
import Layout from '../../Components/Layout';
import StepperComponent from '../../Components/Services/Stepper';
export default function Gardner() {
  return (
    <Layout>
   <div style={{ padding: '4rem',marginTop:'3rem' }}>
      <center>
        <h1>Gardner</h1>
        <StepperComponent />
      </center>
    </div>
  </Layout>
  )
}
