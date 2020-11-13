let searchParams = new URLSearchParams(window.location.search)
if(searchParams.has('id')){
    let id = parseInt(searchParams.get('id'))
    $.ajax({
        type:'POST',
        url : "http://localhost:5500/product/"+id,
        dataType : "JSON"
    }).then(function(response) {
        console.log(response)
        return response
    }).then(function (product){
        console.log(product)
        let productTitle = $("#productTitle");
        let productSubTitle = $("#productSubTitle");
        let productImg = $("#productImg");
        let divProductInfo = $("#productInfo");
        let updateButton = $("#updateButton");

        productTitle.text(product.name)
        productSubTitle.text("(" + product.categorie + ")")
        productImg.attr("src", product.img);
        updateButton.attr("onclick","window.location='updateProduct.html?id="+ product.id + "';")

        let quantity = $("<p></p>").text('Quantité : '+ product.quantity).appendTo(divProductInfo)
        let date = $("<p></p>").text('Date : '+ product.date).appendTo(divProductInfo)
        let livraison = $("<p></p>").text(product.livraison ? "Livraison disponnible" : "Livraison indisponnible").appendTo(divProductInfo)
        let prix = $("<p></p>").text('Prix : '+ product.prix + "€").appendTo(divProductInfo)
    })

} 