function home() {
	window.location.href="../html/Budega.html";
}

function login(){
	var usuario = document.getElementById("nick").value;
	var pass = document.getElementById("passw").value;
	for(var i=0; i<users.length;i++){
		var userv=users[i];
		if(userv["user"]==usuario){
		if(userv["password"]==pass){
			window.location.href="../html/caixa.html";
			return;
		}else{
			document.getElementById("passw").style.border="solid red 3px";
			return;
		}
	}
}
alert("User não registrado");
}

function view(){
	var tipo = document.getElementById("passw");
	if(tipo.type == "text"){
		tipo.type = "password"
	}else{
		tipo.type = "text"
	}
}

document.addEventListener("keypress", function(e) {
  if(e.key === 'Enter') {
  
      var btn = document.querySelector("#enter");
    
    btn.click();
  
  }
})

function procuraProdInt(){
	var verif=document.getElementById("prodR").value;
	for(var i=0; i<products.length;i++){
		var prod=products[i];
		if(prod["serial"]==verif){
			return i;
		}else if(prod["name"]==verif){
			return i;
		}
		
	}
	alert("esse produto não existe")
	return;
}
function adicionar_serial(){
	var serial=document.getElementById("serial_produto").value
	var qnt=document.getElementById("qnt_produto").value
	for(var i=0; i<products.length;i++){
		var prod=products[i];
		if(prod["serial"]==serial){
			var precoParcial=prod["price"]*qnt;
			adicionarLinha(prod, qnt, precoParcial);
			precoTotal=precoParcial+precoTotal;
			document.getElementById("valor_final").innerHTML=precoTotal;
			return;
		}
	}
	alert("produto não encontrado")
}

function finalizar(){
	alert("Venda finalizada!");
	window.location.reload();
}
function procuraProdBoo(){
	var verif=document.getElementById("newProdSerial").value;
	for(var i=0; i<products.length;i++){
		var prod=products[i];
		if(prod["serial"]==verif){
			return true;
		}
	}
	return false;
}


function adicionarProd(){
	var verif=procuraProdBoo();
	if(verif==false){
		var newName=document.getElementById("newProdName").value;
		var newPrice=document.getElementById("newProdPrice").value;
		var newSerial=document.getElementById("newProdSerial").value;
		if(newPrice>0){
			products.push({name:newName, price: newPrice, serial: newSerial })
		}else{
			alert("digite um preço válido")
			return;
		}
	}else{
		alert("esse produto já existe");
	}
}
function adicionarLinha(product, qnt, precoParcial){
tabela=document.getElementById("tabela");
novaLinha="<tr><td>"+product["serial"]+"</td> <td>"+product["name"]+"</td> <td>"+product["price"]+"</td> <td>"+qnt+"</td> <td>"+precoParcial+"</td> </tr>";
tabela.innerHTML=tabela.innerHTML+novaLinha;
}

function removerProd(){
	var i=procuraProdInt();
	if(i==null){
	}else{alert("Esse produto será removido: "+products[i].name)
	products=products.slice(i+1);
	}
}

var precoTotal=0;

function editarProduto(){
	var serial=document.getElementById("serial").value;
	for(var i=0; i<products.length;i++){
		var prod=products[i];
		if(prod["serial"]==serial){
			document.getElementById("edit").style.display="inline-block";
			document.getElementById("product").style.display="block";
			nameEdit.innerHTML="produto: "+prod["name"];
			priceEdit.innerHTML="preço: "+prod["price"];
			return i;
		}else{
			document.getElementById("edit").style.display="none";
			document.getElementById("product").style.display="none";
		}
		
	}
	alert("esse produto não existe")
	return ;
}
function editarNomeProduto(){
	var newName=document.getElementById("name").value;
	var i=editarProduto();
	if(i==null){

	}else{
	products[i].name=newName;
	nameEdit.innerHTML="produto: "+products[i].name;
}
}
function editarPrecoProduto(){
	var newPrice=document.getElementById("price").value;
	var i=editarProduto();
	if(i==null){

	}else{
	if(newPrice>0){
		products[i].price=newPrice;
		priceEdit.innerHTML="preço: "+products[i].price;
	}else{
		alert("digite um valor válido");
	}
}
}