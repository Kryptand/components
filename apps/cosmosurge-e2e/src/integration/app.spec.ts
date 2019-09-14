import { getGreeting } from '../support/app.po';

describe('cosmosurge', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to cosmosurge!');
  });
});
