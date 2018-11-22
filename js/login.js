var validater = $('#login-form').validate({
    submitHandler: function (form,event) {
        event.preventDefault();
        var senderObject = {
            password: $(form["password"]).val(),
            email: $(form["email"]).val(),
        };
        $.ajax({
            type: "POST",
            url: LOGIN_API,
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(senderObject),
            success: function (data, textStatus, jqXHR) {
                console.log('success');
                localStorage.setItem('token', data.token);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('error');
                // if (Object.keys(jqXHR.responseJSON.error).length > 0) {
                //     $('#summary').text(please fix ${Object.keys(jqXHR.responseJSON.error).length} below!);
                //     validater.showErrors(jqXHR.responseJSON.error);
                // }
            }
        });
        return false;
    }
});