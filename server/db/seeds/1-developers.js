exports.seed = function (knex) {
  return knex('developers').insert([
    // TODO: Make seeds more diverse
    { id: 1, profile_picture: '/images/dev-img/imansyah-muhamad-putera-n4KewLKFOZw-unsplash-min.jpg', first_name: 'Lloyd', last_name: 'Banks', pronoun: 'him/he', bio: 'lorem ipsum' },
    { id: 2, profile_picture: '/images/dev-img/jurica-koletic-7YVZYZeITc8-unsplash-min.jpg', first_name: 'Kylie', last_name: 'Afoa', pronoun: 'her/she', bio: 'lorem ipsum' },
    { id: 3, profile_picture: '/images/dev-img/gabriel-silverio-u3WmDyKGsrY-unsplash-min.jpg', first_name: 'Bruce', last_name: 'Loifua', pronoun: 'her/she', bio: 'lorem ipsum' },
    { id: 4, profile_picture: '/images/dev-img/aatik-tasneem-7omHUGhhmZ0-unsplash-min.jpg', first_name: 'Emily', last_name: 'Simpson', pronoun: 'him/he', bio: 'lorem ipsum' },
    { id: 5, profile_picture: '/images/dev-img/aiony-haust-3TLl_97HNJo-unsplash-min.jpg', first_name: 'Diane', last_name: 'Welch', pronoun: 'They/Them', bio: 'lorem ipsum' },
    { id: 6, profile_picture: '/images/dev-img/albert-dera-ILip77SbmOE-unsplash-min.jpg', first_name: 'Dan', last_name: 'Richard', pronoun: 'him/he', bio: 'lorem ipsum' },
    { id: 7, profile_picture: '/images/dev-img/alex-perri-At__EKm5PGE-unsplash-min.jpg', first_name: 'Austin', last_name: 'Mitchell', pronoun: 'him/he', bio: 'lorem ipsum' },
    { id: 8, profile_picture: '/images/dev-img/austin-wade-X6Uj51n5CE8-unsplash-min.jpg', first_name: 'Christopher', last_name: 'Kylie', pronoun: 'him/he', bio: 'lorem ipsum' },
    { id: 9, profile_picture: '/images/dev-img/bruce-dixon--lYtsl62gyU-unsplash-min.jpg', first_name: 'Dylan', last_name: 'Cornish', pronoun: 'him/he', bio: 'lorem ipsum' },
    { id: 11, profile_picture: '/images/dev-img/christopher-campbell-rDEOVtE7vOs-unsplash-min.jpg', first_name: 'Austin', last_name: 'Pippa', pronoun: 'him/he', bio: 'lorem ipsum' },
    { id: 12, profile_picture: '/images/dev-img/gabriel-silverio-u3WmDyKGsrY-unsplash-min.jpg', first_name: 'Max', last_name: 'Powell', pronoun: 'him/he', bio: 'lorem ipsum' },
    { id: 13, profile_picture: '/images/dev-img/hisu-lee-2qvxIr_DXGo-unsplash-min.jpg', first_name: 'Kylie', last_name: 'Alan', pronoun: 'him/he', bio: 'lorem ipsum' },
    { id: 14, profile_picture: '/images/dev-img/houcine-ncib-B4TjXnI0Y2c-unsplash-min.jpg', first_name: 'Richard', last_name: 'Alexandra', pronoun: 'him/he', bio: 'lorem ipsum' },
    { id: 15, profile_picture: '/images/dev-img/imansyah-muhamad-putera-n4KewLKFOZw-unsplash-min.jpg', first_name: 'Amanda', last_name: 'Pippa', pronoun: 'him/he', bio: 'lorem ipsum' },
    { id: 16, profile_picture: '/images/dev-img/jack-finnigan-rriAI0nhcbc-unsplash-min.jpg', first_name: 'Audrey', last_name: 'Jessica', pronoun: 'him/he', bio: 'lorem ipsum' },
    { id: 17, profile_picture: '/images/dev-img/jessica-felicio-_cvwXhGqG-o-unsplash-min.jpg', first_name: 'Kylie', last_name: 'Katherine', pronoun: 'him/he', bio: 'lorem ipsum' },
    { id: 18, profile_picture: '/images/dev-img/joseph-gonzalez-iFgRcqHznqg-unsplash-min.jpg', first_name: 'Joan', last_name: 'Kimberly', pronoun: 'him/he', bio: 'lorem ipsum' },
    { id: 19, profile_picture: '/images/dev-img/jurica-koletic-7YVZYZeITc8-unsplash-min.jpg', first_name: 'Martin', last_name: 'Madeleine', pronoun: 'him/he', bio: 'lorem ipsum' },
    { id: 20, profile_picture: '/images/dev-img/kimson-doan-HD8KlyWRYYM-unsplash-min.jpg', first_name: 'Mitchell', last_name: 'Stephanie', pronoun: 'him/he', bio: 'lorem ipsum' }

  ])
}
