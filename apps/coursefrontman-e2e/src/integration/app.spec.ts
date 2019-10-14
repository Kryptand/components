import { getGreeting } from '../support/app.po';

describe('coursefrontman', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to coursefrontman!');
  });
});
