// Email service using EmailJS (free service)
// You'll need to sign up at https://www.emailjs.com/ and get your keys

class EmailService {
    constructor() {
        // Initialize EmailJS with your public key
        // Replace with your actual EmailJS public key
        this.publicKey = 'YOUR_EMAILJS_PUBLIC_KEY';
        this.serviceId = 'YOUR_EMAILJS_SERVICE_ID';
        this.templateId = 'YOUR_EMAILJS_TEMPLATE_ID';
    }

    async sendEmail(formData) {
        try {
            // Load EmailJS if not already loaded
            if (typeof window.emailjs === 'undefined') {
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
                document.head.appendChild(script);

                await new Promise((resolve) => {
                    script.onload = resolve;
                });

                window.emailjs.init(this.publicKey);
            }

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: 'kcsaiganesh@gmail.com',
                reply_to: formData.email,
                subject: `Portfolio Contact: ${formData.subject || 'New Message'}`
            };

            const response = await window.emailjs.send(
                this.serviceId,
                this.templateId,
                templateParams
            );

            return {
                success: true,
                message: 'Email sent successfully!',
                data: response
            };
        } catch (error) {
            console.error('Email sending failed:', error);
            return {
                success: false,
                message: 'Failed to send email. Please try again.',
                error: error
            };
        }
    }

    // Alternative method using Formspree (another free service)
    async sendEmailFormspree(formData) {
        try {
            const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: formData.subject || 'Portfolio Contact'
                }),
            });

            if (response.ok) {
                return {
                    success: true,
                    message: 'Email sent successfully!'
                };
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Email sending failed:', error);
            return {
                success: false,
                message: 'Failed to send email. Please try again.',
                error: error
            };
        }
    }
}

const emailService = new EmailService();
export default emailService;
