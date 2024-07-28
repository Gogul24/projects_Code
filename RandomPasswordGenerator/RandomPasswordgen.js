function generate(length,includeUppercase,incluedeLowercase,includeNumber){
        let allowChars ="";
        let password = ""
        lowerCase ="abcdefghijklmnopqrstuvwxyz"
        upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        nums = "1234567890"

        allowChars += includeUppercase ? upperCase : "";
        allowChars += includeLowercase ? lowerCase: "";
        allowChars += includeNumber ? nums : "";
        
        if(length<=0){
            console.log(`(lenth must be above 1)`);
        }
        else if(allowChars ===0){ 
            console.log(`Change any one atleast among Upper,Lower or Number to be true`);
        }

        for(let i = 1 ; i<=length;i++){
            const random = Math.floor(Math.random()* allowChars.length)
            password += allowChars[random];
        }
        return password;

}

const passLength =10;
const includeUppercase = true;
const includeLowercase = true;
const includeNumber = true;

const password = generate(passLength,includeUppercase,includeLowercase,includeNumber)

console.log(`Generated password is :${password}`);