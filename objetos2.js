//Practicando recorrido de array objetos

const arrayObj = [
    {
        name: 'Joseph',
        edge: 24,
        favoriteFood: 'Pizza',
    },
    {
        name: 'Alicia',
        edge: 28,
        favoriteFood: 'Fried Chiken',
    },
    {
        name: 'Martha',
        edge: 22,
        favoriteFood: 'Tacos',
    },
];

for (let i = 0; i < arrayObj.length; i++) {
    console.log('Name:' + arrayObj[i].name);
    console.log('Edge:' + arrayObj[i].edge);
    console.log('Favorite Food: ' + arrayObj[i].favoriteFood);
}


//------------------//
console.log('--------------------')

//Recorriendo un obj con array
const objArray = {
    arrayName: 'Random name',
    arrayElements: ['A', 'B', 'C', 'D', 'E'],
};

objArray.arrayElements.forEach((Elemento) => {
    console.log(Elemento + '123');
});