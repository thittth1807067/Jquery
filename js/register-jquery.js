

$('#register-form').validate({
    rules: {
        firstName: {
            required: true,
            minlength: 2,
            maxlength: 15,
        },
        lastName: {
            required: true,
            minlength: 2,
            maxlength: 15
        },
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 2,
            maxlength: 15
        },
        gender: {
            required: true,
        },
        address: {
            required: true,
        },
        avatar:{
            required:true,
        },
        'confirm-password': {
            equalTo: '[name="password"]'
        }
    },
    messages: {
        firstName: {
            required: 'Vui lòng nhập tên của bạn.',
            minlength: 'Tên quá ngắn, vui lòng nhập ít nhất {0} ký tự',
            maxlength: 'Tên quá dài, vui lòng nhập nhiều nhất {0} ký tự',
        },
        lastName: {
            required: 'Vui lòng nhập họ của bạn.',
            minlength: 'Họ quá ngắn, vui lòng nhập ít nhất {0} ký tự',
            maxlength: 'Họ quá dài, vui lòng nhập nhiều nhất {0} ký tự',
        },
        email: {
            required: 'Vui lòng email của bạn.',
            email: 'Vui lòng nhập email đúng định dạng'
        },
        password: {
            required: 'Vui lòng nhập password.',
            minlength: 'Password quá ngắn, vui lòng nhập ít nhất {0} ký tự',
            maxlength: 'Password quá dài, vui lòng nhập nhiều nhất {0} ký tự',
        },
        phone: {
            required: 'Vui lòng nhập số điện thoại của bạn.',
            minlength: 'số điện thoại không hợp lệ, vui lòng nhập ít nhất {0} ký tự',
            maxlength: 'số điện thoại không hợp lệ, vui lòng nhập nhiều nhất {0} ký tự',
        },
        gender: {
            required: 'Vui lòng chọn giới tính',
        },
        address: {
            required: 'Vui lòng nhập địa chỉ',
        },
        avatar:{
            required:'vui lòng nhập avatar',
        },
        'confirm-password': {
            equalTo: 'Password và confirm không giống nhao.'
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
        //alert(JSON.stringify(senderObject));
        $.ajax({
            type: "POST",
            url: REGISTER_API,
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(senderObject),
            success: function (data, textStatus, jqXHR) {
                console.log('success');
                console.log(data);
                console.log('-----');
                console.log(data.responseText);
                console.log('-----');
                console.log(textStatus);
                console.log('-----');
                console.log(jqXHR);
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
function formatDate(date) {
    var d = new Date (date),
        month = '' + (d.getMonth() +1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length <2) month = '0' + month;
    if (day.length <2) day = '0' + day;
    return [year , month, day].join('-');
}
