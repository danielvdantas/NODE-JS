const questions = [
    "Qual o seu nome?",
    "Qual sua idade?",
    "Quer que eu esquente a sopa?",
]

const ask = (index = 0) => {
    return process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []

process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
    Olá ${answers[0]}! Nem parece que você tem ${answers[1]} anos!
    
    Já que você disse ${answers[2]}, vamos jantar???
    `)
})