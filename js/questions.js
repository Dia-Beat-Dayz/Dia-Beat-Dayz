// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "You find someone you think is uncocious, you are aware they are diabetic, with this information what is the first thing you would do to help them?",
    answer: "Check to see if the person is responsive and call the ambulance as soon as possible.",
    options: [
      "Check to see if the person is responsive and call the ambulance as soon as possible.",
      "Inject them with a full vial of insulin",
      "Check their breathing and clear their passages",
      "Attempt to administer a source of sugar to the person"
    ]
  },
    {
    numb: 2,
    question: "Assuming you are unable to contact the emergency service, the person you are helping is responsive but you are unsure wether this is a high BSL or Low BSL, what would be the best and quickest way to determine their current state?",
    answer: "Have you or themselves test their BSL with a testing strip and blood from their finger?",
    options: [
      "Ask them a series of questions about how they are feeling ",
      "Have you or themselves test their BSL with a testing strip and blood from their finger?",
      "Ask if their palms feel clammy",
      "Have them perform a sight based test (how may fingers)"
    ]
  },
    {
    numb: 3,
    question: "After testing their BSL you see they have been at 2.8 (This is very low as 5.0 is lowest safe range foor blood sugars). What should you do next?",
    answer: "Administer a hypo treatment/s (15g of sugar = one mini mentos pack) and continue to check BSL",
    options: [
      "Have them drink water and continue to check BSL",
      "Inject with insulin now and continue to check BSL",
      "Administer a hypo treatment/s (15g of sugar = one mini mentos pack) and continue to check BSL",
      "have them perform exercise and continue to check BSL"
    ]
  },
    {
    numb: 4,
    question: "oh no!! their sugars still seem dangerously low, You need a fast acting treatmen now!",
    answer: "Follow the glucogon Instructions and try emergency services again",
    options: [
      "Prepare glucogon needle and removing any bubbles and administer",
      "Follow the glucogon Instructions and try emergency services again",
      "Continue feeding them sugar",
      "Try to emergency services again"
    ]
  },
    {
    numb: 5,
    question: "While very unlikely you still cant reach emergecy services (Dead Phone, busy line, poor reception etc) the person is getting better what do you do now?",
    answer: "Take them to the hospital yourself/find someone who can",
    options: [
      "They should be fine to leave now",
      "Continue to give sugar and test BSL",
      "Take them for fresh air",
      "Take them to the hospital yourself/find someone who can"
    ]
  },
  {
    numb: 6,
    question: "These next questions are about type one diabetes when BSL is high, Someone is Vomiting Violently. You know they have Type 1 Diabetes. What do you do",
    answer: "Get them to test their Blood Glucose Level",
    options: [
      "Get them to drink lots of water",
      "Have them eat something solid",
      "Get them to test their Blood Glucose Level",
      "Hit them with some insulin"
    ]
  },
  {
    numb: 7,
    question: "Their Blood Sugar level is High >=15.1 mmol  What do you do?",
    answer: "Test for Ketones",
    options: [
      "Hit them with insulin",
      "Have them eat something with little/no sugar",
      "Have them rate their pain from 1-10",
      "Test for Ketones"
    ]
  },
  {
    numb: 8,
    question: "Ketones are Present in their system. What does this mean and what should you do?",
    answer: "The insulin they are using may be expired, their delivery methods Pumping may have failed. Identify the fault and find a way to deliver fresh insulin.",
    options: [
      "Apply cold compress to lower their growing fever",
      "The insulin they are using may be expired, their delivery methods Pumping may have failed. Identify the fault and find a way to deliver fresh insulin.",
      "Hit them with insulin as clearly that is needed",
      "Have them consume more water, they have been vomiting too much"
    ]
  },
  {
    numb: 9,
    question: "Their Insulin Pump has a Kinked line. They do not have a replacement but they do have an emergency syringe of insulin. What do you do?",
    answer: "Have them administer their Insulin and keep track of the dosage in Units",
    options: [
      "Try to fix the line manually",
      "Administer the the insuline intraveinously",
      "Instruct them to administer the maximum dose available",
      "Have them administer their Insulin and keep track of the dosage in Units"
    ]
  },
  {
    numb: 10,
    question: "They have administered the dose. What do you do now?",
    answer: "Call an Ambulance and let them know a Type 1 Diabtetic is experiencing Ketoacidosis. inform them of all that has happened",
    options: [
      "Wait and watch for if they get better",
      "Have them administer more insulin if they havent shown signs of getting better",
      "Call the ambulance and let them take care of the rest",
      "Call an Ambulance and let them know a Type 1 Diabtetic is experiencing Ketoacidosis. inform them of all that has happened"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];