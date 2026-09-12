import { describe, it, expect } from 'vitest';
import { portfolioData } from '../data/portfolioData';

describe('Portfolio Data Integrity Tests', () => {
  it('should contain official profile details for Patri Aparicio', () => {
    expect(portfolioData.profile.displayName).toBe('Patri Aparicio');
    expect(portfolioData.profile.fullName).toBe('Patricia Aparicio Díaz');
    expect(portfolioData.profile.email).toBe('apariciodiazpatricia@gmail.com');
    expect(portfolioData.profile.location).toContain('Sevilla');
  });

  it('should include 4 main featured projects with required fields', () => {
    expect(portfolioData.projects).toBeDefined();
    expect(portfolioData.projects.length).toBe(4);

    const projectIds = portfolioData.projects.map(p => p.id);
    expect(projectIds).toContain('world-cup-2026');
    expect(projectIds).toContain('habitatcode');
    expect(projectIds).toContain('valhalla-chatarrero');
    expect(projectIds).toContain('buhardilla-retro');

    portfolioData.projects.forEach(project => {
      expect(project.title).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.tags.length).toBeGreaterThan(0);
      expect(project.github).toContain('github.com');
    });
  });

  it('should include testing and core competencies in skills', () => {
    expect(portfolioData.skills).toBeDefined();
    expect(portfolioData.skills.frontend).toBeDefined();
    expect(portfolioData.skills.testing).toBeDefined();
    expect(portfolioData.skills.frontend.some(s => s.name.includes('React'))).toBe(true);
    expect(portfolioData.skills.testing.some(s => s.name.includes('Vitest'))).toBe(true);
  });

  it('should contain valid suggested questions for AI chatbot', () => {
    expect(portfolioData.suggestedQuestions.length).toBeGreaterThan(0);
    expect(portfolioData.suggestedQuestions).toContain('¿Quién es Patri?');
    expect(portfolioData.suggestedQuestions).toContain('Stack tecnológico');
  });
});
