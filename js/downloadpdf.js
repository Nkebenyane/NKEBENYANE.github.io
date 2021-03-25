function genPDF(){
    var doc = new jsPDF();

    var specialElementHandlers = {
        '#DontPrintPdf' : function(element, render) {return true}
    };

    doc.fromHTML($('#body').get(0),20,20,{
        'width': 500,
        'elementHandlers': specialElementHandlers
    });
    setTimeout(function () {
        doc.save('Maipato Nkebenyane.pdf');
    }, 0)
}