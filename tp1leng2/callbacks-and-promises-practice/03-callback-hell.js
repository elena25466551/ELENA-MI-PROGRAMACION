const empleados = [
    {
        id: 1,
        nombre: 'Juan'
    },
    {
        id: 2,
        nombre: 'Pedro'
    },
    {
        id: 3,
        nombre: 'Ana'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    },
    {
        id: 3,
        salario: 3000
    }
];


const getEmpleado = (id, callback) => {
    const empleado = empleados.find(empleado => empleado.id === id)?.nombre;

    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`El empleado con id ${id} no existe`);
    }
};

const getSalario = (id, callback) => {
    const salario = salarios.find(salario => salario.id === id)?.salario;

    if (salario) {
        callback(null, salario);
    } else {
        callback(`El salario con id ${id} no existe`);
    }
};

const id = 10;

getEmpleado(id, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    return console.log(empleado.nombre);
});


getSalario(id, (err, salario) => {
    if (err) {
        return console.log(err);
    }
    console.log(salario);
});


const mensaje = null

if(mensaje){
    console.log(true);
} else{
    console.log(false);
}