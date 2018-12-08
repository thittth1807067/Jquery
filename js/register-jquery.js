$('#btn-register').click(function () {
    $('#modal-register').modal('show');
});
var validater = $('#register-form').validate({
    rules: {
        'firstName': {
            required: true,
            minlength: 2,
            maxlength: 15
        },
        'lastName': {
            required: true,
            minlength: 2,
            maxlength: 15
        },
        'email': {
            required: true,
            email: true
        },
        'password': {
            required: true,
            minlength: 2,
            maxlength: 15
        },
        'confirm-password': {
            equalTo: '[name="password"]'
        }
    },
    messages: {
        'firstName': {
            required: 'Vui lòng nhập tên của bạn.',
            minlength: 'Tên quá ngắn, vui lòng nhập ít nhất {0} ký tự',
            maxlength: 'Tên quá dài, vui lòng nhập nhiều nhất {0} ký tự',
        },
        'lastName': {
            required: 'Vui lòng nhập họ của bạn.',
            minlength: 'Họ quá ngắn, vui lòng nhập ít nhất {0} ký tự',
            maxlength: 'Họ quá dài, vui lòng nhập nhiều nhất {0} ký tự',
        },
        'email': {
            required: 'Vui lòng email của bạn.',
            email: 'Vui lòng nhập email đúng định dạng'
        },
        'password': {
            required: 'Vui lòng nhập password.',
            minlength: 'Password quá ngắn, vui lòng nhập ít nhất {0} ký tự',
            maxlength: 'Password quá dài, vui lòng nhập nhiều nhất {0} ký tự',
        },
        'confirm-password': {
            equalTo: 'Password và confirm không giống nhau.'
        }
    },
    submitHandler: function (form,event) {
        event.preventDefault();
        var senderObject = {
            firstName: $(form["firstName"]).val(),
            lastName: $(form["lastName"]).val(),
            password: $(form["password"]).val(),
            address: $(form["address"]).val(),
            phone: $(form["phone"]).val(),
            gender: $(form["gender"]).val(),
            email: $(form["email"]).val(),
            avatar: $(form["avatar"]).val(),
            birthday: formatDate($(form["birthday"]).val())
        };
        $.ajax({
            type: "POST",
            url: REGISTER_API,
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(senderObject),
            success: function () {
                console.log('success');
                alert('Đăng kí thành công');
            },
            error: function (jqXHR, textStatus, error) {
                console.log('error');
                console.log(Object.keys(jqXHR.responseJSON.error));
                // if (Object.keys(jqXHR.responseJSON.error).length > 0) {
                //     //$('#summary').text(please fix ${Object.keys(jqXHR.responseJSON.error).length} below!);
                //     validater.showErrors(jqXHR.responseJSON.error);
                // }
            }
        });
        return false;
    }
});
function formatDate(date) {
    var d = new Date(date),
        month = (d.getMonth() + 1),
        day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
}