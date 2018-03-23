var sign = document.getElementById("yourSign");
var range = document.getElementById("birthdayRange");
var attributes = document.getElementById("attributes");
var img = document.getElementById("zodiacImage");
var zodiac = [
  {
    zodiacName: "aries",
    birthdayRange: "March 21 - April 19",
    attributes: "Aries are fire signs and those born under this element are regarded in astrology as adventurous, active and outgoing. It won't matter where you go or how remote or unusual it is - from the Outback to the Antarctic - you can be sure that an Aries has been there before you (or at the very least you will meet one along the way!) Aries is a uniquely naive sign. Although they are independent, outgoing and assertive they are also surprisingly trusting, often innocently walking into the lion's den at times. No matter what upheaval, challenge or triumph they confront - an Aries has a wonderful ability to bounce back. Their faith in life and the future remains untouched by hardship. Their gift is that they are always children at heart and the world is always a magical place for them. Many famous sports people are born under this sign. Aries is regarded as the most physical sign and because of its Mar's rulership; it is also one of the most highly charged masculine energy signs in astrology. No wonder women born under Aries are forceful, dynamic and aggressive, and as a result these Aries women frequently find themselves with dilemmas surrounding their romantic relationships. For them, a man has to be a 'real man' to deal with an Aries woman, otherwise she intimidates him. And conversely for the Aries male, a woman has to be a real woman to deal with him, because he is looking for many balancing component traits (his true feminine side) in his partner. She has to run the gamut in his support system, from the Aries man's best friend, true companion, through to his muse, and yet she must never ever answer him back!",
    picture: "resources/ariesSign.png"
  },
  {
    zodiacName: "cancer",
    birthdayRange: "June 21 - July 22",
    attributes: "Those born under the sign of Cancer, ruled by the mysterious Moon, are one of the zodiac's enigmas. It is fair to say that most Cancers are a bundle of contradictions. Compassionate and caring with friends, family and lovers, yet they can cut to the bone with their jealous remarks and ever-changing moods. Endearingly eccentric on one hand, and on the other, insecure about how others see them. Like their astrological symbol - the Crab - Cancers can appear hard and insensitive on the outside. However, for those of us who know and love a Moon Child, we understand that deep below lies a softness and sensitivity that makes them so very special.",
    picture: "resources/cancerSign.png"
  },
  {
    zodiacName: "taurus",
    birthdayRange: "April 20 - May 20",
    attributes: "Underneath their cool, calm and collected exterior, Taureans differ greatly from all the other signs of the zodiac. Taureans manage to discreetly stay apart from the crowd, even though they have a well earned reputation for being socialisers. They will let others get close, but only so close as they want them. Some claim that trying to get your point across to a Taurean, should they not want to hear you, is rather similar to talking to the trees, they simply won't budge. And, there is no such thing as an open-book Taurean. Their feelings, fears and desires often run far deeper than anyone around them would guess. Like the butterfly that chooses to remain hidden in its cocoon until it is ready and prepared to emerge, so the true Taurean spirit remains hidden behind a veneer of day-to-day activities. That's why Taureans are sometimes regarded as snobby, withdrawn, boring, or even sulky.",
    picture: "resources/taurusSign.png"
  },
  {
    zodiacName: "gemini",
    birthdayRange: "May 21 - June 20",
    attributes: "n ancient Greek mythology, Gemini's ruler - Mercury, was the light-footed messenger of the gods who darted back and forth across the heavens delivering news - which might explain why those born under the sign of the 'Twins' are always on the move; thirsty for knowledge and new experiences. Terminally curious and sometimes even mischievous, Geminis are multi-faceted souls who enjoy knowing a little bit of everything but generally not too much about one particular subject. It's just that variety is the spice of their lives!",
    picture: "resources/geminiSign.png"
  },
  {
    zodiacName: "capricorn",
    birthdayRange: "December 22 - January 19",
    attributes: "The sign of the high roller, Capricorn is regarded as the zodiac top, but also quiet, life and business achievers. But, there are two very different types of Capricorns. The first is represented by the mountain goat, always climbing higher and higher; never content until reaching the top. The second is the garden goat, with little adventurous spirit or ambition-happy to remain within a small domain, refusing to budge unless it is pushed. Either type of Capricorn, however, is patient and persevering. They reach their goals because they know the longest journey commences with a single step and that the first step is always the most difficult.",
    picture: "resources/capricornSign.png"
  },
  {
    zodiacName: "sagittarius",
    birthdayRange: "November 22 - December 21",
    attributes: "Ruled by the benefic planet Jupiter, Sagittarians possess a natural exuberance, sense of adventure and love of life that makes them one of the most optimistic zodiac signs of all. Like their astrological symbol - the Archer - Sagittarians are renowned for aiming their sights towards whatever it is they find alluring - a love partner, dream job, vacation - and making it their own. They believe that anything is possible - and because of this belief system, Sagittarians are adept at seeking out their very own pot of gold at the end of the rainbow.",
    picture: "resources/saggitariusSign.png"
  },
  {
    zodiacName: "pisces",
    birthdayRange: "February 19 - March 20",
    attributes: "Mysterious and alluring individuals, most Pisces are extremely talented, but even though they are gifted in many ways, they still manage to spend most of their lives battling confusing conditions. Pisces is the sign symbolised by the image of two fish. Their symbol depicts one fish heading upward, the other pulling downward. This mirrors how Pisceans are frequently torn between two pathways in life, or actually do live two very different existences at the same time.",
    picture: "resources/piscesSign.png"
  },
  {
    zodiacName: "aquarius",
    birthdayRange: "January 20 - February 18",
    attributes: "Special note for Aquarians: At the Dawn of the Age of Aquarius, at this time, ready or not, your sign is regarded as the zodiac's leader. You are the trendsetter for the future and because of this high responsibility, many under born your sign will be undergoing at this time, the pressure of personal change (particularly in your values and what makes you content and happy). Yours has always been a philanthropic sign. Now more than ever these qualities will be highlighted.",
    picture: "resources/aquariusSign.png"
  },
  {
    zodiacName: "scorpio",
    birthdayRange: "October 23 - November 21",
    attributes: "Reputed to be the most powerful sign of the zodiac, Scorpios lead fate filled lives and have intense and dramatic personal relationships. Even as children Scorpios are often found to be wise beyond their years. Many astrologers call this the sign of the oldest souls. Old and wise beyond the average, Scorpios often know all the answers, except sometimes; they too often have difficulty finding what they need to develop their own happiness.",
    picture: "resources/scorpioSign.png"
  },
  {
    zodiacName: "virgo",
    birthdayRange: "August 23 - September 22",
    attributes: "Virgos are often put down badly by many astrologers and written up as being fussy and narrow-minded. But when a Virgo shines, there is practically no sign to match their inner light. An in-tune Virgo is a treat to meet. When a Virgo is confident within themselves they are the most successful, structured and creative of all the signs.",
    picture: "resources/virgoSign.png"
  },
  {
    zodiacName: "libra",
    birthdayRange: "September 23 - October 22",
    attributes: "Every adolescent Libran's fantasy is to find the Prince or Princess of their dreams. As their lives unfold, the experiences, false starts, dramas, broken hearts and disillusionment they encounter seeking this personal Holy Grail, often shapes their futures in the most extra-ordinary manner. Love and love-lost makes a big difference to the Libran although their often happy-go-lucky appearance against all kinds of odds may not reveal this as fact.",
    picture: "resources/libraSign.png"
  },
  {
    zodiacName: "leo",
    birthdayRange: "July 23 - August 22",
    attributes: "People born under the sign of Leo are natural born leaders. They are dramatic, creative self-confident, dominant and extremely difficult to resist. They can achieve anything they want, whether it's about work or time spent will family and friends.",
    picture: "resources/leoSign.png"
  }
]
var feedback = document.getElementById('feedback');
var inputDate_el = document.getElementById('date');

