describe('ui: Todos component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=todos--primary&args=todos;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Todos!');
    });
});
