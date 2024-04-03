export const checkValidData=(email,password)=>{
const isValidEmail=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
const isValidPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(password);
if(!isValidEmail){
    return "Email is not valid";
}
if( !isValidPassword){
    return "Password is not valid";
}
return null;

}