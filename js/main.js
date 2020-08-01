function syncList()
{}
 
syncList.prototype.sync = function()
{
    for (var i=0; i < arguments.length - 1; i++)
    {   
        document.getElementById(arguments[i]).onchange = (function (o, id1, id2) { return function() { o._sync(id1, id2); }; }) (this, arguments[i], arguments[i+1]);
    }
    document.getElementById(arguments[0]).onchange();
}
 
syncList.prototype._sync = function (firstSelectId, secondSelectId)
{
    var firstSelect = document.getElementById(firstSelectId);
    var secondSelect = document.getElementById(secondSelectId);
 
    secondSelect.length = 0;
    
    if (firstSelect.length > 0)
    {
        var optionData = this.dataList[firstSelect.options[firstSelect.selectedIndex == -1 ? 0 : firstSelect.selectedIndex].value];
        for (var key in optionData || null) 
        {
            secondSelect.options[secondSelect.length] = new Option(optionData[key], key);
        }
        
        if (firstSelect.selectedIndex == -1) 
        {
            setTimeout( function(){ firstSelect.options[0].selected = true;}, 1 );
        }
        
        if (secondSelect.length>0) 
        {   
            setTimeout( function(){ secondSelect.options[0].selected = true;}, 1 );
        }
    }
    secondSelect.onchange && secondSelect.onchange();
};

function changeValue() 
        {
            var comand = new syncList;
comand.dataList = 
    {
        '0':
        {
             'BTC_ETH':'ETH',
             'BTC_EUR':'EUR',
             'BTC_UAH':'UAH'
        },

        '1':
        {
             'ETH_BTC':'BTC',
             'ETH_EUR':'EUR',
             'ETH_UAH':'UAH'
        },

        '2':
        {
             'EUR_BTC':'BTC',
             'EUR_ETH':'ETH',
             'EUR_UAH':'UAH'
        },

        '3':
        {
             'UAH_BTC':'BTC',
             'UAH_ETH':'ETH',
             'UAH_EUR':'EUR',
        },
     };
     comand.sync("give", "take");
}

function reserve() 
{
        let give = document.getElementById("give");
        let take = document.getElementById("take");
     if (take.value == "ETH_BTC" || take.value == "EUR_BTC" || take.value == "UAH_BTC" ) {
      document.getElementById("reserve").textContent="4 BTC";
    } else if (take.value == "BTC_ETH" || take.value == "EUR_ETH" || take.value == "UAH_ETH") {
      document.getElementById("reserve").textContent="18 ETH";
    } else if (take.value == "BTC_EUR" || take.value == "ETH_EUR" || take.value == "UAH_EUR") {
      document.getElementById("reserve").textContent="В данный момент нету :(";
    } else {
      document.getElementById("reserve").textContent="30 000 UAH";
    }



}