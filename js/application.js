var getPrice = function () {
    var price = parseFloat($('#price').val());
    console.log(price);
    return price;
}

var getProduct = function () {
    var product = $('#product').val();
    console.log(product);
    return product;
}

$(document).ready(function () {
    $("#createButton").on('click', function() {
        price = getPrice();
        product = getProduct();

        var checkoutElement = '<div class="col-xs-12 d-flex justify-content-between border-bottom mt-2"> <p class="w-50 me-5">' + product + '</p>' +
        '<p class="me-5">$' + price + '</p>' +
        '<div class="me-5"><label for="quantity"><strong>QTY</strong></label><input id="quantity" type ="number" value="1"><button class="cancelButton">Cancel</button></div>' +
        '<p id="itemTotal" class="me-5">$' + price + '</p></div>';

        $('#shopping-cart').prepend(checkoutElement);
    });
});