// var :
let itemTotal = document.querySelectorAll('.itemTotal');

let invoiceTotal = document.getElementById('invoiceTotal');

// tbody :
const invoiceTable = document.getElementById('invoiceTable').getElementsByTagName('tbody')[0];

let tr = invoiceTable.querySelectorAll('tr');





  tr = invoiceTable.querySelectorAll('tr');

  // item total :
  for (let i = 0; i < tr.length; i++) {
  
  
    let inputs = tr[i].querySelectorAll("input");
  
    addEventListener('input', function(){
  
      let tt = inputs[0].value * inputs[1].value;
    
      itemTotal[i].textContent = tt.toFixed(2);
  
      // total :
      let totalFacture = 0;
      for (let index = 0; index < tr.length; index++) {
        totalFacture = totalFacture + Number(itemTotal[index].textContent);
        invoiceTotal.textContent = totalFacture.toFixed(2);
      }
      
    });
  
  };



// add here :
const btnAdd = document.querySelector(".add-button");
var count = 4;
btnAdd.addEventListener('click', function(){
  invoiceTable.innerHTML += `
  <tr>
  <td>Article ${count}</td>
  <td><input type="number" value="1" class="quantity" min="0"></td>
  <td><input type="number" value="5" class="unitPrice" min="0" step="0.01"></td>
  <td class="itemTotal">10.00</td>
  </tr>
  
  `;
  count++;


  tr = invoiceTable.querySelectorAll('tr');
  itemTotal = document.querySelectorAll('.itemTotal');

    // item total :
    for (let i = 0; i < tr.length; i++) {
  
  
      let inputs = tr[i].querySelectorAll("input");
    
      addEventListener('input', function(){
    
        let tt = inputs[0].value * inputs[1].value;
      
        itemTotal[i].textContent = tt.toFixed(2);
    
        // total :
        let totalFacture = 0;
        for (let index = 0; index < tr.length; index++) {
          totalFacture = totalFacture + Number(itemTotal[index].textContent);
          invoiceTotal.textContent = totalFacture.toFixed(2);
        }
        
      });
    
    };

  
  
});









