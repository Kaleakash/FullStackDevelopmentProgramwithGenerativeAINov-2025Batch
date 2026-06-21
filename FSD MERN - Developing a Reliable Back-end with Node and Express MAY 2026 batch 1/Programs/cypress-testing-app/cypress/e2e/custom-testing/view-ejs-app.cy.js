describe('Express EJS Application Testing', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('Should load home page', () => {
        cy.contains('Welcome').should('exist');
    });

    it('Should open login page', () => {
        cy.visit('http://localhost:3000/login');
        cy.contains('Login Page').should('be.visible');
    });

    it('Admin login should navigate to Admin Dashboard', () => {
        cy.visit('http://localhost:3000/login');

        cy.get('#email').type('admin@gmail.com');
        cy.get('#password').type('admin123');
        cy.get('#typeofUser').select('admin');

        cy.get('button[type="submit"]').click();

        cy.contains('Dashboard').should('be.visible');
        cy.contains('Welcome, admin@gmail.com!').should('be.visible');
    });

    it('User login should navigate to User Dashboard', () => {
        cy.visit('http://localhost:3000/login');

        cy.get('#email').type('raj@gmail.com');
        cy.get('#password').type('raj123');
        cy.get('#typeofUser').select('user');

        cy.get('button[type="submit"]').click();

        cy.contains('Welcome').should('be.visible');
        cy.contains('raj@gmail.com').should('be.visible');
    });

    it('Invalid login should display error message', () => {
        cy.visit('http://localhost:3000/login');

        cy.get('#email').type('wrong@gmail.com');
        cy.get('#password').type('wrong123');
        cy.get('#typeofUser').select('user');

        cy.get('button[type="submit"]').click();

        cy.contains('Invalid credentials. Please try again.')
            .should('be.visible');
    });

    it('Admin should add course data', () => {

        // Login as Admin
        cy.visit('http://localhost:3000/login');

        cy.get('#email').type('admin@gmail.com');
        cy.get('#password').type('admin123');
        cy.get('#typeofUser').select('admin');

        cy.get('button[type="submit"]').click();

        // Navigate to Add Data
        cy.contains('Add Data').click();

        cy.get('input[name="courseName"]')
            .type('Python Full Stack');

        cy.get('input[name="courseDuration"]')
            .type('4 Months');

        cy.get('input[type="submit"]').click();

        cy.contains('Data added successfully!')
            .should('be.visible');
    });

    it('Should view course data', () => {

        cy.visit('http://localhost:3000/viewData');

        cy.contains('View Data')
            .should('be.visible');

        cy.get('ul').should('exist');
    });

});