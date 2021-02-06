const student = [
    {id: 55, name: 'Dipjol'},
    {id: 33, name: 'Manna'},
    {id: 44, name: 'Sabnur'}
];
// for(let i=0; i < student.length; i++){
//     const perStudent = student[i].name;
//     console.log(perStudent);
// }
// const names = student.map(sName => sName.name);
const names = student.filter(sId => sId.id > 33);
console.log(names);