//variables
let inputs = document.getElementsByName('input');
//inputs : [tit,price,tax,ads,discuont,count,category,serch]
let finalprice = document.getElementById('finalprice');
let result =document.getElementById('result');
let createbtn=document.getElementById('create');
let mode='create';
let deleteal= document.querySelector('.delete'); 
let search = document.getElementById('search');
let modesear='title';
let dark= document.getElementById('dark');
let btns= document.getElementsByName('submit');
let mood='dark';
let body = document.getElementById('body');
let btntitil= document.getElementById('titlepro');
let btncotigry= document.getElementById('catigorypro');
let titleofpag= document.getElementsByName('title');
let ths=document.querySelectorAll('.dark'); 
let tds=document.getElementsByName('td');
function verifie() {
    let s=0;
    for (let index = 0; index <products.length; index++) {
        s+= +products[index].Count;   
    }
    if (products.length>0) {
        if (mood==='dark') {
            deleteal.innerHTML=`<input type="submit" name="submit" value="Delete All (${s})" onclick="deleteAll()" id="deleteAll" style="width: 100%; ">`;
        } else {
            deleteal.innerHTML=`<input type="submit" name="submit" value="Delete All (${s})" onclick="deleteAll()" id="deleteAll" style="width: 100%; background:rgb(247, 0, 193);">`;
        }
        
    }else{
        deleteal.innerHTML='';
    }
}
//get total
function getTotal() {
    let s=0;
    for (let index = 1; index < 4; index++) {
        if (inputs[index].value!='' && inputs[1].value!='' ) {
            s=parseFloat(inputs[index].value)+s;
        }
    }
    s=s- +inputs[4].value;
    if (s>0) {
        finalprice.style.background='green';
    }else{
        finalprice.style.background='red';
    }
    finalprice.innerHTML=s;
    
}
//create function
let products;
if(localStorage.product!=null){
    products = JSON.parse(localStorage.product);
    onload = showdata(products),verifie();
}else{
    products = [];
}
onload= lightordark();
function createproduct(){
    if (mode=='create') {
        let info= {
            Title : inputs[0].value ,
            Price: inputs[1].value,
            Taxes: inputs[2].value,
            Ads: inputs[3].value,
            Discount: inputs[4].value,
            Total:  finalprice.innerHTML,
            Count : inputs[5].value, 
            Category: inputs[6].value,
        } ;
        if(inputs[0].value!='' && inputs[1].value!='' && inputs[5].value!='' && inputs[6].value!=''){
            products.push(info);
            localStorage.setItem('product', JSON.stringify(products));
             
        }
    } else {
        mode= 'create';
        products[id].Title=inputs[0].value;
        products[id].Price=inputs[1].value;
        products[id].Taxes=inputs[2].value;
        products[id].Ads=inputs[3].value;
        products[id].Discount=inputs[4].value;
        products[id].Total=finalprice.innerHTML;
        products[id].Count=inputs[5].value;
        products[id].Category=inputs[6].value;
        createbtn.value='Create';
        localStorage.product=JSON.stringify(products);
    }
    showdata(products); 
    cleardata(); 
    verifie();
}
function showdata(arr){
    let table='';
    for (let index = 0; index < arr.length; index++) {
        if (table==null){
            table=`<tr>
            <td name="td">${index}</td>
            <td name="td">${arr[index].Title}</td>
            <td name="td">${arr[index].Price}</td>
            <td name="td">${arr[index].Taxes}</td>
            <td name="td">${arr[index].Ads}</td>
            <td name="td">${arr[index].Discount}</td>
            <td name="td">${arr[index].Count}</td>
            <td name="td">${arr[index].Total}</td>
            <td name="td">${arr[index].Category}</td>
            <td><input type="submit" name="submit" onclick="updateproduct(${index})" value="Update"></td>
            <td><input type="submit" name="submit" onclick="deleteproduct(${index})" value="Delete"></td>    
            </tr>
            `;
            if (mood==='light') {
                table=`<tr>
                <td style="color:#222" name="td">${index}</td>
                <td style="color:#222" name="td">${arr[index].Title}</td>
                <td style="color:#222" name="td">${arr[index].Price}</td>
                <td style="color:#222" name="td">${arr[index].Taxes}</td>
                <td style="color:#222" name="td">${arr[index].Ads}</td>
                <td style="color:#222" name="td">${arr[index].Discount}</td>
                <td style="color:#222" name="td">${arr[index].Count}</td>
                <td style="color:#222" name="td">${arr[index].Total}</td>
                <td style="color:#222" name="td">${arr[index].Category}</td>
                <td><input type="submit" name="submit" onclick="updateproduct(${index})" style=background:rgb(247, 0, 193);" value="Update"></td>
                <td><input type="submit" name="submit" onclick="deleteproduct(${index})" style=background:rgb(247, 0, 193);" value="Delete"></td>    
            </tr>
            `;
            } 
        }else{
            table+=`<tr>
            <td name="td">${index}</td>
            <td name="td">${arr[index].Title}</td>
            <td name="td">${arr[index].Price}</td>
            <td name="td">${arr[index].Taxes}</td>
            <td name="td">${arr[index].Ads}</td>
            <td name="td">${arr[index].Discount}</td>
            <td name="td">${arr[index].Count}</td>
            <td name="td">${arr[index].Total}</td>
            <td name="td">${arr[index].Category}</td>
            <td><input type="submit" name="submit" onclick="updateproduct(${index})" value="Update"></td>
            <td><input type="submit" name="submit" onclick="deleteproduct(${index})" value="Delete"></td>    
            </tr>
            `;
            if (mood==='light') {
                table=`<tr>
                <td style="color:#222" name="td">${index}</td>
                <td style="color:#222" name="td">${arr[index].Title}</td>
                <td style="color:#222" name="td">${arr[index].Price}</td>
                <td style="color:#222" name="td">${arr[index].Taxes}</td>
                <td style="color:#222" name="td">${arr[index].Ads}</td>
                <td style="color:#222" name="td">${arr[index].Discount}</td>
                <td style="color:#222" name="td">${arr[index].Count}</td>
                <td style="color:#222" name="td">${arr[index].Total}</td>
                <td style="color:#222" name="td">${arr[index].Category}</td>
                <td><input type="submit" name="submit" onclick="updateproduct(${index})" style="background:rgb(247, 0, 193);" value="Update"></td>
                <td><input type="submit" name="submit" onclick="deleteproduct(${index})" style="background:rgb(247, 0, 193);" value="Delete"></td>    
            </tr>
            `;
            } 
        }
        result.innerHTML=table;
    }
    
}
//clear functon
function cleardata(){
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].value='';
    }
    finalprice.innerHTML='';
    finalprice.style.background='red';
}
//remove functionsfinalprice.innerHTML
function deleteproduct(id) {
    products.splice(id ,1);
    localStorage.product=JSON.stringify(products);
    products = JSON.parse(localStorage.product);
    showdata(products);
}

