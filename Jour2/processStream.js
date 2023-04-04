let readline = require('readline')

rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Propose un nom detudient : ')
rl.prompt()


rl.on('line', function(line) {

    switch (line.trim()) {
        case 'Alan':
            console.log('oui')
            process.exit()
            break;

            case 'Sonia':
                console.log('oui')
                process.exit()
                break;
                case 'Sophie':
                    console.log('oui')
                    process.exit()
                    break;
    
        default:
            break;
    }

    rl.prompt()
})