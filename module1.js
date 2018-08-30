import skills from './skills.js'

let name='方方'
let age=18
let sayHello=function () {
    alert(`你好,我是${name},我今年${age},我会的技能${skills}`)
}
export {sayHello,name,age}