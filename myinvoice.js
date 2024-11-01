// var :
let itemTotal = document.querySelectorAll('.itemTotal');

const invoiceTotal = document.getElementById('invoiceTotal');

// tbody :
const invoiceTable = document.getElementById('invoiceTable').getElementsByTagName('tbody')[0];

let tr = invoiceTable.querySelectorAll('tr');


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

// // add tr in table :
// function addNewItem(){
//   invoiceTable.innerHTML += `
//      <tr>
//                 <td>Article 3</td>
//                 <td><input type="number" value="3" class="quantity" min="0"></td>
//                 <td><input type="number" value="7.5" class="unitPrice" min="0" step="0.01"></td>
//                 <td class="itemTotal">22.50</td>
//             </tr>
//   `;

// };



