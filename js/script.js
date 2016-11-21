$(function() {
    $('.plus-btn').on('click', function(e) {//debugger
        e.preventDefault();

        var $this = $(this),
            $input = $this.closest('div').siblings(),
            value = parseInt($input.val());
     
        if (value < 10) {
            value = value + 1;
        } else {
            value = 10;
        }
     
        $input.val(value);

        quantity_price($this);
    });

    $('.minus-btn').on('click', function(e) {
        e.preventDefault($this);

        var $this = $(this),
            $input = $this.closest('div').siblings(),
            value = parseInt($input.val());
     
        if (value > 1) {
            value = value - 1;
        } else {
            value = 0;
        }
     
      $input.val(value);
     
    });

    $('input').on('blur',function() {
        if( !$(this).val() || $(this).val() > 10 || $(this).val() < 0) {
            $(this).parent().addClass('warning');
        }
    });


    $('input').on('focus', function() {
        if ($(this).parent().hasClass('warning')) {
            $(this).parent().removeClass('warning');
        }
    });

    function quantity_price($this) {debugger

        var $price_product = $this.closest('.table-cell').siblings('.price-total'),
            $price = $this.closest('.table-cell').siblings('.price'),
            $input = $this.closest('div').siblings();

            var $total_products = parseInt($input.val()) * Number($price.html());

            $price_product.append($total_products);

    };
    
});
 

