import { useContext } from 'react';
import IncrementTypeContext from '../contexts/IncrementTypeContext.ts';
import CurrentVersionContext from '../contexts/CurrentVersionContext.ts';
import { parse } from '@radham/semver';

export default function RecommendNewVersion() {
  const currentVersion = useContext(CurrentVersionContext);
  const { incrementType } = useContext(IncrementTypeContext);
  const { major, minor, patch } = parse(currentVersion);
  let recommendedVersion = '';

  switch (incrementType) {
    case 'stable-api': {
      recommendedVersion = '1.0.0';
      break;
    }
    case 'bug-fix': {
      recommendedVersion = `${major}.${minor}.${patch + 1}`;
      break;
    }
    case 'new-functionality': {
      recommendedVersion = `${major}.${minor + 1}.0`;
      break;
    }
    case 'breaking-change': {
      recommendedVersion = `${major + 1}.0.0`;
      break;
    }
    case 'indeterminate': {
      return (
        <p>Sorry, we couldn't determine a new version for you based upon the provided criteria.</p>
      );
    }
  }

  if (!recommendedVersion) {
    return (
      <p>Sorry, an error occurred.</p>
    );
  }

  return (
    <>
      <p>Your recommended new version:</p>
      <strong style={{ fontSize: '3rem' }}>{recommendedVersion}</strong>
    </>
  );
}