function checkInputValue() {
  const inputDate = new Date(inputDate_el.value);
  console.log(inputDate);
  var month = inputDate.getUTCMonth() + 1;
  var day = inputDate.getUTCDate();

  console.log(month);
  console.log(day);

  // if (month == 2) {
  //   if (day > 29) {
  //     feedback_el.textContent = 'Username must be at least 5 characters.';
  //     feedback_el.classList.add('danger');
  //   } else {
  //     feedback_el.textContent = '';
  //     feedback_el.classList.remove('danger');
  //   }
  // } else if (month == 4 || month == 6 || month == 9 || month == 11) {
  //   if (day > 29) {
  //     feedback_el.textContent = 'Username must be at least 5 characters.';
  //     feedback_el.classList.add('danger');
  //   } else {
  //     feedback_el.textContent = '';
  //     feedback_el.classList.remove('danger');
  //   }
  // } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
  //   if (day > 30) {
  //     feedback_el.textContent = 'Username must be at least 5 characters.';
  //     feedback_el.classList.add('danger');
  //   } else {
  //     feedback_el.textContent = '';
  //     feedback_el.classList.remove('danger');
  //   }
  // }
  if (month == 2) {
    if (day > 29) {
      feedback.hidden = false;
    } else {
      feedback.hidden = true;
    }
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    if (day > 29) {
      feedback.hidden = false;
    } else {
      feedback.hidden = true;
    }
  } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    if (day > 30) {
      feedback.hidden = false;
    } else {
      feedback.hidden = true;
    }
  }
}

