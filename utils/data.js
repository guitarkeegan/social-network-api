const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
  ];
  
  const thoughts = [
    `I've got decisions to make.`,
    'Had anyone seen a phone that can take two photos at once?',
    'Learning piano is difficult.',
    'Startroopers was a great movie!',
    'Towers are good for defense',
    'Monopoly money manager I am.',
    'Movie trailers are the best part of movies.',
    'Hello world is what we say.',
    'Stupid Social Media App',
    'Notes tell us what to remember.',
    'Messages is a great app. Haters gonna hate.',
    'Email is so old school. Does anyone use it?',
    'Compass, has its pros and cons for sure.',
    'Firefox is still the ultimate browser.',
    'My running app keeps telling me to slow down... haha',
    'My new cooking app is ruining my diet.',
    `Poker players! Game starts at 6!`,
    `Has anyone tried the Amazon drone delivery service?`,
  ];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // Gets a random full name and email
  const getRandomName = () => {
    const randNumbers = Math.floor(Math.random() * 4000);
    return `${getRandomArrItem(names)}${randNumbers}${getRandomArrItem(names)}`
  }
  
  // Function to generate random thoughts that we can add to user object.
  const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        randomThought: getRandomArrItem(thoughts),
      });
    }
    return results;
  };

  const getRandomEmail = (int) => {
    const results = [];
    for (let i=0;i<int;i++){
        const randNumbers = Math.floor(Math.random() * 4000);
        const emailEnding = ['com', 'net', 'org', 'edu', 'gov', 'io']
        results.push(`randoemail${randNumbers}@${getRandomArrItem(emailEnding)}`);
    }
  }

  
  
  // Export the functions for use in seed.js
  module.exports = { getRandomName, getRandomThoughts, getRandomEmail };
  