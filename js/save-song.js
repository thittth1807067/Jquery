$('#register-form').validate({
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
        //alert(JSON.stringify(senderObject));
        $.ajax({
            type: "POST",
            url: CREATE_SONG_API,
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(senderObject),
            headers: {'authorization': 'Basic ' + localStorage.getItem('token')},
            success: function (data, textStatus, jqXHR) {
                console.log('success');
                alert('dang ki thanh cong');
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('error');
            }
        });
        return false;
    }
});

