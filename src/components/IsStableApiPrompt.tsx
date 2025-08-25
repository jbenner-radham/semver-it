import { useContext } from 'react';
import StepContext from '../contexts/StepContext.ts';
import IncrementTypeContext from '../contexts/IncrementTypeContext.ts';
import Prompt from './Prompt.tsx';

export default function IsStableApiPrompt() {
  const { setStep } = useContext(StepContext);
  const { setIncrementType } = useContext(IncrementTypeContext);

  const handleYesClick = () => {
    setIncrementType('stable-api');
    setStep('decision');
  }

  const handleNoClick = () => {
    setStep('is-bug-fix');
  }

  return <Prompt question="Should your new version indicate a stable API?"
                 handleYesClick={handleYesClick} handleNoClick={handleNoClick} />
}
