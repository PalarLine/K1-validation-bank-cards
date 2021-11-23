

let data = "Pellentesque ex eros, +380665433321 porttitor eu bibendum ac, aliquam tincidunt urna. Mauris tristique lobortis orci, nec varius magna convallis interdum. Etiam 5363 4567 8765 3454 pharetra tempor ex, vel eleifend (067) 678 44 21 odio lacinia (0562) 35-30-38 eget. Morbi maximus libero vitae aliquet facilisis. Vivamus 5674-2346-8945-0012 vitae quam nisi. Quisque 12/45 quis venenatis 5192722517688913 lacus. Sed ac lorem (050)567-45-33 nec leo pharetra 4556796335044346 dapibus sed eu +38067432112 ex. In hac 4913-8185-2881-4543  habitasse platea dictumst. In dignissim 5461158320267908 suscipit rutrum. Ut 4916 8494 1754 2904 luctus  sapien in risus 56th street auctor, ac placerat 067-678-44-21  quam malesuada. Pellentesque (056) 7783322 bibendum justo  5363 4567 87653 3455 tempus purus convallis, a viverra nunc ullamcorper. Nulla 5213 9203 2475 5355 eget lectus gravida, porta eros vitae, semper erat +39-926-1234567.  Aenean volutpat vehicula dui ut pharetra.";
	
let regexp = /([0-9]{4}-?\s?){4}/g;

let result = data.match(regexp);
console.log(result);

let newMass = [];

    for (let i = 0; i < result.length; i++) {
    
        let temp = result[i];
        temp = temp.split(' ').join('').split('-').join('');
            if (luhnAlgorithm (temp) == true) {
                temp = temp.replace(/(?=(\d{4})+(?!\d))/g, ' ');
                newMass.push(temp);
            }            
      
     }

    newMass.forEach(newMass => console.log(newMass));

    let output = document.querySelector('#output');
        output.innerHTML = newMass.map(item => `
                            <ul> 
                              <li>${item}</li>
                            </ul>
                        
       `).join('');

// Luhn Algorithm
function luhnAlgorithm (arr) { 

    arr = arr.split('');

    let flag;
    let newMassEven = [],
        newMassOdd = [];

    arr.reverse();

    for (let i = 1; i < arr.length; i = i + 2) {

        let temp = arr[i];
              
            if (temp >= 5) {
                temp = temp * 2 - 9;
            } else {
                temp = temp * 2 
            }

        newMassEven.push(temp);
    }

    for (let i = 0; i < arr.length; i = i + 2) {

        let temp = Number(arr[i]);
        newMassOdd.push(temp);
        let result2 = newMassOdd.reduce((sum, current) => sum + current, 0);

    }

    let result1 = newMassEven.reduce((sum, current) => sum + current, 0);
    let result2 = newMassOdd.reduce((sum, current) => sum + current, 0);
    let controlSumm = result1 + result2;
           
        if (controlSumm == 0) { 
            flag = false;              
        } else  if (controlSumm % 10 == 0) {
            flag = true;                  
        } else {    
            flag = false;
        }

    return flag;
}