
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
    
        emailjs.send("service_pdhk5x6","template_fryimma",tempParams).then(
            (res)=>{
                console.log("success",res.status)
                document.querySelector("#mail-result").innerHTML="Thanks for submitting form, We will Contact you in shortly."
            }
        )
    })
    