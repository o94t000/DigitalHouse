let perfil = "invitado"

switch(perfil){
    case 'administrador','ADMINISTRADOR','Administrador':
        console.log("Usted tiene todos los privilegios de uso del sistema")
        break;
    case 'asistente','ASISTENTE','Administrador':
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos")
        break;
    case 'invitado','INVITADO','Invitado':
        console.log("Usted sólo tiene permisos de consultar datos")
        break;
    default:
        console.log("Debe especificar un perfil válido")
}