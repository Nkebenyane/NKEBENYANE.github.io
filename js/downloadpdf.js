function genPDF(){
    var doc = new jsPDF();

    var specialElementHandlers = {
        '#DontPrintPdf' : function(element, render) {return true;}
    };

    $('#body').click(function () {
        doc.fromHTML($('#body').html(), 15, 15, {
            'width': 100,
            'elementHandlers': specialElementHandlers
        });
        doc.save('Maipato Nkebenyane.pdf');
    });

    // doc.fromHTML($('#body').get(0),20,20,{
    //     'width': 500,
    //     'elementHandlers': specialElementHandlers
    // });
    // doc.save('Maipato Nkebenyane.pdf');
}