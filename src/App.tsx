import {
  type ChangeEvent,
  type MouseEventHandler,
  useContext,
  useState
} from 'react'
import { is } from '@radham/semver'
import CurrentVersionContext from './contexts/CurrentVersionContext.ts';
import './App.css'
import IsStableApiPrompt from './components/IsStableApiPrompt.tsx';
import StepContext, { type Step } from './contexts/StepContext.ts';
import IncrementTypeContext, { type IncrementType } from './contexts/IncrementTypeContext.ts';
import IsBugFixPrompt from './components/IsBugFixPrompt.tsx';
import IsNewFunctionalityPrompt from './components/IsNewFunctionalityPrompt.tsx';
import RecommendNewVersion from './components/RecommendNewVersion.tsx';
import IsBreakingChangePrompt from './components/IsBreakingChangePrompt.tsx';

function CurrentVersionPrompt({ handleOnChange: passedHandleOnChange, handleOnClick }: {
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void,
  handleOnClick: MouseEventHandler<HTMLButtonElement>
}) {
  const currentVersion = useContext(CurrentVersionContext);
  const [isCurrentVersionValid, setIsCurrentVersionValid] = useState(false);

  const validateCurrentVersion = (event: ChangeEvent<HTMLInputElement>): void => {
    const version = event.target.value;

    setIsCurrentVersionValid(is(version).valid());
  }
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    passedHandleOnChange(event);
    validateCurrentVersion(event);
  }

  return (
    <form>
      <label>
        <span style={{ display: 'block' }}>What's your current version?</span>
        <input name="currentVersion" type="text" defaultValue={currentVersion}
               onChange={handleOnChange} placeholder="e.g., &quot;1.0.0&quot;" />
        <button style={{ marginTop: '.25rem', display: 'block', width: '100%' }} type="button"
                onClick={handleOnClick}
                disabled={!isCurrentVersionValid}>Submit
        </button>
      </label>
    </form>
  )
}

function SemVerWizard() {
  const { step } = useContext(StepContext);

  switch (step) {
    case 'is-stable-api':
      return <IsStableApiPrompt />
    case 'is-bug-fix':
      return <IsBugFixPrompt />
    case 'is-new-functionality':
      return <IsNewFunctionalityPrompt />
    case 'is-breaking-change':
      return <IsBreakingChangePrompt />
    default:
      break;
  }

  return (
    <RecommendNewVersion />
  )
}

function App() {
  const [isCurrentVersionSet, setIsCurrentVersionSet] = useState(false);
  const [currentVersion, setCurrentVersion] = useState('');
  const [incrementType, setIncrementType] = useState<IncrementType | null>(null);
  const [step, setStep] = useState<Step>(is(currentVersion).unstable() ? 'is-stable-api' : 'is-bug-fix');

  return (
    <>
      <h1 style={{
        writingMode: 'vertical-lr',
        textOrientation: 'sideways',
        textTransform: 'uppercase',
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginBottom: '.5rem',
        marginLeft: 0,
        marginRight: 0,
        fontSize: '2.5rem',
        fontWeight: 'bold'
      }}>semver.it</h1>
      <CurrentVersionContext value={currentVersion}>
        <IncrementTypeContext value={{ incrementType, setIncrementType }}>
          <StepContext value={{ step, setStep }}>
            {isCurrentVersionSet ? <SemVerWizard /> :
              <CurrentVersionPrompt handleOnChange={event => setCurrentVersion(event.target.value)}
                                    handleOnClick={() => setIsCurrentVersionSet(true)} />}
          </StepContext>
        </IncrementTypeContext>
      </CurrentVersionContext>
    </>
  );
}

export default App;
