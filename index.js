var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);


    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },

    'GetNewFactIntent': function () {
        var say = 'Hello! The Excuse I am going to use is ' + getFact();
        this.emit(':tell', say );
    },

    'AMAZON.HelpIntent': function () {
         this.emit(':ask', 'Learn everything you need to know about Amazon Web Services to pass your exam by listening to your very own study notes. You can start by saying, Ryan help me study.', 'try again');
     },

     'AMAZON.CancelIntent': function () {
         this.emit(':tell', 'Goodbye Cloud Gurus');
     },

     'AMAZON.StopIntent': function () {
         this.emit(':tell', 'Goodbye Cloud Gurus');
     }
};

//  helper functions  ===================================================================


function getFact() {
    var myFacts = [
    '<audio src=\"https://s3.amazonaws.com/arg-polly-mp3s2018/39daec09-567a-4fe5-9642-5fd6e4b01370.mp3"  />\'',
    '<audio src=\"https://s3.amazonaws.com/arg-polly-mp3s2018/bab6850b-3fcb-4881-8feb-d8b4f5720e19.mp3"  />\'',
    '<audio src=\"https://s3.amazonaws.com/arg-polly-mp3s2018/6d0bb926-a096-425e-b850-3abe5c66c8a3.mp3"  />\'',
    '<audio src=\"https://s3.amazonaws.com/arg-polly-mp3s2018/3863cf34-e041-4f67-a041-dd20cb8e3283.mp3"  />\'',
    '<audio src=\"https://s3.amazonaws.com/arg-polly-mp3s2018/48f773e6-0d5a-45f7-a846-18aba0b0e319.mp3"  />\'',
    '<audio src=\"https://s3.amazonaws.com/arg-polly-mp3s2018/fafdbcef-e1e3-46fc-a455-bc30dcb0d4de.mp3"  />\'',
    '<audio src=\"https://s3.amazonaws.com/arg-polly-mp3s2018/acedb7f4-07a4-4c7e-ac60-955da13e0800.mp3"  />\'',
    '<audio src=\"https://s3.amazonaws.com/arg-polly-mp3s2018/fa23c261-a4ee-4b54-9b87-114ea00d4406.mp3"  />\''
        ]

    var newFact = randomPhrase(myFacts);

    return newFact;
}

function randomPhrase(array) {
    // the argument is an array [] of words or phrases
    var i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}