class Valid2 extends Valid{
    constructor(email, password, isValid, error_message) {
        super(email, password, isValid);
        this.error_message = error_message;

    }
    validate() {
        this.error_message = '';
        const res =  super.validate();
        if (this.isValid == false) {
            this.error_message = 'password error';
            return this.isValid;
        }
        else if (this.isValid == true) {
            if (this.email == '') {
                this.isValid = '';
                this.error_message = 'email error';
                return this.isValid;
            }
        }
        return res;
    }
}