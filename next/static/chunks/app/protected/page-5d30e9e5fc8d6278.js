(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[714],{3575:function(e,t,s){Promise.resolve().then(s.bind(s,58))},58:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return G}});var n=s(9268),i=s(4751);function r(){return(0,n.jsx)("button",{className:"text-stone-400 hover:text-stone-200 transition-all",onClick:()=>(0,i.signOut)(),children:"Goddammit, sign me out!"})}var l=s(4330),o=s.n(l),a=s(6006),c=s(5660),d=s(1628),m=s(8301),h=s(946),p=s(646),u=s(4357),j=s(9959),x=s.n(j),Z=s(5571),g=s(362),y=s(2639),f=s(7457),C=s(1777),b=s(4244),P=s(4195),v=s(5834),T=s(8741);let I=(0,y.Pi)(e=>{let{id:t,handleOk:s}=e,[i]=f.Z.useForm(),{store:r}=(0,p.oR)(),[l,o]=(0,a.useState)("hex"),[c,m]=(0,a.useState)("#1677ff"),[u,j]=(0,a.useState)([]);return(0,a.useMemo)(()=>"string"==typeof c?c:c.toHexString(),[c]),(0,n.jsxs)(f.Z,{form:i,layout:"vertical",onFinish:e=>{let s=u.map(e=>e.response.name);console.log({...e,img:s,modelId:t}),console.log(u),fetch("/api/items/item",{method:"POST",body:JSON.stringify({...e,img:s,modelId:t})}).then(e=>{e.json().then(e=>{d.ZP.success("Успешно создан товар ".concat(e.name)),i.resetFields(),r.setModels()}).catch(()=>{d.ZP.error("Произошла ошибка")})})},autoComplete:"off",children:[(0,n.jsx)(f.Z.Item,{name:"name",label:"Название модели",rules:[{required:!0},{type:"string",min:1}],children:(0,n.jsx)(C.Z,{placeholder:"Название модели"})}),(0,n.jsx)(f.Z.Item,{name:"prise",label:"Цена",rules:[{required:!0},{type:"number",min:0}],children:(0,n.jsx)(b.Z,{})}),(0,n.jsx)(f.Z.Item,{name:"img",label:"Изображения",required:!0,children:(0,n.jsx)(P.Z,{multiple:!0,action:"/api/upload",onChange:e=>{let t=[...e.fileList];j(t=t.map(e=>(e.response&&(e.url=e.response.url),e)))},listType:"picture-card",children:(0,n.jsxs)("div",{children:[(0,n.jsx)(T.Z,{}),(0,n.jsx)("div",{style:{marginTop:8},children:"Загрузить"})]})})}),(0,n.jsx)(f.Z.Item,{children:(0,n.jsx)(v.Z,{children:(0,n.jsx)(h.ZP,{type:"primary",htmlType:"submit",children:"Добавить"})})})]})});var S=s(3536),k=s(4058),_=s(782),E=e=>{let{props:t,open:s}=e,[i]=f.Z.useForm(),{store:r}=(0,p.oR)(),[l,o]=(0,a.useState)([]);return console.log((0,u.ZN)(t.name)),(0,a.useEffect)(()=>{i.setFieldsValue({name:t.name,prise:t.prise});let e=t.img.map((e,t)=>({uid:t,name:"image.png",status:"done",response:{name:e},url:e}));o(e)},[t]),(0,n.jsxs)(f.Z,{form:i,layout:"vertical",onFinish:e=>{let n=l.map(e=>e.response.name);fetch("/api/items/item",{method:"PUT",body:JSON.stringify({...e,img:n,id:t.id})}).then(e=>{e.json().then(e=>{d.ZP.success("Успешно"),i.resetFields(),r.setModels(),s()}).catch(()=>{d.ZP.error("Произошла ошибка")})})},autoComplete:"off",children:[(0,n.jsx)(f.Z.Item,{name:"name",label:"Название модели",rules:[{required:!1},{type:"string",min:1}],children:(0,n.jsx)(C.Z,{placeholder:"Название модели"})}),(0,n.jsx)(f.Z.Item,{name:"prise",label:"Цена",rules:[{required:!1},{type:"number",min:0}],children:(0,n.jsx)(b.Z,{})}),(0,n.jsx)(f.Z.Item,{name:"img",label:"Изображения",required:!0,children:(0,n.jsx)(P.Z,{multiple:!0,action:"/api/upload",onChange:e=>{let t=[...e.fileList];o(t=t.map(e=>(e.response&&(e.url=e.response.url),e)))},listType:"picture-card",fileList:l,children:(0,n.jsxs)("div",{children:[(0,n.jsx)(T.Z,{}),(0,n.jsx)("div",{style:{marginTop:8},children:"Загрузить"})]})})}),(0,n.jsx)(f.Z.Item,{children:(0,n.jsx)(v.Z,{children:(0,n.jsx)(h.ZP,{type:"primary",htmlType:"submit",children:"Изменить"})})})]})},F=s(2444),N=e=>{let{id:t,setOpen:s}=e,[i,r]=(0,a.useState)([]),[l]=f.Z.useForm(),[o,c]=(0,a.useState)("");(0,a.useEffect)(()=>{fetch("/api/items/feature",{method:"GET",headers:{"Content-Type":"application/json","X-ID":t}}).then(async e=>{e.json().then(e=>{console.log(e),r(e)})}).catch(()=>{d.ZP.error("Произошла ошибка")})},[]);let m=e=>{console.log(e),fetch("/api/items/feature",{method:"DELETE",headers:{"Content-Type":"application/json","X-ID":e,"F-ID":t}}).then(e=>{e.json().then(e=>{d.ZP.success("Успешно удалено ".concat(e.name)),r(e),l.resetFields()}).catch(()=>{d.ZP.error("Произошла ошибка")})})};return(0,n.jsxs)("div",{children:[i.map(e=>(0,n.jsxs)(v.Z,{style:{display:"flex",marginBottom:8,justifyContent:"space-around",border:"1px solid #ccc"},align:"baseline",children:[(0,n.jsxs)("span",{children:["Название: ",e.name]}),(0,n.jsxs)("span",{children:["Значение: ",e.value]}),(0,n.jsx)(F.Z,{onClick:()=>m(e.id)})]},"Key")),(0,n.jsxs)(f.Z,{form:l,layout:"vertical",onFinish:e=>{console.log(e),fetch("/api/items/feature",{method:"POST",body:JSON.stringify({...e,itemId:t})}).then(e=>{e.json().then(e=>{d.ZP.success("Успешно создан товар ".concat(e.name)),l.resetFields(),fetch("/api/items/feature",{method:"GET",headers:{"Content-Type":"application/json","X-ID":t}}).then(async e=>{e.json().then(e=>{console.log(e),r(e)})}).catch(()=>{d.ZP.error("Произошла ошибка")})}).catch(()=>{d.ZP.error("Произошла ошибка")})})},autoComplete:"off",children:[(0,n.jsxs)(v.Z,{style:{display:"flex",marginBottom:8},align:"baseline",children:[(0,n.jsx)(f.Z.Item,{name:"name",label:"Название",rules:[{required:!0,message:"Заполните поле"}],children:(0,n.jsx)(C.Z,{placeholder:"Название характеристики"})}),(0,n.jsx)(f.Z.Item,{name:"value",label:"Значение",rules:[{required:!0,message:"Заполните поле"}],children:(0,n.jsx)(C.Z,{placeholder:"Значение характеристики"})})]},"Key"),(0,n.jsx)(f.Z.Item,{children:(0,n.jsx)(h.ZP,{type:"primary",htmlType:"submit",children:"Добавить"})})]})]})};let O=(0,y.Pi)(e=>{let{props:t}=e,{store:s}=(0,p.oR)(),[i,r]=(0,a.useState)(!1),[l,o]=(0,a.useState)(!1),[c,h]=(0,a.useState)(!1),[j,y]=(0,a.useState)(!1),[f,C]=(0,a.useState)({});(0,a.useEffect)(()=>{C(t),console.log((0,u.ZN)(t))},[]);let b=()=>{h(!1)},P=()=>{y(!1)},v=e=>{console.log(e),r(!0),fetch("/api/items/item",{method:"DELETE",headers:{"Content-Type":"application/json","X-ID":e}}).then(async e=>{e.json().then(()=>{r(!1),s.setCategories(),s.setModels(),o(!1)})}).catch(()=>{d.ZP.error("Произошла ошибка")})};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Z.default,{className:x().card,cover:(0,n.jsx)("img",{width:"99%",alt:"example",src:t.img[0]}),actions:[(0,n.jsx)(S.Z,{onClick:()=>h(!c)},t.id+" edit"),(0,n.jsx)(m.Z,{placement:"top",title:"Удалить",onConfirm:()=>v(t.id),onCancel:e=>{o(!1)},open:l,okButtonProps:{loading:i},okText:"Да",cancelText:"Нет",children:(0,n.jsx)(k.Z,{onClick:()=>{C(t),o(!0)}},"remove")},t.id+"remove"),(0,n.jsx)(_.Z,{onClick:()=>y(!c)},t.id+"features")],children:(0,n.jsxs)("div",{className:x().cardbody,children:[(0,n.jsx)("span",{children:(0,n.jsx)("b",{children:t.name})}),(0,n.jsx)("span",{children:t.prise+"руб"})," "]})}),(0,n.jsx)(g.Z,{title:"Редактировать модель",open:c,footer:[],onOk:b,onCancel:()=>{h(!1)},children:(0,n.jsx)(E,{props:t,open:b,isOpen:c})}),(0,n.jsx)(g.Z,{title:"Характеристики",open:j,onOk:P,onCancel:()=>{y(!1)},children:(0,n.jsx)(N,{id:t.id,open:P})})]})}),{Meta:w}=Z.default,q=(0,y.Pi)(e=>{let{id:t,title:s,items:i,img:r}=e,{store:l}=(0,p.oR)(),[o,c]=(0,a.useState)(!1),[u,j]=(0,a.useState)(!1),[y,f]=(0,a.useState)(!1),C=()=>{f(!1)};return(console.log(r),console.log(i),0===s.length)?(0,n.jsx)("div",{children:"Нету производителя"}):(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:x().btnimgcard,children:[(0,n.jsx)("img",{src:r,alt:"",width:100}),0===i.length&&(0,n.jsx)(m.Z,{title:"Удаление модели",onConfirm:e=>{c(!0),fetch("/api/items/model",{method:"DELETE",headers:{"Content-Type":"application/json","X-ID":t}}).then(async e=>{e.json().then(()=>{c(!1),l.setModels(),j(!1)})}).catch(()=>{d.ZP.error("Произошла ошибка")})},onCancel:e=>{j(!1)},open:u,okButtonProps:{loading:o},okText:"Да",cancelText:"Нет",children:(0,n.jsxs)(h.ZP,{danger:!0,onClick:()=>{j(!0)},children:["Удалить модель ",s]})})]}),(0,n.jsxs)("div",{className:x().cardrow,children:[(0,n.jsxs)(Z.default,{hoverable:!0,className:x().card,title:"Создать",children:[(0,n.jsx)(h.ZP,{type:"primary",onClick:()=>{f(!0)},children:"Создать"}),(0,n.jsx)(g.Z,{title:"Создать модель",open:y,onOk:C,onCancel:()=>{f(!1)},footer:[],children:(0,n.jsx)(I,{id:t,open:C})})]}),i.map(e=>(0,n.jsx)(O,{props:e},e.id))]})]})}),D=(0,y.Pi)(e=>{let{id:t,title:s,items:i,img:r}=e,{store:l}=(0,p.oR)(),[o,u]=(0,a.useState)(!1),[j,Z]=(0,a.useState)(!1);return 0===s.length?(0,n.jsx)("div",{children:"Нету производителя"}):(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:x().btnimgcard,children:[(0,n.jsx)("img",{src:r,alt:"",width:100}),0===i.length&&(0,n.jsx)(m.Z,{title:"Удаление производителя",description:"Все товары удаляться",onConfirm:e=>{u(!0),fetch("/api/items/brand",{method:"DELETE",headers:{"Content-Type":"application/json","X-ID":t}}).then(async e=>{e.json().then(()=>{u(!1),l.setCategories(),Z(!1)})}).catch(()=>{d.ZP.error("Произошла ошибка")})},onCancel:e=>{Z(!1)},open:j,okButtonProps:{loading:o},okText:"Да",cancelText:"Нет",children:(0,n.jsxs)(h.ZP,{danger:!0,onClick:()=>{Z(!0)},children:["Удалить производителя ",s]})})]}),(0,n.jsx)(c.Z,{defaultActiveKey:"1",items:l.models.filter(e=>e.brandId===t).map(e=>({key:e.id,label:e.name,children:(0,n.jsx)(q,{id:e.id,title:e.name,items:e.items,img:e.img},e.id)}))})]})}),R=(0,y.Pi)(e=>{let{id:t,title:s,items:i=[]}=e,{store:r}=(0,p.oR)(),[l,o]=(0,a.useState)(!1),[j,x]=(0,a.useState)(!1);return(0,n.jsxs)("div",{children:[(0,n.jsx)(m.Z,{title:"Удаление категории",description:"Все подкатегории и товары удалятся",onConfirm:e=>{o(!0),fetch("/api/items/category",{method:"DELETE",headers:{"Content-Type":"application/json","X-ID":t}}).then(async e=>{e.json().then(()=>{o(!1),r.setCategories(),x(!1)})}).catch(()=>{d.ZP.error("Произошла ошибка")})},onCancel:e=>{x(!1)},open:j,okButtonProps:{loading:l},okText:"Да",cancelText:"Нет",children:(0,n.jsxs)(h.ZP,{danger:!0,onClick:()=>{x(!0)},children:["Удалить категорию ",s]})}),i.length>0?(0,n.jsx)(c.Z,{defaultActiveKey:"1",items:i.map(e=>(console.log((0,u.ZN)(e)),{key:e.id,label:e.name,children:(0,n.jsx)(D,{id:e.id,title:e.name,items:i,img:e.img},e.id)})),onChange:e=>{console.log(e)}}):(0,n.jsx)("div",{children:"Создайте подкатегорию"})]})});var L=s(9308);let M=(0,L.Pi)(()=>{let{store:e}=(0,p.oR)();return(0,a.useEffect)(()=>{e.setModels(),e.setCategories()},[]),(0,n.jsx)(c.Z,{style:{padding:30},defaultActiveKey:"1",items:e.categories.map(e=>({key:e.id,label:e.name,children:(0,n.jsx)(R,{id:e.id,title:e.name,items:e.items},e.id)})),onChange:e=>{console.log(e)}})});var X=()=>{let[e]=f.Z.useForm(),{store:t}=(0,p.oR)();return(0,n.jsxs)(f.Z,{form:e,layout:"vertical",onFinish:s=>{console.log(s),fetch("/api/items/category",{method:"POST",body:JSON.stringify(s)}).then(s=>{s.json().then(s=>{t.setCategories(),d.ZP.success("Успешно создана категория ".concat(s.name)),e.resetFields()}).catch(()=>{d.ZP.error("Произошла ошибка")})})},autoComplete:"off",children:[(0,n.jsx)(f.Z.Item,{name:"name",label:"Название категории",rules:[{required:!0},{type:"string",min:0}],children:(0,n.jsx)(C.Z,{placeholder:"Название категории"})}),(0,n.jsx)(f.Z.Item,{children:(0,n.jsx)(v.Z,{children:(0,n.jsx)(h.ZP,{type:"primary",htmlType:"submit",children:"Добавить"})})})]})},B=s(6833);let J=(0,y.Pi)(()=>{let[e]=f.Z.useForm(),{store:t}=(0,p.oR)();return(0,n.jsxs)(f.Z,{form:e,layout:"vertical",onFinish:s=>{console.log(s),fetch("/api/items/brand",{method:"POST",body:JSON.stringify(s)}).then(s=>{s.json().then(s=>{d.ZP.success("Успешно создана категория ".concat(s.name)),e.resetFields(),t.setCategories()}).catch(()=>{d.ZP.error("Произошла ошибка")})})},autoComplete:"off",children:[(0,n.jsx)(f.Z.Item,{name:"name",label:"Название производителя",rules:[{required:!0},{type:"string",min:0}],children:(0,n.jsx)(C.Z,{placeholder:"Название производителя"})}),(0,n.jsx)(f.Z.Item,{name:"categoryId",label:"Категория",required:!0,children:(0,n.jsx)(B.Z,{children:t.categories.map(e=>(0,n.jsx)(B.Z.Option,{value:e.id,children:e.name},e.id))})}),(0,n.jsx)(f.Z.Item,{name:"img",label:"Изображение (только 1)",required:!0,children:(0,n.jsx)(P.Z,{onChange:e=>{console.log(e)},maxCount:1,multiple:!1,action:"/api/upload",listType:"picture-card",children:(0,n.jsxs)("div",{children:[(0,n.jsx)(T.Z,{}),(0,n.jsx)("div",{style:{marginTop:8},children:"Загрузить"})]})})}),(0,n.jsx)(f.Z.Item,{children:(0,n.jsx)(v.Z,{children:(0,n.jsx)(h.ZP,{type:"primary",htmlType:"submit",children:"Добавить"})})})]})}),K=(0,y.Pi)(()=>{let[e]=f.Z.useForm(),{store:t}=(0,p.oR)(),[s,i]=(0,a.useState)([]);return(0,n.jsxs)(f.Z,{form:e,layout:"vertical",onFinish:s=>{console.log(s),fetch("/api/items/model",{method:"POST",body:JSON.stringify(s)}).then(s=>{s.json().then(s=>{d.ZP.success("Успешно создана модель ".concat(s.name)),e.resetFields(),t.setCategories(),t.setModels()}).catch(()=>{d.ZP.error("Произошла ошибка")})})},autoComplete:"off",children:[(0,n.jsx)(f.Z.Item,{name:"name",label:"Название модели",rules:[{required:!0},{type:"string",min:0}],children:(0,n.jsx)(C.Z,{placeholder:"Название модели"})}),(0,n.jsx)(f.Z.Item,{label:"Название категории",required:!0,children:(0,n.jsx)(B.Z,{onChange:e=>{let s=t.categories.filter(t=>t.id===e);i(s[0].items)},style:{width:"100%"},children:t.categories.map(e=>(0,n.jsx)(B.Z.Option,{value:e.id,children:e.name},e.id))})}),s.length>0&&(0,n.jsx)(f.Z.Item,{name:"brandId",label:"Название производителя",required:!0,children:(0,n.jsx)(B.Z,{children:s.map(e=>(0,n.jsx)(B.Z.Option,{value:e.id,children:e.name},e.id))})}),(0,n.jsx)(f.Z.Item,{name:"img",label:"Изображение (только 1)",required:!0,children:(0,n.jsx)(P.Z,{maxCount:1,multiple:!1,action:"/api/upload",listType:"picture-card",children:(0,n.jsxs)("div",{children:[(0,n.jsx)(T.Z,{}),(0,n.jsx)("div",{style:{marginTop:8},children:"Загрузить"})]})})}),(0,n.jsx)(f.Z.Item,{children:(0,n.jsx)(v.Z,{children:(0,n.jsx)(h.ZP,{type:"primary",htmlType:"submit",children:"Добавить"})})})]})});var A=s(5735),G=(0,y.Pi)(function(){let{store:e}=(0,p.oR)();return(0,n.jsxs)("div",{className:"cantainer",children:[(0,n.jsxs)("div",{className:o().wrapperCategory,children:[(0,n.jsx)(X,{}),(0,n.jsx)(J,{}),(0,n.jsx)(K,{})]}),(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:e.loader&&(0,n.jsx)(A.Z,{size:"large",tip:"Загрузка..."})}),(0,n.jsx)(M,{}),(0,n.jsx)(r,{})]})})},646:function(e,t,s){"use strict";s.d(t,{oR:function(){return o}});var n=s(6006),i=s(4357);let r={store:(0,i.ky)({open:!1,list:[],categories:[],models:[],loader:!0,show(){this.open=!this.open},setCategories:async function(){this.loader=!0;let e=await fetch("/api/items/category").then(async e=>(this.loader=!1,await e.json()));this.categories=e},setModels:async function(){let e=await fetch("/api/items/model").then(async e=>await e.json());this.models=e}})},l=(0,n.createContext)(r),o=()=>(0,n.useContext)(l)},4330:function(e){e.exports={wrapperCategory:"page_wrapperCategory__1EssW"}},9959:function(e){e.exports={wrapper:"styles_wrapper__lotlZ",btnimgcard:"styles_btnimgcard__EJNae",cardrow:"styles_cardrow__dIWXl",card:"styles_card__Z4Kom","ant-card-body":"styles_ant-card-body__CBdkk",cardbody:"styles_cardbody__f84TU"}}},function(e){e.O(0,[749,157,777,667,751,778,824,457,529,253,769,744],function(){return e(e.s=3575)}),_N_E=e.O()}]);