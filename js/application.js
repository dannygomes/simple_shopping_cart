var getPrice = function () {
    var price = parseFloat($('#price').val());
    return price;
}

var getProduct = function () {
    var product = $('#product').val();
    return product;
}

var updatePrice = function () {
    var total = 0;
    $('.itemPrice').each(function (i, ele) {
        var price = parseFloat($(ele).text().substring(1)) * parseInt($(this).siblings('div').children('input').val());
        console.log($(this).closest('div'));
        $(this).siblings('.itemTotal').html('$' + price);
        total = total + price;
    });

    $('#finalPrice').html(total);
}

$(document).ready(function () {
    $("#createButton").on('click', function() {
        price = getPrice();
        product = getProduct();

        var checkoutElement = '<div class="col-12 d-flex justify-content-between border-bottom mt-2"> <strong class="w-50 me-5">' + product + '</strong>' +
        '<p class="itemPrice price me-5">$' + price + '</p>' +
        '<div class="me-5"><label class="me-2" for="quantity-' + product + '"><strong>QTY</strong></label><input id="quantity-' + product + '" class="amount" type ="number" value="1"><button class="cancelButton">Cancel</button></div>' +
        '<p class="itemTotal price" class="me-5">$' + price + '</p></div>';

        $('#shopping-cart').prepend(checkoutElement);
        $('.price').css("width", "5%");
        $('#product').val("");
        $('#price').val("");

        updatePrice();
    });

    $(document).on('click', '.cancelButton', function () {
        $(this).closest(".col-12").remove();
        updatePrice();
    });

    var timeout;
    $(document).on('input', '.amount', function() {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            updatePrice();
        }, 1000);
    });
});