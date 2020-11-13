$(document).ready(function(){
    $('.datepicker').datepicker();
});

let form = $('form');

$.get("http://localhost:5500/products")
    .then(function(response) {
        return response
    })
    .then(function(data){
        const products = data
        const categories = [];
        const categoriSelect = $("#categorieSelect");

        products.forEach(product => {
            if(categories.indexOf(product.categorie) === -1){
                categories.push(product.categorie);
                let categorieOpt = $("<option></option>").attr("value", product.categorie).text(product.categorie).appendTo(categoriSelect);
            }
        });

        categorieOpt = $("<option></option>").attr("value", "Autre").text("Autre").appendTo(categoriSelect);
        categoriSelect.formSelect();
    })

$("#message-confirmation").hide()
$("#message-error").hide()

form.on("submit", function(e){
    e.preventDefault();
    let product = {
         name : $("#product_name").val(),
         quantity : $("#quantity").val(),
         img : $("#img_url").val(),
         date : $("#date").val(),
         livraison :$("#livraison").is(":checked"),
         categorie :$("#categorieSelect").val(),
         prix :$("#price").val()
    }
    
    let isValid = true;
    $.each(product, function(k,v){
        if(v === ""){
            alert(k + " is empty");
            isValid = false;
        }
        console.log(v)
    })

    if(isValid){
        $.ajax({
            type:"POST",
            url : "http://localhost:5500/add-product",
            data : JSON.stringify(product),
            dataType : "json"
        })
        form.get(0).reset();
        $("#message-confirmation").show()
        $("#message-error").hide()
    } else {
        $("#message-confirmation").hide()
        $("#message-error").show()
    }
})