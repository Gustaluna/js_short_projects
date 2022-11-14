function prompt(question){
    let { stdin, stdout } = process
  
    stdin.resume();
    stdout.write(question + "\n");
  
    return new Promise(res => {
      stdin.once('data', function(data) {
        res(data.toString().trim());
      });
    });
}

module.exports = prompt