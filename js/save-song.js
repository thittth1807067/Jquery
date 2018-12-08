$('#btn-creatsong').click(function () {
    $('#modal-creatsong').modal('show');
});
var validater = $('#song-form').validate({
    submitHandler: function (form,event) {
        event.preventDefault();
        var senderObject = {
            name: $(form["name"]).val(),
            singer: $(form["singer"]).val(),
            description: $(form["description"]).val(),
            author: $(form["author"]).val(),
            thumbnail: $(form["thumbnail"]).val(),
            link: $(form["link"]).val(),
        };
        $.ajax({
            type: "POST",
            url: CREATE_SONG_API,
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(senderObject),
            headers: { 'authorization': 'Basic ' + localStorage.getItem('token')},
            success: function (data, textStatus, jqXHR) {
                alert('Tải lên thành công');
                console.log('success');
            },
            error: function (jqXHR, textStatus, error) {
                console.log('error');
                console.log(Object.keys(jqXHR.responseJSON.error));
                if (Object.keys(jqXHR.responseJSON.error).length > 0) {
                    //$('#summary').text(please fix Object.keys(jqXHR.responseJSON.error).length below!);
                    validater.showErrors(jqXHR.responseJSON.error);
                }
            }
        });
        return false;
    }
});


