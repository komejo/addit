(function ($) {
    $(document).ready(function() {

        $('#edit-addit-input1, #edit-addit-input2').keyup(function () {
            if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
                this.value = this.value.replace(/[^0-9\.]/g, '');
                if ( !$('.addit-warning').length  ) {
                    $(this).after(' <span class="addit-warning">Numbers only please!</span>');
                };
            } else {
                $('.addit-warning').fadeOut();
            }
        });

        $('#edit-addit-submit').click(function(event) {
            event.preventDefault();
            var addit_sum,
                input1_value = $('#edit-addit-input1').val(),
                input2_value = $('#edit-addit-input2').val();

            addit_sum = +input1_value + +input2_value;
            $('.addit-result').remove();
            $(this).after('<p class="addit-result">Sum: ' + addit_sum + '</p>')

        });

    });
}(jQuery));