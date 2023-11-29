import jsPDF from "jspdf"

interface Informacion{
    id: any
    nombres: any 
    apellidos: any 
    email: any 
    telefono: any 
    whatsapp: any 
    direccion: any
    marca: any
    modelo: any
    cilindrada: any
    tipo: any
    placa: any 
    color: any
    fecha: any
    anticipo: any 
    kilometraje: any 
    combustible:any 
    presupuesto: any
    concepto:any; 
    observaciones:any;
}

export const pdfGenerator = async({id, nombres, apellidos, email, telefono, whatsapp, direccion,marca, modelo, cilindrada, tipo, placa, color, fecha,anticipo, kilometraje, combustible, presupuesto, concepto, observaciones}: Informacion) => {

    const ancho = 21.59;
    const marginX = 3;
    const marginY = 2.54;
    const dentroDeMargenesX = ancho - marginX * 2;


    const pdf = new jsPDF("portrait","cm", "letter", true)

    await pdf.addImage("/img/Logo_Moto-modified.png", "PNG", ancho/2 - 1.25, marginY , 2.5, 2.55)

    pdf.setFont("Helvetica", "bold");
    pdf.setTextColor("#e76f51");
    pdf.setFontSize(16);

    pdf.text("Taller de Motos Engels", ancho/2, marginY-0.5,{align: "center"});

    pdf.line(marginX, marginY + 2.7, ancho-marginX, marginY + 2.7, "f");

    pdf.setTextColor("#212529");

    pdf.setFontSize(12);

    pdf.text("DATOS DEL CLIENTE", marginX, marginY + 3.1 , {align: "left"});
    pdf.text(`Nombre del Cliente: ${nombres} ${apellidos}`, marginX, marginY + 3.6, {align: "left"});
    pdf.text(`Direccion: ${direccion}`, marginX, marginY + 4.1, {align: "left"});
    pdf.text(`Telefono: ${telefono}`, marginX, marginY + 4.6, {align: "left"});
    pdf.text(`WhatsApp: ${whatsapp}`, marginX, marginY + 5.1, {align: "left"});
    pdf.text(`Correo: ${email}`, marginX, marginY + 5.6, {align: "left"});

    pdf.line(marginX, marginY + 6, ancho-marginX, marginY + 6, "f");

    pdf.setTextColor("#212529");

    pdf.setFontSize(12);

    pdf.text("DATOS DE LA MOTO", marginX, marginY + 6.6, {align: "left"});
    pdf.text(`Marca: ${marca}`, marginX, marginY + 7.1, {align: "left"});
    pdf.text(`Modelo: ${modelo}`, marginX, marginY + 7.6, {align: "left"});
    pdf.text(`Cilindrada: ${cilindrada}`, marginX, marginY + 8.1, {align: "left"});
    pdf.text(`Color: ${color}`, marginX, marginY + 8.6, {align: "left"});
    pdf.text(`Tipo: ${tipo}`, marginX, marginY + 9.1, {align: "left"});
    pdf.text(`Placa: ${placa}`, marginX, marginY + 9.6, {align: "left"});

    pdf.line(marginX, marginY + 10, ancho-marginX, marginY + 10, "f");

    pdf.setTextColor("#212529");

    pdf.setFontSize(12);

    pdf.text("DATOS DEL SERVICIO", marginX, marginY + 10.6, {align: "left"});
    pdf.text(`Fecha del servicio: ${fecha}`, marginX, marginY+11.1, {align: "left"});
    pdf.text(`Anticipo: ${anticipo}`, marginX, marginY+ 11.6, {align: "left"});
    pdf.text(`Kilometraje: ${kilometraje}`, marginX, marginY + 12.1, {align: "left"});
    pdf.text(`Combustible: ${combustible}`, marginX, marginY + 12.6, {align: "left"});
    pdf.text(`Presupuesto: ${presupuesto}`, marginX, marginY + 13.1, {align: "left"});
    pdf.text(`Concepto: ${concepto}`, marginX, marginY + 13.6, {align: "left"});
    pdf.text(`Observaciones: ${observaciones}`, marginX, marginY + 14.1 ,{align: "left"});

    await pdf.addImage("/img/Vector_Moto-removebg-preview.png", "PNG", ancho/2 - 5, marginY + 15,10,10 )

    pdf.save(`${id}`)
}