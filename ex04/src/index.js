function compareDifferentValues(m,n){
    if(m===n){
        return "Equal";
    }
    else{
        return "Not equal"
    }
}

compareDifferentValues(8,"8");
compareDifferentValues("8", 8);
compareDifferentValues('8',8);
compareDifferentValues("8","8");
compareDifferentValues(8,8);