var items={room_name:function(){var a=$.jStorage.get("is_in","");return a},take:function(a){var b=$(a).attr("id"),c=$(a).attr("data-info");$(a).remove();items.itembox(items.room_name(),b,c);var d=$.jStorage.get("collected");d.push(b);$.jStorage.set("collected",d);$.jStorage.set(b+"_room",items.room_name());$.jStorage.set(b+"_info",c);$("#items_text").remove();$(a).remove();$("#tooltip").remove();items.add_to_holder("#button",b,items.room_name(),c);$("#items").fadeIn()},use:function(a){var b=$(a);if(!(b.length>0))return!1;var c=$(a).attr("id");$(a).remove();var d=$.jStorage.get("used");d.push(c);$.jStorage.set("used",d);dialogue_box.display({character:!1,picture:!1,text:'The item "'+c+'" has been used!',options:["Ok"]});$("#items").children().length<2&&$("#items").fadeOut()},holder:function(){var a=document.getElementById("items"),b=document.getElementById("button");items.loop_and_add(collected);$(b).toggle(function(){$(b).addClass("up");$(a).animate({top:0},500)},function(){$(b).removeClass("up");$(a).animate({top:-100},500)});$(a).delegate("img","click",function(){var a=$(this).attr("id"),b=$.jStorage.get(a+"_room"),c=$.jStorage.get(a+"_info");items.itembox(b,a,c)})},loop_and_add:function(a){var b=a.length;if(b>0)for(i=0;i<b;i++){var c=$.jStorage.get(a[i]+"_room"),d=$.jStorage.get(a[i]+"_info");items.add_to_holder("#button",a[i],c,d)}},itembox:function(a,b,c){$("#lightbox").fadeIn("1000").text(c).append("<div class='close'>").append("<img src='images/"+a+"_"+b+"_big.png'>");$("div.close").click(function(){$("#lightbox").empty().fadeOut("1000")})},add_to_holder:function(a,b,c,d){$(a).before("<img src='images/"+c+"_"+b+"_min.png' id='"+b+"' data-info='"+d+"'>")}};