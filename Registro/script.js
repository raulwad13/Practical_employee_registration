let empleados = [];

function Empleado(dni, nombre, apellido, nacimiento, cargo) {
  this.dni = dni;
  this.nombre = nombre;
  this.apellido = apellido;
  this.nacimiento = nacimiento;
  this.cargo = cargo;
}

function agregarEmpleado() {
  let dni = document.getElementById("txtDni").value;
  let nombre = document.getElementById("txtNombre").value;
  let apellido = document.getElementById("txtApellido").value;
  let nacimiento = document.getElementById("txtNacimiento").value;
  let cargo = document.getElementById("txtCargo").value;

  let empleado = new Empleado(dni, nombre, apellido, nacimiento, cargo);

  empleados.push(empleado);

  alert("Empleado Agregado.");
  limpiarCampos();
};

function mostrarEmpleados() {
let listado= [];

for(empleado of empleados){
    for(let prop in empleado){
        listado = listado + prop.toUpperCase() + ": " + empleado [prop] + ","
    }
    listado = listado + "\n";
}
alert(listado);
    
};

function limpiarCampos() {
    document.getElementById("txtDni").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtNacimiento").value = "";
    document.getElementById("txtCargo").value = "";
};
