"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Daysave",
    embedded: false
  },
  {
    name: "DaysaveItem",
    embedded: true
  },
  {
    name: "DaysaveItem4chan",
    embedded: true
  },
  {
    name: "DaysaveItemAbandonedPorn",
    embedded: true
  },
  {
    name: "DaysaveItemAdviceAnimal",
    embedded: true
  },
  {
    name: "DaysaveItemAndroid",
    embedded: true
  },
  {
    name: "DaysaveItemAnimalsBeingJerk",
    embedded: true
  },
  {
    name: "DaysaveItemAnime",
    embedded: true
  },
  {
    name: "DaysaveItemApple",
    embedded: true
  },
  {
    name: "DaysaveItemArt",
    embedded: true
  },
  {
    name: "DaysaveItemAskMan",
    embedded: true
  },
  {
    name: "DaysaveItemAskReddit",
    embedded: true
  },
  {
    name: "DaysaveItemAskWoman",
    embedded: true
  },
  {
    name: "DaysaveItemAskscience",
    embedded: true
  },
  {
    name: "DaysaveItemAssholedesign",
    embedded: true
  },
  {
    name: "DaysaveItemAtheism",
    embedded: true
  },
  {
    name: "DaysaveItemAww",
    embedded: true
  },
  {
    name: "DaysaveItemBackpacking",
    embedded: true
  },
  {
    name: "DaysaveItemBaseball",
    embedded: true
  },
  {
    name: "DaysaveItemBattlestation",
    embedded: true
  },
  {
    name: "DaysaveItemBeAmazed",
    embedded: true
  },
  {
    name: "DaysaveItemBestof",
    embedded: true
  },
  {
    name: "DaysaveItemBetterEveryLoop",
    embedded: true
  },
  {
    name: "DaysaveItemBikiniBottomTwitter",
    embedded: true
  },
  {
    name: "DaysaveItemBlackPeopleTwitter",
    embedded: true
  },
  {
    name: "DaysaveItemBoardgame",
    embedded: true
  },
  {
    name: "DaysaveItemBook",
    embedded: true
  },
  {
    name: "DaysaveItemBuildapc",
    embedded: true
  },
  {
    name: "DaysaveItemCar",
    embedded: true
  },
  {
    name: "DaysaveItemCat",
    embedded: true
  },
  {
    name: "DaysaveItemChangemyview",
    embedded: true
  },
  {
    name: "DaysaveItemChoosingBeggar",
    embedded: true
  },
  {
    name: "DaysaveItemComic",
    embedded: true
  },
  {
    name: "DaysaveItemComicbook",
    embedded: true
  },
  {
    name: "DaysaveItemConfession",
    embedded: true
  },
  {
    name: "DaysaveItemConspiracy",
    embedded: true
  },
  {
    name: "DaysaveItemCooking",
    embedded: true
  },
  {
    name: "DaysaveItemCrappyDesign",
    embedded: true
  },
  {
    name: "DaysaveItemCreepy",
    embedded: true
  },
  {
    name: "DaysaveItemCringe",
    embedded: true
  },
  {
    name: "DaysaveItemCryptoCurrency",
    embedded: true
  },
  {
    name: "DaysaveItemDamnthatsinteresting",
    embedded: true
  },
  {
    name: "DaysaveItemDankmeme",
    embedded: true
  },
  {
    name: "DaysaveItemDestinyTheGame",
    embedded: true
  },
  {
    name: "DaysaveItemDnD",
    embedded: true
  },
  {
    name: "DaysaveItemDocumentary",
    embedded: true
  },
  {
    name: "DaysaveItemDrawing",
    embedded: true
  },
  {
    name: "DaysaveItemDunderMifflin",
    embedded: true
  },
  {
    name: "DaysaveItemEarthPorn",
    embedded: true
  },
  {
    name: "DaysaveItemEducationalgif",
    embedded: true
  },
  {
    name: "DaysaveItemEntertainment",
    embedded: true
  },
  {
    name: "DaysaveItemEurope",
    embedded: true
  },
  {
    name: "DaysaveItemExplainlikeimfive",
    embedded: true
  },
  {
    name: "DaysaveItemEyebleach",
    embedded: true
  },
  {
    name: "DaysaveItemFacepalm",
    embedded: true
  },
  {
    name: "DaysaveItemFemalefashionadvice",
    embedded: true
  },
  {
    name: "DaysaveItemFitness",
    embedded: true
  },
  {
    name: "DaysaveItemFood",
    embedded: true
  },
  {
    name: "DaysaveItemFoodPorn",
    embedded: true
  },
  {
    name: "DaysaveItemFortNiteBR",
    embedded: true
  },
  {
    name: "DaysaveItemFrugal",
    embedded: true
  },
  {
    name: "DaysaveItemFrugalmalefashion",
    embedded: true
  },
  {
    name: "DaysaveItemFunny",
    embedded: true
  },
  {
    name: "DaysaveItemFuturology",
    embedded: true
  },
  {
    name: "DaysaveItemGadget",
    embedded: true
  },
  {
    name: "DaysaveItemGame",
    embedded: true
  },
  {
    name: "DaysaveItemGaming",
    embedded: true
  },
  {
    name: "DaysaveItemGardening",
    embedded: true
  },
  {
    name: "DaysaveItemGif",
    embedded: true
  },
  {
    name: "DaysaveItemGlobalOffensive",
    embedded: true
  },
  {
    name: "DaysaveItemGonewild",
    embedded: true
  },
  {
    name: "DaysaveItemHearthstone",
    embedded: true
  },
  {
    name: "DaysaveItemHighQualityGif",
    embedded: true
  },
  {
    name: "DaysaveItemHiphophead",
    embedded: true
  },
  {
    name: "DaysaveItemHmmm",
    embedded: true
  },
  {
    name: "DaysaveItemHockey",
    embedded: true
  },
  {
    name: "DaysaveItemHumansBeingBro",
    embedded: true
  },
  {
    name: "DaysaveItemIamverysmart",
    embedded: true
  },
  {
    name: "DaysaveItemInsanepeoplefacebook",
    embedded: true
  },
  {
    name: "DaysaveItemInstant_regret",
    embedded: true
  },
  {
    name: "DaysaveItemInterestingasfuck",
    embedded: true
  },
  {
    name: "DaysaveItemIphone",
    embedded: true
  },
  {
    name: "DaysaveItemJoke",
    embedded: true
  },
  {
    name: "DaysaveItemKeto",
    embedded: true
  },
  {
    name: "DaysaveItemLeagueoflegend",
    embedded: true
  },
  {
    name: "DaysaveItemLegaladvice",
    embedded: true
  },
  {
    name: "DaysaveItemLifeProTip",
    embedded: true
  },
  {
    name: "DaysaveItemLifehack",
    embedded: true
  },
  {
    name: "DaysaveItemListentothi",
    embedded: true
  },
  {
    name: "DaysaveItemLoseit",
    embedded: true
  },
  {
    name: "DaysaveItemMMA",
    embedded: true
  },
  {
    name: "DaysaveItemMakeupAddiction",
    embedded: true
  },
  {
    name: "DaysaveItemMalefashionadvice",
    embedded: true
  },
  {
    name: "DaysaveItemManga",
    embedded: true
  },
  {
    name: "DaysaveItemMe_irl",
    embedded: true
  },
  {
    name: "DaysaveItemMealPrepSunday",
    embedded: true
  },
  {
    name: "DaysaveItemMeme",
    embedded: true
  },
  {
    name: "DaysaveItemMemeEconomy",
    embedded: true
  },
  {
    name: "DaysaveItemMildlyinfuriating",
    embedded: true
  },
  {
    name: "DaysaveItemMildlyinteresting",
    embedded: true
  },
  {
    name: "DaysaveItemMinecraft",
    embedded: true
  },
  {
    name: "DaysaveItemMovie",
    embedded: true
  },
  {
    name: "DaysaveItemMovieDetail",
    embedded: true
  },
  {
    name: "DaysaveItemMurderedByWord",
    embedded: true
  },
  {
    name: "DaysaveItemMusic",
    embedded: true
  },
  {
    name: "DaysaveItemNatureIsFuckingLit",
    embedded: true
  },
  {
    name: "DaysaveItemNatureismetal",
    embedded: true
  },
  {
    name: "DaysaveItemNba",
    embedded: true
  },
  {
    name: "DaysaveItemNews",
    embedded: true
  },
  {
    name: "DaysaveItemNfl",
    embedded: true
  },
  {
    name: "DaysaveItemNiceguy",
    embedded: true
  },
  {
    name: "DaysaveItemNintendoSwitch",
    embedded: true
  },
  {
    name: "DaysaveItemNoStupidQuestion",
    embedded: true
  },
  {
    name: "DaysaveItemNononono",
    embedded: true
  },
  {
    name: "DaysaveItemNosleep",
    embedded: true
  },
  {
    name: "DaysaveItemNottheonion",
    embedded: true
  },
  {
    name: "DaysaveItemOddlysatisfying",
    embedded: true
  },
  {
    name: "DaysaveItemOldSchoolCool",
    embedded: true
  },
  {
    name: "DaysaveItemOldpeoplefacebook",
    embedded: true
  },
  {
    name: "DaysaveItemOverwatch",
    embedded: true
  },
  {
    name: "DaysaveItemPS4",
    embedded: true
  },
  {
    name: "DaysaveItemPcgaming",
    embedded: true
  },
  {
    name: "DaysaveItemPcmasterrace",
    embedded: true
  },
  {
    name: "DaysaveItemPersonalfinance",
    embedded: true
  },
  {
    name: "DaysaveItemPewdiepieSubmission",
    embedded: true
  },
  {
    name: "DaysaveItemPhotography",
    embedded: true
  },
  {
    name: "DaysaveItemPic",
    embedded: true
  },
  {
    name: "DaysaveItemPokemon",
    embedded: true
  },
  {
    name: "DaysaveItemPokemongo",
    embedded: true
  },
  {
    name: "DaysaveItemPolitic",
    embedded: true
  },
  {
    name: "DaysaveItemPrequelMeme",
    embedded: true
  },
  {
    name: "DaysaveItemProgrammerHumor",
    embedded: true
  },
  {
    name: "DaysaveItemReactiongif",
    embedded: true
  },
  {
    name: "DaysaveItemRealGirl",
    embedded: true
  },
  {
    name: "DaysaveItemRelationship",
    embedded: true
  },
  {
    name: "DaysaveItemRelationship_advice",
    embedded: true
  },
  {
    name: "DaysaveItemRickandmorty",
    embedded: true
  },
  {
    name: "DaysaveItemRoadcam",
    embedded: true
  },
  {
    name: "DaysaveItemRoastMe",
    embedded: true
  },
  {
    name: "DaysaveItemScience",
    embedded: true
  },
  {
    name: "DaysaveItemSex",
    embedded: true
  },
  {
    name: "DaysaveItemShowerthought",
    embedded: true
  },
  {
    name: "DaysaveItemSoccer",
    embedded: true
  },
  {
    name: "DaysaveItemSocialskill",
    embedded: true
  },
  {
    name: "DaysaveItemSpace",
    embedded: true
  },
  {
    name: "DaysaveItemSport",
    embedded: true
  },
  {
    name: "DaysaveItemStarWar",
    embedded: true
  },
  {
    name: "DaysaveItemStarterpack",
    embedded: true
  },
  {
    name: "DaysaveItemTechnology",
    embedded: true
  },
  {
    name: "DaysaveItemTeenager",
    embedded: true
  },
  {
    name: "DaysaveItemTelevision",
    embedded: true
  },
  {
    name: "DaysaveItemThatHappened",
    embedded: true
  },
  {
    name: "DaysaveItemThe_Donald",
    embedded: true
  },
  {
    name: "DaysaveItemTherewasanattempt",
    embedded: true
  },
  {
    name: "DaysaveItemTifu",
    embedded: true
  },
  {
    name: "DaysaveItemTinder",
    embedded: true
  },
  {
    name: "DaysaveItemTodayilearned",
    embedded: true
  },
  {
    name: "DaysaveItemTrashy",
    embedded: true
  },
  {
    name: "DaysaveItemTravel",
    embedded: true
  },
  {
    name: "DaysaveItemTree",
    embedded: true
  },
  {
    name: "DaysaveItemTwoXChromosome",
    embedded: true
  },
  {
    name: "DaysaveItemUnexpected",
    embedded: true
  },
  {
    name: "DaysaveItemUpliftingNew",
    embedded: true
  },
  {
    name: "DaysaveItemVideo",
    embedded: true
  },
  {
    name: "DaysaveItemWTF",
    embedded: true
  },
  {
    name: "DaysaveItemWatchPeopleDieInside",
    embedded: true
  },
  {
    name: "DaysaveItemWellthatsuck",
    embedded: true
  },
  {
    name: "DaysaveItemWhatcouldgowrong",
    embedded: true
  },
  {
    name: "DaysaveItemWhatisthisthing",
    embedded: true
  },
  {
    name: "DaysaveItemWhitePeopleTwitter",
    embedded: true
  },
  {
    name: "DaysaveItemWholesomememe",
    embedded: true
  },
  {
    name: "DaysaveItemWoahdude",
    embedded: true
  },
  {
    name: "DaysaveItemWoodworking",
    embedded: true
  },
  {
    name: "DaysaveItemWorldnew",
    embedded: true
  },
  {
    name: "DaysaveItemWow",
    embedded: true
  },
  {
    name: "DaysaveItemWritingPrompt",
    embedded: true
  },
  {
    name: "DaysaveItemXboxone",
    embedded: true
  },
  {
    name: "DaysaveItemYouShouldKnow",
    embedded: true
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
