var image = 1;
var dig = 0;
var brokes = 0;
var shop = {
    sell:[
        {
            input:{
                info:1,
                item:[
                    {
                        name:"dirt",
                        index:5
                    }
                ]
            },
            output:{
                info:1,
                item:[
                    {
                        name:"emerald",
                        index:1
                    }
                ]
            },
            shopping:function() {
                item["emerald"] += 1;
                item["dirt"] -= 5;
            },
        },
        {
            input:{
                info:1,
                item:[
                    {
                        name:"wood",
                        index:1
                    }
                ]
            },
            output:{
                info:1,
                item:[
                    {
                        name:"emerald",
                        index:1
                    }
                ]
            },
            shopping:function() {
                item["emerald"] += 1;
                item["wood"] -= 1;
            },
        },
        {
            input:{
                info:1,
                item:[
                    {
                        name:"planks",
                        index:4
                    }
                ]
            },
            output:{
                info:1,
                item:[
                    {
                        name:"emerald",
                        index:1
                    }
                ]
            },
            shopping:function() {
                item["emerald"] += 1;
                item["planks"] -= 4;
            },
        },
        {
            input:{
                info:1,
                item:[
                    {
                        name:"cobblestone",
                        index:1
                    }
                ]
            },
            output:{
                info:1,
                item:[
                    {
                        name:"emerald",
                        index:2
                    }
                ]
            },
            shopping:function() {
                item["emerald"] += 2;
                item["cobblestone"] -= 1;
            },
        },
        {
            input:{
                info:1,
                item:[
                    {
                        name:"stone",
                        index:1
                    }
                ]
            },
            output:{
                info:1,
                item:[
                    {
                        name:"emerald",
                        index:5
                    }
                ]
            },
            shopping:function() {
                item["emerald"] += 5;
                item["stone"] -= 1;
            },
        },
        {
            input:{
                info:1,
                item:[
                    {
                        name:"smooth_stone",
                        index:1
                    }
                ]
            },
            output:{
                info:1,
                item:[
                    {
                        name:"emerald",
                        index:16
                    }
                ]
            },
            shopping:function() {
                item["emerald"] += 16;
                item["smooth_stone"] -= 1;
            },
        },
        {
            input:{
                info:1,
                item:[
                    {
                        name:"raw_iron",
                        index:1
                    }
                ]
            },
            output:{
                info:1,
                item:[
                    {
                        name:"emerald",
                        index:4
                    }
                ]
            },
            shopping:function() {
                item["emerald"] += 3;
                item["raw_iron"] -= 1;
            },
        },
        {
            input:{
                info:1,
                item:[
                    {
                        name:"iron",
                        index:1
                    }
                ]
            },
            output:{
                info:1,
                item:[
                    {
                        name:"emerald",
                        index:10
                    }
                ]
            },
            shopping:function() {
                item["emerald"] += 10;
                item["dirt"] -= 1;
            },
        },
        {
            input:{
                info:1,
                item:[
                    {
                        name:"raw_gold",
                        index:1
                    }
                ]
            },
            output:{
                info:1,
                item:[
                    {
                        name:"emerald",
                        index:5
                    }
                ]
            },
            shopping:function() {
                item["emerald"] += 5;
                item["raw_gold"] -= 1;
            },
        },
        {
            input:{
                info:1,
                item:[
                    {
                        name:"gold",
                        index:1
                    }
                ]
            },
            output:{
                info:1,
                item:[
                    {
                        name:"emerald",
                        index:24
                    }
                ]
            },
            shopping:function() {
                item["emerald"] += 24;
                item["gold"] -= 1;
            },
        },
        {
            input:{
                info:1,
                item:[
                    {
                        name:"diamond",
                        index:1
                    }
                ]
            },
            output:{
                info:1,
                item:[
                    {
                        name:"emerald",
                        index:64
                    }
                ]
            },
            shopping:function() {
                item["emerald"] += 64;
                item["diamond"] -= 1;
            },
        },
        {
            input:{
                info:1,
                item:[
                    {
                        name:"obsidian",
                        index:1
                    }
                ]
            },
            output:{
                info:1,
                item:[
                    {
                        name:"emerald",
                        index:64
                    }
                ]
            },
            shopping:function() {
                item["emerald"] += 64;
                item["obsidian"] -= 1;
            },
        },
        {
            input:{
                info:1,
                item:[
                    {
                        name:"nether_rock",
                        index:1
                    }
                ]
            },
            output:{
                info:1,
                item:[
                    {
                        name:"emerald",
                        index:1
                    }
                ]
            },
            shopping:function() {
                item["emerald"] += 1;
                item["nether_rock"] -= 1;
            },
        },
        {
            input:{
                info:1,
                item:[
                    {
                        name:"emerald",
                        index:256
                    }
                ]
            },
            output:{
                info:1,
                item:[
                    {
                        name:"book",
                        index:1
                    }
                ]
            },
            shopping:function() {
                item["emerald"] -= 256;
                item["book"] += 1;
            },
        },
    ],
    create:[
        {
            input:{
                info:2,
                item:[
                    {
                        name:"wood",
                        index:1
                    },
                    {
                        name:"emerald",
                        index:1
                    },
                ]
            },
            output:{
                info:1,
                item:[
                    {
                        name:"planks",
                        index:4
                    }
                ]
            },
            shopping:function() {
                item["planks"] += 4;
                item["wood"] -= 1;
                item["emerald"] -= 1;
            },
        },
        {
            input:{
                info:3,
                item:[
                    {
                        name:"planks",
                        index:4
                    },
                    {
                        name:"emerald",
                        index:5
                    },
                    {
                        name:"notable",
                        index:0
                    },
                ]
            },
            output:{
                info:1,
                item:[
                    {
                        name:"table",
                        index:1
                    }
                ]
            },
            shopping:function() {
                item["planks"] -= 4;
                item["emerald"] -= 5;
                item["table"] = 1;
                shop.table = true;
            },
        },
        {
            input:{
                info:3,
                item:[
                    {
                        name:"cobblestone",
                        index:8
                    },
                    {
                        name:"emerald",
                        index:10
                    },
                    {
                        name:"nofurnace",
                        index:0
                    },
                ]
            },
            output:{
                info:1,
                item:[
                    {
                        name:"furnace",
                        index:1
                    }
                ]
            },
            shopping:function() {
                item["cobblestone"] -= 8;
                item["emerald"] -= 10;
                item["furnace"] = 1;
                shop.furnace = true;
            },
        },
    ],
    table:false,
    furnace:false,
    furnace_lv:1,
    
}
var world = {
    1:{block:[1, 1, 1, 1, 1, 1, 1, 1, 3, 3],bg:"lv1"},
    2:{block:[1, 1, 1, 4, 4, 4, 4, 4, 4, 5],bg:"lv2"},
    3:{block:[4, 4, 4, 4, 4, 4, 5, 5, 5, 6],bg:""},
    4:{block:[2, 2, 2, 2, 3, 3, 5, 6, 6, 6],bg:""},
    5:{block:[1, 1, 1, 1, 1, 1, 1, 1, 2, 2],bg:""},
    6:{block:[1, 1, 1, 1, 1, 1, 1, 1, 2, 2],bg:""},
    7:{block:[1, 1, 1, 1, 1, 1, 1, 1, 2, 2],bg:""},
    8:{block:[1, 1, 1, 1, 1, 1, 1, 1, 2, 2],bg:""},
    9:{block:[1, 1, 1, 1, 1, 1, 1, 1, 2, 2],bg:""},
    10:{block:[1, 1, 1, 1, 1, 1, 1, 1, 2, 2],bg:""},
    now:1
}
var broke_png = {
    0:"img/broke/dig0.png",
    1:"img/broke/dig1.png",
    2:"img/broke/dig2.png",
    3:"img/broke/dig3.png",
    4:"img/broke/dig4.png",
    5:"img/broke/dig5.png",
    6:"img/broke/dig6.png",
    7:"img/broke/dig7.png",
    8:"img/broke/dig8.png",
    9:"img/broke/dig9.png",
    10:"img/broke/dig10.png"
}
var tool = {
    name:{
        1:"pickaxe", 
        2:"axe", 
        3:"shovel",
    }, 
    level:{
        1:1, 
        2:1,
        3:1,
    },
    now:1,
}
var block_info = {
    name:{
        1:"grass",
        2:"planks",
        3:"wood",
        4:"stone",
        5:"coal_ore",
        6:"iron_ore",
        7:"gold_ore",
        8:"diamond_ore",
        9:"obsidian",
        10:"nether_rock",
        11:"nether_gold_ore",
        12:"ancient_debris",
    },
    info:{
        1:{
            broken:0,
            broke:{
                "pickaxe":1, 
                "axe":1, 
                "shovel":2, 
            },
            image:"grass.png",
            sounds:{
                dig:"grass/Grass_step",
                broken:"grass/Grass_dig",
            },
            drops:"dirt",
        },
        2:{
            broken:0,
            broke:{
                "pickaxe":0.5, 
                "axe":1.5, 
                "shovel":0.5, 
            },
            image:"planks.png",
            sounds:{
                dig:"wood/Wood_step",
                broken:"wood/Wood_dig",
            },
            drops:"planks",
        },
        3:{
            broken:0,
            broke:{
                "pickaxe":0.5, 
                "axe":1, 
                "shovel":0.5, 
            },
            image:"wood.png",
            sounds:{
                dig:"wood/Wood_step",
                broken:"wood/Wood_dig",
            },
            drops:"wood",
        },
        4:{
            broken:0,
            broke:{
                "pickaxe":0.5, 
                "axe":0.1, 
                "shovel":0.1, 
            },
            image:"stone.png",
            sounds:{
                dig:"stone/Stone_step",
                broken:"stone/Stone_dig",
            },
            drops:"cobblestone",
        },
        5:{
            broken:0,
            broke:{
                "pickaxe":0.25, 
                "axe":0.05, 
                "shovel":0.05, 
            },
            image:"coal_ore.png",
            sounds:{
                dig:"stone/Stone_step",
                broken:"stone/Stone_dig",
            },
            drops:"coal",
        },
        6:{
            broken:0,
            broke:{
                "pickaxe":0.2, 
                "axe":0.01, 
                "shovel":0.01, 
            },
            image:"iron_ore.png",
            sounds:{
                dig:"stone/Stone_step",
                broken:"stone/Stone_dig",
            },
            drops:"raw_iron",
        },
        7:{
            broken:0,
            broke:{
                "pickaxe":0.2, 
                "axe":0.01, 
                "shovel":0.01, 
            },
            image:"gold_ore.png",
            sounds:{
                dig:"stone/Stone_step",
                broken:"stone/Stone_dig",
            },
            drops:"raw_gold",
        },
        8:{
            broken:0,
            broke:{
                "pickaxe":0.1, 
                "axe":0.005, 
                "shovel":0.005, 
            },
            image:"diamond_ore.png",
            sounds:{
                dig:"stone/Stone_step",
                broken:"stone/Stone_dig",
            },
            drops:"diamond",
        },
        9:{
            broken:0,
            broke:{
                "pickaxe":0.1, 
                "axe":0.005, 
                "shovel":0.005, 
            },
            image:"obsidian.png",
            sounds:{
                dig:"stone/Stone_step",
                broken:"stone/Stone_dig",
            },
            drops:"obsidian",
        },
        10:{
            broken:0,
            broke:{
                "pickaxe":3, 
                "axe":1, 
                "shovel":1, 
            },
            image:"nether_rock.png",
            sounds:{
                dig:"nether_ore/Nether_Ore_step",
                broken:"nether_ore/Nether_Ore_break",
            },
            drops:"nether_rock",
        },
        11:{
            broken:0,
            broke:{
                "pickaxe":2, 
                "axe":0.5, 
                "shovel":0.5, 
            },
            image:"nether_gold_ore.png",
            sounds:{
                dig:"nether_ore/Nether_Ore_step",
                broken:"nether_ore/Nether_Ore_break",
            },
            drops:"gold_ungget",
        },
        12:{
            broken:0,
            broke:{
                "pickaxe":0.05, 
                "axe":0.001, 
                "shovel":0.001, 
            },
            image:"ancient_debris.png",
            sounds:{
                dig:"stone/Stone_step",
                broken:"stone/Stone_dig",
            },
            drops:"ancient_debris",
        },
    }
}
var item = {
    "dirt":0,
    "wood":0,
    "planks":0,
    "cobblestone":0,
    "stone":0,
    "smooth_stone":0,
    "coal":0,
    "raw_iron":0,
    "iron":0,
    "raw_gold":0,
    "gold":0,
    "gold_ungget":0,
    "diamond":0,
    "obsidian":0,
    "nether_rock":0,
    "ancient_debris":0,
    "netherite_scrap":0,
    "netherite_ingot":0,
    "book":0,
    "emerald":0,
    "table":0,
    "furnace":0,
    "emerald":0,
}
var blocks_droping = new Map();
var drops_add = {
    add:false,
    add_key:"",
    add_value:""
}

