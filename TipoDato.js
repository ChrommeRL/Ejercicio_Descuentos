var precio = 250000;
var descuento = 77;

console.log ("El precio del producto es "+ precio)
console.log ("El descuento del producto es "+ descuento)

if(descuento < 0)
{
 console.log ("Los datos ingresados son invalidos");} 
 if(descuento > 100)
 {
  console.log ("Los datos ingresados son invalidos");} 
  
if (descuento > 0 && descuento < 100 )
{
var descuento1= 100-descuento;
var operaciondescuento = descuento1/100;
var preciofinal = operaciondescuento*precio;
console.log ("El precio final con descuento es "+ preciofinal)
}