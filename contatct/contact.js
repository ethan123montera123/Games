function sendMail() {
    var params = {
        name: document.getElementById("email").value,
    };

    const serviceID = "service_9i6b9do";
    const templateID = "template_ygywmxh";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("email").value = "";

            console.log(res);
            alert("Your Message was Sent Successfully");
        })

    .catch((err) => console.log(err));
}