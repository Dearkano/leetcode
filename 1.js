var obj = {
    a: 1,
    v: []
}

Object.keys(obj).forEach(a => {
    console.log(a)
    console.log(obj[a])
})

Object.getOwnPropertyNames(obj).forEach(a=>console.log(a))