function addMobile(){
    let name= mb_name.value
    let brand = mb_brand.value
    let display=mb_display.value
    let ram = mb_ram.value
    let processor = mb_pro.value
    let price = mb_price.value

    let mobile = {
        name,brand,display,ram,processor,price
    }

    if(name in localStorage){
        alert("already exist")
    }else{
        localStorage.setItem(mobile.name,JSON.stringify(mobile))
    }
}
function validateMobile(){
    let mobileName = mobName.value
    if(mobileName in localStorage){
        let mobileData = JSON.parse(localStorage.getItem(mobileName))
        console.log(mobileData);
        let html_data = `${mobileData.name} ${mobileData.price}`
        document.querySelector("#result").innerHTML=html_data
    }else{
        alert("NO")
    }
}