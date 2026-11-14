// Lista temporal: se vacía cuando se recarga la página.
const empleados = [];

function Empleado(dni, nombre, apellido, nacimiento, cargo) {
  this.dni = dni;
  this.nombre = nombre;
  this.apellido = apellido;
  this.nacimiento = nacimiento;
  this.cargo = cargo;
}

function agregarEmpleado() {
  const dni = document.getElementById("txtDni").value.trim();
  const nombre = document.getElementById("txtNombre").value.trim();
  const apellido = document.getElementById("txtApellido").value.trim();
  const nacimiento = document.getElementById("txtNacimiento").value.trim();
  const cargo = document.getElementById("txtCargo").value.trim();

  // Comprobamos los campos antes de guardar un empleado.
  if (!/^\d{8}$/.test(dni) || !nombre || !apellido || !cargo || !/^\d{4}$/.test(nacimiento)) {
    alert("Introduce un DNI de 8 cifras, un año de 4 cifras y completa los demás campos.");
    return;
  }
  const anio = Number(nacimiento);
  const actual = new Date().getFullYear();
  if (anio < 1900 || anio > actual) {
    alert("Introduce un año de nacimiento válido.");
    return;
  }
  if (empleados.some((empleado) => empleado.dni === dni)) {
    alert("Ya existe un empleado con ese DNI.");
    return;
  }

  empleados.push(new Empleado(dni, nombre, apellido, nacimiento, cargo));
  alert("Empleado agregado.");
  limpiarCampos();
}

function mostrarEmpleados() {
  if (empleados.length === 0) {
    alert("Todavía no hay empleados registrados.");
    return;
  }

  // Convertimos cada objeto en un bloque de texto legible.
  const listado = empleados.map((empleado) =>
    Object.entries(empleado)
      .map(([campo, valor]) => campo.toUpperCase() + ": " + valor)
      .join(", ")
  ).join("\n\n");
  alert(listado);
}

function limpiarCampos() {
  ["txtDni", "txtNombre", "txtApellido", "txtNacimiento", "txtCargo"].forEach((id) => {
    document.getElementById(id).value = "";
  });
}
