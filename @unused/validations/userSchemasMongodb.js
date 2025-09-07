export const createUserValidationSchema = {
    username:{
        islength: {
            options: {min: 3, max: 20},
            errorMessage: "Username must be between 3 and 20 characters."
        },
        matches: {
            options: /^[a-zA-Z0-9_]+$/,
            errorMessage: "Username can only contain letters, numbers, and underscores."
        },
        notEmpty: {
            errorMessage: "Username is required."
        },
        istring:{
            errorMessage: "Username must be a string."
        },
    },
    email: {
        isEmail: {
            errorMessage: "Must be a valid email address."
        },
        notEmpty: {
            errorMessage: "Email is required."
        },
        istring: {
            errorMessage: "Email must be a string."
        }
    },
    password: {
        isLength: {
            options: {min: 6, max: 100},
            errorMessage: "Password must be between 6 and 100 characters."
        },
        notEmpty: {
            errorMessage: "Password is required."
        },
        isString: {
            errorMessage: "Password must be a string."
        },
        // matches: {
        //     options: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
        //     errorMessage: "Password must contain at least one uppercase letter, one lowercase letter, and one number."
        // }
    },
};