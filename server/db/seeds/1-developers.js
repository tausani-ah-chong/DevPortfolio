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
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 2,
      uuid: 'ZwlmOfEGbFSCyOXcfw5gbCW2G9o1',
      profile_picture: '/images/dev-img/jurica-koletic-7YVZYZeITc8-unsplash-min.jpg',
      first_name: 'Kylie',
      last_name: 'Afoa',
      pronoun: 'her/she',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 3,
      uuid: 'jd8eUIwQ3OU9XLP7i6hIQewg6D72',
      profile_picture: 'https://avatars.githubusercontent.com/u/73867233?s=400&u=2473abfa2b718b6bbebff426d4eca7cdbb993ab7&v=4',
      first_name: 'Steve',
      last_name: 'Kim',
      pronoun: 'her/she',
      bio: "Hi I'm Steve. I'm an EDA graduate looking for a cool place to work. I like good vibes and dislike smelly code"
    },
    {
      id: 4,
      uuid: 'a14LpzSEweU3q6eTg49BiJ5KBUJ3',
      profile_picture: '/images/dev-img/aatik-tasneem-7omHUGhhmZ0-unsplash-min.jpg',
      first_name: 'Emily',
      last_name: 'Simpson',
      pronoun: 'him/he',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 5,
      uuid: 'fUYOLt08jkfsXfrbrcNkzlbTcS73',
      profile_picture: '/images/dev-img/aiony-haust-3TLl_97HNJo-unsplash-min.jpg',
      first_name: 'Diane',
      last_name: 'Welch',
      pronoun: 'They/Them',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
      pronoun: 'him/he',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ])
}
