const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    console.log("Welcome to George's IQ test")
    while (true) {
        console.log("1. Mathematics");
        console.log("2. Geography");
        console.log("3. History");
        let userInput = await askQuestion("Please choose one of the following topics:");
        let mathAnswers = [];
        let historyAnswers = [];
        let geographyAnswers = [];
        let correctAnswers = 0
        let incorrectAnswers = 0
        if (userInput == "1") {
            userInput1 = await askQuestion("What is the Square root of 49? ")
            if (userInput1 == "7") {
                correctAnswers++;
                console.log(`Correct!, you've answered ${correctAnswers} correctly`);
            } else {
                incorrectAnswers++;
                console.log(`Incorrect, you've answered ${incorrectAnswers} incorrectly`)
            }
            mathAnswers.push(userInput1)
            console.log(`Your answer: ${mathAnswers[0]}`)
            userInput2 = await askQuestion("What is 9 x 9? ")
            if (userInput2 == "81") {
                correctAnswers++;
                console.log(`Correct!, you've answered ${correctAnswers} correctly`)
            } else {
                incorrectAnswers++
                console.log(`Incorrect!, you've answered ${incorrectAnswers} incorrectly`)
            }
            mathAnswers.push(userInput2);
            console.log(`Your answer: ${mathAnswers[1]}`)
            userInput3 = await askQuestion("What is 42 - 12? ")
            if (userInput3 == "30") {
                correctAnswers++;
                console.log(`Correct!, you've answered ${correctAnswers} correctly`);
            } else {
                incorrectAnswers++
                console.log(`Incorrect! you've answered ${incorrectAnswers} incorrectly`)
            }
            mathAnswers.push(userInput3);
            console.log(`Your answer: ${mathAnswers[2]}`)
            function getResults(yourResults) {
                if (yourResults == "3") {
                    return `You've answered ${yourResults} correctly out of a possible 3, You're a genius!`
                } else if (yourResults == "2") {
                    return `You've answered ${yourResults} correctly of a possible 3, You're pretty smart!`
                } else if (yourResults == "1") {
                    return `Youve answered ${yourResults} correctly out of a possible 3, You're kind of stupid!`
                } else if (yourResults == "") {
                    return `You've answered ${yourResults} correctly out of a possible 3, You're very stupid!`
                }
            }
            let resultAchieved = getResults(correctAnswers)
            console.log(resultAchieved)
            console.log(`Your answers were ${mathAnswers}`)

            console.log('1: Exit test or:')
            console.log('Press any key to return to the main menu')
            let navigation1 = await askQuestion("")
            if (navigation1 == "1") {
                console.log("Thank you for playing!")
                break
            } else { }
        } else if (userInput == "2") {
            userInput4 = await askQuestion("What is the capital of the Czech republic? ")
            if (userInput4 == "prague") {
                correctAnswers++;
                console.log(`Correct!, you've answered ${correctAnswers} correctly`)
            } else {
                incorrectAnswers++
                console.log(`Incorrect!, you've answered ${incorrectAnswers} incorrectly`);
            } geographyAnswers.push(userInput4)
            console.log(`Your answer: ${geographyAnswers[0]}`)
            userInput5 = await askQuestion("What is the capitaly of Sweden? ")
            if (userInput5 == "stockholm") {
                correctAnswers++;
                console.log(`Correct!, you've answered ${correctAnswers} correctly`);
            } else {
                incorrectAnswers++;
                console.log(`Incorrect!, you've answered ${incorrectAnswers} incorrectly`);
            } geographyAnswers.push(userInput5);
            console.log(`Your answer: ${geographyAnswers[1]}`)

            userInput6 = await askQuestion("Name one of Australia's states:")
            if (userInput6 == "new south whales" || "New South Whales" || "NSW" || "nsw" || "south australia" || "South Australia" || "SA" || "sa" || "western australia" || "Western Australia" || "WA" || "wa" || "victoria" || "Victoria" || "queensland" || "Queensland" || "QLD" || "qld" || "tasmania" || "Tasmania") {
                correctAnswers++;
                console.log(`Correct!, you've answered ${correctAnswers} correctly!`)
            } else {
                incorrectAnswers++
                console.log(`Incorrect!, you've answered ${incorrectAnswers} incorrectly`);
            } geographyAnswers.push(userInput6);
            console.log(`Your answer: ${geographyAnswers[2]}`)

            function getResults(yourResults) {
                if (yourResults == "3") {
                    return `You've answered ${yourResults} correctly out of a possible 3, You're a genius!`
                } else if (yourResults == "2") {
                    return `You've answered ${yourResults} correctly of a possible 3, You're pretty smart!`
                } else if (yourResults == "1") {
                    return `Youve answered ${yourResults} correctly out of a possible 3, You're kind of stupid!`
                } else if (yourResults == "") {
                    return `You've answered ${yourResults} correctly out of a possible 3, You're very stupid!`
                }
            }
            let resultAchieved = getResults(correctAnswers)
            console.log(resultAchieved)
            console.log(`Your answers were ${geographyAnswers}`)

            console.log('1: Exit test or:')
            console.log('Press any key to return to the main menu')
            let navigation1 = await askQuestion("")
            if (navigation1 == "1") {
                console.log("Thank you for playing!")
                break
            } else { }
        } else if (userInput == "3") {
            userInput7 = await askQuestion("In what year did world war 1 end? ");
            if (userInput7 == "1918") {
                correctAnswers++;
                console.log(`Correct!, you've answered ${correctAnswers} correctly`)
            } else {
                incorrectAnswers++;
                console.log(`Incorrect!, you've answered ${incorrectAnswers} incorrectly`)
            } historyAnswers.push(userInput7)
            console.log(`Your answer: ${historyAnswers[0]}`)
            userInput8 = await askQuestion("What year did the first fleet arrive in Australia? ");
            if (userInput8 == "1788") {
                correctAnswers++;
                console.log(`Correct!, you've answered ${correctAnswers} correctly`)
            } else {
                incorrectAnswers++;
                console.log(`Incorrect!, you've answered ${incorrectAnswers} incorrectly`)
            } historyAnswers.push(userInput8);
            console.log(`Your answer:${historyAnswers[1]}`)
            userInput9 = await askQuestion("In what year did Australia gain independence from the United Kingdom? ")
            if (userInput9 == "1901") {
                correctAnswers++;
                console.log(`Correct!, you've answered ${correctAnswers} correctly`)
            } else {
                incorrectAnswers++;
                console.log(`Incorrect!, you've answered ${incorrectAnswers} incorrectly`)
            }historyAnswers.push(userInput9);
            console.log(`Your answer:${historyAnswers[2]}`)

            function getResults(yourResults) {
                if (yourResults == "3") {
                    return `You've answered ${yourResults} correctly out of a possible 3, You're a genius!`
                } else if (yourResults == "2") {
                    return `You've answered ${yourResults} correctly of a possible 3, You're pretty smart!`
                } else if (yourResults == "1") {
                    return `Youve answered ${yourResults} correctly out of a possible 3, You're kind of stupid!`
                } else if (yourResults == "") {
                    return `You've answered ${yourResults} correctly out of a possible 3, You're very stupid!`
                }
            }
            let resultAchieved = getResults(correctAnswers)
            console.log(resultAchieved)
            console.log(`Your answers were ${historyAnswers}`)

            console.log('1: Exit test or:')
            console.log('Press any key to return to the main menu')
            let navigation1 = await askQuestion("")
            if (navigation1 == "1") {
                console.log("Thank you for playing!")
                break
            } else { }


        } else if (userInput != "1" || "2" || "3") {
            console.log("Error! please enter a valid option");

        }
    }
}




Program().then(() => {
    process.exit(0);
});