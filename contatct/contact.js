function sendMail() {
    var params = {
        first: document.getElementById("first").value,
        email: document.getElementById("email").value,
        last: document.getElementById("last").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_9i6b9do";
    const templateID = "template_ygywmxh";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("first").value = "";
            document.getElementById("last").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";

            console.log(res);
            alert("Your Message was Sent Successfully");
        })

    .catch((err) => console.log(err));

}

const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'service_9i6b9do';
        const templateID = 'template_ygywmxh';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });

    document.querySelector('#contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        e.target.elements.first.value = '';
        e.target.elements.last.value = '';
        e.target.elements.email.value = '';
        e.target.elements.message.value = '';
    });