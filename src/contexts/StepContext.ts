import { createContext } from 'react';

type Step =
  'is-stable-api'
  | 'is-bug-fix'
  | 'is-new-functionality'
  | 'is-breaking-change'
  | 'indeterminate'
  | 'decision';

const StepContext = createContext<{
  step: Step | null,
  setStep: (step: Step) => void
}>({ step: null, setStep: () => undefined });

export { StepContext as default, type Step };
