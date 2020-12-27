class Settlement
{

constructor()
{
    this.map = new Array();
    this.tick =0;
    this.storage = 100;
    this.housing =5;
    for(let r = 0; r < 10; r++)
    {
        this.map.push(new Array(10));
        for(let c = 0; c <  this.map[r].length; c++)
        {
            this.map[r][c] =   {
                res: [],
                resAmm: [],
                symbol: '.',
                product: [],
                productAmm:[],
                productMod:[],
                type:'null'
             }
         
        
        }
    }

    this.map[4][4]= builds['housing'];

    this.res = {
        humanPopulation: 2,
        androidPopulation: 5,
        steel:0,
        stone:0,
        wood:0,
        food:5000,
        seed:25,
        sapling:10,

    }
}

showMap()
{
    let cons ='';
    let line = '# 1 2 3 4 5 6 7 8 9 10';
    cons += line;

    for(let r = 0; r < 10; r++)
    {
         line =(r+10).toString(36)+' ';
        for(let c = 0; c < this.map[r].length; c++)
        {
           line += this.map[r][c]['symbol']+' ';
        }
    
        cons += '<br>'+line;
    }
    return cons;
}

showRes()
{
    let cons ='';
    for(let key in this.res){
        if (key =='humanPopulation'){
            cons += key +':' + this.res[key] +'/'+this.housing+'<br>';   
        } else{
        cons += key +':' + this.res[key] +'/'+this.storage+'<br>';}
     }
    return cons;
}

updateTick()
{
    this.tick += 1;
    this.s = 0;
    this.h =0;
    for(let r = 0; r < 10; r++)
    {
    for(let c = 0; c <  this.map[r].length; c++)
    {
         
        let bld = this.map[r][c];
      
                for (let i = 0; i < bld['product'].length;i++){
                    console.log('ek');
                    if (this.tick % bld['productMod'][i] ==0)
                    {
                        this.res[bld['product'][i]] += bld['productAmm'][i];
                    }
                }
                
                if ( this.map[r][c]['product'][0] == 'storage' ) {this.s += 1;}
                if ( this.map[r][c]['product'][0] == 'housing' ) {this.h += 1;}

    }
    }
if (this.tick % 20 ==0){this.res['humanPopulation'] += 1; alert('A baby has been born');}

this.storage = this.s * 50 + 100;
this.housing = this.h * 5;
console.log(this.housing);

if ( this.res['humanPopulation'] > this.housing)
{
    this.res['humanPopulation'] = this.housing;
    alert(this.res['humanPopulation']  - this.housing +'humans have died');
}




    if (lost == false){
    if (this.res['humanPopulation']*1 < this.res['food'])
    {
        this.res['food'] -= this.res['humanPopulation']*1;
    } else 
    {
        if (this.res['humanPopulation']  !=0){
        let diff = this.res['humanPopulation']-this.res['food'];
        this.res['humanPopulation'] -= diff;
        alert(diff+' humans have died of hunger');
        this.res['food'] =0; 
    
    }
   
if (this.res['humanPopulation']  ==0){
    alert('You have lost!');
    lost = true}
    location.reload();
}
}

this.checkStorage();


}


build(command)
{
    let str = command.substring(6,inp.value.length);
    let spc = str.indexOf(' ');
   
    let coord = str.substring(spc,str.length);
    let type = str.substring(0,spc);
    let x = coord.substring(0,2).charCodeAt(1)-97+1;
    let y = coord.substring(2,coord.length);

    for (let r = 0; r <  builds[type]["res"].length; r++){
        let res = builds[type]["res"][r];
        
        if (this.res[res] >=  builds[type]["resAmm"][r] )
        {
            this.map[x-1][y-1]=builds[type];
            this.res[res] -= builds[type]["resAmm"][r];
            return  builds[type]["resAmm"][r]+ res +'used!';

        }
    }
}

checkStorage()
{
    for(let key in this.res){
      this.res[key] = Math.min(this.res[key],this.storage);
     }
}


}