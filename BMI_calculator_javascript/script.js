// document.getElementById("bmiform").addEventListener('ssubmit',function(e){
// e.preventDefault();
// const gender=document.getElementById('gender').value;
// const age=parseInt(document.getElementById('age').value);
// const heightfeet=parseInt(document.getElementById('height-feet').value);
// const heightinches=parseInt(document.getElementById('height-inches').value);
// const weight=parseFloat(document.getElementById('weight').value);


// if(gender && age && heightfeet && heightinches && weight){
//     const heightinmeter =((heightfeet * 12)+ heightinches)*0.0254;  //in meter conversion
//     const bmi= weight /(heightinmeter*heightinmeter);
//     const resultelement=document.getElementById("result");

//     let category ='';

//     if (bmi < 18.5){
//         category='under weight';
//     }else if(bmi >= 18.5 && bmi < 24.9){
//         category='normal weight';
//     }
//     else if(bmi >= 25 && bmi < 29.9){
//     category='over weight';
//     }
//     else{
//         category='obese';
//     }

//     let resultmessage='your BMI:' + bmi.toFixed(2) + '<br>';
//     resultmessage +='category:' +category;

//     resultelement.innerHTML=resultmessage;
//  }


// });

document.getElementById("bmiform").addEventListener('submit', function(e){
    e.preventDefault();
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightfeet = parseInt(document.getElementById('height-feet').value);
    const heightinches = parseInt(document.getElementById('height-inches').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if(gender && age && heightfeet && heightinches && weight){
        const heightinmeter = ((heightfeet * 12) + heightinches) * 0.0254;  //in meter conversion
        const bmi = weight / (heightinmeter * heightinmeter);
        const resultelement = document.getElementById("result");

        let category ='';

        if (bmi < 18.5){
            category = 'underweight';
        } else if(bmi >= 18.5 && bmi < 24.9){
            category = 'normal weight';
        } else if(bmi >= 25 && bmi < 29.9){
            category = 'overweight';
        } else {
            category = 'obese';
        }

        let resultmessage = 'Your BMI: ' + bmi.toFixed(2) + '<br>';
        resultmessage += 'Category: ' + category;

        resultelement.innerHTML = resultmessage;
    }
});
