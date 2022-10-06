fetch('PROVINCIAS.JSON')   //consulta archivo
.then(respuesta=>respuesta.json())//convierte json  a objeto javascrpt
.then(datos=>{
    datos.provincias
    for(i=0; i<datos.provincias.length;i++){
        document.getElementById('provincias').innerHTML+=
     "<option value="+datos.provincias[i].id +">"+datos.provincias[i].nombre+"</option>"

    }
})

fetch('DEPARTAMENTO.JSON')
.then(respuestadep=>respuestadep.json())
.then(datosdep=>{
    console.log(datosdep)
    datosdep.departamentos
    for(i=0;i<datosdep.departamentos.length;i++){
        document.getElementById('departamentos').innerHTML+=
        "<option value="+datosdep.departamentos[i].id+">"+datosdep.departamentos[i].nombre+"</option>"
    }

})

fetch('LOCALIDAD.JSON')
.then(respuestaloca=>respuestaloca.json())
.then(datosloca=>{
    console.log(datosloca)
    datosloca.localidades
    for(i=0;i<datosloca.localidades.length;i++){
        document.getElementById('localidades').innerHTML+=
        "<option value="+datosloca.localidades[i].id+">"+datosloca.localidades[i].nombre+"</option>"
    }

})