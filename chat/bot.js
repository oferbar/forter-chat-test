var username = 'BOT';
var lastQuestion = null;
var usrAnswers = {};
// inject some "known" questions + answers
addUsrAnswer('What day is it today?', 'Today is a good day');
addUsrAnswer('What is your quest?', 'To seek the holy grail');
addUsrAnswer('What is your favourite color?', 'Blue');
addUsrAnswer('Who are you?', 'I’m a Caterpillar');
addUsrAnswer('How do you know I’m mad?', 'You must be, or you wouldn’t have come here.');

var botAnswers = [
'I do not know',
'That is a very good question!',
'The quick brown fox',
'lorem ipsum',
'42',
'Life itself',
'I think my transistors are getting hot',
'Yes, we were there last summer',
'I like the smell of fresh apples in the winter'
];


function addUsrAnswer(question, answer) {
    // populate the usrAnswers
    usrAnswers[question.toLowerCase()] = answer;
}

module.exports = {

    // class methods
    getUsername : function() {
        return username;
    },

    getAnswer : function(msg) {
        var s = this.cleanMessage(msg);
        console.log('bot: clean msg=' + s);

        if (!this.isQuestion(s)) {
            
            // the current message is not a question, so it might be an answer to the last question
            if (lastQuestion != null) {
                // calculate the hash for the last question
                console.log('bot: answer - last question=' + lastQuestion)
                // store the answer in the dictioary
                usrAnswers[lastQuestion.toLowerCase()] = s;
            }
            lastQuestion = null;
            return null;
        }

        // if we got here then the msg is a question
        lastQuestion = s; // save it
        var answer = usrAnswers[s.toLowerCase()];

        if (answer == null) {
            console.log('bot: question has no answer = ' + s);
            // no answer
            return null;
        }

        if (Math.floor(Math.random() * 100) > 60) {
            // 40% probability of giving a funny answer
            var i = Math.floor(Math.random() * botAnswers.length);
            answer = botAnswers[i];
        }

        console.log('bot: answer is=' + answer);
        return answer;
    },

    isQuestion : function(msg) {
        return msg.charAt(msg.length-1) == '?';
    },

    cleanMessage : function(msg) {
        // trim etc.
        return msg.trim();
    },

}
