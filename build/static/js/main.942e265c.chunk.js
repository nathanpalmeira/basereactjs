(this.webpackJsonpacacia=this.webpackJsonpacacia||[]).push([[0],{376:function(e,a,t){"use strict";(function(e){t.d(a,"a",(function(){return d}));var n=t(127),r=t(128),o=t(132),i=t(131),l=t(0),c=t.n(l),m=t(161),s=t.n(m),u=t(211),p=t.n(u),d=function(a){Object(o.a)(l,a);var t=Object(i.a)(l);function l(e){var a;return Object(n.a)(this,l),(a=t.call(this,e)).state={columns:[{title:"Nome",field:"name"},{title:"Login",field:"login"},{title:"Senha",field:"pass"}],data:[]},a}return Object(r.a)(l,[{key:"contactBack",value:function(a,t){console.log(a),s.a.post("".concat(e.api,"/usuario/").concat(t),a,{headers:{"Content-Type":"application/json"}}),window.location.reload(!1)}},{key:"componentDidMount",value:function(){var a=this;s.a.get("".concat(e.api,"/usuario/s")).then((function(e){a.setState({data:e.data})}))}},{key:"render",value:function(){var e=this;return this.state.bnk!==this.props.match.params.banco&&(this.state.bnk=this.props.match.params.banco,this.componentDidMount()),c.a.createElement("div",null,c.a.createElement(p.a,{title:"Usu\xe1rio",columns:this.state.columns,data:this.state.data.data,editable:{onRowAdd:function(a){return new Promise((function(t){setTimeout((function(){t(),e.contactBack(a,"c")}),600)}))},onRowUpdate:function(a,t){return new Promise((function(n){setTimeout((function(){n(),t&&e.contactBack(a,"u")}),600)}))},onRowDelete:function(a){return new Promise((function(t){setTimeout((function(){t(),e.contactBack(a,"d")}),600)}))}},localization:{body:{emptyDataSourceMessage:"Nenhum registro para exibir",editRow:{deleteText:"Tem certeza que deseja deletar esse registro?"}},header:{actions:"A\xe7\xf5es"},toolbar:{searchTooltip:"Pesquisar",searchPlaceholder:"Pesquisar"},pagination:{labelRowsSelect:"linhas",labelDisplayedRows:"{count} de {from}-{to}",firstTooltip:"Primeira p\xe1gina",previousTooltip:"P\xe1gina anterior",nextTooltip:"Pr\xf3xima p\xe1gina",lastTooltip:"\xdaltima p\xe1gina"}}}))}}]),l}(l.Component)}).call(this,t(111))},386:function(e,a,t){"use strict";(function(e){t.d(a,"a",(function(){return O}));var n=t(0),r=t.n(n),o=t(530),i=t(270),l=t(525),c=t(218),m=t(274),s=t(276),u=t(529),p=t(199),d=t(387),E=t.n(d),h=t(72),f=t(269),g=t(524),b=t(161),v=t.n(b);t(510);function y(){return r.a.createElement(h.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(u.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var w=Object(f.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),x=function(a){a.preventDefault(),function(a,t){v.a.post("".concat(e.api,"/login"),{login:a,pass:t},{headers:{"Content-Type":"application/json"}}).then((function(e){"sucesso"===e.data?(localStorage.setItem("@systemacacia/login",a),window.location.reload()):alert("Usu\xe1rio ou Senha invalido. Se persistir contate o administrato.")}))}(a.target.elements.login.value,a.target.elements.login.value)};function O(){var e=w();return r.a.createElement(g.a,{component:"main",maxWidth:"xs"},r.a.createElement(l.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(o.a,{className:e.avatar},r.a.createElement(E.a,null)),r.a.createElement(h.a,{component:"h1",variant:"h5"},"Log in"),r.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:x},r.a.createElement(c.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"login",label:"Usu\xe1rio",name:"login",autoComplete:"login",autoFocus:!0}),r.a.createElement(c.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"pass",label:"Senha",type:"password",id:"pass",autoComplete:"current-password"}),r.a.createElement(m.a,{control:r.a.createElement(s.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(i.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Entrar"))),r.a.createElement(p.a,{mt:8},r.a.createElement(y,null)))}}).call(this,t(111))},396:function(e,a,t){e.exports=t(511)},510:function(e,a,t){(function(e){e.api="https://backendacacia.herokuapp.com"}).call(this,t(111))},511:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(16),i=t.n(o),l=t(229),c=t(202),m=t(107),s=t(2),u=t(269),p=t(525),d=t(66),E=t(199),h=t(550),f=t(344),g=t(519),b=t(72),v=t(552),y=t(265),w=t(551),x=t(524),O=t(529),j=t(384),S=t.n(j),T=t(385),P=t.n(T),C=t(512),k=t(539),B=t(330),N=t(540),R=t(374),D=t.n(R),I=t(375),W=t.n(I),z=t(280),q=t.n(z),F=t(126),A=t(264),G=t.n(A),M=r.a.createElement("div",null,r.a.createElement(C.a,{button:!0,component:F.b,to:"/"},r.a.createElement(k.a,null,r.a.createElement(D.a,null)),r.a.createElement(B.a,{primary:"Home"})),r.a.createElement(C.a,{button:!0,component:F.b,to:"/cadusuario"},r.a.createElement(k.a,null,r.a.createElement(G.a,null)),r.a.createElement(B.a,{primary:"Usu\xe1rio"})),r.a.createElement(C.a,{button:!0},r.a.createElement(k.a,null,r.a.createElement(W.a,null)),r.a.createElement(B.a,{primary:"Calcular"}))),U=r.a.createElement("div",null,r.a.createElement(N.a,{inset:!0},"Relat\xf3rios"),r.a.createElement(C.a,{button:!0},r.a.createElement(k.a,null,r.a.createElement(q.a,null)),r.a.createElement(B.a,{primary:"Clientes"})),r.a.createElement(C.a,{button:!0},r.a.createElement(k.a,null,r.a.createElement(q.a,null)),r.a.createElement(B.a,{primary:"C\xe1lculos Realizados"}))),H=t(28),J=t(376),L=t(127),V=t(128),Y=t(132),X=t(131),K=function(e){Object(Y.a)(t,e);var a=Object(X.a)(t);function t(e){var n;return Object(L.a)(this,t),(n=a.call(this,e)).state={},n}return Object(V.a)(t,[{key:"render",value:function(){return r.a.createElement("center",null," ",r.a.createElement("br",null),r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),"  ",r.a.createElement("h1",null," Ac\xe1cia Gold ")," ")}}]),t}(n.Component),Q=t(284),Z=t(283),$=t.n(Z),_=t(383),ee=t(90),ae=t(97),te=t(134),ne=t(547),re=t(343),oe=t(266),ie=t(521),le=t(364),ce=t(274),me=t(270),se=t(211),ue=t.n(se),pe=function(){var e=Object(_.a)($.a.mark((function e(a){var t;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(e){return new Promise((function(a){return setTimeout(a,e)}))},e.next=3,t(300);case 3:window.alert(JSON.stringify(a,0,2));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),de=function(e){var a={};return e.nome||(a.nome="Obridat\xf3rio"),e.tpdocumento||(a.tpdocumento="Obridat\xf3rio"),e.documento||(a.documento="Obridat\xf3rio"),e.documento||(a.documento="Obridat\xf3rio"),e.metal||(a.metal="Obridat\xf3rio"),e.cotacao||(a.cotacao="Obridat\xf3rio"),a},Ee=function(e){Object(Y.a)(t,e);var a=Object(X.a)(t);function t(e){var n;return Object(L.a)(this,t),(n=a.call(this,e)).state={columns:[{title:"Peso (Grama)",field:"peso",type:"numeric"},{title:"Pureza (%)",field:"pureza",type:"numeric"}],data:[{peso:100,pureza:80},{peso:130,pureza:85},{peso:200,pureza:90}]},n}return Object(V.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{padding:16,margin:"auto",maxWidth:800}},r.a.createElement(p.a,null),r.a.createElement(b.a,{variant:"h4",align:"center",component:"h1",gutterBottom:!0},"Calcular"),r.a.createElement(ee.b,{onSubmit:pe,initialValues:{employed:!0,stooge:"larry"},validate:de,render:function(a){var t=a.handleSubmit,n=(a.reset,a.submitting);a.pristine,a.values;return r.a.createElement("form",{onSubmit:t,noValidate:!0},r.a.createElement(te.a,{style:{padding:16}},r.a.createElement(ne.a,{container:!0,alignItems:"flex-start",spacing:2},r.a.createElement(ne.a,{item:!0,xs:12},r.a.createElement(ee.a,{fullWidth:!0,required:!0,name:"nome",component:ae.TextField,type:"text",label:"Nome do Cliente"})),r.a.createElement(ne.a,{item:!0,xs:4},r.a.createElement(ee.a,{fullWidth:!0,name:"tpdocumento",component:ae.Select,label:"Tipo de Documento",formControlProps:{fullWidth:!0}},r.a.createElement(re.a,{value:"cpf"},"CPF"),r.a.createElement(re.a,{value:"cnpj"},"CNPJ"))),r.a.createElement(ne.a,{item:!0,xs:8},r.a.createElement(ee.a,{fullWidth:!0,required:!0,name:"documento",component:ae.TextField,type:"text",label:"Documento"})),r.a.createElement(ne.a,{item:!0,xs:6},r.a.createElement(oe.a,{component:"fieldset"},r.a.createElement(ie.a,{component:"legend"},"Metal"),r.a.createElement(le.a,{row:!0},r.a.createElement(ce.a,{label:"Ouro",control:r.a.createElement(ee.a,{name:"metal",component:ae.Radio,type:"ouro",value:"ouro"})}),r.a.createElement(ce.a,{label:"Prata",control:r.a.createElement(ee.a,{name:"metal",component:ae.Radio,type:"prata",value:"prata"})}),r.a.createElement(ce.a,{label:"Cobre",control:r.a.createElement(ee.a,{name:"metal",component:ae.Radio,type:"cobre",value:"cobre"})})))),r.a.createElement(ne.a,{item:!0,xs:6},r.a.createElement(ee.a,{name:"cotacao",fullWidth:!0,required:!0,component:ae.TextField,type:"cotacao",label:"Cota\xe7\xe3o"})),r.a.createElement(ne.a,{item:!0,xs:12},r.a.createElement(ue.a,{title:"Itens",columns:e.state.columns,data:e.state.data,options:{search:!1},editable:{onRowAdd:function(a){return new Promise((function(t){setTimeout((function(){t(),e.setState((function(e){var t=Object(Q.a)(e.data);return t.push(a),Object(m.a)(Object(m.a)({},e),{},{data:t})}))}),600)}))},onRowDelete:function(a){return new Promise((function(t){setTimeout((function(){t(),e.setState((function(e){var t=Object(Q.a)(e.data);return t.splice(t.indexOf(a),1),Object(m.a)(Object(m.a)({},e),{},{data:t})}))}),600)}))}},localization:{body:{emptyDataSourceMessage:"Nenhum registro para exibir",editRow:{deleteText:"Tem certeza que deseja deletar esse registro?"}},header:{actions:"Excluir"},toolbar:{searchTooltip:"Pesquisar",searchPlaceholder:"Pesquisar"},pagination:{labelRowsSelect:"linhas",labelDisplayedRows:"{count} de {from}-{to}",firstTooltip:"Primeira p\xe1gina",previousTooltip:"P\xe1gina anterior",nextTooltip:"Pr\xf3xima p\xe1gina",lastTooltip:"\xdaltima p\xe1gina"}}})),r.a.createElement(ne.a,{item:!0,style:{marginTop:16}},r.a.createElement(me.a,{variant:"contained",color:"primary",type:"submit",disabled:n},"Calcular")))))}}))}}]),t}(n.Component);function he(){return r.a.createElement(b.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(O.a,{color:"inherit",href:"https://material-ui.com/"},"Ac\xe1cia Gold")," ",(new Date).getFullYear(),".")}var fe=Object(u.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(m.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,height:"60px",transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(c.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},sair:{height:1}}}));function ge(){var e=fe(),a=r.a.useState(!0),t=Object(l.a)(a,2),n=t[0],o=t[1],i=r.a.useState(!0),c=Object(l.a)(i,2),m=(c[0],c[1],r.a.useState(null)),u=Object(l.a)(m,2),O=u[0];u[1],Boolean(O);return r.a.createElement("div",{className:e.root},r.a.createElement(p.a,null),r.a.createElement(h.a,{position:"absolute",className:Object(s.a)(e.appBar,n&&e.appBarShift)},r.a.createElement(f.a,{className:e.toolbar},r.a.createElement(y.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){o(!0)},className:Object(s.a)(e.menuButton,n&&e.menuButtonHidden)},r.a.createElement(S.a,null)),r.a.createElement(b.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"Ac\xe1cia Gold"),r.a.createElement(y.a,{color:"inherit",onClick:function(){localStorage.removeItem("@systemacacia/login"),window.location.reload()}},r.a.createElement(w.a,{color:"secondary"},r.a.createElement("h6",null,"Sair"))))),r.a.createElement(d.a,{variant:"permanent",classes:{paper:Object(s.a)(e.drawerPaper,!n&&e.drawerPaperClose)},open:n},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(y.a,{onClick:function(){o(!1)}},r.a.createElement(P.a,null))),r.a.createElement(v.a,null),r.a.createElement(g.a,null,M),r.a.createElement(v.a,null),r.a.createElement(g.a,null,U)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(x.a,{maxWidth:"lg",className:e.container},r.a.createElement(H.c,null,"\\",r.a.createElement(H.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(K,null)}}),r.a.createElement(H.a,{exact:!0,path:"/cadusuario",render:function(e){return r.a.createElement(J.a,e)}}),r.a.createElement(H.a,{exact:!0,path:"/calcular",render:function(e){return r.a.createElement(Ee,e)}})),r.a.createElement(E.a,{pt:4},r.a.createElement(he,null)))))}var be=t(386);null==localStorage.getItem("@systemacacia/login")?i.a.render(r.a.createElement(be.a,null),document.getElementById("root")):i.a.render(r.a.createElement(F.a,null,r.a.createElement(ge,null)),document.getElementById("root"))}},[[396,1,2]]]);
//# sourceMappingURL=main.942e265c.chunk.js.map