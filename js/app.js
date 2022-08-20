function getpin(){
    const pin=generatePin();
    const pinString=pin+'';
    if(pinString.length===4){
        return pin;
    }
    else{
        
        return getpin();
    }
}

function generatePin(){
    const random=Math.round(Math.random()*10000);
    return random;
}
document.getElementById('generate-pin').addEventListener('click',function(){
    const pin=getpin();
    const displayPinField=document.getElementById('display-pin-field');
    displayPinField.value=pin;
})

document.getElementById('calculator').addEventListener('click',function(){
    const number=event.target.innerText;
    const typeNumbersField= document.getElementById('typed-numbers');
    const prevTypedNumber=typeNumbersField.value;
    if(isNaN(number)){
        if(number==='C'){
            typeNumbersField.value='';
        }
        else if(number==='<'){
          const digits= prevTypedNumber.split('');
          digits.pop();
          const remainingDigits=digits.join('');
          typeNumbersField.value=remainingDigits;
        }
    }
    else{
        
        
        const newTypedNumber=prevTypedNumber+number;
        typeNumbersField.value=newTypedNumber;

    }
})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField= document.getElementById('display-pin-field');
    const currentPin= displayPinField.value;
    const typeNumbersField=document.getElementById('typed-numbers');
    const typedNumber=typeNumbersField.value;
    
     //success and failure notification part start
    const pinSuccessMessege= document.getElementById('pin-success');
    const pinFailureMessege=document.getElementById('pin-failure');
    if(typedNumber=== currentPin){
        
        pinSuccessMessege.style.display='block';
        pinFailureMessege.style.display='none';
    }
    else{
       
       pinFailureMessege.style.display='block';
       pinSuccessMessege.style.display='none';

    }

})