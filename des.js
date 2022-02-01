function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
  }
  
  function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }

  function cupones(precio,cupon){
    let arr=["10%","20%","30%"];
    for (let i = 0;  i < arr.length; i++) {
      const element = arr[i];
      if (cupon=="10%") {
        const desc=(precio*10)/100;
        console.log("El descuento es: " + desc);
      }
    }
  }