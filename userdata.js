function signup(){
    let email=document.getElementById('email').value
    let contact=document.getElementById('contact').value
    let brand=document.getElementById('brand').value
    let color=document.getElementById('color').value
    let paymentdown=document.getElementById('paymentdown').value
    let monthly=document.getElementById('monthly').value
    {
    if( email== ' ' ||  contact== '' ||  brand== '' ||  color== '' || paymentdown =='' || monthly=='' )
        {
        alert('fill the inputs')
    } 

    else{
        
        let objname = {
            email:email,
            contact:contact,
            brand:brand,
            color:color,
            Downpayment:paymentdown,
            Monthlypayment:monthly,
        }

        console.log(objname);

        let fdata = db.collection('buyers').doc()

        fdata.set(objname)
        alert('add')
        
    }

}
}
