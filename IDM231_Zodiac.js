var dob;
var dob_month;
var dob_day;
var usersZodiac;
var Zodiac = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']

function getUsersZodiac(dob, dob_month, dob_day){
    //calculate users' Zodiac
}

function playSound(usersZodiac){
    for (var i = 0; i < Zodiac.length; i++){
        if(usersZodiac == Zodiac[i]{
            //select mp3 to play base on zodiac
        }
    }
}

function showInfo{
    for (var i = 0; i < Zodiac.length; i++){
        if(usersZodiac == Zodiac[i]{
            //select background img base on zodiac
        }
    }
}

// {
//     const form = document.forms['myForm'];

//     function handleFormSubmit(event){
//         event.preventDefault();

//     const inputDate = document.getElementById('date');
//     const myDate = new Date(inputDate.value);
    
//     const feedbackDate = inputDate.nextElementSibling;
//         if (isNaN(myDate)){
//             inputDate.focus();
//             inputDate.value = '';
//             feedbackDate.hidden = false;
//         }else{
//             feedbackDate.hidden = true;
//         }

//         console.log(myDate);
//         console.log(myDate.getUTCMonth);
//         console.log(myDate.getUTCDate);
//         console.log(myDate.getUTCDay);

//     }

//     form.addEventListener('submit', handleFormSubmit, false);
// }