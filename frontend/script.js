// Form validation
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            let isValid = true;
            const inputs = form.querySelectorAll('input');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ff4b2b';
                } else {
                    input.style.borderColor = '#ddd';
                }
                
                // Email validation
                if (input.type === 'email' && input.value.trim()) {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(input.value.trim())) {
                        isValid = false;
                        input.style.borderColor = '#ff4b2b';
                    }
                }
                
                // Password confirmation validation
                if (input.id === 'confirm-password') {
                    const password = document.getElementById('password');
                    if (input.value !== password.value) {
                        isValid = false;
                        input.style.borderColor = '#ff4b2b';
                    }
                }
            });
            
            if (isValid) {
                // Form is valid, handle form submission
                // For demo purposes, redirect to the next page
                const formId = form.closest('.form-container').id;
                
                if (formId === 'login-form') {
                    window.location.href = 'dashboard.html';
                } else if (formId === 'forgot-password-form') {
                    window.location.href = 'check-email.html';
                } else if (formId === 'set-password-form') {
                    window.location.href = 'password-reset.html';
                } else if (formId === 'create-account-form') {
                    window.location.href = 'welcome-back.html';
                }
            }
        });
    });
    
    // Add input event listeners to remove error styling when user types
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.style.borderColor = '#ddd';
        });
    });
});