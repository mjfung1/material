(this["webpackJsonpmaterial-ui-tut"]=this["webpackJsonpmaterial-ui-tut"]||[]).push([[0],{101:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(12),s=a.n(r),i=(a(101),a(30)),c=a(14),l=a(53),h=a(13),d=a(161),j=a(151),u=a(154),b=a(156),p=a(183),m=a(157),y=a(159),O=a(37),g=a(160),x=a(158),f=a(179),v=a.p+"static/media/mose.084908bb.jpeg",w=(a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a(4)),k=Object(j.a)({timeago:{fontSize:"10px"},contact:{fontSize:"12px"}});var T=function(e){var t=e.note,a=e.handleDelete,o=k(t);return console.log(t.person),Object(w.jsx)("div",{children:Object(w.jsxs)(u.a,{elevation:1,children:[Object(w.jsx)(b.a,{avatar:Object(w.jsx)(p.a,{src:"../avatars/".concat(t.person,".jpeg")}),action:Object(w.jsx)(m.a,{onClick:function(){return a(t.id)},children:Object(w.jsx)(x.a,{})}),title:t.title,subheader:Object(w.jsxs)(y.a,{container:!0,children:[Object(w.jsx)(y.a,{item:!0,children:Object(w.jsxs)(O.a,{variant:"body2",className:o.contact,children:["@",t.person]})}),Object(w.jsx)(y.a,{item:!0,children:Object(w.jsx)(O.a,{variant:"body2",className:o.timeago,children:Object(f.a)(new Date(t.createdAt),new Date,{addSuffix:!0})})})]})}),Object(w.jsx)(g.a,{children:Object(w.jsx)(O.a,{variant:"body2",color:"textSecondary",children:t.details})})]})})},S=a(86);function I(e){var t=e.handleDelete,a=e.notes;return Object(w.jsx)(d.a,{children:Object(w.jsx)(S.a,{breakpointCols:{default:4,1100:3,700:2,500:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:a.map((function(e){return Object(w.jsx)("div",{xm:12,md:6,lg:4,children:Object(w.jsx)(T,{note:e,handleDelete:t})},e.id)}))})})}var N=a(84),A=a.n(N),M=a(178),D=a(162),C=a(163),W=a(184),Z=a(165),B=a(180),F=a(166),P=Object(j.a)({btn:{marginTop:20,marginBottom:20,display:"block"}});function K(e){var t=e.database,a=e.addNote,n=P(),r=Object(h.f)(),s=Object(o.useState)(""),i=Object(c.a)(s,2),l=i[0],j=i[1],u=Object(o.useState)(""),b=Object(c.a)(u,2),p=b[0],m=b[1],y=Object(o.useState)(!1),g=Object(c.a)(y,2),x=g[0],f=g[1],v=Object(o.useState)(!1),k=Object(c.a)(v,2),T=k[0],S=k[1],I=Object(o.useState)("todos"),N=Object(c.a)(I,2),K=N[0],G=N[1],z=new Date;return Object(w.jsxs)(d.a,{children:[Object(w.jsx)(O.a,{variant:"h6",color:"textSecondary",component:"h2",gutterBottom:!0,children:"Create a New Quote"}),Object(w.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(!1),S(!1),""===l&&f(!0),""===p&&S(!0);var o=t.length+","+K;a({id:o,title:l,details:p,person:K,createdAt:z}),r.push("/")},autoComplete:"off",noValidate:!0,children:[Object(w.jsx)(M.a,{onChange:function(e){return j(e.target.value)},className:n.btn,variant:"outlined",label:"Quote Title",error:x,fullWidth:!0,required:!0}),Object(w.jsx)(M.a,{onChange:function(e){return m(e.target.value)},className:n.btn,variant:"outlined",label:"Details",error:T,multiline:!0,rows:4,fullWidth:!0,required:!0}),Object(w.jsxs)(D.a,{className:n.btn,children:[Object(w.jsx)(C.a,{children:"Name"}),Object(w.jsxs)(W.a,{value:K,onChange:function(e){return G(e.target.value)},children:[Object(w.jsx)(Z.a,{label:"Prison Mike",value:"prisonMike",control:Object(w.jsx)(B.a,{})}),Object(w.jsx)(Z.a,{label:"Michael Scarn",value:"michaelScarn",control:Object(w.jsx)(B.a,{})}),Object(w.jsx)(Z.a,{label:"Dwight Schrute",value:"dwightSchrute",control:Object(w.jsx)(B.a,{})}),Object(w.jsx)(Z.a,{label:"Michael Scott",value:"michaelScott",control:Object(w.jsx)(B.a,{})}),Object(w.jsx)(Z.a,{label:"Stanley Hudson",value:"stanleyHudson",control:Object(w.jsx)(B.a,{})}),Object(w.jsx)(Z.a,{label:"Kevin Malone",value:"kevinMalone",control:Object(w.jsx)(B.a,{})}),Object(w.jsx)(Z.a,{label:"Pam Beesly",value:"pamBeesly",control:Object(w.jsx)(B.a,{})}),Object(w.jsx)(Z.a,{label:"Toby Flenderson",value:"tobyFlenderson",control:Object(w.jsx)(B.a,{})}),Object(w.jsx)(Z.a,{label:"Angela Martin",value:"angelaMartin",control:Object(w.jsx)(B.a,{})}),Object(w.jsx)(Z.a,{label:"Kelly Kapoor",value:"kellyKapoor",control:Object(w.jsx)(B.a,{})}),Object(w.jsx)(Z.a,{label:"Oscar Martinez",value:"oscarMartinez",control:Object(w.jsx)(B.a,{})}),Object(w.jsx)(Z.a,{label:"Gabe",value:"gabeLewis",control:Object(w.jsx)(B.a,{})})]})]}),Object(w.jsx)(F.a,{variant:"contained",color:"secondary",type:"submit",endIcon:Object(w.jsx)(A.a,{}),children:"Submit"})]})]})}var G=a(85),z=a(176),H=a(65),E=a(64),L=a(182),Q=a(164),Y=a(173),q=a(174),J=a(175),R=a(167),V=a(168),_=a(169),U=a(170),X=a(171),$=a(172),ee=a(177),te=Object(j.a)((function(e){return{page:{background:"#f9f9f9",width:"100%",padding:e.spacing(3)},drawer:{width:240},drawerPaper:{width:240},root:{display:"flex"},active:{color:H.a[500]},title:{padding:e.spacing(2)},appbar:{width:"calc(100% - ".concat(240,"px)")},toolbar:e.mixins.toolbar,date:{flexGrow:1},avatar:{marginLeft:e.spacing(2)}}}));var ae=function(e){var t=e.children,a=te(),o=Object(h.f)(),n=Object(h.g)(),r=[{text:"Fave Quotes",icon:Object(w.jsx)(R.a,{color:"secondary"}),path:"/"},{text:"Add Fave Quote",icon:Object(w.jsx)(V.a,{color:"secondary"}),path:"/create"},{text:"Github",icon:Object(w.jsx)(_.a,{color:"secondary"}),path:"https://github.com/mjfung1"},{text:"LinkedIn",icon:Object(w.jsx)(U.a,{color:"secondary"}),path:"https://www.linkedin.com/in/miguel-fung-5084691b5/"},{text:"Portfolio",icon:Object(w.jsx)(V.a,{color:"secondary"}),path:"https://mjfung1.github.io/"}];return Object(w.jsxs)("div",{className:a.root,children:[Object(w.jsx)(X.a,{elevation:0,className:a.appbar,children:Object(w.jsxs)($.a,{children:[Object(w.jsx)(O.a,{className:a.date,children:Object(ee.a)(new Date,"eeee d")}),Object(w.jsx)(O.a,{children:"Mose"}),Object(w.jsx)(p.a,{className:a.avatar,src:v})]})}),Object(w.jsxs)(L.a,{variant:"permanent",anchor:"left",className:a.drawer,classes:{paper:a.drawerPaper},children:[Object(w.jsx)(O.a,{variant:"h4",className:a.title,children:"the office"}),Object(w.jsx)(Q.a,{children:r.map((function(e){return Object(w.jsxs)(Y.a,{onClick:function(){return o.push(e.path)},button:!0,className:n.pathname===e.path?a.active:null,children:[Object(w.jsx)(q.a,{children:e.icon}),Object(w.jsx)(J.a,{primary:e.text})]},e.text)}))})]}),Object(w.jsxs)("div",{className:a.page,children:[Object(w.jsx)("div",{className:a.toolbar}),t]})]})},oe=Object(G.a)({palette:{primary:H.a,secondary:E.a},typography:{fontFamily:"Kaisei Tokumin",fontWeightLight:400,fontWeightRegular:500,fontWeightMedium:700,fontWeightBold:800}}),ne=[{title:"Food in prison",details:"Gruel sandwiches. Gruel omelets. Nothing but gruel. Plus, you can eat your own hair.",person:"prisonMike",createdAt:"2021-09-04T15:25:33.006Z",id:3},{title:"Chilli recipe",details:"At least once a year I like to bring in some of my Kevin's Famous Chili. The trick is to undercook the onions. Everybody is going to get to know each other in the pot. I'm serious about this stuff. I'm up the night before, pressing garlic, and dicing whole tomatoes. I toast my own ancho chiles. It's a recipe passed down from Malones for generations - it's probably the thing I do best.\"",person:"kevinMalone",createdAt:"2021-09-04T12:25:33.006Z",id:4},{title:"The Scarn",details:"You jump to the right and you shake a hand\nThen you jumpy to the left and you shake that hand\nMeet new friends\nTie some yarn\nAnd that\u2019s how you do the Scarn",person:"michaelScarn",createdAt:"2021-09-02T15:25:33.006Z",id:5},{title:"Heroes",details:"No, don\u2019t call me a hero. Do you know who the real heroes are? The guys who wake up every morning and go into their normal jobs and get a distress call from the Commissioner and take off their glasses and change into capes and fly around fighting crime. Those are the real heroes.",person:"dwightSchrute",createdAt:"2021-08-04T15:25:33.006Z",id:6},{title:"Pregnancy",details:"I do not like pregnant women in my workspace. They\u2019re always complaining. I have varicose veins, too. I have swollen ankles. I\u2019m constantly hungry. Do you think my nipples don\u2019t get sore too? Do you think I don\u2019t need to know the fastest way to the hospital?",person:"stanleyHudson",createdAt:"2021-08-04T15:25:33.006Z",id:7},{title:"Thoughts on friends...",details:"I have six roommates, which are better than friends because they have to give you one month's notice before they leave.",person:"tobyFlenderson",createdAt:"2021-09-02T15:25:33.006Z",id:8},{title:"Talking smack",details:"I don\u2019t talk trash, I talk smack. They\u2019re totally different. Trash talk is all hypothetical, like: \u2018Your mom is so fat she can eat the Internet.\u2019 But smack talk is happening like right now, like: \u2018You\u2019re ugly and I know it for a fact \u2019cause I got the evidence right there",person:"kellyKapoor",createdAt:"2021-09-01T15:25:33.006Z",id:9},{title:"Oops!...I Did It Again.",details:"It's Britney b*tch!",person:"michaelScott",createdAt:"2021-09-01T15:25:33.006Z",id:10},{title:"Bros before hoes. Why?",details:"Because your bros are always there for you. They got your back after your ho rips your heart out for no good reason. And you were nothing but great to your ho, and you told her that she was the only ho for you. And that she was better than all the other hoes in the world. And then suddenly... she's not yo' ho no mo'.",person:"michaelScott",createdAt:"2021-09-02T15:25:33.006Z",id:11},{title:"Prison is no joke",details:"The worst thing about prison was the Dementors. They were flying all over the place and they were scary and they\u2019d come down and they\u2019d suck the soul out of your body and it hurt!",person:"prisonMike",createdAt:"2021-09-03T15:25:33.006Z",id:12},{title:"Why is this(job search) so hard?",details:"That's what she said",person:"michaelScott",createdAt:"2021-09-01T15:25:33.006Z",id:13},{title:"What is the most important thing for a company? Is it the cash flow? Is it the inventory?",details:"Nuh-uh. It\u2019s the people. The people. My proudest moment here was not when I increased profits by 17%, or when I cut expenses without losing a single employee. No, no, no, no, no. It was a young Guatamalan guy. First job in the country, barely spoke English. Came to me and said, \u201cMr. Scott, would you be the godfather of my child?\u201d Wow. Wow. Wow. Didn\u2019t work out in the end. We had to let him go. He sucked",person:"michaelScott",createdAt:"2021-08-30T15:25:33.006Z",id:14},{title:"The Dundies!",details:"The Dundies are kind of like a kid's birthday party, and you go, and there's really nothing for you to do there, but the kid's having a really good time, so you're, you're kinda there, that's...that's kinda what it's like.",person:"oscarMartinez",createdAt:"2021-09-04T15:25:33.006Z",id:15}];var re=function(){var e=Object(o.useState)([]),t=Object(c.a)(e,2),a=t[0],n=t[1];return Object(o.useEffect)((function(){n(ne)}),[]),Object(w.jsx)(z.a,{theme:oe,children:Object(w.jsx)(l.a,{children:Object(w.jsx)(ae,{children:Object(w.jsxs)(h.c,{children:[Object(w.jsx)(h.a,{exact:!0,path:"/",children:Object(w.jsx)(I,{notes:a,handleDelete:function(e){var t=a.filter((function(t){return t.id!==e}));n(t)}})}),Object(w.jsx)(h.a,{path:"/create",children:Object(w.jsx)(K,{addNote:function(e){n([].concat(Object(i.a)(a),[e]))},database:ne})})]})})})})};s.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(re,{})}),document.getElementById("root"))}},[[116,1,2]]]);
//# sourceMappingURL=main.bf9c491d.chunk.js.map