function return_number(number, the_class = "") {
    return `<img src=\"img/number/${String(number)}.png\" ${the_class}>`
}
function update() {
    JSreset();
    document.querySelector(`#iftable`).src = `img/shop/${shop.table}.png`;
    document.querySelector(`#iffurnace`).src = `img/shop/${shop.furnace}.png`;
    var img = document.querySelector("#image");
    var main = document.querySelector("main");
    img.style.backgroundImage = "url(\"img/block/"+String(block_info.info[image].image)+"\")";
    main.style.backgroundImage = "url(\"img/bg/"+String(world[world.now].bg)+".png\")";
    
    if(document.querySelector("#broke_bg") == null) {
        img.innerHTML = `<img src=\"${broke_png[Math.floor(dig)]}\" width=\"640px\" height=\"640px\" id=\"broke_bg\" class=\"broke_bg\">`;
    }
    var dig_img = document.querySelector("#broke_bg");
    dig_img.src = broke_png[Math.floor(dig)];
    var loops = 1;
    for(i in item) {
        var text_block = document.querySelector("#"+String(i));
        text_block.innerHTML = "";
        
        for(t=0; t<String(item[i]).length; t++) {
            text_block.innerHTML = text_block.innerHTML + return_number(String(item[i])[t], 'height=40px');
        }
        if (loops > 19) {
            break;
        }
        loops++;
    }
    for(i=1;i<=3;i++) {
        if(tool.now == i) {
            //document.querySelector("#cursor_").innerHTML = `<img src=\"img/item/${tool.name[i]}/${tool.name[i]}${tool.level[i]}.png\" id=\"cursor_img\">`;
            document.querySelector("#cursor_img").src = `img/item/${tool.name[i]}/${tool.name[i]}${tool.level[i]}.png`;
        }
        var toolpng = document.querySelector(`#tool${i}`)
        toolpng.innerHTML = `<img src=\"img/item/${tool.name[i]}/${tool.name[i]}${tool.level[i]}.png\">`;
    }
    for(shop_type in {sell:"",create:""}) {
        var shop_type_index = document.querySelector(`#${shop_type}`);
        shop_type_index.innerHTML = `<!--${shop_type}-->`;
        for(index in shop[shop_type]) {
            var shop_type_info = shop[shop_type][index]
            var can_buy = true;
            for(shop_input = 0; shop_input < shop_type_info.input.info; shop_input++) {
                
                var in_name = shop_type_info.input.item[shop_input].name;
                var in_index = shop_type_info.input.item[shop_input].index;
                switch (in_name) {
                    case "table":
                        if(!shop.table) {
                            can_buy = false;
                        }
                        break;
                    case "notable":
                        if(shop.table) {
                            can_buy = false;
                        }
                        break;
                    case "nofurnace":
                        if(shop.furnace) {
                            can_buy = false;
                        }
                        break;
                    case "furnace":
                        if(!shop.furnace) {
                            can_buy = false;
                        }
                        break;
                    default:
                        if(item[in_name] < in_index) {
                            can_buy = false
                        }
                        break;
                }
            
            }
            if(can_buy) {
                shop_type_index.innerHTML += 
                `<div onclick=\"shop[\'${shop_type}\'][${index}].shopping(); update();\" class=\"shop_border\" id=\"${shop_type}${i}\">
                <div class=\"shop_in\" id=\"${shop_type}_in_${index}\"></div>
                <img src=\"img/shop/to.png\" class=\"to\">
                <div class=\"shop_out\" id=\"${shop_type}_out_${index}\"></div>
                </div>`;
                var item_in = document.querySelector(`#${shop_type}_in_${index}`);
                var item_out = document.querySelector(`#${shop_type}_out_${index}`);
                for(info = 0; info < shop_type_info.input.info; info++) {
                    switch (shop_type_info.input.item[info].name) {
                        case "table":
                            break;
                        case "furnace":
                            break;
                        case "notable":
                            break;
                        case "nofurnace":
                            break;
                        default:
                            item_in.innerHTML += `<img src=\"img/ore/${shop_type_info.input.item[info].name}.png\" class=\"shop_item\">`
                            var in_index = String(shop_type_info.input.item[info].index);
                            for(number = 0; number < in_index.length; number++) {
                                item_in.innerHTML += return_number(in_index[number], `class=\"shop_index\"`);
                            }
                            break;
                    }
                    
                }
                for(info = 0; info < shop_type_info.output.info; info++) {
                    item_out.innerHTML += `<img src=\"img/ore/${shop_type_info.output.item[info].name}.png\" class=\"shop_item\">`
                    var in_index = String(shop_type_info.output.item[info].index);
                    for(number = 0; number < in_index.length; number++) {
                        item_out.innerHTML += return_number(in_index[number], `class=\"shop_index\"`);
                    }
                }
            }
        }
    }
    
}
function on_click() {
    dig += block_info.info[image].broke[tool.name[tool.now]] * (tool.level[tool.now] * 2 - 1);
    if (dig > 10) {
        brokes += 1;
        dig = 0;
        item[block_info.info[image].drops] += 1;
        sound_play(image ,true);
        i = 0;
        while(blocks_droping.has(i)) {
            i++;
        }
        drops_add.add_key = i;
        drops_add.add_value = {
            x:document.querySelector("nav").scrollWidth+document.querySelector("main").scrollWidth/2,
            y:document.querySelector("header").scrollHeight+document.querySelector("main").scrollHeight/2,
            vx:Random(-100, -50)/5 * (Random(0, 1) - 0.5),
            vy:Random(-100, -50)/10,
            type:image,
        };
        drops_add.add = true;
        image = world[world.now].block[Random(0,9)];
    } else {
        sound_play(image, false);
    }
    try {
        update();
    } finally {
        document.querySelector("#cursor_img").classList.remove("unclick");
        setTimeout(function() {
            document.querySelector("#cursor_img").classList.add("unclick");
        },50)
        
    }
    
    
}
function Random(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
}
function sound_play(image, broken) {
    if(broken) {
        const audio = new Audio("sound/"+String(block_info.info[image].sounds.broken)+String(Random(1, 4))+".ogg");
        audio.play();
    } else {
        const audio = new Audio("sound/"+String(block_info.info[image].sounds.dig)+String(Random(1, 5))+".ogg");
        audio.play();
    }

}
function JSreset() {
    document.querySelector("#cursor_img").classList.add("unclick");
    var header = document.querySelector("header");
    header.innerHTML = "<!--Header-->";
    var loops = 1;
    for(i in item) {
        header.innerHTML += `<div class=\"theblock\">
                                 <img src=\"img/ore/${i}.png\">
                                 <span>:</span>
                                 <span id=\"${i}\" class=\"blocks_div\"></span>
                             </div>`;
        if (loops > 19) {
            break;
        }
        loops++;
    }
}
function to_tool(the_tool) {
    tool.now = the_tool;
    try {
        update();
    } finally {
        document.querySelector("#cursor_img").classList.add("unclick");
    }
    
    
    
}
function print(string) {
    console.log(string);
}
function loop_update() {
    drop_list = new Map();
    all_drops = document.querySelector(`#drops`)
    drop_list.clear()
    i = 0
    blocks_droping.forEach(function(value, key, map) {
        drops = document.querySelector(`#drops${key}`);
        if(drops == null) {
            all_drops.innerHTML += `<img id=\"drops${key}\" class=\"droping\">`;
            drops = document.querySelector(`#drops${key}`);
        }
        value.x += value.vx;
        value.y += value.vy;
        value.vy += 1.5;
        value.vx *= 0.95;
        if (value.y + 32 < document.querySelector("body").scrollHeight) {
            drop_list.set(key, value);
        } else {
            drops.remove();
        }
        drops.src = `img/ore/${block_info.info[value.type].drops}.png`;
        drops.style.left = `${value.x - 16}px`;
        drops.style.top = `${value.y - 16}px`;
        i++;
    })
    blocks_droping.clear();
    drop_list.forEach(function(value, key, map) {
        blocks_droping.set(key, value)
    })
    if(drops_add.add) {
        blocks_droping.set(drops_add.add_key, drops_add.add_value);
        drops_add.add = false;
    }
    drop_list_2 = blocks_droping;
    
}
var drop_list_2 = new Map();
var loop = setInterval(loop_update, 50);


