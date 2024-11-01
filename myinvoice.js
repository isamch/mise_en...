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

    // totalFacture = totalFacture + Number(itemTotal[i].textContent);

    // console.log(Number(itemTotal[i].textContent));    

    // invoiceTotal.textContent = totalFacture.toFixed(2);

    let totalFacture = 0;
    for (let index = 0; index < tr.length; index++) {

      totalFacture = totalFacture + Number(itemTotal[index].textContent);

      invoiceTotal.textContent = totalFacture.toFixed(2);
    }

  });

};

// total 





// add tr in table :