// const form = document.getElementById('myForm');
const form = document.forms['myForm'];
console.log(myForm);

function handleFormSubmit(event) {
  event.preventDefault();

  const inputDate = document.getElementById('date');
  const myDate = new Date(inputDate.value);

  var whichMonth = myDate.getUTCMonth() + 1;
  var whichDayOfMonth = myDate.getUTCDate();

  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "Cap";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Sag";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "Sco";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Lib";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "Vir";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "Leo";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Can";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "Gem";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Tau";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "Ari";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Pis";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aqu";
  }
  console.log(whichMonth);
  console.log(whichDayOfMonth);
  console.log(AstroSign);
  console.log(userInput);

  var userInput = AstroSign.toLowerCase();
  var sign = document.getElementById("yourSign");
  var range = document.getElementById("birthdayRange");
  var attributes = document.getElementById("attributes");
  var img = document.getElementById("zodiacImage");

  for (var i = 0; i < zodiac.length; i++) {
    if (userInput == zodiac[i].zodiacName.substring(0, 3)) {

      document.getElementById("hidden").style.display = "block";
      sign.innerHTML = zodiac[i].zodiacName;
      range.innerHTML = zodiac[i].birthdayRange;
      attributes.innerHTML = zodiac[i].attributes;
      img.src = zodiac[i].picture;

      console.log('worked');
      console.log(zodiac[i].zodiacName);
      console.log(zodiac[i].attributes);
    }
  }

  const feedbackDate = inputDate.nextElementSibling;
  if (isNaN(myDate)) {
    inputDate.focus();
    inputDate.value = '';
    feedbackDate.hidden = false;
  } else {
    feedbackDate.hidden = true;
  }
}

