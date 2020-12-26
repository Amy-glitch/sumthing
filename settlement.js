class Settlement
{

constructor()
{
    this.map = new Array();
    this.tick =0;
    for(let r = 0; r < 10; r++)
    {
        this.map.push(new Array(10));
        for(let c = 0; c <  this.map[r].length; c++)
        {
            this.map[r][c] = 
            {symbol:'.'  , type:'null'};
            if(r % 5 == 0){  this.map[r][c] = {symbol:'.', type:'null'};}
        }
    }

    this.res = {
        humanPopulation: 30,
        androidPopulation: 15,
        steel:0,
        stone:0,
        wood:0,
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
        cons += key +':' + this.res[key] +'<br>';
     }
    return cons;
}

updateTick()
{
    this.tick += 1;

    for(let r = 0; r < 10; r++)
    {
        for(let c = 0; c <  this.map[r].length; c++)
        {
        if(this.map[r][c]['type'] == 'mine')
        {
            if (this.tick % 10 ==0){this.res['steel']+= 1;}
            if (this.tick % 5 ==0){this.res['stone']+= 1;}  
        }

        if(this.map[r][c]['type'] == 'plantation')
        {
            if (this.tick % 5 ==0){this.res['wood']+= 1;}  
            if (this.tick % 10 ==0){this.res['sapling']+= 1;}  
            
        }

        if(this.map[r][c]['type'] == 'factory')
        {
           
            if (this.tick % 10 ==0){this.res['androidPopulation']+= 1;}  
            
        }

        
        
        }
    }

}


build(command)
{
    let str = command.substring(6,inp.value.length);
    let spc = str.indexOf(' ');
   
    let coord = str.substring(spc,str.length);
    let type = str.substring(0,spc);
    let x = coord.substring(0,2).charCodeAt(1)-97+1;
    let y = coord.substring(2,coord.length);

    if (type=='mine'){
        
        if ( this.res['wood'] >= 50 ){
        this.map[x-1][y-1]['symbol']='<span style="color:purple;">M</span>';
        this.map[x-1][y-1]['type']='mine';
        this.res['wood']-=50;
        return '<span style="color:red;">50</span> wood used!';} else {return 'You need <span style="color:red;">50</span> wood to build a mine'}
    }


    if (type=='plantation'){
        
        if ( this.res['sapling'] >= 10 ){
        this.map[x-1][y-1]['symbol']='<span style="color:limegreen; font-weight:bolder">O</span>';
        this.map[x-1][y-1]['type']='plantation';
        this.res['sapling']-=10;
        return '<span style="color:red;">10</span> sappling used!';} else {return 'You need <span style="color:red;">10</span> sapplings to build a plantation'}
    }

    if (type=='factory'){
        
        if ( this.res['stone'] >= 50 && this.res['steel'] >= 25){
        this.map[x-1][y-1]['symbol']='<span style="color:orange; font-weight:bolder">&blk34;</span>';
        this.map[x-1][y-1]['type']='factory';
        this.res['stone']-=50;
        this.res['steel']-=50;
        return '<span style="color:red;">50</span> stone used! <br> <span style="color:red;">25</span> steel used!';} else {return 'You need <span style="color:red;">50</span> stone and <span style="color:red;">25</span> steel to build a factory'}
    }




}


}