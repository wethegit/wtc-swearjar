const words = [
  "5hit",
  "a@$",
  "a$$",
  "a$$!",
  "a**",
  "A@$",
  "a$$hat",
  "ahole",
  "a$$hole",
  "a**hole",
  "a$$holes",
  "a**holes",
  "arse",
  "arsehole",
  "a*s",
  "as$",
  "as*",
  "A$s",
  "As$",
  "ashl",
  "a$shole",
  "as$hole",
  "a s s",
  "a. s. s.",
  "A*S*S",
  "assclown",
  "asses",
  "assfuck",
  "assfucks",
  "asshat",
  "asshole",
  "assholes",
  "Asslick",
  "assman",
  "asss",
  "asswipe",
  "asswipes",
  "Asswipes",
  "axx",
  "a$$y",
  "azz",
  "azzes",
  "azzhole",
  "azzholez",
  "azzwhole",
  "azzy",
  "b1tch",
  "bada$$",
  "bada**",
  "bada$s",
  "bada*s",
  "badas$",
  "badas*",
  "badass",
  "badazz",
  "baddass",
  "bastard",
  "bastarda",
  "bastardo",
  "bastards",
  "b+ch",
  "BDSM",
  "beaner",
  "beatch",
  "beotch",
  "bi0tch",
  "biatch",
  "biatches",
  "bi+ch",
  "bigshit",
  "bioatch",
  "bioatchez",
  "biotch",
  "Biotches",
  "bit**",
  "bit**",
  "Bitc*",
  "bitch",
  "bitchen",
  "bitches",
  "bitchfuck",
  "BitchFucker",
  "bitchin",
  "Bitchin",
  "bitching",
  "bitchs",
  "bitchy",
  "bizatch",
  "biznitch",
  "b@lls",
  "blowjob",
  "blowjobs",
  "blueballs",
  "boich",
  "boob",
  "boobies",
  "boobs",
  "bordel",
  "bordello",
  "b.s.",
  "btch",
  "b!tch",
  "b*tch",
  "b!tches",
  "b*tches",
  "bugger",
  "buggery",
  "bukake",
  "bull$hit",
  "bullshit",
  "bull shit",
  "bullsht",
  "bullsh*t",
  "bulshit",
  "Bumhole",
  "Bumlick",
  "bumsen",
  "Bumwipe",
  "bunghole",
  "butsuckers",
  "buttfuck",
  "buttfucked",
  "buttfucker",
  "buttfucking",
  "buttfucks",
  "butthead",
  "butthole",
  "buttlick",
  "buttlicker",
  "buttlicking",
  "buttlicks",
  "buttwipe",
  "buttwipes",
  "byatch",
  "C0C|<",
  "c0ck",
  "cabron",
  "cabrona",
  "cacaish",
  "cameltoe",
  "camel toe",
  "cameltoes",
  "candyass",
  "ch1nk",
  "ch1nky",
  "chickenshit",
  "chinga",
  "chingado",
  "chingalo",
  "chingar",
  "chingate",
  "chink",
  "choad",
  "chode",
  "chomo",
  "christacrutchian",
  "chuperson",
  "cl!t",
  "co**",
  "coc*",
  "cocaine",
  "cock",
  "cockbite",
  "cocks",
  "cocksmoker",
  "cocksuck",
  "cocksucka",
  "cocksucked",
  "cocksucker",
  "cocksucking",
  "cojones",
  "Cr@aap",
  "Cr@aapy",
  "crackass",
  "crackasscracka",
  "crap",
  "crapfucking",
  "crapiest",
  "crapped",
  "crapper",
  "crappiest",
  "crappy",
  "craptastic",
  "crapware",
  "crapyest",
  "cra**y",
  "creampie",
  "creator.org",
  "cr@p",
  "cr*p",
  "cr@ppy",
  "cum",
  "cummin",
  "cunilingus",
  "cunnilingus",
  "cunt",
  "cuntbag",
  "cunties",
  "cunts",
  "cuntsucker",
  "d1ck",
  "d1ckfuk",
  "d1cks",
  "dafuq",
  "dago",
  "damn",
  "damned",
  "damnit",
  "darky",
  "d!ck",
  "di**",
  "dic*",
  "dic*",
  "dickbite",
  "dickchode",
  "dickhead",
  "dickheads",
  "dickless",
  "dicklick",
  "dicklicka",
  "dicklicker",
  "dicksuck",
  "dicksucka",
  "dicksucker",
  "dicksucking",
  "dickwad",
  "dik",
  "Dike",
  "dilf",
  "dingleberries",
  "dingleberry",
  "dipshit",
  "dizick",
  "doggiestyle",
  "doggystyle",
  "douchebag",
  "douche bag",
  "douchebags",
  "dumass",
  "dumbass",
  "dumfuck",
  "eff",
  "effen",
  "effin",
  "effing",
  "f***",
  "F0U0C0K0U",
  "f4ck",
  "f4cking",
  "f4g",
  "F&a",
  "fag",
  "fagg",
  "faggot",
  "faggotlover",
  "faglover",
  "fagot",
  "fa*got",
  "fags",
  "fa**ot",
  "f-awesome",
  "fawk",
  "fbomb",
  "f-bomb",
  "f'bomb",
  "f-cake",
  "fck",
  "f*ckbuddy",
  "f*cked",
  "f*cker",
  "f&cker",
  "fcking",
  "fckn",
  "f*ckshitup",
  "f*ckwit",
  "fcuk",
  "fcukin",
  "f'donkulous",
  "felch",
  "feltch",
  "f'er",
  "f@g",
  "f*g",
  "f-ilarious",
  "f*in",
  "f-ing",
  "f'ing",
  "f*ing",
  "F***ING",
  "fittytuck",
  "fittytucking",
  "f**k",
  "f**k**g",
  "F**K**g",
  "fkin",
  "fking",
  "fkn",
  "flipkart",
  "flip kart",
  "flucking",
  "F'n",
  "f'ng",
  "fock",
  "focking",
  "f-off",
  "fookin",
  "front14.org",
  "fscking",
  "f'shit",
  "f tard",
  "f-tard",
  "f tards",
  "f-tards",
  "FTW",
  "fu*$",
  "fu**",
  "f.u.b.a.r",
  "FUBAR",
  "fuc",
  "fuc*",
  "fuc*",
  "fucck",
  "fuc*ed",
  "fuc*ed",
  "fuc*en",
  "fuc*er",
  "fuc*er",
  "fuck",
  "f u c k",
  "f*u*c*k",
  "fuc*k",
  "fuck1ng",
  "fucka",
  "fuckabitch",
  "fuckbitch",
  "fucked",
  "fucken",
  "fucker",
  "fuckerino",
  "fuckers",
  "fuckface",
  "fuckfill",
  "fuckhead",
  "fuckie",
  "fuckiing",
  "fuckin",
  "fuckin9",
  "fucking",
  "f*u*c*k*i*n*g",
  "fuckk",
  "fucko",
  "fuckoff",
  "fucks",
  "fucktard",
  "fucktards",
  "fucky",
  "fuckyou",
  "fuckyourself",
  "fuctard",
  "fuctards",
  "fudgepack",
  "fudgepacka",
  "fudgepacker",
  "fudgepacking",
  "fu**ed",
  "fu**er",
  "fuggn",
  "fugg'n",
  "f'ugly",
  "fuk",
  "fuka",
  "fuked",
  "fu*ked",
  "fu*ker",
  "fukin",
  "fu k in",
  "fuking",
  "fu*king",
  "fukk",
  "fukked",
  "fukken",
  "fukkin",
  "fukkn",
  "fukoff",
  "fuktard",
  "fuktards",
  "fuq",
  "furckin",
  "fuuck",
  "fuuckin'",
  "fuxtard",
  "fuxtards",
  "fvck",
  "f-word",
  "fyou",
  "gangbang",
  "gangbanger",
  "gangbanging",
  "gangbangs",
  "gaylover",
  "goddamn",
  "gook",
  "g^y",
  "gyp",
  "gypped",
  "h0rny",
  "$h1+",
  "$h1t",
  "handjob",
  "handjobb",
  "hardon",
  "heroin",
  "$hit",
  "$hithead",
  "$hits",
  "@$$hole",
  "@$$HOLE",
  "homo",
  "hooters",
  "horney",
  "horny",
  "$h!t",
  "I.C. Wiener",
  "ifuck",
  "ishit",
  "$/-/iT",
  "jackass",
  "JackAzz",
  "jacking off",
  "jackin off",
  "jackoff",
  "jackshit",
  "jerkoff",
  "jewed",
  "jip",
  "jipped",
  "jisim",
  "jism",
  "Jism",
  "jizz",
  "jizzum",
  "kicka$$",
  "kicka**",
  "kicka$s",
  "kicka*s",
  "kickas$",
  "kickas*",
  "kickass",
  "kike",
  "kkk",
  "kkk=]",
  "knockers",
  "K-R-A-P-P-O-L-A",
  "lesbo",
  "lezbo",
  "libido",
  "lsd",
  "marijuana",
  "mcfuck",
  "milf",
  "mofo",
  "molest",
  "monkeyass",
  "moron",
  "mothaf*cka",
  "mothafucka",
  "mothafuckin",
  "motharfucka",
  "motharfucker",
  "motharfuka",
  "motharfukka",
  "motherfcker",
  "motherf*cker",
  "motherfucker",
  "motherfucking",
  "motherfu**er",
  "motherfuka",
  "mothersucking",
  "motherukka",
  "mudpeople",
  "mudpeoples",
  "muffdive",
  "muffdivers",
  "mung",
  "munged",
  "munger",
  "mungify",
  "munging",
  "mungs",
  "Muschilecker",
  "muthaf*cker",
  "mutherfuka",
  "myass",
  "mydick",
  "n16ga",
  "n16ger",
  "n1g6a",
  "n1g6er",
  "n1gga",
  "n1gga5",
  "n1gger",
  "NAMBLA",
  "nazi",
  "neegro",
  "neggro",
  "negro",
  "ni99a",
  "ni99er",
  "ni99ers",
  "nig",
  "nig***",
  "ni*ga",
  "nig*a",
  "niger",
  "ni*ger",
  "nig*er",
  "nigers",
  "nigg",
  "nigg4",
  "nigga",
  "niggah",
  "niggahlover",
  "niggalover",
  "niggas",
  "niggass",
  "niggaz",
  "niggazz",
  "nigger",
  "niggerlover",
  "niggers",
  "niggerville",
  "niggerz",
  "niggs",
  "nympho",
  "omfg",
  "OMFG",
  "orgy",
  "p1ss",
  "p1ssed",
  "pecker",
  "peckerhead",
  "peckerwood",
  "pedophile",
  "pedophilia",
  "peenis",
  "peitchol",
  "Peitchola",
  "petchola",
  "phag",
  "phaggot",
  "Phq-u",
  "phuck",
  "phuckin",
  "phucking",
  "phuk",
  "phukin",
  "pi$$",
  "pi$$ed",
  "pimp",
  "pimpette",
  "pimpin",
  "pi mpin",
  "pimps",
  "PIS*ED",
  "piss",
  "P I S S",
  "pissed",
  "pissin",
  "pissoff",
  "pisss",
  "ponster menis",
  "poo for brains",
  "poontang",
  "poopshit",
  "poopshoot",
  "poopyshitter",
  "porchmonkey",
  "porn",
  "porno",
  "pos",
  "p.o.s.",
  "P>O>S",
  "p*s",
  "pube",
  "pubes",
  "punany",
  "pussey",
  "pussies",
  "pussy",
  "pussylicka",
  "pussylicker",
  "Pussyman",
  "pussysuck",
  "pussysucka",
  "pussysucker",
  "pussysucking",
  "putang",
  "pu$$y",
  "queef",
  "RAHOWA",
  "rape",
  "raping",
  "rapist",
  "redskinner",
  "retard",
  "retarded",
  "rimjob",
  "r^p3d",
  "r^pe",
  "r^ped",
  "rughead",
  "s***",
  "sh**",
  "sh17",
  "sh1t",
  "shart",
  "sharted",
  "shat",
  "Shemale",
  "Sheman",
  "shi*",
  "shiet",
  "shiiiiiiit",
  "shiiiiiit",
  "shiiiiit",
  "shiiit",
  "shit",
  "S H I T",
  "shitcan",
  "shite",
  "shitface",
  "shitfaced",
  "shitfit",
  "shithead",
  "shitheads",
  "shithole",
  "shithouse",
  "shitiest",
  "shiting",
  "shitlist",
  "shitload",
  "shitpacka",
  "shitpacker",
  "shitpackers",
  "shitpacking",
  "shits",
  "shitstain",
  "shitt",
  "shitter",
  "shittie",
  "shitties",
  "shittiest",
  "shitting",
  "shitttiest",
  "shitty",
  "shity",
  "shitz",
  "SHI__Y",
  "sht",
  "sh!t",
  "sh*t",
  "sh*thead",
  "sh!tt!est",
  "shyt",
  "s*it",
  "S/-/it",
  "skank",
  "skanky",
  "Slµt",
  "slut",
  "sluts",
  "slutty",
  "so.fa.king",
  "sofa king",
  "sofa-king",
  "sonofa",
  "spanner",
  "spic",
  "@ss",
  "@sshole",
  "@ssholes",
  "s**t",
  "s#!t",
  "stiffy",
  "stormfront.org",
  "sumbitch",
  "sunbitch",
  "t1tt13s",
  "t1tt1es",
  "t1tties",
  "t&a",
  "terd",
  "tiddies",
  "tit",
  "tits",
  "tits&ass",
  "Tittennuckler",
  "titties",
  "T I T T I E S",
  "titty",
  "tittyfuck",
  "turd",
  "turds",
  "twat",
  "twats",
  "*uck",
  "ƒuck",
  "ƒucking",
  "vaginahead",
  "wacking off",
  "wackin off",
  "wanker",
  "Warmmösenficker",
  "was die Scheiße",
  "wcotc",
  "wcotc.com",
  "wcotc.org",
  "wetback",
  "wetbacks",
  "whore",
  "whores",
  "wop",
  "wpww",
  "wtf",
  "@zz",
  "f*ck",
  "f*cking"
];


const specials = [
  "buttf*cking",
  "f*cksh*tup"
]

export {words as default, specials}