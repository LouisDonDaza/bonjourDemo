(this.webpackJsonpbonj=this.webpackJsonpbonj||[]).push([[0],[,,,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/travel-1.197f70f3.jpeg"},,,,,,function(e,t,a){e.exports=a.p+"static/media/travel-2.9d7e5bf9.jpeg"},,,,,function(e,t,a){e.exports=a.p+"static/media/travel-3.a7423403.jpeg"},function(e,t,a){e.exports=a.p+"static/media/travel-4.45deb3c1.jpeg"},function(e,t,a){e.exports=a.p+"static/media/travel-5.aa69fcd0.jpeg"},function(e,t,a){e.exports=a.p+"static/media/nat-4.61bbf12a.jpg"},,,function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(26),s=a.n(o),r=a(1),l=(a(33),a(3)),c=a(2),h=a(12),m=a(13),d=a(15),u=a(14),f=(a(34),a(43)),g={duration:1.6,ease:[.43,.13,.23,.96]};var w=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={addDummy:!1},a.setFinal=null,a.myFirstImg=null,a.myImg2=null,a.myImg3=null,a.myImg4=null,a.myImg5=null,a.myImg6=null,a.myImg7=null,a.myTween=null,a.containerScroll=localStorage.getItem("conScroll")||0,a.pos=0,a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e,t,a=document.getElementById("wheel"),n=this,i=document.getElementsByClassName("mySlides")[0],o=0,s=Number(this.containerScroll),r=document.getElementById("slideshow-title");this.setFinal=function(){n.setState({addDummy:!1}),o=i.getBoundingClientRect().x+a.scrollLeft,e=a.scrollWidth+o,t=e/6,n.setState({addDummy:!0})},this.setFinal(),a.scrollLeft+=2+s,a.addEventListener("scroll",(function(n){a.scrollLeft>=e+3&&a.scrollTo(2,0),0===a.scrollLeft&&a.scrollTo(e-3,0),a.scrollLeft>0&&a.scrollLeft<=t&&(r.innerText="Bonjour"),a.scrollLeft>t&&a.scrollLeft<=2*t&&(r.innerText="Benjamin"),a.scrollLeft>2*t&&a.scrollLeft<=3*t&&(r.innerText="Romani"),a.scrollLeft>3*t&&a.scrollLeft<=4*t&&(r.innerText="Marotta"),a.scrollLeft>4*t&&a.scrollLeft<=5*t&&(r.innerText="Eulalio"),a.scrollLeft>5*t&&(r.innerText="Angeioletto")})),window.addEventListener("resize",this.setFinal)}},{key:"componentWillUnmount",value:function(){var e=this;this.containerScroll=document.getElementById("wheel").scrollLeft,this.containerScroll-=this.pos,localStorage.setItem("conScroll",JSON.stringify(this.containerScroll)),window.removeEventListener("resize",this.setFinal),setTimeout((function(){e.myTween&&(e.myTween=null)}),1e3)}},{key:"centerImage",value:function(e){console.log("printing imgPtr",e.getBoundingClientRect());var t=window.innerWidth/2-e.getBoundingClientRect().x;this.pos=t-e.clientWidth/2;var a=this.pos;this.myTween=f.a.to(e,1.5,{x:a})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"slideshow-container",id:"containerz"},i.a.createElement(c.b.div,{exit:{opacity:0},transition:g,className:"navigation"},i.a.createElement("input",{type:"checkbox",className:"navigation__checkbox",id:"navi-toggle"}),i.a.createElement("label",{htmlFor:"navi-toggle",className:"navigation__button"},i.a.createElement("span",{className:"navigation__icon"},"\xa0")),i.a.createElement("div",{className:"navigation__background"},"\xa0"),i.a.createElement("nav",{className:"navigation__nav"},i.a.createElement("ul",{className:"navigation__list"},i.a.createElement("li",{className:"navigation__item"},i.a.createElement("a",{href:"#",className:"navigation__link"},"About")),i.a.createElement("li",{className:"navigation__item"},i.a.createElement("a",{href:"project.html",className:"navigation__link"},"Projects")),i.a.createElement("li",{className:"navigation__item"},i.a.createElement("a",{href:"#",className:"navigation__link"},"Store")),i.a.createElement("li",{className:"navigation__item"},i.a.createElement("a",{href:"#",className:"navigation__link"},"Cart(0)"))),i.a.createElement("ul",{className:"navigation__socialist"},i.a.createElement("li",{className:"navigation__item2"},i.a.createElement("a",{href:"#",className:"navigation__link2"},i.a.createElement("i",{className:"fab fa-telegram-plane navigation__fa"})," @shibedibe")),i.a.createElement("li",{className:"navigation__item2"},i.a.createElement("a",{href:"https://www.google.com/maps/place/Tampines+Central+8,+Singapore/@1.3566321,103.9383712,17z/data=!3m1!4b1!4m5!3m4!1s0x31da3d0c55309c0d:0x9f0fc64df5bc63e3!8m2!3d1.3566321!4d103.9405599",className:"navigation__link2",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fas fa-map-marker-alt navigation__fa"})," Tampines Centrale 8 ",i.a.createElement("span",null,"Singapore 520519"))),i.a.createElement("li",{className:"navigation__item2"},i.a.createElement("a",{href:"mailto: benjaminlauwk@gmail.com",className:"navigation__link2",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"far fa-envelope navigation__fa"})," benjaminlauwk@gmail.com")),i.a.createElement("li",{className:"navigation__item2"},i.a.createElement("a",{href:"https://www.instagram.com/walaulau/",className:"navigation__link2",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fab fa-instagram navigation__fa"})," @walaulau"))))),i.a.createElement("div",{className:"slideshow-wheel",id:"wheel"},i.a.createElement("div",{className:"mySlides fade",id:"test-slides-1"},i.a.createElement(r.b,{to:"/project/1"},i.a.createElement("img",{ref:function(t){return e.myFirstImg=t},onClick:function(){e.centerImage(e.myFirstImg)},className:"mySlides--img mySlides--img--1",src:a(11),alt:"img1"}))),i.a.createElement("div",{className:"mySlides fade",id:"test-slides-2"},i.a.createElement(r.b,{to:"/project/2"},i.a.createElement("img",{ref:function(t){return e.myImg2=t},onClick:function(){e.centerImage(e.myImg2)},className:"mySlides--img mySlides--img--2",src:a(17),alt:"img2"}))),i.a.createElement("div",{className:"mySlides fade",id:"test-slides-3"},i.a.createElement(r.b,{to:"/project/3"},i.a.createElement("img",{ref:function(t){return e.myImg3=t},onClick:function(){e.centerImage(e.myImg3)},className:"mySlides--img mySlides--img--3",src:a(22),alt:"img3"}))),i.a.createElement("div",{className:"mySlides fade",id:"test-slides-4"},i.a.createElement(r.b,{to:"/project/4"},i.a.createElement("img",{ref:function(t){return e.myImg4=t},onClick:function(){e.centerImage(e.myImg4)},className:"mySlides--img mySlides--img--4",src:a(23),alt:"img4"}))),i.a.createElement("div",{className:"mySlides fade",id:"test-slides-5"},i.a.createElement(r.b,{to:"/project/5"},i.a.createElement("img",{ref:function(t){return e.myImg5=t},onClick:function(){e.centerImage(e.myImg5)},className:"mySlides--img mySlides--img--5",src:a(24),alt:"img5"}))),i.a.createElement("div",{className:"mySlides fade"},i.a.createElement(r.b,{to:"/project/6"},i.a.createElement("img",{ref:function(t){return e.myImg6=t},onClick:function(){e.centerImage(e.myImg6)},className:"mySlides--img mySlides--img--6",src:a(25),alt:"img6"}))),this.state.addDummy&&i.a.createElement("div",{className:"mySlides fade",id:"test-slides-1"},i.a.createElement(r.b,{to:"/project/1"},i.a.createElement("img",{ref:function(t){return e.myImg7=t},onClick:function(){e.centerImage(e.myImg7)},className:"mySlides--img mySlides--img--1",src:a(11),alt:"img1"}))),this.state.addDummy?i.a.createElement("div",{className:"mySlides fade",id:"test-slides-2"},i.a.createElement(r.b,{to:"/project/2"},i.a.createElement("img",{className:"mySlides--img mySlides--img--2",src:a(17),alt:"img2"}))):void 0),i.a.createElement("h1",{className:"slideshow-title project-title",id:"slideshow-title"},"Bonjour"),i.a.createElement(c.b.div,{exit:{opacity:0},transition:g,className:"slideshow-adjust"},i.a.createElement("p",{className:"swipe-text"},i.a.createElement("span",null,i.a.createElement("i",{className:"fas fa-adjust "})," ",i.a.createElement("br",null),"Background Color")," ",i.a.createElement("span",{className:"red color__select"}))),i.a.createElement(c.b.div,{exit:{opacity:0},transition:g,className:"colors",id:"colors"},i.a.createElement("div",{className:"colors__select colors__select--red",id:"red__choice"}),i.a.createElement("div",{className:"colors__select colors__select--blue",id:"blue__choice"}),i.a.createElement("div",{className:"colors__select colors__select--yellow",id:"yellow__choice"}),i.a.createElement("div",{className:"colors__select colors__select--dark",id:"dark__choice"}),i.a.createElement("div",{className:"colors__select colors__select--light",id:"light__choice"})),i.a.createElement("div",{className:"slideshow-swipe"},i.a.createElement("p",{className:"swipe-text"},"Swipe \u21e8")))}}]),n}(i.a.Component),y=(a(9),{type:"tween",duration:1.5,ease:[.6,.01,-.05,.9]}),p={initial:{top:"50%"},animate:{top:"20%",transition:y},exit:{top:"50%",transition:y}},b={initial:{top:"50%"},animate:{top:"100%",transition:y},exit:{top:"50%",transition:y}};var v=function(){return i.a.createElement("div",{animate:"animate",initial:"initial",exit:"exit",className:"slide"},i.a.createElement("div",{className:"slide__figure"},i.a.createElement(c.b.h1,{variants:p,initial:"initial",animate:"animate",exit:"exit",className:"slide__figure-title project-title",style:{transform:"translate(-50%, -50%)"}},"Bonjour"),i.a.createElement(c.b.img,{variants:b,initial:"initial",animate:"animate",exit:"exit",className:"slide__figure-img slide__img",src:a(11),alt:"img1"})),i.a.createElement("div",{className:"slide__content"},i.a.createElement("h2",{className:"slide__title"},"Zenosyne"),i.a.createElement("h3",{className:"slide__text"},"by Cindy Brighton on 2/21"),i.a.createElement("button",{className:"slide__back"},i.a.createElement(r.b,{className:"slide__toggle",to:"/"},"\u2190")),i.a.createElement("p",null,"What would one give for a few human touches in connexion with our old silver! We may imagine that our candlesticks of the year 1750 held the flickering wax candles which were guttering when the dawn broke when our great-great-grandfather lost his fortune at cards in the county of \u2014, or maybe it was somebody else\u2019s grandfather. But this is in the realms of fancy, and the fortune is literally fabulous. Why are there no George Morlands in the silversmith\u2019s craft? Cannot the guilds dig out their romantic history from their archives? Just to think that our designer of candelabra and flagons ran a fine career on Hounslow Heath with gamesters and fighting men; or did he, just that once, have a duel with young Lord What\u2019s-his-Name in the Guards, and pinked him? Did not the story get to White\u2019s and to the Cocoa Tree Clubs, how the tradesman scored! But no such thing. All these initials of makers are empty of such vanities. We can do better with prints. Those who possess the engraved work of Ryland have the satisfaction of knowing that he was hounded by Bow Street runners and hid, like the modern Lefroy, at Stepney, and that he was hanged for forgery."),i.a.createElement("p",null,"The scene may readily be imagined. The second of May 1696 had been fixed by Parliament as the last day in which the crowns, half-crowns, and shillings were to be received in payment of taxes for face value. The guards had to be called in to keep order. The Exchequer was besieged by a vast multitude from dawn to midnight. The Act provided that the money was to be brought in by before the 4th of May. The 3rd was a Sunday, therefore Saturday, the 2nd of May, was actually the last day."),i.a.createElement("p",null,"A remarkable use of conjurators to confirm the evidence of witnesses occurs in 850 in a dispute between Cantius, Bishop of Siena, and Peter, Bishop of Arezzo, concerning certain parishes claimed by both. The occasion was a solemn one, for it was before a council held in Rome presided over jointly by Pope Leo IV. and the Emperor Louis II. Peter relied upon written charters, while Cantius produced witnesses. The Emperor pronounced the claim of the latter to be just, when he and twelve priests swore that the oaths of the witnesses were true and without deceit, whereupon the disputed parishes were adjudged to him.")))},_={type:"tween",duration:1.5,ease:[.6,.01,-.05,.9]},E={initial:{top:"50%"},animate:{top:"20%",transition:_},exit:{top:"50%",transition:_}},N={initial:{top:"50%"},animate:{top:"100%",transition:_},exit:{top:"50%",transition:_}},x=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"slide"},i.a.createElement("div",{className:"slide__figure"},i.a.createElement(c.b.h1,{variants:E,initial:"initial",animate:"animate",exit:"exit",className:"slide__figure-title project-title",style:{transform:"translate(-50%, -50%)"}},"Benjamin"),i.a.createElement(c.b.img,{variants:N,initial:"initial",animate:"animate",exit:"exit",className:"slide__figure-img slide__img",src:a(17),alt:"img2"})),i.a.createElement("div",{className:"slide__content"},i.a.createElement("h2",{className:"slide__title"},"Zenosyne"),i.a.createElement("h3",{className:"slide__text"},"by Cindy Brighton on 2/21"),i.a.createElement("button",{className:"slide__back"},i.a.createElement(r.b,{className:"slide__toggle",to:"/"},"\u2190")),i.a.createElement("p",null,"What would one give for a few human touches in connexion with our old silver! We may imagine that our candlesticks of the year 1750 held the flickering wax candles which were guttering when the dawn broke when our great-great-grandfather lost his fortune at cards in the county of \u2014, or maybe it was somebody else\u2019s grandfather. But this is in the realms of fancy, and the fortune is literally fabulous. Why are there no George Morlands in the silversmith\u2019s craft? Cannot the guilds dig out their romantic history from their archives? Just to think that our designer of candelabra and flagons ran a fine career on Hounslow Heath with gamesters and fighting men; or did he, just that once, have a duel with young Lord What\u2019s-his-Name in the Guards, and pinked him? Did not the story get to White\u2019s and to the Cocoa Tree Clubs, how the tradesman scored! But no such thing. All these initials of makers are empty of such vanities. We can do better with prints. Those who possess the engraved work of Ryland have the satisfaction of knowing that he was hounded by Bow Street runners and hid, like the modern Lefroy, at Stepney, and that he was hanged for forgery."),i.a.createElement("p",null,"The scene may readily be imagined. The second of May 1696 had been fixed by Parliament as the last day in which the crowns, half-crowns, and shillings were to be received in payment of taxes for face value. The guards had to be called in to keep order. The Exchequer was besieged by a vast multitude from dawn to midnight. The Act provided that the money was to be brought in by before the 4th of May. The 3rd was a Sunday, therefore Saturday, the 2nd of May, was actually the last day."),i.a.createElement("p",null,"A remarkable use of conjurators to confirm the evidence of witnesses occurs in 850 in a dispute between Cantius, Bishop of Siena, and Peter, Bishop of Arezzo, concerning certain parishes claimed by both. The occasion was a solemn one, for it was before a council held in Rome presided over jointly by Pope Leo IV. and the Emperor Louis II. Peter relied upon written charters, while Cantius produced witnesses. The Emperor pronounced the claim of the latter to be just, when he and twelve priests swore that the oaths of the witnesses were true and without deceit, whereupon the disputed parishes were adjudged to him.")))}}]),n}(i.a.Component),k={type:"tween",duration:1.5,ease:[.6,.01,-.05,.9]},j={initial:{top:"50%"},animate:{top:"20%",transition:k},exit:{top:"50%",transition:k}},T={initial:{top:"50%"},animate:{top:"100%",transition:k},exit:{top:"50%",transition:k}};var S=function(){return i.a.createElement("div",{className:"slide"},i.a.createElement("div",{className:"slide__figure"},i.a.createElement(c.b.h1,{variants:j,initial:"initial",animate:"animate",exit:"exit",className:"slide__figure-title project-title"},"Romani"),i.a.createElement(c.b.img,{variants:T,initial:"initial",animate:"animate",exit:"exit",className:"slide__figure-img slide__img",src:a(22),alt:"img3"})),i.a.createElement("div",{className:"slide__content"},i.a.createElement("h2",{className:"slide__title"},"Zenosyne"),i.a.createElement("h3",{className:"slide__text"},"by Cindy Brighton on 2/21"),i.a.createElement("button",{className:"slide__back"},i.a.createElement(r.b,{className:"slide__toggle",to:"/"},"\u2190")),i.a.createElement("p",null,"What would one give for a few human touches in connexion with our old silver! We may imagine that our candlesticks of the year 1750 held the flickering wax candles which were guttering when the dawn broke when our great-great-grandfather lost his fortune at cards in the county of \u2014, or maybe it was somebody else\u2019s grandfather. But this is in the realms of fancy, and the fortune is literally fabulous. Why are there no George Morlands in the silversmith\u2019s craft? Cannot the guilds dig out their romantic history from their archives? Just to think that our designer of candelabra and flagons ran a fine career on Hounslow Heath with gamesters and fighting men; or did he, just that once, have a duel with young Lord What\u2019s-his-Name in the Guards, and pinked him? Did not the story get to White\u2019s and to the Cocoa Tree Clubs, how the tradesman scored! But no such thing. All these initials of makers are empty of such vanities. We can do better with prints. Those who possess the engraved work of Ryland have the satisfaction of knowing that he was hounded by Bow Street runners and hid, like the modern Lefroy, at Stepney, and that he was hanged for forgery."),i.a.createElement("p",null,"The scene may readily be imagined. The second of May 1696 had been fixed by Parliament as the last day in which the crowns, half-crowns, and shillings were to be received in payment of taxes for face value. The guards had to be called in to keep order. The Exchequer was besieged by a vast multitude from dawn to midnight. The Act provided that the money was to be brought in by before the 4th of May. The 3rd was a Sunday, therefore Saturday, the 2nd of May, was actually the last day."),i.a.createElement("p",null,"A remarkable use of conjurators to confirm the evidence of witnesses occurs in 850 in a dispute between Cantius, Bishop of Siena, and Peter, Bishop of Arezzo, concerning certain parishes claimed by both. The occasion was a solemn one, for it was before a council held in Rome presided over jointly by Pope Leo IV. and the Emperor Louis II. Peter relied upon written charters, while Cantius produced witnesses. The Emperor pronounced the claim of the latter to be just, when he and twelve priests swore that the oaths of the witnesses were true and without deceit, whereupon the disputed parishes were adjudged to him.")))},C={type:"tween",duration:1.5,ease:[.6,.01,-.05,.9]},I={initial:{top:"50%"},animate:{top:"20%",transition:C},exit:{top:"50%",transition:C}},B={initial:{top:"50%"},animate:{top:"100%",transition:C},exit:{top:"50%",transition:C}};var L=function(){return i.a.createElement("div",{className:"slide"},i.a.createElement("div",{className:"slide__figure"},i.a.createElement(c.b.h1,{variants:I,initial:"initial",animate:"animate",exit:"exit",className:"slide__figure-title project-title"},"Marotta"),i.a.createElement(c.b.img,{variants:B,initial:"initial",animate:"animate",exit:"exit",className:"slide__figure-img slide__img",src:a(23),alt:"img4"})),i.a.createElement("div",{className:"slide__content"},i.a.createElement("h2",{className:"slide__title"},"Zenosyne"),i.a.createElement("h3",{className:"slide__text"},"by Cindy Brighton on 2/21"),i.a.createElement("button",{className:"slide__back"},i.a.createElement(r.b,{className:"slide__toggle",to:"/"},"\u2190")),i.a.createElement("p",null,"What would one give for a few human touches in connexion with our old silver! We may imagine that our candlesticks of the year 1750 held the flickering wax candles which were guttering when the dawn broke when our great-great-grandfather lost his fortune at cards in the county of \u2014, or maybe it was somebody else\u2019s grandfather. But this is in the realms of fancy, and the fortune is literally fabulous. Why are there no George Morlands in the silversmith\u2019s craft? Cannot the guilds dig out their romantic history from their archives? Just to think that our designer of candelabra and flagons ran a fine career on Hounslow Heath with gamesters and fighting men; or did he, just that once, have a duel with young Lord What\u2019s-his-Name in the Guards, and pinked him? Did not the story get to White\u2019s and to the Cocoa Tree Clubs, how the tradesman scored! But no such thing. All these initials of makers are empty of such vanities. We can do better with prints. Those who possess the engraved work of Ryland have the satisfaction of knowing that he was hounded by Bow Street runners and hid, like the modern Lefroy, at Stepney, and that he was hanged for forgery."),i.a.createElement("p",null,"The scene may readily be imagined. The second of May 1696 had been fixed by Parliament as the last day in which the crowns, half-crowns, and shillings were to be received in payment of taxes for face value. The guards had to be called in to keep order. The Exchequer was besieged by a vast multitude from dawn to midnight. The Act provided that the money was to be brought in by before the 4th of May. The 3rd was a Sunday, therefore Saturday, the 2nd of May, was actually the last day."),i.a.createElement("p",null,"A remarkable use of conjurators to confirm the evidence of witnesses occurs in 850 in a dispute between Cantius, Bishop of Siena, and Peter, Bishop of Arezzo, concerning certain parishes claimed by both. The occasion was a solemn one, for it was before a council held in Rome presided over jointly by Pope Leo IV. and the Emperor Louis II. Peter relied upon written charters, while Cantius produced witnesses. The Emperor pronounced the claim of the latter to be just, when he and twelve priests swore that the oaths of the witnesses were true and without deceit, whereupon the disputed parishes were adjudged to him.")))},W={type:"tween",duration:1.5,ease:[.6,.01,-.05,.9]},A={initial:{top:"50%"},animate:{top:"20%",transition:W},exit:{top:"50%",transition:W}},M={initial:{top:"50%"},animate:{top:"100%",transition:W},exit:{top:"50%",transition:W}};var P=function(){return i.a.createElement("div",{className:"slide"},i.a.createElement("div",{className:"slide__figure"},i.a.createElement(c.b.h1,{variants:A,initial:"initial",animate:"animate",exit:"exit",className:"slide__figure-title project-title"},"Eulalio"),i.a.createElement(c.b.img,{variants:M,initial:"initial",animate:"animate",exit:"exit",className:"slide__figure-img slide__img",src:a(24),alt:"img5"})),i.a.createElement("div",{className:"slide__content"},i.a.createElement("h2",{className:"slide__title"},"Zenosyne"),i.a.createElement("h3",{className:"slide__text"},"by Cindy Brighton on 2/21"),i.a.createElement("button",{className:"slide__back"},i.a.createElement(r.b,{className:"slide__toggle",to:"/"},"\u2190")),i.a.createElement("p",null,"What would one give for a few human touches in connexion with our old silver! We may imagine that our candlesticks of the year 1750 held the flickering wax candles which were guttering when the dawn broke when our great-great-grandfather lost his fortune at cards in the county of \u2014, or maybe it was somebody else\u2019s grandfather. But this is in the realms of fancy, and the fortune is literally fabulous. Why are there no George Morlands in the silversmith\u2019s craft? Cannot the guilds dig out their romantic history from their archives? Just to think that our designer of candelabra and flagons ran a fine career on Hounslow Heath with gamesters and fighting men; or did he, just that once, have a duel with young Lord What\u2019s-his-Name in the Guards, and pinked him? Did not the story get to White\u2019s and to the Cocoa Tree Clubs, how the tradesman scored! But no such thing. All these initials of makers are empty of such vanities. We can do better with prints. Those who possess the engraved work of Ryland have the satisfaction of knowing that he was hounded by Bow Street runners and hid, like the modern Lefroy, at Stepney, and that he was hanged for forgery."),i.a.createElement("p",null,"The scene may readily be imagined. The second of May 1696 had been fixed by Parliament as the last day in which the crowns, half-crowns, and shillings were to be received in payment of taxes for face value. The guards had to be called in to keep order. The Exchequer was besieged by a vast multitude from dawn to midnight. The Act provided that the money was to be brought in by before the 4th of May. The 3rd was a Sunday, therefore Saturday, the 2nd of May, was actually the last day."),i.a.createElement("p",null,"A remarkable use of conjurators to confirm the evidence of witnesses occurs in 850 in a dispute between Cantius, Bishop of Siena, and Peter, Bishop of Arezzo, concerning certain parishes claimed by both. The occasion was a solemn one, for it was before a council held in Rome presided over jointly by Pope Leo IV. and the Emperor Louis II. Peter relied upon written charters, while Cantius produced witnesses. The Emperor pronounced the claim of the latter to be just, when he and twelve priests swore that the oaths of the witnesses were true and without deceit, whereupon the disputed parishes were adjudged to him.")))},z={type:"tween",duration:1.5,ease:[.6,.01,-.05,.9]},R={initial:{top:"50%"},animate:{top:"20%",transition:z},exit:{top:"50%",transition:z}},D={initial:{top:"50%"},animate:{top:"100%",transition:z},exit:{top:"50%",transition:z}};var G=function(){return i.a.createElement("div",{className:"slide"},i.a.createElement("div",{className:"slide__figure"},i.a.createElement(c.b.h1,{variants:R,initial:"initial",animate:"animate",exit:"exit",className:"slide__figure-title project-title",style:{transform:"translate(-50%, -50%)"}},"Angeioletto"),i.a.createElement(c.b.img,{variants:D,initial:"initial",animate:"animate",exit:"exit",className:"slide__figure-img slide__img",src:a(25),alt:"img6"})),i.a.createElement("div",{className:"slide__content"},i.a.createElement("h2",{className:"slide__title"},"Zenosyne"),i.a.createElement("h3",{className:"slide__text"},"by Cindy Brighton on 2/21"),i.a.createElement("button",{className:"slide__back"},i.a.createElement(r.b,{className:"slide__toggle",to:"/"},"\u2190")),i.a.createElement("p",null,"What would one give for a few human touches in connexion with our old silver! We may imagine that our candlesticks of the year 1750 held the flickering wax candles which were guttering when the dawn broke when our great-great-grandfather lost his fortune at cards in the county of \u2014, or maybe it was somebody else\u2019s grandfather. But this is in the realms of fancy, and the fortune is literally fabulous. Why are there no George Morlands in the silversmith\u2019s craft? Cannot the guilds dig out their romantic history from their archives? Just to think that our designer of candelabra and flagons ran a fine career on Hounslow Heath with gamesters and fighting men; or did he, just that once, have a duel with young Lord What\u2019s-his-Name in the Guards, and pinked him? Did not the story get to White\u2019s and to the Cocoa Tree Clubs, how the tradesman scored! But no such thing. All these initials of makers are empty of such vanities. We can do better with prints. Those who possess the engraved work of Ryland have the satisfaction of knowing that he was hounded by Bow Street runners and hid, like the modern Lefroy, at Stepney, and that he was hanged for forgery."),i.a.createElement("p",null,"The scene may readily be imagined. The second of May 1696 had been fixed by Parliament as the last day in which the crowns, half-crowns, and shillings were to be received in payment of taxes for face value. The guards had to be called in to keep order. The Exchequer was besieged by a vast multitude from dawn to midnight. The Act provided that the money was to be brought in by before the 4th of May. The 3rd was a Sunday, therefore Saturday, the 2nd of May, was actually the last day."),i.a.createElement("p",null,"A remarkable use of conjurators to confirm the evidence of witnesses occurs in 850 in a dispute between Cantius, Bishop of Siena, and Peter, Bishop of Arezzo, concerning certain parishes claimed by both. The occasion was a solemn one, for it was before a council held in Rome presided over jointly by Pope Leo IV. and the Emperor Louis II. Peter relied upon written charters, while Cantius produced witnesses. The Emperor pronounced the claim of the latter to be just, when he and twelve priests swore that the oaths of the witnesses were true and without deceit, whereupon the disputed parishes were adjudged to him.")))};var H=function(){return i.a.createElement(c.b.div,{exit:{opacity:0},transition:{duration:.8,type:"tween"}},i.a.createElement("p",{style:{textAlign:"center",fontSize:"24px"}},"404 Error Page Not Found. Go back to ",i.a.createElement(r.b,{to:"/",style:{textDecoration:"underline"}},"home"),"."))};var F=function(){var e=Object(l.f)();return i.a.createElement(c.a,{exitBeforeEnter:!0},i.a.createElement(l.c,{location:e,key:e.key},i.a.createElement(l.a,{path:"/project/1",component:v,exact:!0}),i.a.createElement(l.a,{path:"/project/2",component:x,exact:!0}),i.a.createElement(l.a,{path:"/project/3",component:S,exact:!0}),i.a.createElement(l.a,{path:"/project/4",component:L,exact:!0}),i.a.createElement(l.a,{path:"/project/5",component:P,exact:!0}),i.a.createElement(l.a,{path:"/project/6",component:G,exact:!0}),i.a.createElement(l.a,{path:"/",component:w,exact:!0}),i.a.createElement(l.a,{path:"/bonjourDemo",component:w,exact:!0}),i.a.createElement(l.a,{component:H})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(r.a,null,i.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[28,1,2]]]);
//# sourceMappingURL=main.20433e3e.chunk.js.map