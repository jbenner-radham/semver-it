import { createContext } from 'react';

type IncrementType =
  'stable-api'
  | 'bug-fix'
  | 'new-functionality'
  | 'breaking-change'
  | 'indeterminate';

const IncrementTypeContext = createContext<{
  incrementType: IncrementType | null,
  setIncrementType: (incrementType: IncrementType) => void
}>({ incrementType: null, setIncrementType: () => undefined });

export { IncrementTypeContext as default, type IncrementType };
