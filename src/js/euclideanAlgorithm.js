(function ( $ ) {
 
    function EuclideanAlgorithm(element, op){
		this.element = element;

		this.a = op.a || 75;
		this.b = op.b || 21;

		this.quotientSymbol = op.quotientSymbol || 'q';
		this.remainderSymbol = op.remainderSymbol || 'r';
		
		this.qs;
		this.rs;
		this.ds;

		this.__buildUI();
	}
	$.extend(EuclideanAlgorithm, {
		METHOD_ALIAS: {
		}
	})
	EuclideanAlgorithm.prototype = {
		__buildUI: function(){
			this.element.empty();
			this.__calcParams(this.a, this.b);
			
			var qs = this.qs.slice(0);
				qs.splice(0, 0, this.quotientSymbol, "");
			var rs = this.rs.slice(0);
				rs.splice(0, 0, this.remainderSymbol);
			var ds = this.ds.slice(0);
				ds.splice(0,0, "");

			var rows = [qs, ds, rs];

			var length = Math.max(qs.length, rs.length, ds.length) + 1;
			for(var i = 0; i < rows.length; i++){
				var l = rows[i].length;
				var filler = new Array(length - l).fill("");
				rows[i].push.apply(rows[i], filler); 
			}


			var $table = $('<table class="euclidAlgorithm">');
			for(var i = 0; i < rows.length; i++){
				var $tr = $('<tr>');
				for(var j = 0; j < rows[i].length; j++){
					console.log(rows[i][j]);
					$tr.append('<td>' + rows[i][j] + '</td>');
				}
				console.log($tr);
				$table.append($tr);
				console.log($table);
			}
			this.element.append($table);
		},
		__calcParams: function(a, b){
		    this.qs = [];
		    this.rs = [];
		    this.ds = [];
		    while (b != 0){
		      q = Math.floor(a / b);
		      r = a % b;
		      this.ds.push(a);
		      this.rs.push(r);
		      this.qs.push(q);

		      a = b
		      b = r;
		    }

		    this.ds.push(a);
		},
		show: function(value){
			if(value)
				this.element.removeClass("hidden");
			else
				this.element.addClass("hidden");
		}
	}

 	//jquery plugin definition
 	var dataID = "ea.id";
 	$.fn.euclideanAlgorithm = function (op){

 		if(typeof op === 'string'){
 			var args = Array.prototype.slice.call(arguments, 1);

 			this.each(function(){
 				var ea = $(this).data(dataID); 
 				if(ea)
	 				if(op == "show"){
	 					ea.show(true);
	 				}
	 				else if(op == "hide"){
	 					ea.show(false);
	 				}
	 				else if(EuclideanAlgorithm.METHOD_ALIAS[op]){
	 					var method = EuclideanAlgorithm.METHOD_ALIAS[op];
	 					ea[method].apply(ea, args);
	 				}
	 				else if(typeof paletteColor[op] === 'function'){
	 					paletteColor[op].apply(paletteColor, args);
	 				}
	 		});

	 		return this;
 		}

 		return this.each(function () {
            var ea = new EuclideanAlgorithm($(this), op);
            $(this).data(dataID, ea);
        });
 	}

}( jQuery ));