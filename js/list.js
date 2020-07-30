function getValue() 
        {
            var give = document.getElementById("give");
            var take = document.getElementById("take");
            var sum_give = document.getElementById("sum_give");
            
                switch (take.value) {
                    // BTC to XXX
                    case 'BTC_ETH':
                        sum_take.value=sum_give.value*0.0119;
                        document.getElementById("course").textContent="1 BTC = 0.0119 ETH";
                        break;
                    case 'BTC_EUR':
                        sum_take.value=sum_give.value*6.994;
                        document.getElementById("course").textContent="1 BTC = 6.994 EUR";
                        break;
                    case 'BTC_UAH':
                        sum_take.value=sum_give.value*2378;
                        document.getElementById("course").textContent="1 BTC = 2378 UAH";
                        break;
                    // EUT to XXX
                    case 'ETH_BTC':
                        sum_take.value=sum_give.value*83.927;
                        document.getElementById("course").textContent="1 ETH = 83.927 BTC";
                        break;
                    case 'ETH_EUR':
                        sum_take.value=sum_give.value*587;
                        document.getElementById("course").textContent="1 ETH = 587 EUR";
                        break;
                    case 'ETH_UAH':
                        sum_take.value=sum_give.value*199580;
                        document.getElementById("course").textContent="1 ETH = 199580 UAH";
                        break;
                    // EUR to XXX
                    case 'EUR_BTC':
                        sum_take.value=sum_give.value*0.142;
                        document.getElementById("course").textContent="1 EUR = 0.142 BTC";
                        break;
                    case 'EUR_ETH':
                        sum_take.value=sum_give.value*0.0017;
                        document.getElementById("course").textContent="1 EUR = 0.0017 ETH";
                        break;
                    case 'EUR_UAH':
                        sum_take.value=sum_give.value*340;
                        document.getElementById("course").textContent="1 EUR = 340 UAH";
                        break; 
                    // UAH to XXX
                    case 'UAH_BTC':
                        sum_take.value=sum_give.value*0.00042;
                        document.getElementById("course").textContent="1 UAH = 0.00042 BTC";
                        break;
                    case 'UAH_ETH':
                        sum_take.value=sum_give.value*0.0000050105;
                        document.getElementById("course").textContent="1 UAH = 0.0000050105 ETH";
                        break;
                    case 'UAH_EUR':
                        sum_take.value=sum_give.value*0.00294;
                        document.getElementById("course").textContent="1 UAH = 0.00294 EUR";
                        break;
                      // default:
                      //   alert( "Нет таких значений" );
                }

        }

function getValueBack() 
        {
            var give = document.getElementById("give");
            var take = document.getElementById("take");
            var sum_take = document.getElementById("sum_take");
            
                switch (take.value) {
                    // BTC to XXX
                    case 'BTC_ETH':
                        sum_give.value=sum_take.value/0.0119;
                        break;
                    case 'BTC_EUR':
                        sum_give.value=sum_take.value/6.994;
                        break;
                    case 'BTC_UAH':
                        sum_give.value=sum_take.value/2378;
                        break;
                    // EUT to XXX
                    case 'ETH_BTC':
                        sum_give.value=sum_take.value/83.927;
                        break;
                    case 'ETH_EUR':
                        sum_give.value=sum_take.value/587;
                        break;
                    case 'ETH_UAH':
                        sum_give.value=sum_take.value/199580;
                        break;
                    // EUR to XXX
                    case 'EUR_BTC':
                        sum_give.value=sum_take.value/0.142;
                        break;
                    case 'EUR_ETH':
                        sum_give.value=sum_take.value/0.0017;
                        break;
                    case 'EUR_UAH':
                        sum_give.value=sum_take.value/340;
                        break; 
                    // UAH to XXX
                    case 'UAH_BTC':
                        sum_give.value=sum_take.value/0.00042;
                        break;
                    case 'UAH_ETH':
                        sum_give.value=sum_take.value/0.0000050105;
                        break;
                    case 'UAH_EUR':
                        sum_give.value=sum_take.value/0.00294;
                        break;
                      // default:
                      //   alert( "Нет таких значений" );
                }

        }
