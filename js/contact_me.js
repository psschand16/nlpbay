
// const sendMail=(params)=>{
    const contactForm=document.querySelector("#contactForm")
    contactForm.addEventListener("submit",(e)=>{
        e.preventDefault()
        let tempParams={
            name:document.getElementById("name").value,
            email:document.getElementById("email").value,
            country:document.getElementById("country").value,
            message:document.getElementById("message").value
        };
    
        emailjs.send("service_yla8ag5","template_ey3z10a",tempParams,"user_Y3HOL08Beh8wjxT8jtgai").then(
            (res)=>{

                document.getElementById("sendBtn").disabled = true;
                console.log("success",res.status)
                document.querySelector("#mail-result").innerHTML="Thanks for submitting form, We will Contact you in shortly."
            }
        )
    })
    