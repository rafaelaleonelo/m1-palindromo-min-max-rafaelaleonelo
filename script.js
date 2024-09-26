function isPalindrome(frase){
    
        const cleanedStr = frase.replace(/[\W_]/g, '').toLowerCase();
        const length = cleanedStr.length;
    
        
        for (let i = 0; i < length / 2; i++) {
            
            if (cleanedStr[i] !== cleanedStr[length - 1 - i]) {
                //return false; 
            }
        }
        return true; 
    }
    
    console.log(isPalindrome("Ame o Poema"));




    function arrayMaxMin(arr) {
        
        let min = arr[0];
        let max = arr[0];
    
         for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i]; 
            }
            if (arr[i] > max) {
                max = arr[i]; 
            }
        }
    
         return [min, max];
    }

    let array = [4,2,6,3,9]
    let result = arrayMaxMin(array)
    console.log(result);
    
    



