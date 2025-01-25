let names = ["pooja", "Chaand", "john", "jakie", "sarah", "alex"]

let students = names.filter(name => name != "Chaand")
                    .map(name => name.toUpperCase())
                    .sort()
                    .reverse()

console.log(students)