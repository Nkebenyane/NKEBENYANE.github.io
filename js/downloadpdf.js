function genPDF(){
    // var doc = new jsPDF();

    // var specialElementHandlers = {
    //     '#DontPrintPdf' : function(element, render) {return true;}
    // };

    // doc.fromHTML($('#body').get(0),20,20,{
    //     'width': 500,
    //     'elementHandlers': specialElementHandlers
    // });
    // doc.save('Maipato Nkebenyane.pdf')

    html2canvas(document.body, {
        onrendered: function (canvas){
            var img = canvas.toDataURL();
            var doc = new jsPDF();
            doc.addImage(img, 'JPEG', 20,20);
            doc.save('Maipato Nkebenyane.pdf');
        }
    });
}