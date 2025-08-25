import { useContext } from 'react';
import StepContext from '../contexts/StepContext.ts';
import IncrementTypeContext from '../contexts/IncrementTypeContext.ts';
import Prompt from './Prompt.tsx';

export default function IsBugFixPrompt() {
  const { setStep } = useContext(StepContext);
  const { setIncrementType } = useContext(IncrementTypeContext);

  const handleYesClick = () => {
    setIncrementType('bug-fix');
    setStep('decision');
  }

  const handleNoClick = () => {
    setStep('is-new-functionality');
  }

  return <Prompt question="Is this a backward compatible bug fix?" handleYesClick={handleYesClick}
                 handleNoClick={handleNoClick} />
}
