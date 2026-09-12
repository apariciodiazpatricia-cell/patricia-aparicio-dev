import { describe, it, expect } from 'vitest';
import { sendChatMessage, fetchWeather } from '../services/api';

describe('API Services & Smart Fallback Tests', () => {
  it('should return a valid intelligent response for identity query', async () => {
    const response = await sendChatMessage('¿Quién es Patri?');
    expect(response).toBeTruthy();
    expect(response).toContain('Patri Aparicio');
  });

  it('should respond with stack details on technology questions', async () => {
    const response = await sendChatMessage('¿Qué tecnologías o stack dominas?');
    expect(response).toContain('React');
    expect(response).toContain('Tailwind CSS');
  });

  it('should respond with availability information on hiring questions', async () => {
    const response = await sendChatMessage('¿Estás disponible para trabajar?');
    expect(response.toLowerCase()).toContain('disponible');
    expect(response).toContain('Frontend Junior');
  });

  it('should fetch weather or return default fallback for Sevilla', async () => {
    const weather = await fetchWeather('Sevilla');
    expect(weather).toBeDefined();
    expect(weather.city).toContain('Sevilla');
    expect(weather.temp).toBeTypeOf('number');
  });
});
