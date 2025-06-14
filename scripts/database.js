const database = {
    celebrities: [{
        id: 1,
        name: "Alphonse Meron",
        email: "ameron0@mashable.com",
        sport: "Hockey",
    }, {
        id: 2,
        name: "Damara Pentecust",
        email: "dpentecust1@apache.org",
        sport: "Basketball",
    }, {
        id: 3,
        name: "Anna Bowton",
        email: "abowton2@wisc.edu",
        sport: "Golf",
    }, {
        id: 4,
        name: "Hunfredo Drynan",
        email: "hdrynan3@bizjournals.com",
        sport: "Baseball",
    }, {
        id: 5,
        name: "Elmira Bick",
        email: "ebick4@biblegateway.com",
        sport: "Gymnastics",
    }, {
        id: 6,
        name: "Bernie Dreger",
        email: "bdreger5@zimbio.com",
        sport: "Gymnastics",
    }, {
        id: 7,
        name: "Rolando Gault",
        email: "rgault6@google.com",
        sport: "Baseball",
    }, {
        id: 8,
        name: "Tiffanie Tubby",
        email: "ttubby7@intel.com",
        sport: "Basketball",
    }, {
        id: 9,
        name: "Tomlin Cutill",
        email: "tcutill8@marketwatch.com",
        sport: "Hockey",
    }, {
        id: 10,
        name: "Arv Biddle",
        email: "abiddle9@cafepress.com",
        sport: "Football",
    }],
    children: [{
        id: 1,
        name: "Christan Swindles",
        celebrityId: 6,
        wish: "watching a perfect 10 routine at the Olympics!",
         wishSport: "Gymnastics",
    }, {
        id: 2,
        name: "Findlay Dumini",
        celebrityId: 8,
        wish: "making a buzzer-beater shot to win the game!",
        wishSport: "Basketball"
    }, {
        id: 3,
        name: "Micheil Guerrazzi",
        celebrityId: 9,
        wish: "skating at half time at a professional hockey game!",
        wishSport: "Hockey"
    }, {
        id: 4,
        name: "Karine McKennan",
        celebrityId: 6,
        wish: "watching a landing on a super difficult vault!",
        wishSport: "Gymnastics",
    }, {
        id: 5,
        name: "Cissy Weavers",
        celebrityId: 5,
        wish: "competing in a national gymnastics championship!",
        wishSport: "Gymnastics",
    }, {
        id: 6,
        name: "Bendick Standbrooke",
        celebrityId: 2,
        wish: "making a buzzer-beater shot at halftime to win the top prize!",
        wishSport: "Basketball",
    }, {
        id: 7,
        name: "Ethyl Copnell",
        celebrityId: 4,
        wish: "catching a game-winning fly ball in the outfield!",
        wishSport: "Baseball",
    }, {
        id: 8,
        name: "Elisha Betchley",
        celebrityId: 2,
        wish: "seeing the Harlem Globetrotters perform live together!",
        wishSport: "Basketball",
    }, {
        id: 9,
        name: "Enrica Mathivon",
        celebrityId: 1,
        wish: "laughing together as the mascot shows off its wild dance moves!",
        wishSport: "Football",
    }, {
        id: 10,
        name: "Humfrid Madner",
        celebrityId: 4,
        wish: "catching a foul ball at a Major League game!",
        wishSport: "Baseball",
    }]
}

export const getCelebrities = () => {
    return database.celebrities;
}

export const getChildren = () => {
    return database.children;
}