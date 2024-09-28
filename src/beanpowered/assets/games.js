import { queryParams } from "../../sdk/modules/lib";
const games={
    "Slope": {
      "url": "https://kdata1.com/2020/05/slope/",
      "id": "slope",
      "type": "OpenInGL"
    }, 
    "Slope 2": {
      "url": "https://lnahtml.github.io/a6/slope-2/",
      "id": "slope2",
      "type": "OpenInGL"
    }, 
    "1v1.lol": {
      "url": "https://1v1.lol",
      "id": "1v1lol",
      "type": "OpenInGL"
    },
    "Smash Karts": {
      "url": "https://smashkarts.io",
      "id": "smashk",
      "type": "OpenInGL"
    },
    "Shell Shocker": {
      "url": "https://shellshock.io",
      "id": "shells",
      "type": "OpenInGL"
    },
    "2048 ": {
      "url": "https://play2048.co",
      "id": "2048",
      "type": "OpenInGL"
    },
    "Final Fantasy VII": {
      "url": "https://www.retrogames.cc/embed/43658-final-fantasy-vii-usa-disc-1.html",
      "id": "ffvii",
      "type": "OpenInGL"
    },
    "Bloxd.io": {
      "url": "https://bloxd.io",
      "id": "bloxd",
      "type": "OpenInGL"
    },
    "X-Trench Run": {
      "url": "https://lagged.com/game-embed/x-trench-run/",
      "id": "xtr",
      "type": "OpenInGL"
    },
    "Armed Forces": {
      "url": "https://armedforces.io",
      "id": "armedf",
      "type": "OpenInGL"
    },
    "Ocarina of Time": {
      "url": "https://www.retrogames.cc/embed/44169-ocarina-of-time-redux.html",
      "id": "ocarinaot",
      "type": "OpenInGL"
    },
    "Super Mario": {
      "url": "https://www.retrogames.cc/embed/43806-super-mario-bros-simplified.html",
      "id": "mario",
      "type": "OpenInGL"
    },
    "Mini Golf Club": {
      "url": "https://minigolfclub.io",
      "id": "mgclub",
      "type": "OpenInGL"
    },
    "Hole.io": {
      "url": "https://hole-io.com",
      "id": "hole",
      "type": "OpenInGL"
    },
    "OvO": {
      "url": "https://html5.gamedistribution.com/rvvASMiM/1377b99c10284c229423118a941af3b1/index.html?gd_sdk_referrer_url=https%3A%2F%2Fdinosaur-game.io%2Fovo&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2Rpbm9zYXVyLWdhbWUuaW8vb3ZvIiwicGFyZW50RG9tYWluIjoiZGlub3NhdXItZ2FtZS5pbyIsInRvcERvbWFpbiI6ImRpbm9zYXVyLWdhbWUuaW8iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xNyJ9",
      "id": "ovo",
      "type": "OpenInGL"
    },
    "OvO 2": {
      "url": "https://dedragames.com/games/ovo2/0.2alpha/",
      "id": "ovo2",
      "type": "OpenInGL"
    },
    "Retro Bowl": {
      "url": "https://game316009.konggames.com/gamez/0031/6009/live/index.html",
      "id": "retrob",
      "type": "OpenInGL"
    },
    "Subway Surfers": {
      "url": "https://subwaysurfersgame.io/subway-surfers-game.embed?d=20240530",
      "id": "subways",
      "type": "OpenInGL"
    },
    "Deathrun 3D": {
      "url": "https://deathrun3d.io",
      "id": "dr3d",
      "type": "OpenInGL"
    },
    "Fridy Night Funkin'": {
      "url": "https://friday-nightfunkin.io/friday-night-funkin",
      "id": "funkin",
      "type": "OpenInGL"
    },
    "Tomb Runner": {
      "url": "https://lagged.com/en/g/tomb-runner",
      "id": "tombr",
      "type": "OpenInGL"
    },
    "Fallout 1": {
      "url": "https://playclassic.games/games/role-playing-dos-games-online/play-fallout-online/play/",
      "id": "fallout1",
      "type": "OpenInGL"
    },
    "Burrito Bison: Launcha Libre": {
      "url": "https://mountain658.github.io/BurritoBison.html",
      "id": "burritobll",
      "type": "OpenInGL"
    },
    "Tomb of the Mask": {
      "url": "https://mountain658.github.io/tombofthemask.html",
      "id": "totm",
      "type": "OpenInGL"
    },
    "Drive Mad": {
      "url": "https://mountain658.github.io/drivemad.html",
      "id": "drivem",
      "type": "OpenInGL"
    },
    "Run 3": {
      "url": "https://mountain658.glitch.me/run3.html",
      "id": "run3",
      "type": "OpenInGL"
    },
    "Celeste": {
      "url": "https://mountain658.glitch.me/celeste.html",
      "id": "celeste",
      "type": "OpenInGL"
    },
    "Jetpack Joyride": {
      "url": "https://www.miniplay.com/embed/jetpack-joyride",
      "id": "jpjr",
      "type": "OpenInGL"
    },
    "Fruit Ninja": {
      "url": "https://funhtml5games.com?embed=fruitninja",
      "id": "frnin",
      "type": "OpenInGL"
    },
    "Flappy Bird": {
      "url": "https://playcanv.as/p/2OlkUaxF/",
      "id": "flappy",
      "type": "OpenInGL"
    },
    "Pokemon Red": {
      "url": "https://static.arcadespot.com/retroemulator.php?system=gboy&game=2016/07/pokemon-red.zip",
      "id": "pokered",
      "type": "OpenInGL"
    },
    "Pokemon Blue": {
      "url": "https://static.arcadespot.com/retroemulator.php?system=gboy&game=2016/07/pokemon-blue.zip",
      "id": "pokeblue",
      "type": "OpenInGL"
    },
    "Street Fighter": {
      "url": "https://static.arcadespot.com/retroemulator.php?system=snes&game=2017/10/street-fighter-5.smc",
      "id": "streetftr",
      "type": "OpenInGL"
    },
    "Fancade": {
      "url": "https://play.fancade.com",
      "id": "fancade",
      "type": "OpenInGL"
    },
    "Doom": {
      "url": "https://dos.zone/doom-dec-1993/",
      "id": "doom",
      "type": "OpenInGL"
    },
    "Doom II": {
      "url": "https://dos.zone/doom-ii-oct-10-1994/",
      "id": "doom2",
      "type": "OpenInGL"
    },
    "Doom 64": {
      "url": "https://static.arcadespot.com/retroemulator.php?system=n64&game=2017/06/doom-64.zip",
      "id": "doom64",
      "type": "OpenInGL"
    },
    "Doom 3": {
      "url": "https://wasm.continuation-labs.com/d3demo/",
      "id": "doom3",
      "type": "OpenInGL"
    },
    "Baldi's Basics": {
      "url": "https://assets.theludos.com/games/baldis-basics/", //old: https://igroutka.ru/loader/game/26471/
      "id": "baldis",
      "type": "OpenInGL"
    },
    "Krunker.io": {
      "url": "https://krunker.io",
      "id": "krunker",
      "type": "OpenInGL"
    },
    "Snake.io": {
      "url": "https://snakeio.org/snake-io.embed",
      "id": "snakeio",
      "type": "OpenInGL"
    },
    "Portal": {
      "url": "https://w8.snokido.com/games/flash/ruffle.html?g=portal&v=140524",
      "id": "portal",
      "type": "OpenInGL"
    },
    "Yohoho.io": {
      "url": "https://yohoho.io",
      "id": "yohohoio",
      "type": "OpenInGL"
    },
    "Ships 3D": {
      "url": "https://games.crazygames.com/en_US/ships-3d/index.html?v=1.288",
      "id": "ships3d",
      "type": "OpenInGL"
    },
    "GunSpin": {
      "url": "https://gun-spin.github.io/file/",
      "id": "gunspin",
      "type": "OpenInGL"
    },
    "FNaF 1": {
      "url": "https://fnafgame.io/fnaf.embed?ez_iframe=1",
      "id": "fnaf1",
      "type": "OpenInGL"
    },
    "FNaF 2": {
      "url": "https://fnafgame.io/fnaf-2.embed?ez_iframe=1",
      "id": "fnaf2",
      "type": "OpenInGL"
    },
    "FNaF 3": {
      "url": "https://fnafgame.io/fnaf-3.embed?ez_iframe=1",
      "id": "fnaf3",
      "type": "OpenInGL"
    },
    "FNaF 4": {
      "url": "https://fnafgame.io/fnaf-4.embed?ez_iframe=1",
      "id": "fnaf4",
      "type": "OpenInGL"
    },
    "FNaF World": {
      "url": "https://turbowarp.org/96095372/embed?autoplay&addons=remove-curved-stage-border%2Cpause%2Cgamepad",
      "id": "fnafworld",
      "type": "OpenInGL"
    },
    "Highway Traffic": {
      "url": "https://app-97317.games.s3.yandex.net/97317/zr27uqx4qauq31fg2ud41a7oye9c4dki/index.html?sdk=%2Fsdk%2F_%2Fv2.6cafcb80ad19287b13a2.js#origin=https%3A%2F%2Fplayhop.com&app-id=97317&device-type=desktop",
      "id": "hwtraffic",
      "type": "OpenInGL"
    },
    "Fractal Combat X": {
      "url": "https://play.gamepix.com/fractal-combat-x/embed?sid=e4515",
      "id": "fcx",
      "type": "OpenInGL"
    },
    "Snow Rider 3D": {
      "url": "https://html5.gamedistribution.com/3b79a8537ebc414fb4f9672a9b8c68c8/?gd_sdk_referrer_url=https://gamedistribution.com/games/snow-rider-3d/",
      "id": "sr3d",
      "type": "OpenInGL"
    },
    "The Last Man": {
      "url": "https://html5.gamedistribution.com/63c7be58e25e4b37bef7e01d3fa20894/?gd_sdk_referrer_url=https://kevin.games/the-last-man",
      "id": "tlm",
      "type": "OpenInGL"
    },
    "Half Life": {
      "url": "https://pixelsuft.github.io/hl/xash.html#150",
      "id": "hl",
      "type": "OpenInGL"
    },
    "Mario 64": {
      "url": "https://static.arcadespot.com/retroemulator.php?system=n64&game=2017/06/super-mario-64.zip",
      "id": "m64",
      "type": "OpenInGL"
    },
    "Among Us": {
      "url": "https://amongusio.io/among-us.embed",
      "id": "amongus",
      "type": "OpenInGL"
    },
    "Pizza Tower": {
      "url": "https://kdata1.com/2021/03/3527391/2.1/",
      "id": "pizzatower",
      "type": "OpenInGL"
    },
    "Riddle School": {
      "url": "/games/emulator_src/ruffle/ruffleLoader.html?g=/games/emulator_src/ruffle/games/riddleschool.swf",
      "id": "riddleschool1",
      "type": "OpenInGL",
      "customBannerCSS":{"backgroundPositionY": "top",}
    },
    "Riddle School 2": {
      "url": "/games/emulator_src/ruffle/ruffleLoader.html?g=/games/emulator_src/ruffle/games/riddleschool2.swf",
      "id": "riddleschool2",
      "type": "OpenInGL",
      "customBannerCSS":{"backgroundPositionY": "top",}
    },
    "Riddle School 3": {
      "url": "/games/emulator_src/ruffle/ruffleLoader.html?g=/games/emulator_src/ruffle/games/riddleschool3.swf",
      "id": "riddleschool3",
      "type": "OpenInGL",
      "customBannerCSS":{"backgroundPositionY": "top",}
    },
    "Riddle School 4": {
      "url": "/games/emulator_src/ruffle/ruffleLoader.html?g=/games/emulator_src/ruffle/games/riddleschool4.swf",
      "id": "riddleschool4",
      "type": "OpenInGL",
      "customBannerCSS":{"backgroundPositionY": "top",}
    },
    "Riddle School 5": {
      "url": "/games/emulator_src/ruffle/ruffleLoader.html?g=/games/emulator_src/ruffle/games/riddleschool5.swf",
      "id": "riddleschool5",
      "type": "OpenInGL",
      "customBannerCSS":{"backgroundPositionY": "top",}
    },
    "Riddle Transfer": {  
      "url": "/games/emulator_src/ruffle/ruffleLoader.html?g=/games/emulator_src/ruffle/games/riddletransfer.swf",
      "id": "riddleschool6",
      "type": "OpenInGL",
      "customBannerCSS":{"backgroundPositionY": "top",}
    },
    "Riddle Transfer 2": {
      "url": "/games/emulator_src/ruffle/ruffleLoader.html?g=/games/emulator_src/ruffle/games/riddletransfer2.swf",
      "id": "riddleschool7",
      "type": "OpenInGL",
      "customBannerCSS":{"backgroundPositionY": "top",}
    },
    "Granny": {
      "url": "https://gnhustgames.org/granny-source/",
      "id": "granny",
      "type": "OpenInGL"
    },
    "Suika Game": {
      "url": "https://suikagame.com",
      "id": "suika",
      "type": "OpenInGL",
      "customBannerCSS":{"backgroundPositionY": "top",}
    },
    "Tetris": {
      "url": "https://www.lumpty.com/amusements/Games/Tetris/tetris.html",
      "id": "tetris",
      "type": "OpenInGL"
    },
    "Snake": {
      "url": "https://patorjk.com/games/snake/",
      "id": "snake",
      "type": "OpenInGL"
    },
    "Super Smash Flash": {
      "url": "/games/emulator_src/ruffle/ruffleLoader.html?g=/games/emulator_src/ruffle/games/SuperSmash.swf",
      "id": "ssf",
      "type": "OpenInGL",
      "customBannerCSS":{"backgroundPositionY": "top",}
    },
    "Super Smash Flash 2": {
      "url": "/games/emulator_src/ruffle/ruffleLoader.html?g=/games/emulator_src/ruffle/games/SuperSmash2.swf",
      "id": "ssf2",
      "type": "OpenInGL"
    },
    "Super Mario 63": {
      "url": "/games/emulator_src/ruffle/ruffleLoader.html?g=/games/emulator_src/ruffle/games/supermario63.swf",
      "id": "sm63",
      "type": "OpenInGL"
    },
    "Happy Wheels": {
      "url": `/games/emulator_src/ruffle/ruffleLoader.html?g=/games/emulator_src/ruffle/games/happyWheels.swf${queryParams.lb==="true"?"&lb=true":""}`,
      "id": "hw",
      "type": "OpenInGL"
    },
    "FPA World 1": {
      "url": `/games/emulator_src/ruffle/ruffleLoader.html?g=/games/emulator_src/ruffle/games/FPAWorld1.swf${queryParams.lb==="true"?"&lb=true":""}`,
      "id": "fpaw1",
      "type": "OpenInGL"
    },
    "FPA World 2": {
      "url": `/games/emulator_src/ruffle/ruffleLoader.html?g=/games/emulator_src/ruffle/games/FPAWorld2.swf${queryParams.lb==="true"?"&lb=true":""}`,
      "id": "fpaw2",
      "type": "OpenInGL"
    },
    "FPA World 3": {
      "url": `/games/emulator_src/ruffle/ruffleLoader.html?g=/games/emulator_src/ruffle/games/FPAWorld3.swf${queryParams.lb==="true"?"&lb=true":""}`,
      "id": "fpaw3",
      "type": "OpenInGL"
    },
    "Duck Life": {
      "url": `/games/emulator_src/ruffle/ruffleLoader.html?g=/games/emulator_src/ruffle/games/ducklife.swf${queryParams.lb==="true"?"&lb=true":""}`,
      "id": "dl1",
      "type": "OpenInGL"
    },
    "Duck Life 2": {
      "url": `/games/emulator_src/ruffle/ruffleLoader.html?g=/games/emulator_src/ruffle/games/ducklife2.swf${queryParams.lb==="true"?"&lb=true":""}`,
      "id": "dl2",
      "type": "OpenInGL",
      "customBannerCSS":{"backgroundPositionY": "25%",}
    },
    "Duck Life 3": {
      "url": `/games/emulator_src/ruffle/ruffleLoader.html?g=/games/emulator_src/ruffle/games/ducklife3.swf${queryParams.lb==="true"?"&lb=true":""}`,
      "id": "dl3",
      "type": "OpenInGL",
      "customBannerCSS":{"backgroundPositionY": "top",}
    },
    "Duck Life 4": {
      "url": `/games/emulator_src/ruffle/ruffleLoader.html?g=/games/emulator_src/ruffle/games/ducklife4.swf${queryParams.lb==="true"?"&lb=true":""}`,
      "id": "dl4",
      "type": "OpenInGL",
      "customBannerCSS":{"backgroundPositionY": "top",}
    },
    "Penalty Shooters 2": {
      "url": "https://html5.gamedistribution.com/571b9df027e449f78e3869ba19658754/?gd_sdk_referrer_url=https://gamedistribution.com/games/Penalty-Shooters-2/",
      "id": "ps2",
      "type": "OpenInGL",
    },
    "Pokemon Gold": {
      "url": "https://static.arcadespot.com/retroemulator.php?system=gbc&game=2016/07/pokemon-gold.zip",
      "id": "pokegold",
      "type": "OpenInGL",
    },
    // "Melon Sandbox": {
      // "url": "https://yandex.com/games/app/260481?header=no&skip-guard=1&utm_source=distrib&utm_medium=gamepix",
      // "id": "melon",
      // "type": "OpenInGL"
    // },
};
//? add '&lb=true' to enable letterbox on ruffle urls
export default games;