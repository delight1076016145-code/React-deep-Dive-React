import { render } from '@testing-library/react';

import Common from './common';

describe('MonorepoTestCommon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Common />);
    expect(baseElement).toBeTruthy();
  });
});
