exports.seed = function (knex) {
  return knex('developers').insert([
    // TODO: Make seeds more diverse
    {
      id: 1,
      uuid: 'hXz6CYByNAQBBT0agfoosoGAn0c2',
      profile_picture: '/images/dev-img/imansyah-muhamad-putera-n4KewLKFOZw-unsplash-min.jpg',
      first_name: 'Lloyd',
      last_name: 'Banks',
      pronoun: 'him/he',
      bio: "I'm Lloyd. I'm a Software Developer able to work in all platforms. I love dogs and cats. I'm currently based overseas but I'm able to cater towards any organisation in any part of the world. I've worked at YouTube for many years but thought I'd float around as a freelancer, giving me more time for family and friends"
    },
    {
      id: 2,
      uuid: 'ZwlmOfEGbFSCyOXcfw5gbCW2G9o1',
      profile_picture: '/images/dev-img/jurica-koletic-7YVZYZeITc8-unsplash-min.jpg',
      first_name: 'Kylie',
      last_name: 'Afoa',
      pronoun: 'her/she',
      bio: "Hi I'm Kylie. I've been working as a software developer for 10 years. I've worked with many companies including Google. I'm currently a freelancer working on web development and systems architecture."
    },
    {
      id: 3,
      uuid: 'jd8eUIwQ3OU9XLP7i6hIQewg6D72',
      profile_picture: 'https://avatars.githubusercontent.com/u/73867233?s=400&u=2473abfa2b718b6bbebff426d4eca7cdbb993ab7&v=4',
      first_name: 'Steve',
      last_name: 'Kim',
      pronoun: 'him/he',
      bio: "Hi I'm Steve. I'm an EDA graduate looking for a cool place to work. I like good vibes and dislike smelly code"
    },
    {
      id: 4,
      uuid: 'a14LpzSEweU3q6eTg49BiJ5KBUJ3',
      profile_picture: '/images/dev-img/aatik-tasneem-7omHUGhhmZ0-unsplash-min.jpg',
      first_name: 'Barney',
      last_name: 'Stinson',
      pronoun: 'him/he',
      bio: "I'm a Developer from Auckland, New Zealand. I love all things programming but I'm heavily focused on Web and mobile development. I'm able to work for any organisation from any part of the world."
    },
    {
      id: 5,
      uuid: 'fUYOLt08jkfsXfrbrcNkzlbTcS73',
      profile_picture: '/images/dev-img/aiony-haust-3TLl_97HNJo-unsplash-min.jpg',
      first_name: 'Diane',
      last_name: 'Welch',
      pronoun: 'They/Them',
      bio: "Hi! I'm from New York, currently residing in Auckland, New Zealand. I am a recent graduate from the University of Auckland and am freelancing while take a year off to travel"
    },
    {
      id: 6,
      uuid: 'Uq7TyPIvPvKoNbEMPmTTlEyih1',
      profile_picture: 'https://avatars.githubusercontent.com/u/73858996?s=400&u=b093074c17ae5ce5a7246ebece8d1b5e418f9895&v=4',
      first_name: 'Christo',
      last_name: 'Karadjov',
      pronoun: 'him/he',
      bio: "Hi I'm Christo. I'm an EDA graduate but my proudest achievement is how big my guns are. I'm not talking firearms. I'm talking about my big muscles."
    },
    {
      id: 7,
      uuid: 'IaqoI88Z5PWN1EoBPuudfKSbt5B3',
      profile_picture: 'https://avatars.githubusercontent.com/u/58315812?s=400&u=b608f82088e6cab55e4416d38570c4b7b246e6e0&v=4',
      first_name: 'Tausani',
      last_name: 'Ah Chong',
      pronoun: 'him/he',
      bio: "Hi I'm Tausani but I go by Sani. I'm an EDA graduate. I like good vibes and dislike smelly code. Don't bring that smell near me."
    },
    {
      id: 8,
      uuid: '98mUeSDdNHYQlHyHjsaZRppH6fP2',
      profile_picture: '/images/dev-img/austin-wade-X6Uj51n5CE8-unsplash-min.jpg',
      first_name: 'Alex',
      last_name: 'Purel',
      pronoun: 'him/he',
      bio: "Hi I'm Pete. I am an EDA graduate with skills in Web Development. I have fantastic app ideas and I'm always up for an awesome coding sesh"
    },
    {
      id: 9,
      uuid: 'ZjQBriWB9aSdfqoywjPYwbHfRVB3',
      profile_picture: 'https://avatars.githubusercontent.com/u/35914987?s=400&u=fd2162c1aeb0e9d714882e528112ffbbeb4142df&v=4',
      first_name: 'Multi',
      last_name: 'Ah Foon',
      pronoun: 'him/he',
      bio: 'Hi there, Multi here. Developer by day, get rich schemer by night. Im only doing this until I win the lotto.'
    },
    {
      id: 10,
      uuid: 'X6l9o8laC2Ok7CzHK6KIGT6LDIf1',
      profile_picture: '/images/dev-img/christopher-campbell-rDEOVtE7vOs-unsplash-min.jpg',
      first_name: 'Austin',
      last_name: 'Pippa',
      pronoun: 'her/she',
      bio: "I'm Austin. Funnily enough, I'm from Austin Texas but I'm currently studying at EnSpiral Dev Academy. I'm working as a freelancer to perk up my programming skills and I focus on Web Development."
    }
  ])
}
