$('#btn-login').click(function () {
    $('#modal-login').modal('show');
});
var validater = $('#login-form').validate({
    rules: {
        'email': {
            required: true,
            email: true
        },
        'password': {
            required: true,
            minlength: 2,
            maxlength: 15
        }
    },
    messages: {
        'email': {
            required: 'Vui lòng email của bạn.',
            email: 'Vui lòng nhập email đúng định dạng'
        },
        'password': {
            required: 'Vui lòng nhập password.',
            minlength: 'Password quá ngắn, vui lòng nhập ít nhất {0} ký tự',
            maxlength: 'Password quá dài, vui lòng nhập nhiều nhất {0} ký tự',
        }
    },
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
                alert('Đăng nhập thành công');
                $('#modal-login').modal('hide');

            },
            error: function (jqXHR, textStatus, error) {
                console.log('error');
                console.log(Object.keys(jqXHR.responseJSON.error));
                // if (Object.keys(jqXHR.responseJSON.error).length > 0) {
                //     //$('#summary').text(please fix Object.keys(jqXHR.responseJSON.error).length below!);
                //     validater.showErrors(jqXHR.responseJSON.error);
                // }
                alert('Đăng nhập không thành công');
            }
        });
        return false;
    }
});