function deleteAll() {
    products= [];
    localStorage.product=JSON.stringify(products);
    result.innerHTML='';
    verifie();
}
//update
let id;
function updateproduct(Id) {
    id=Id;
    inputs[0].value =  products[id].Title;
    inputs[1].value =  products[id].Price;
    inputs[2].value =  products[id].Taxes;
    inputs[3].value =  products[id].Ads;
    inputs[4].value =  products[id].Discount;
    finalprice.innerHTML=products[id].Total;
    inputs[5].value =  products[id].Count;
    inputs[6].value =  products[id].Category;
    mode= 'update';
    createbtn.value='Update';
    scroll({
        top: 0,
        behavior:'smooth'
    });
}
//search 
function searchelement(type) {
    search.focus();
    if (type=='title') {
        search.placeholder='Search by title';
        modesear='title';
    } else {
        search.placeholder='Search by category';
        modesear='category';
    }
}
search.onkeyup= function(params) {
    let searchreus=[];
    if (modesear==='title') {
        for (let index = 0; index < products.length; index++) {
            if (products[index].Title.includes(search.value)===true) {
                searchreus.push(products[index]);
            } 
        }       
    } else {
        for (let index = 0; index < products.length; index++) {
            if (products[index].Category.includes(search.value)===true) {
                searchreus.push(products[index]);
            } 
        }
    }
    showdata(searchreus);
}
//dark mode and light mode

function Light(){
    dark.style.background='#777';
    body.style.background='#eef';
    createbtn.style.background= 'rgb(247, 0, 193)';
    btncotigry.style.background= 'rgb(247, 0, 193)';
    btntitil.style.background= 'rgb(247, 0, 193)';
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].style.background='#aaa';
        inputs[index].style.color='#000';
    }
    for (let i = 0; i< btns.length; i++) {
       btns[i].style.background= 'rgb(247, 0, 193)';
    }
    for (let index = 0; index < titleofpag.length; index++) {
        titleofpag[index].style.color='#222';
    }
    for (let index = 0; index < ths.length; index++) {
        ths[index].style.color='#222';
    }
    for (let index = 0; index < tds.length; index++) {
        tds[index].style.color='#222';
    }
}
function Dark() {
    dark.style.background='#0e000f';
    body.style.background='#333';
    createbtn.style.background= 'rgb(117, 0, 133)';
    btncotigry.style.background= 'rgb(117, 0, 133)';
    btntitil.style.background= 'rgb(117, 0, 133)';
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].style.background='#000';
        inputs[index].style.color='#fff';
    }
    for (let i = 0; i< btns.length; i++) {
       btns[i].style.background= 'rgb(117, 0, 133)';
    }
    for (let index = 0; index < titleofpag.length; index++) {
        titleofpag[index].style.color='rgb(245, 245, 245)';
    }
    for (let index = 0; index < ths.length; index++) {
        ths[index].style.color='rgb(255, 235, 205)';
    }
    for (let index = 0; index < tds.length; index++) {
        tds[index].style.color='rgb(255, 235, 205)';
    }
}
function lightordark() {
    if (mood==='dark') {
        Light();
        dark.innerHTML='Dark Mode';
        mood='light';
    }else{
        Dark();
        dark.innerHTML='Light Mode';
        mood= 'dark';
    }
}
//the orm for the backend