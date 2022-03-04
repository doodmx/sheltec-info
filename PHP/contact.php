<?php

//<form method="POST" name="myemailform" action="PHP/contact.php">

if(!isset($_POST['submit']))
{
    echo "error; ¡Tienes que subir el formulario!";
    //echo "<script>window.location = '../manufactura-pcb.html' </script>";
}

$postData = $_POST;
$nombre          = $_POST['NombreForm'];
$mail_visitante  = $_POST['CorreoForm'];
$phone           = $_POST['PhoneForm'];
$capas           = $_POST['CapasForm'];
$largo           = $_POST['LargoForm'];
$ancho           = $_POST['AnchoForm'];
$unidades        = $_POST['UnidadesForm'];
$cantidad        = $_POST['CantidadForm'];
$color           = $_POST['ColorForm'];
$acabado         = $_POST['FinishForm'];
$espesor         = $_POST['EspesorForm'];
$peso            = $_POST['PesoForm'];
$stencil         = $_POST['StencilForm'];
$config_especial = $_POST['inputSpecific'];

//Revisar si hay campos vacíos
if(empty($nombre) || empty($mail_visitante) || empty($phone) 
    || empty($capas) || empty($largo) || empty($ancho)  
    || empty($unidades) || empty($cantidad) || empty($color) 
    || empty($acabado) || empty($espesor) || empty($peso) 
    || empty($stencil)){
    echo "Por favor llene todos los campos";
    exit;
}


$email_from = 'isaacplanv@gmail.com';
$email_subject = "Nueva requisición de PCB Sheltec";
$email_body = "El usuario $nombre ha hecho la siguiente solicitud de PCB:\n".
              "Datos de contacto:\n". 
              "Correo electrónico: $mail_visitante\n". 
              "Teléfono: $phone\n\n". 
              "Capas: $capas\n". 
              "Medidas: $largo x $ancho $unidades\n". 
              "Cantidad: $cantidad\n". 
              "Color: $color\n". 
              "Acabado: $acabado\n". 
              "Espesor: $espesor\n". 
              "Peso: $peso\n". 
              "Stencil: $stencil\n". 
              "Configuraciones especiales: $config_especial\n". 
              
$to = "isaacplanv@gmail.com";
$headers = "From: $email_from \r\n";
$headers = "Content-type: text/html\r\n";


//Send email
mail($to,$email_subject,$email_body,$headers);


?>


<html>
    <p>
        <?php echo $msg; ?>
    </p>
</html>



//Redirect to thank you page

              

/* //Uploaded File info
$uploaded_file_name =
    basename($_FILES['inputFile']['name']);

//get the file extension of the file
$uploaded_file_type =
    substr($uploaded_file_name,
    strrpos($uploaded_file_name, '.') + 1);

//size of the file
$uploaded_file_size =
    $_FILES["inputFile"]["size"]/1024;//size in KBs
 */



