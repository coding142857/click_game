var shop_sell_index = document.querySelector("#sell");
shop_sell_index.innerHTML = "";
for(index in shop.sell) {
    var shop_sell = shop.sell[index]
    for(shop_input = 0; shop_input < shop_sell.input.info; shop_input++) {
        var can_buy = true;
        var in_name = shop_sell.input.item[shop_input].name;
        var in_index = shop_sell.input.item[shop_input].index;
        if(item[in_name] < in_index) {
            can_buy = false
        } else {
            
        }
    }
    if(can_buy) {
        shop_sell_index.innerHTML += 
        `<div onclick=\"shopping(${i}, \'sell\')\" class=\"shop_border\" id=\"sell${i}\">
        <div class=\"shop_in\" id=\"sell_in_${index}\"></div>
        <img src=\"img/shop/to.png\" class=\"to\">
        <div class=\"shop_in\" id=\"sell_out_${index}\"></div>
        </div>`;
        var sell_in = document.querySelector(`#sell_in_${index}`);
        var sell_out = document.querySelector(`#sell_out_${index}`);
        for(info = 0; info < shop_sell.input.info; info++) {
            sell_in.innerHTML += `<img src=\"img/ore/${shop_sell.input.item[info].name}.png\" class=\"shop_item\">`
            var in_index = String(shop_sell.input.item[info].index);
            for(number = 0; number < in_index.length; number++) {
                sell_in.innerHTML += return_number(in_index[number], `class=\"shop_index\"`);
            }
        }
        for(info = 0; info < shop_sell.output.info; info++) {
            sell_out.innerHTML += `<img src=\"img/ore/${shop_sell.output.item[info].name}.png\" class=\"shop_item\">`
            var in_index = String(shop_sell.output.item[info].index);
            for(number = 0; number < in_index.length; number++) {
                sell_out.innerHTML += return_number(in_index[number], `class=\"shop_index\"`);
            }
        }
    }
}