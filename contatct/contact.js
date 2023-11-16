function sendMail() {
    var params = {
        first: document.getElementById("first").value,
        last: document.getElementById("last").value,
        email: document.getElementById("email").value,
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