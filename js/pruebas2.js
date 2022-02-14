$(document).ready(function () {
    $('#select').click(function () {
        $('input[type="checkbox"]:checked').each(function () { // $(':checkbox:checked')
            document.body.append(this.value + ' '); // $(this).val()
        });
    });
});