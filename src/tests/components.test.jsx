import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeroRobot from '../components/HeroRobot';
import ApiWidget from '../components/ApiWidget';

describe('UI Component Tests', () => {
  it('should render HeroRobot scout drone correctly', () => {
    render(<HeroRobot />);
    expect(screen.getByText(/SCOUT_BOT/i)).toBeDefined();
    expect(screen.getByText(/inspecting about_me/i)).toBeDefined();
  });

  it('should render ApiWidget developer quotes', () => {
    render(<ApiWidget />);
    expect(screen.getByText(/DEV_QUOTE/i)).toBeDefined();
  });
});
