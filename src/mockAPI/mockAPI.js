const data=[
    {
        id:1,
        title:"Fuel the fire",
        price:5500,
        img:"https://m.media-amazon.com/images/I/4165SnbMAjL.jpg",
        detail:"Segundo publicado en la serie addicted to you",
        stock:5,
        category:"BestSeller"
    },
    {
        id:2,
        title:"November 9",
        price:5500,
        img:"https://3.bp.blogspot.com/-qLPGPSxG5jc/VsrPe-Eo-rI/AAAAAAAAGUc/Wcy_dIU1yR8/s1600/25111004.jpg",
        detail:"Publicado por Collen Hover",
        stock:5,
        category:"Preventa"
    },
    {
        id:3,
        title:"It Ends with Us",
        price:3500,
        img:"https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4711/9781471156267.jpg",
        detail:"Publicado por Colleen Hover",
        stock:5,
        category:"BestSeller"
    },
    {
        id:4,
        title:"Twisted Lies",
        price:1500,
        img:"https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3494/9780349434285.jpg",
        detail:"Publicado por Ana Huang",
        stock:5,
        category:"NuevosLanzamiento"
    }

]

export function getLibros(){
    return new Promise((resolve) => {
        resolve(data)
    })
}

export function getBookById(idParams){
    return new Promise((resolve) => {
        /*Busca el  datos del libro segun el Id que le envia*/
        let bookChoice = data.find((item) => {
            return item.id === Number(idParams)
        });
        resolve(bookChoice)    
    });
}

export function getBookByCategory(category){
    return new Promise((resolve) => {
        let bookFilter = data.filter(item => item.category === category);
        resolve(bookFilter);
    });

}