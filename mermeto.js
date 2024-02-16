let container=document.getElementById("container")
let image_=document.getElementById("image")
let title=document.getElementById("title")
let shirts=document.getElementById("shirts")
let hoodies=document.getElementById("Hoodies")
let shirtsImage=document.getElementById("shirtsImage")
let hoodieimage=document.getElementById("HoodiesImage")







let url="https://products-api-2ttf.onrender.com/api/products/"
let options={
    method:"GET"
}

fetch(url,options).then(function(response){
    return response.json()

}).then(function(json){
    let stringifyObject=json
    let image_1=stringifyObject[0].image
    image_.src=image_1
    title.textContent=stringifyObject[0].title
    shirts.textContent=stringifyObject[1].title
    shirtsImage.src=stringifyObject[1].image
    hoodies.textContent=stringifyObject[2].title
    hoodieimage.src=stringifyObject[2].image
})