window.addEventListener('mousemove',(event) => {
    var nav = {
        w:document.querySelector("nav").scrollWidth,
    }
    var body = {
        w:document.querySelector("body").scrollWidth,
        h:document.querySelector("body").scrollHeight
    }
    var main = {
        w:document.querySelector("main").scrollWidth,
    }
    var header = {
        h:document.querySelector("header").scrollHeight
    }
    var cursor = document.querySelector("#cursor_");
    if (event.pageX - 150 >= nav.w && 
        event.pageX + 10 <= nav.w + main.w) {
        document.querySelector("nav").style.width = "25%";
        document.querySelector("main").style.width = "60%";
        cursor.style.left = `${event.pageX - 150 + 8}px`;
    } else if(event.pageX - 150 < nav.w) {
        document.querySelector("nav").style.width = "35%";
        document.querySelector("main").style.width = "50%";
        cursor.style.left = `${nav.w + 8}px`;
    } else {
        cursor.style.left = `${nav.w + main.w - 160 + 8}px`;
    }
    if (event.pageY - 150 >= header.h && 
        event.pageY + 10 <= body.h) {
        cursor.style.top = `${event.pageY - 150 + 8}px`;
    } else if (event.pageY - 150 < header.h) {
        cursor.style.top = `${header.h + 8}px`;
    } else {
        cursor.style.top = `${body.h - 160 + 8}px`;
    }
})
var block_click = document.querySelector("#cursor_");
block_click.addEventListener('click', (event) => {
    if (Math.abs(event.pageX - document.querySelector("body").scrollWidth/2) <= 321 &&
        Math.abs(event.pageY - document.querySelector("body").scrollHeight/2) <= 321) {
            on_click();
        }
    
})
window.addEventListener('keydown', e => {
    switch (e.key) {
        case "1":
            to_tool(1);
            break;
        case "2":
            to_tool(2);
            break;
        case "3":
            to_tool(3);
            break;
    }
})
JSreset();