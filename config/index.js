var errordefined = {
        "validationSchema": {
            "signup": {
                "name": { in: "body",
                    notEmpty: {
                        errorMessage: 'name field is require & cannot be blank.'
                    }
                },
                "email": { in: "body",
                    notEmpty: {
                        errorMessage: 'email field is require & cannot be blank.'
                    },
                    isEmail: {
                        errorMessage: 'email given should be valid.'
                    }
                },
                "mobile": { in: "body",
                    notEmpty: {
                        errorMessage: 'mobile field is require & cannot be blank.'
                    }
                },
                "password": { in: "body",
                    notEmpty: {
                        errorMessage: 'password field is require & cannot be blank.'
                    }
                },

            },
            "login": {
                "email": { in: "body",
                    notEmpty: {
                        errorMessage: 'email field is require & cannot be blank.'
                    },
                    isEmail: {
                        errorMessage: 'email given should be valid.'
                    }
                },
                "password": { in: "body",
                    notEmpty: {
                        errorMessage: 'password field is require & cannot be blank.'
                    }
                },
            },
}
}



        // checkSystemErrors : function(err) {
        //     return err instanceof TypeError ||
        //         err instanceof SyntaxError ||
        //         err instanceof EvalError ||
        //         err instanceof RangeError ||
        //         err instanceof ReferenceError;
        // }



    var defaultResult = {
        "status": false,
        "message": "Something Bad Happened. Please contact system administrator."
    };
module.exports=errordefined;
