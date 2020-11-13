const productsContainer = $("#productContainer")

$.get("http://localhost:5500/products")
    .then(function(response) {
        console.log(response)
        return response
    })
    .then(function(data){
        const categories = []
        const products = data

        products.forEach(product => {
            if(categories.indexOf(product.categorie) === -1){
                categories.push(product.categorie);
            }
        });
        
        categories.forEach(categorie =>{
            let divCategorie = $("<div></div>");
            let titreCategorie = $("<h2></h2>").addClass("brown-text text-darken-4").text(categorie).appendTo(divCategorie);
            let iconCategorie = $("<i></i>").text("arrow_drop_up").addClass("large material-icons").appendTo(titreCategorie);
            let rowDiv = $("<div></div>").addClass("card-list").attr("id", categorie.replaceAll(" ", "")).appendTo(divCategorie)
            titreCategorie.on("click", function(){
                rowDiv.toggle("slow")
                iconCategorie.text(iconCategorie.text() == "arrow_drop_up" ? "arrow_drop_down" : "arrow_drop_up");
            })

            productsContainer.append(titreCategorie);
            productsContainer.append(rowDiv);
        });

        products.forEach(product => {
            let divCategorie = $("#"+product.categorie.replaceAll(" ", ""))
            let cardDiv = $("<div></div>").addClass("card small").attr("onclick","window.location='product.html?id="+ product.id + "';").appendTo(divCategorie);
            let cardImgDiv = $("<div></div>").addClass("card-image").appendTo(cardDiv);
            let cardImg = $("<img>").attr("src", product.img).appendTo(cardImgDiv);
            let cardTitle = $("<span></span>").addClass("card-title brown-text text-darken-4").text(product.name).appendTo(cardImgDiv);
            let cardContent = $("<div></div>").addClass("card-content brown-text text-darken-4").appendTo(cardDiv);
            let quantityText = $("<p></p>").text("Quantité : " + product.quantity).appendTo(cardContent);
            let dateText = $("<p></p>").text("Date : " + product.date).appendTo(cardContent);
            let livraisonText = $("<p></p>").text(product.livraison ? "Livraison disponnible" : "Livraison indisponnible").appendTo(cardContent);
            let prixText = $("<p></p>").text("Prix : " + product.prix + "€").appendTo(cardContent);
        });
    })
