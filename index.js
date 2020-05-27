
// Use our Watson library.
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

// Require our config variables.
var config = require('./config');

// The text that we want to analyze the tone of.
var text = "My son has high fever since last week.\" No medicines are working from him, since yesterday he is facing difficulty in breathing.\" I don’t have more money to buy any medicines and we live in a remote village area , so no proper medical facility available. \"I kindly request the authorities to provide for my child for I fear if he does not receive proper medication or treatment soon, he may die.\"";

// Turn our text into valid json.
var input = { "text": text };

// The format that the tone analyzer needs. 
var params = 
        {
        'tone_input': input,
        'content_type': 'application/json'
        };

// Initialize the Tone Analyzer by giving it our credentials.
var tone_analyzer = new ToneAnalyzerV3(
        {
        username: config.username,
        password: config.password,
        version_date: '2017-09-21'
        });

// Use our Tone Analyzer variable to analyze the tone.
tone_analyzer.tone(params, function(error, response) 
        {
        // There's an error.
        if (error)
                {
                console.log('Error:', error);
                }
        // No error, we got our tone result.
        else
                {
                // The tone of the text, as determined by watson.
                var tone = JSON.stringify(response, null, 2)
                
                // Output Watson's tone analysis to the console.
                console.log("The tone analysis for \'" + text + "\' is:\n");
                console.log(tone);
                }
        })