const products = [
    {id:1, name:'Pomme', quantity:20, img:'https://media.lactualite.com/2011/06/une-pomme-par-jour.jpg', date:'31/10/2020', livraison:true, categorie:'Fruits et Legumes', prix:1},
    {id:2, name:'Poire', quantity:20, img:'https://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/poire/poire_new_346_346_filled.jpg', date:'31/10/2020', livraison:false, categorie:'Fruits et Legumes', prix:1},
    {id:3, name:'Banane', quantity:10, img:'https://media.houra.fr/ART-IMG-L/00/09/2050000350900-1.jpg', date:'31/10/2020', livraison:true, categorie:'Fruits et Legumes', prix:5},
    {id:4, name:'Avocat', quantity:6, img:'https://i-reg.unimedias.fr/sites/art-de-vivre/files/styles/large/public/avocat_th.jpg?auto=compress%2Cformat&crop=faces%2Cedges&cs=srgb&fit=crop&h=778&w=900', date:'31/10/2020', livraison:true, categorie:'Fruits et Legumes', prix:5},
    {id:5, name:'Tomate', quantity:20, img:'https://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/tomate/tomate_-_copie_346_346_filled.jpg', date:'31/10/2020', livraison:true, categorie:'Fruits et Legumes', prix:1},
    {id:6, name:'Pomme de terre', quantity:5, img:'https://www.academiedugout.fr/images/16349/1200-auto/pomme-de-terre_000.jpg?poix=50&poiy=50', date:'31/10/2020', livraison:true, categorie:'Fruits et Legumes', prix:2},
    {id:7, name:'Avoine', quantity:10, img:'https://www.femininbio.com/sites/femininbio.com/files/styles/article/public/styles/paysage/public/images/2017/04/o9vw7r0.png?itok=k3c2wAJy', date:'31/10/2020', livraison:false, categorie:'Céréales', prix:3},
    {id:8, name:'Blé', quantity:10, img:'https://sf1.viepratique.fr/wp-content/uploads/sites/5/2014/04/ble-ok-750x410.jpg', date:'31/10/2020', livraison:false, categorie:'Céréales', prix:1},
    {id:9, name:'Whisky', quantity:5, img:'https://www.whisky.fr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/8/m8314.jpg', date:'31/10/2020', livraison:false, categorie:'Boissons', prix:20},
    {id:10, name:'Vodka', quantity:5, img:'https://media-verticommnetwork1.netdna-ssl.com/wines/absolut-vodka-175l-825903_e.jpg', date:'31/10/2020', livraison:false, categorie:'Boissons', prix:10},
    {id:11, name:'Rhum', quantity:5, img:'https://www.cave-bruant.fr/5075-large_default/william-hinton-6-ans-brandy-cask-rhum-agricole-de-madere.jpg', date:'31/10/2020', livraison:false, categorie:'Boissons', prix:15},
    {id:12, name:'Jus de pomme', quantity:10, img:'https://www.lesfousdeterroirs.fr/storage/images/thumb/products_images/107/FC2od-Lw7dZ.jpeg/71bb846bb9617f965e9178438cbcd59e', date:'31/10/2020', livraison:false, categorie:'Boissons', prix:3},
    {id:13, name:'Jus de poire', quantity:10, img:'https://fr.rc-cdn.community.thermomix.com/recipeimage/9d9vtgih-83524-210397-cfcd2-3lvar3zg/9ee1bfd6-c0a4-4fd1-a648-232bded61903/main/jus-de-poire.jpg', date:'31/10/2020', livraison:false, categorie:'Boissons', prix:3},
    {id:14, name:'Jus d\'abricot', quantity:10, img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQHA61w0GmelYftoJKHJAoozecykrKbKz82ujvOc7aISX8YoaFmnQHTVQ5le9A&usqp=CAc', date:'31/10/2020', livraison:false, categorie:'Boissons', prix:4},
    {id:15, name:'Jus de banane', quantity:10, img:'https://www.fructidor.fr/image/news/normal/_19873.jpg', date:'31/10/2020', livraison:false, categorie:'Boissons', prix:4},
    {id:16, name:'Redbull', quantity:12, img:'https://www.monoprix.fr/assets/images/grocery/1774018/580x580.jpg?impolicy=High_Grocery', date:'31/10/2020', livraison:false, categorie:'Boissons', prix:5},
    {id:17, name:'Monster Energy', quantity:12, img:'https://media.houra.fr/ART-IMG-XL/02/23/5060335632302-1.jpg', date:'31/10/2020', livraison:false, categorie:'Boissons', prix:5},
    {id:18, name:'Boeuf', quantity:10, img:'https://images-ca-1-0-1-eu.s3-eu-west-1.amazonaws.com/photos/slide/951/techniques-boeuf-pxhere.jpg', date:'31/10/2020', livraison:false, categorie:'Viandes', prix:15},
    {id:19, name:'Porc', quantity:10, img:'https://i0.wp.com/ericpineau.fr/wp-content/uploads/2019/05/viande-de-porc.jpg?fit=702%2C336&ssl=1', date:'31/10/2020', livraison:false, categorie:'Viandes', prix:10},
    {id:20, name:'Volaille', quantity:10, img:'https://www.latabledeseleveurs.fr/boucherie/image/viande-volaille-filet-poulet-par-5.jpg', date:'31/10/2020', livraison:false, categorie:'Viandes', prix:10},
    {id:21, name:'Yaourt', quantity:20, img:'https://img.cuisineaz.com/660x660/2017-07-31/i131170-yaourt-au-thermomix.jpeg', date:'31/10/2020', livraison:false, categorie:'Rayon Frais', prix:5},
    {id:22, name:'Fromage Blanc', quantity:10, img:'https://static.lecomptoirlocal.fr/img/produits/dcb797be92df1c8614a9803c7fed17b2/large.jpg', date:'31/10/2020', livraison:false, categorie:'Rayon Frais', prix:2},
    {id:23, name:'Fromage', quantity:20, img:'https://i.f1g.fr/media/madame/orig/sites/default/files/img/2017/02/fromages-francais-aop-a-connaitre.jpg', date:'31/10/2020', livraison:false, categorie:'Rayon Frais', prix:8},
];

class Product {
    constructor(){
        this.products = products;
    }

    get getProducts(){
        return this.products;
    }

    getProduct(id){
        let product;
        products.forEach(p => {
            if(p.id == id){
                product = p
            }
        });
        return product
    }

    saveProduct(product){
        const id = this.products[this.products.length - 1].id + 1
        this.products.push({id: id, ...product})
        this.products = this.products;
    }

    updateProduct(product){
        let updated = false
        for(var p in products){
            if(products[p].id == product.id){
                products[p] = product
                updated = true;
            }
        }
        return updated
    }

    deleteProduct(id){
        let removed = false
        for(var p in products){
            if(products[p].id == id){
                products.splice(p,1);
                removed = true;
            }
        }
        return removed
    }
}

module.exports = new Product();