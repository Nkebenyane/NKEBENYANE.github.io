function genPDF() {
    //     var doc = new jsPDF();

    //     var specialElementHandlers = {
    //         '#DontPrintPdf' : function(element, render) {return true;}
    //     };

    //     doc.fromHTML($('#body').get(0),20,20,{
    //         'width': 500,
    //         'elementHandlers': specialElementHandlers
    //     });
    //     doc.save('Maipato Nkebenyane.pdf')
    console.log('hello i am trying to print')


    var doc = new jsPDF();
    var specialElementHandlers = {
        '#DontPrintPdf': function (element, renderer) {
            return true;
        }
    };

    $('#cmd').click(function () {
        doc.fromHTML($('#body').html(), 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        });
        doc.save('Maipato Nkebenyane CV.pdf');
    });
}