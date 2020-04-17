var n = readInt()
var m = readInt()
var line = ''
var ans = 0
var highest = []
var students = []
while((line = read_line()) != ''){
    var grades = line.split(' ')
    for(var i in grades){
        grades[i] = parseInt(grades[i])
        if(!highest[i] || grades[i] >= highest[i]) {
            highest[i] = grades[i]
        }
    }
    students.push(grades)
}
for(var student of students) {
    for(var i in student) {
        if(student[i] >= highest[i]){
            ans++
            break
        }
    }
}
print(ans)