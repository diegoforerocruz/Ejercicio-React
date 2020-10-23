export default function validateForm(values) {
    const err = {};

    if(values.username.length === 0){
        err.username = "Length of username too short"
    }
    if(values.password !== values.confirmation){
        err.confirmation = "Confirmation password is not correct"
    }
    return err;
}