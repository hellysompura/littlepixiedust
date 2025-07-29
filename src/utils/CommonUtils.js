const validate = (fieldName, value) => {
    switch (fieldName) {
        case 'email':
            if (!value) return 'Email is required';
            if (!/^\S+@\S+\.\S+$/.test(value)) return 'Invalid email';
            break;
        case 'password':
            if (!value) return 'Password is required';
            if (value.length < 6) return 'Password must be at least 6 characters';
            break;
        default:
            return '';
    }
};

export { validate }