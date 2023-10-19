const container = document.getElementById("main-task22")

function writer() {
    let i = 1;
    const somewriter = document.write();
    while (i < 42) {
        document.open();
        document.write(somewriter);
        document.close();
        i++;
    }
}
writer();
