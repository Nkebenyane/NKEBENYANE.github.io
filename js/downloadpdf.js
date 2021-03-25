function genPDF() {
    var doc = new jsPDF();

    var specialElementHandlers = {
        '#DontPrintPdf': function (element, render) { return true; }
    };

    var doc = new jsPDF();
    doc.fromHTML(document.getElementById("body"), function () {
        console.log("Callback");
        doc.save('Maipato Nkebenyane.pdf');
    });
}