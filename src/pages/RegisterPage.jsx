import React, { useState } from 'react'
import RegFirstStep from '../components/RegFirstStep'
import RegSecondStep from '../components/RegSecondStep'
import RegThirdStep from '../components/RegThirdStep'

function RegisterPage() {
    const [step, setStep] = useState(1)
    const changeStepOnClick = (value) => {
        setStep(value)
    }

  return (
    <>
        {step === 1 &&
            <RegFirstStep changeStepOnClick={changeStepOnClick} />
        }
        {step === 2 &&
            <RegSecondStep changeStepOnClick={changeStepOnClick} />
        }
        {step === 3 &&
            <RegThirdStep />
        }
    </>
  )
}

export default RegisterPage