function SelectYourZodiac() {
  var ari = document.getElementById('ari');
  var can = document.getElementById('can');
  var tau = document.getElementById('tau');
  var gem = document.getElementById('gem');
  var cap = document.getElementById('cap');
  var sag = document.getElementById('sag');
  var pis = document.getElementById('pis');
  var aqu = document.getElementById('aqu');
  var sco = document.getElementById('sco');
  var vir = document.getElementById('vir');
  var lib = document.getElementById('lib');
  var leo = document.getElementById('leo');

  ari.onclick = function () {
    document.getElementById("hidden").style.display = "block";
    sign.innerHTML = zodiac[0].zodiacName;
    range.innerHTML = zodiac[0].birthdayRange;
    attributes.innerHTML = zodiac[0].attributes;
    img.src = zodiac[0].picture;
    document.getElementById("header").style.display = "none";
    document.getElementById("main").style.display = "none";
  }; can.onclick = function () {
    document.getElementById("hidden").style.display = "block";
    sign.innerHTML = zodiac[1].zodiacName;
    range.innerHTML = zodiac[1].birthdayRange;
    attributes.innerHTML = zodiac[1].attributes;
    img.src = zodiac[1].picture;
      document.getElementById("header").style.display = "none";
  document.getElementById("main").style.display = "none";
  }; tau.onclick = function () {
    document.getElementById("hidden").style.display = "block";
    sign.innerHTML = zodiac[2].zodiacName;
    range.innerHTML = zodiac[2].birthdayRange;
    attributes.innerHTML = zodiac[2].attributes;
    img.src = zodiac[2].picture;
      document.getElementById("header").style.display = "none";
  document.getElementById("main").style.display = "none";
  }; gem.onclick = function () {
    document.getElementById("hidden").style.display = "block";
    sign.innerHTML = zodiac[3].zodiacName;
    range.innerHTML = zodiac[3].birthdayRange;
    attributes.innerHTML = zodiac[3].attributes;
    img.src = zodiac[3].picture;
      document.getElementById("header").style.display = "none";
  document.getElementById("main").style.display = "none";
  }; cap.onclick = function () {
    document.getElementById("hidden").style.display = "block";
    sign.innerHTML = zodiac[4].zodiacName;
    range.innerHTML = zodiac[4].birthdayRange;
    attributes.innerHTML = zodiac[4].attributes;
    img.src = zodiac[4].picture;
      document.getElementById("header").style.display = "none";
  document.getElementById("main").style.display = "none";
  }; sag.onclick = function () {
    document.getElementById("hidden").style.display = "block";
    sign.innerHTML = zodiac[5].zodiacName;
    range.innerHTML = zodiac[5].birthdayRange;
    attributes.innerHTML = zodiac[5].attributes;
    img.src = zodiac[5].picture;
      document.getElementById("header").style.display = "none";
  document.getElementById("main").style.display = "none";
  }; pis.onclick = function () {
    document.getElementById("hidden").style.display = "block";
    sign.innerHTML = zodiac[6].zodiacName;
    range.innerHTML = zodiac[6].birthdayRange;
    attributes.innerHTML = zodiac[6].attributes;
    img.src = zodiac[6].picture;
      document.getElementById("header").style.display = "none";
  document.getElementById("main").style.display = "none";
  }; aqu.onclick = function () {
    document.getElementById("hidden").style.display = "block";
    sign.innerHTML = zodiac[7].zodiacName;
    range.innerHTML = zodiac[7].birthdayRange;
    attributes.innerHTML = zodiac[7].attributes;
    img.src = zodiac[7].picture;
      document.getElementById("header").style.display = "none";
  document.getElementById("main").style.display = "none";
  }; sco.onclick = function () {
    document.getElementById("hidden").style.display = "block";
    sign.innerHTML = zodiac[8].zodiacName;
    range.innerHTML = zodiac[8].birthdayRange;
    attributes.innerHTML = zodiac[8].attributes;
    img.src = zodiac[8].picture;
      document.getElementById("header").style.display = "none";
  document.getElementById("main").style.display = "none";
  }; vir.onclick = function () {
    document.getElementById("hidden").style.display = "block";
    sign.innerHTML = zodiac[9].zodiacName;
    range.innerHTML = zodiac[9].birthdayRange;
    attributes.innerHTML = zodiac[9].attributes;
    img.src = zodiac[9].picture;
      document.getElementById("header").style.display = "none";
  document.getElementById("main").style.display = "none";
  }; lib.onclick = function () {
    document.getElementById("hidden").style.display = "block";
    sign.innerHTML = zodiac[10].zodiacName;
    range.innerHTML = zodiac[10].birthdayRange;
    attributes.innerHTML = zodiac[10].attributes;
    img.src = zodiac[10].picture;
      document.getElementById("header").style.display = "none";
  document.getElementById("main").style.display = "none";
  }; leo.onclick = function () {
    document.getElementById("hidden").style.display = "block";
    sign.innerHTML = zodiac[11].zodiacName;
    range.innerHTML = zodiac[11].birthdayRange;
    attributes.innerHTML = zodiac[11].attributes;
    img.src = zodiac[11].picture;
      document.getElementById("header").style.display = "none";
  document.getElementById("main").style.display = "none";
  };
}


feedback.hidden = true;


document.getElementById("continue").onclick = function () {
  date.addEventListener('blur', checkInputValue, false);
  console.log(feedback.hidden);
  if (feedback.hidden == true) {
    document.getElementById("header").style.display = "none";
    document.getElementById("main").style.display = "flex";
    form.addEventListener('submit', handleFormSubmit, false);
  }
  else{
    return;
  }

}

document.getElementById("submit").onclick = function () {
  document.getElementById("header").style.display = "none";
  document.getElementById("main").style.display = "none";
}


SelectYourZodiac();
// date.addEventListener('blur', checkInputValue, false);
// form.addEventListener('submit', handleFormSubmit, false);
// form.addEventListener('change', handleFormSubmit, false);

