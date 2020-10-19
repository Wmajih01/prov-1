const object1 = {
    email: "hello@gmail.com"
}
const object2 = {
    email: "bye@gmail.com"
}

function isSameUser(obj, obj2) {
    return obj === obj2
}
//i det här fallet returnar isSameUser false:
console.log(isSameUser(object1, object2))