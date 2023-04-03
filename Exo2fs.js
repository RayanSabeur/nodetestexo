const fs = require('fs')


fs.readFile('students.txt', 'utf8', (err, data) => {
    
    let test = []
    if (err) {
      console.error(err);
      return;
    }

   const lines = data.split(/\r?\n/);
   console.log(lines)


  });

//synchrone

let st=[]

try {
    st = fs.readFileSync('students.txt', "utf-8" ).split(/\r?\n/)
    st = st.filter((data) => data != "")
} catch(err)
{
    console.log(err)
}


const elite = [
]

for (line of st){
    for(y of line.split(" ")){
        if (y > 17){
            elite.push(y)
        }
    }
}

console.log(elite)
let bestnote = 0
let best = ""
for (line of st){
    for(y of line.split(" ")){
        if (isNaN(y) === false && y > best){
            bestnote = parseInt(y)
            best = line
        }
    }
}

console.log(best)

const students = []

for (line of st) {
    const [note , name, adress] = line.split(" ")

    if(name === "Name") continue
    students.push({name, note, adress})
}

console.log(students)