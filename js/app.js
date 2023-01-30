//Jose Daniel Solano Manosalva
//Jose ivan soto Gratz
const ingresos=[
     new Ingreso('Salario', 2100.00),
     new Ingreso('Venta de coche',1500)

];
const egresos=[
     new Egreso('Renta departamento', 900),
     new Egreso('Ropa',400)
];

let cargarApp = ()=> {
	cargarCabecero();
	cargarIngresos();
	cargarEgresos();
}
let totalIngresos=()=>{
	let totalIngreso=0;
	for(let ingreso of ingresos){
		totalIngreso+=ingreso.valor;
	}
	return totalIngreso;

}
let cargarEgresos=()=>{
     let egresosHTML='';
     for (let egreso of egresos) {
          egresosHTML+=crearEgresoHTML(egreso);
     }
     document.getElementById('lista-egresos').innerHTML =egresosHTML;
}

let totalEgresos=()=>{
 	let totalEgreso = 0;
 	for(let egreso of egresos){
 		totalEgreso+=parseInt(egreso.valor);
 	}
 	return totalEgreso;
}
 let cargarCabecero=()=>{
     
 	let presupuesto=totalIngresos()-totalEgresos();
 	let porcentajeEgreso=totalEgresos()/totalIngresos();
 	document.getElementById('presupuesto').innerHTML=formatoMoneda(presupuesto)
 	document.getElementById('porcentaje').innerHTML=formatoPorcentaje(porcentajeEgreso)
 	document.getElementById('ingresos').innerHTML=totalIngresos();
 	document.getElementById('egresos').innerHTML=totalEgresos();

 }

 const formatoMoneda=(valor)=>{
 	return valor.toLocaleString('en-US',{style:'currency',currency:'USD',minimumFractionDigits:2});
 }
 const formatoPorcentaje=(valor)=>{
 	return valor.toLocaleString('en-US',{style:'percent',currency:'USD',minimumFractionDigits:2});
 }

 const cargarIngresos=()=>{
     let ingresosHTML='';
     for (let ingreso of ingresos) {
          ingresosHTML+=crearIngresoHTML(ingreso);
     }
     document.getElementById('lista-ingresos').innerHTML =ingresosHTML;
}

const  crearIngresoHTML=(ingreso)=>{
  let ingresoHTML =`
               <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${ingreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                         <div class="elemento_valor">+${formatoMoneda(ingreso.valor)}</div>
                         <div class="elemento_eliminar">
                              <button class="elemento_eliminar--btn">
                              <ion-icon name="close-circle-outline" onclick='eliminarIngreso(${ingreso.id})'></ion-icon></button>
                         </div>
                    </div>
               </div>
               `;
               return ingresoHTML;
}
const  crearEgresoHTML=(egreso)=>{
     let egresoHTML =`
                  <div class="elemento limpiarEstilos">
                       <div class="elemento_descripcion">${egreso.descripcion}</div>
                       <div class="derecha limpiarEstilos">
                            <div class="elemento_valor">-${formatoMoneda(egreso.valor)}</div>
                            <div class="elemento_porcentaje">${formatoPorcentaje((egreso.valor/totalIngresos()))}</div>
                            <div class="elemento_eliminar">
                                 <button class="elemento_eliminar--btn">
                                 <ion-icon name="close-circle-outline" onclick='eliminarEgreso(${egreso.id})'></ion-icon></button>
                            </div>
                       </div>
                  </div>
                  `;
     return egresoHTML;
   }
const eliminarIngreso=(id)=>{
     let indiceEliminar=ingresos.findIndex(ingreso=>ingreso.id==id);
     ingresos.splice(indiceEliminar,1);
     cargarCabecero();
     cargarIngresos();
}
const eliminarEgreso=(id)=>{
     let indiceEliminar=egresos.findIndex(egreso=>egreso.id==id);
     egresos.splice(indiceEliminar,1);
     cargarCabecero();
     cargarEgresos();
}
 //aqui validamos la agregacion de los datos
let agregarDato=()=>{
     let forma=document.forms['forma'];
     let tipo=forma['tipo'];
     let descripcion=forma['descripcion'];
     let valor=forma['valor'];   
     //validamos que no venga vacio
     if(descripcion.value.trim()===""|| descripcion.value == null){
          alert("El texto esta vacio");
     }else if(valor.value==''|| valor.value == null){
          alert("No puede estar el valor vacio");
     }else{
     if(descripcion.value!==''&& valor.value !==''){
          if(tipo.value==='ingreso'){
               ingresos.push(new Ingreso(descripcion.value,+valor.value));
               cargarCabecero();
               cargarIngresos();   
          }
          else if(tipo.value==='egreso'){
               egresos.push(new Egreso(descripcion.value, valor.value));
               console.log(egresos)
               cargarCabecero();
               cargarEgresos();
          }
     }
}
}
