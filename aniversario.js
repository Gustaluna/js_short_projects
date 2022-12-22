function yourDay(date) {
    let today = new Date()
    return date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth()
    }

    function birthday () {
    if (yourDay(new Date()) == yourDay(new Date('12-20'))) {
    console.log ("Feliz aniversário, negão. Te admiro muito. Tudo de bom na tua vida sempre!") 
    }
    
    else {
    console.log ("É, ainda vamos ter que esperar um pouco até seu próximo aniversário...")
    }
    }
    birthday ()