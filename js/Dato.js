//Jose Daniel Solano Manosalva
//Jose ivan soto Gratz
class Dato{
	constructor(descripcion, valor){
		//this_descripcion y this_valor . les falta el punto en this/./_xxx
		this._descripcion=descripcion;
		this._valor=valor;
	}

	get descripcion(){
		return this._descripcion;
	}
	set descripcion(descripcion){
		 this._descripcion=descripcion;
	}
	get valor(){
		return this._valor;
	}
    set valor(valor){
    	this._valor=valor;
    }
	
}