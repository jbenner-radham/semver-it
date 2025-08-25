import { useContext } from 'react';
import StepContext from '../contexts/StepContext.ts';
import IncrementTypeContext from '../contexts/IncrementTypeContext.ts';
import Prompt from './Prompt.tsx';

export default function IsNewFunctionalityPrompt() {
  const { setStep } = useContext(StepContext);
  const { setIncrementType } = useContext(IncrementTypeContext);

  const handleYesClick = () => {
    setIncrementType('new-functionality');
    setStep('decision');
  }

  const handleNoClick = () => {
    setStep('is-breaking-change');
  }

  return <Prompt question="Is this adding new functionality in a backward compatible manner?"
                 handleYesClick={handleYesClick}
                 handleNoClick={handleNoClick} />
}
