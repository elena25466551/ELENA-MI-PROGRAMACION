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

const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        const empleado = empleados.find(empleado => empleado.id === id)?.nombre;
        (empleado)
            ? resolve(empleado)
            : reject(`El empleado con id ${id} no existe`);

    });
};

const getSalario = (id) => {

    return new Promise((resolve, reject) => {
        const empleado = empleados.find(salario => salario.id === id)?.salario;
        (empleado)
            ? resolve(empleado)
            : reject(`El empleado con id ${id} no posee salario`);

    });
};


const getInfoUsuario = async () => {
    return 'Hola Mundo';
}

getInfoUsuario().then(console.log);