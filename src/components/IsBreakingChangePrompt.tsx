import { useContext } from 'react';
import StepContext from '../contexts/StepContext.ts';
import IncrementTypeContext from '../contexts/IncrementTypeContext.ts';
import Prompt from './Prompt.tsx';

export default function IsBreakingChangePrompt() {
  const { setStep } = useContext(StepContext);
  const { setIncrementType } = useContext(IncrementTypeContext);

  const handleYesClick = () => {
    setIncrementType('breaking-change');
    setStep('decision');
  }

  const handleNoClick = () => {
    setIncrementType('indeterminate');
    setStep('indeterminate');
  }

  return <Prompt question="Is this a breaking change to the API?"
                 handleYesClick={handleYesClick}
                 handleNoClick={handleNoClick} />
}
