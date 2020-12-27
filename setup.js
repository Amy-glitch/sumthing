let builds =
{

   factory: {
       res: ['stone','steel'],
       resAmm: [50,25],
       symbol:'<span style="color:orange; font-weight:bolder">F</span>',
       product: ['androidPopulation'],
       productAmm:[1],
       productMod:[10]

    },

    mine: {
        res: ['wood'],
        resAmm: [50],
        symbol: '<span style="color:purple;">M</span>',
        product: ['steel','stone'],
        productAmm:[1,1],
        productMod:[10,5]
    },

     
    plantation: {
        res: ['sapling'],
        resAmm: [10],
        symbol: '<span style="color:limegreen; font-weight:bolder">O</span>',
        product: ['wood','sapling'],
        productAmm:[1,1],
        productMod:[5,2]
     },
 

    farm:{
        res: ['seed'],
        resAmm: [10],
        symbol: '<span style="color:limegreen; font-weight:bolder">=</span>',
        product: ['food','seed'],
        productAmm:[1,1],
        productMod:[2,2]


    },

    storage:{
        res: ['wood'],
        resAmm: [20],
        symbol: '<span style="color:brown; font-weight:bolder">S</span>',
        product: ['storage'],
        productAmm:[],
        productMod:[]


    },

    housing:{
        res: ['wood', 'stone','iron'],
        resAmm: [10,10,10],
        symbol: '<span style="color:blue; font-weight:bolder">#</span>',
        product: ['housing'],
        productAmm:[],
        productMod:[]


    },




     null: {
        res: [],
        resAmm: [],
        symbol: '.',
        product: [],
        productAmm:[],
        productMod:[]
     }
 







}