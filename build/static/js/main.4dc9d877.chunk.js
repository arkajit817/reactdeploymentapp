(this.webpackJsonpejam=this.webpackJsonpejam||[]).push([[0],{22:function(e,t,a){e.exports=a(49)},27:function(e,t,a){},28:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(4),o=a.n(s),r=(a(27),a(17)),c=a(18),i=a(21),m=a(20),u=(a(28),a(3)),p=a.n(u),d={templateUrl:"https://www.npoint.io/documents/8f7cf8628b367ffd50a2",serverUrl:"http://13.232.24.203:8000/api/deployment/"},v={headers:{"Content-Type":"application/json"}},h=d.templateUrl,E=d.serverUrl,g={getTemplate:function(){return p.a.get(h)},saveData:function(e){return p.a.post(E+"add",e,v)},allData:function(){return p.a.get(E+"all",v)},deleteData:function(e){return p.a.delete(E+"delete/"+e,v)}},f=a(7),N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).initializaVal=function(){n.setState({templateName:"DEFAULT",versionNo:"DEFAULT",urlEntry:""})},n.initFunction=function(){var e=g.getTemplate(),t=g.allData();Promise.all([e,t]).then((function(e){n.setState({tempData:e[0].data.contents}),n.setState({allData:e[1].data})}),(function(e){console.error("Error occured")}))},n.onSelect=function(e){var t=e.target.value;switch(e.target.name){case"template":n.setState({tempVersion:n.state.tempData[t].versions,templateName:n.state.tempData[t].name});break;case"version":n.setState({versionNo:t});break;case"url":n.setState({urlEntry:t})}},n.onSave=function(){g.saveData({name:n.state.templateName,url:n.state.urlEntry,version:n.state.versionNo}).then((function(e){n.setState({showMsg:!0,msgFlag:"success",postMsg:"Data added"}),n.initFunction(),n.initializaVal()}),(function(e){n.setState({showMsg:!0,msgFlag:"danger",postMsg:"Error Occured"})}))},n.onDelete=function(e){g.deleteData(e).then((function(e){n.initFunction(),n.initializaVal(),n.setState({showMsg:!0,msgFlag:"success",postMsg:"Data deleted success"}),window.scrollTo(0,0)}),(function(e){n.setState({showMsg:!0,msgFlag:"danger",postMsg:"Data deletion failed"}),window.scrollTo(0,0)}))},n.setShow=function(){n.setState({showMsg:!1})},n.state={tempData:[],tempVersion:[],templateName:"DEFAULT",versionNo:"DEFAULT",allData:[],urlEntry:"",showMsg:!1,msgFlag:"success",postMsg:""},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.initFunction()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App container"},this.state.showMsg?l.a.createElement(f.a,{variant:this.state.msgFlag,dismissible:!0,onClick:this.setShow},l.a.createElement(f.a.Heading,null,this.state.postMsg)):null,l.a.createElement("div",{className:"row form-group"},l.a.createElement("div",{className:"col-md-4 col-sm-4"},l.a.createElement("div",{className:"input-group mb-6"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{className:"input-group-text"},"Template")),l.a.createElement("select",{name:"template",value:this.state.templateName,className:"custom-select",onChange:this.onSelect},l.a.createElement("option",{value:"DEFAULT",disabled:!0},"Pick one"),this.state.tempData.map((function(e,t){return l.a.createElement("option",{key:t,value:t},e.name)}))))),l.a.createElement("div",{className:"col-md-3 col-sm-3"},l.a.createElement("div",{className:"input-group mb-6"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{className:"input-group-text"},"Version")),l.a.createElement("select",{name:"version",value:this.state.versionNo,className:"custom-select",onChange:this.onSelect},l.a.createElement("option",{value:"DEFAULT",disabled:!0},"Pick one"),this.state.tempVersion.map((function(e,t){return l.a.createElement("option",{key:t,value:e},e)}))))),l.a.createElement("div",{className:"col-md-4 col-sm-4"},l.a.createElement("div",{className:"input-group mb-6"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{className:"input-group-text"},"URL")),l.a.createElement("input",{className:"form-control",value:this.state.urlEntry,name:"url",onChange:this.onSelect}))),l.a.createElement("div",{className:""},l.a.createElement("button",{className:"btn btn-primary",onClick:this.onSave},"Save"))),l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table table-bordered"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Serial no"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Version"),l.a.createElement("th",null,"URL"),l.a.createElement("th",null,"Deploy Date"))),l.a.createElement("tbody",null,this.state.allData.map((function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,a+1),l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.version),l.a.createElement("td",null,t.url),l.a.createElement("td",null,t.deployedAt,l.a.createElement("svg",{onClick:function(){e.onDelete(t._id)},className:"bi bi-trash-fill float-right pointer",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z",clipRule:"evenodd"}))))}))))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(48);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.4dc9d877.chunk.js.map