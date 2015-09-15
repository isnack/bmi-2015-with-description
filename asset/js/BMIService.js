var BMIService = {

	getIndex: function(weight, height, callback) {
		$.ajax({
		  url: 'services/bmi.action.php',
		  data: {'weight': weight, 'height': height},
		  success: function(result) {
		  	callback(parseFloat(result));
		  },
		  error: function() {
		  	callback(null);
		  }
		});
	},
	
	getDescription: function (index) {
		var result=null;
     if(index <16){
   result="Baixo peso muito grave "+index+" kg/m²";
    }else if(index >=16 && index <=16.99){
      result="Baixo peso grave "+index+" kg/m²";
    }else if(index >=17.00 && index<=18.49){
      result="Baixo peso "+index+" kg/m²";
    }else if(index >=18.50 && index <=24.99){
      result="Peso normal "+index+" kg/m²";
    }else if(index >=25.00 && index <=29.99){
      result="Sobrepeso "+index+" kg/m²";
    }else if(index >=30 && index <=34.99){
      result="Obesidade grau I  "+index+" kg/m²";
    }else if(index >=35.00 && index <=39.99){
      result="Obesidade grau II "+index+" kg/m²";
    }else if(index >=40.00){
      result="Obesidade grau III (obesidade mórbida) "+index+" kg/m²";
    };
    
    return result;
	},
    
    getColorDescription:function(index){
    
    var result=null;
    if(index<16){
          result ="red";   
    }else if(index >16 && index<=18.49){
        result ="yellow";
    }else if(index >=18.50 && index <=24.99){
      result="green";
    }else if(index >=25.00 && index <=29.99){
      result="#F7AA04";
    }else if(index >=30 && index <=34.99){
      result="#BC8203";
    }else if(index >=35.00 && index <=39.99){
      result="#E03E0D";
    }else if(index >=40.00){
      result="red";
    };
    return result;
    }
	
};