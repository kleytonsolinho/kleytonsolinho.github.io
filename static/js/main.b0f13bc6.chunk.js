(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{21:function(n,e,t){"use strict";t.r(e);var i,a,r,o=t(1),s=t.n(o),c=t(9),l=t.n(c),d=t(13),p=t(2),b=t(3),h=b.b.div(i||(i=Object(p.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  min-height: 100vh;\n  background: var(--background);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  animation: blink 500ms ease 4s forwards;\n\n  .yarn {\n    color: #50fa7b;\n  }\n\n  .create {\n    color: #ff79c6;\n  }\n\n  h1 {\n    position: relative;\n    width: max-content;\n    font-family: 'Poppins', sans-serif;\n    opacity: 1;\n    transform: translateY(0);\n\n    animation: fadeOutDown 4s ease 0.5s forwards;\n  }\n\n  h1::before,\n  h1::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n\n  h1::before {\n    background: var(--background);\n    animation: typewriter 2s steps(36) 1s forwards;\n  }\n\n  h1::after {\n    width: 0.125em;\n    background: white;\n    animation:\n      typewriter 2s steps(36) 1s forwards,\n      blink 500ms steps(36) infinite;\n  }\n\n  @keyframes typewriter {\n    to {\n      left: 100%;\n    }\n  }\n\n  @keyframes blink {\n    to {\n      background: transparent;\n      display: none;\n    }\n  }\n\n  @keyframes fadeOutDown {\n    0% {\n      opacity: 0;\n      transform: translateY(3rem);\n    } 25% {\n      opacity: 1;\n      transform: translateY(0rem);\n    } 50% {\n      opacity: 1;\n      transform: translateY(0rem);\n    } 75% {\n      opacity: 1;\n      transform: translateY(0rem);\n    } 100% {\n      opacity: 0;\n      transform: translateY(3rem);\n    }\n  }\n"]))),x=b.b.div(a||(a=Object(p.a)(["\n  width: 600px;\n  height: 300px;\n  background: var(--background);\n  opacity: 0;\n  border: #000;\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  border: 1px solid #333;\n  z-index: -1;\n  transform: translateY(0);\n  -webkit-box-shadow: 0px 0px 50px 10px rgba(0,0,0,0.5);\n  box-shadow: 0px 0px 50px 10px rgba(0,0,0,0.5);\n\n  animation: FadeInFadeOut 4s ease 0.5s forwards;\n\n  .termHeader {\n    height: 34px;\n    display: flex;\n    align-items: center;\n    text-align: center;\n  }\n\n  .termHeader .icon {\n    border-radius: 50%;\n    display: inline-block;\n    width: 12px;\n    height: 12px;\n  }\n\n  .termHeader .icon:first-of-type {\n    background: #ff5f56;\n    margin-left: 12px;\n  }\n\n  .termHeader .icon:nth-of-type(2) {\n    background: #ffbd2e;\n    margin-left: 12px;\n  }\n\n  .termHeader .icon:nth-of-type(3) {\n    background: #27c93f;\n    margin-left: 12px;\n  }\n\n  .termBody {\n    padding: 12px 14px;\n    flex: 1 1;\n  }\n"]))),m=t(0);function j(){return Object(m.jsxs)(h,{children:[Object(m.jsxs)(x,{children:[Object(m.jsxs)("div",{className:"termHeader",children:[Object(m.jsx)("span",{className:"icon"}),Object(m.jsx)("span",{className:"icon"}),Object(m.jsx)("span",{className:"icon"})]}),Object(m.jsx)("div",{className:"termBody"})]}),Object(m.jsxs)("h1",{children:[Object(m.jsx)("span",{className:"yarn",children:"yarn"})," ",Object(m.jsx)("span",{className:"create",children:"create"})," ","react-app kleytonsolinho"]})]})}var f=b.b.div(r||(r=Object(p.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -2;\n  width: 100%;\n  min-height: 100vh;\n  background: var(--background);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  animation: blink 500ms ease 9s forwards;\n\n  div {\n    position: absolute;\n    width: 300px;\n    align-items: center;\n    justify-content: center;\n    z-index: 12;\n    margin-bottom: 25px;\n  }\n\n  .p1 {\n    stroke-dasharray: 5000;\n    stroke-dashoffset: 5000;\n\n    animation:\n      animate 6s linear 1s forwards,\n      svgFadeOut 1s ease 8s forwards;\n  }\n\n\n  h1 {\n    position: relative;\n    width: max-content;\n    font-family: 'Signika', 'Poppins', sans-serif;\n    opacity: 0;\n    transform: translateY(0);\n    font-size: 6rem;\n    color: #00d8ff;\n    margin-bottom: 25px;\n\n    animation: FadeInFadeOut100 8s ease 1s forwards;\n  }\n\n  @keyframes fadeInUp {\n    to {\n      opacity: 0;\n      transform: translateY(3rem);\n    }\n  }\n\n  @keyframes blink {\n    to {\n      background: transparent;\n    }\n  }\n\n  @keyframes animate {\n    from {\n      stroke-dasharray: 5000;\n      stroke-dashoffset: 5000;\n    } to {\n      stroke-dasharray: 0;\n      stroke-dashoffset: 0;\n    }\n  }\n\n  @keyframes svgFadeOut {\n    from {\n      stroke-width: 30;\n    } to {\n      stroke-width: 0; //alterar aqui\n    }\n  }\n"])));function g(){return Object(m.jsxs)(f,{children:[Object(m.jsx)("div",{children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:Object(m.jsx)("g",{transform:"matrix(.05696 0 0 .05696 .647744 2.43826)",fill:"none",fillRule:"evenodd",children:Object(m.jsxs)("g",{stroke:"#00d8ff",strokeWidth:"24",children:[Object(m.jsx)("path",{className:"p1",d:"M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44-59.046-20.182-94.61-52.103-94.61-79.56 0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z"}),Object(m.jsx)("path",{className:"p1",d:"M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z"}),Object(m.jsx)("path",{className:"p1",d:"M180.82 289.482C147.075 231.2 124.1 172.195 114.51 123.227c-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z"})]})})})}),Object(m.jsx)("h1",{children:"k"})]})}var u,O,w,v,y,k,N,z,S,F,Y,I=t(4),P=b.b.nav(u||(u=Object(p.a)(["\n  background: rgba(10, 25, 47, 0.85);\n  height: 100px;\n  max-height: 100px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  position: fixed;\n  top: -100%;\n  z-index: 2;\n  padding: 0 80px;\n  backdrop-filter: blur(10px);\n  -webkit-box-shadow: 0px 10px 20px 5px #0B1930;\n  box-shadow: 0px 10px 20px 5px #0B1930;\n\n  animation: FadeInNavbar 2s ease 3s forwards;\n\n  a {\n    text-decoration: none;\n  }\n\n  @media screen and (max-width: 960px) {\n    transition: 0.8s all ease;\n  }\n\n  .active {\n    animation: FadeInNavbar 2s ease 500ms forwards;\n  }\n\n  .desactive {\n    animation: FadeOutNavbar 2s ease 500ms forwards;\n  }\n"]))),R=b.b.div(O||(O=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  height: 100%;\n  width: 100%;\n  max-width: 1268px;\n"]))),C=b.b.a(w||(w=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-self: flex-start;\n  text-decoration: none;\n\n  img {\n    position: relative;\n    top: 0;\n    left: 0;\n    z-index: 10;\n    width: 100%;\n    height: 120px;\n    cursor: pointer;\n  }\n"]))),H=b.b.div(v||(v=Object(p.a)(["\n  display: none;\n\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 60%);\n    font-size: 1.8rem;\n    cursor: pointer;\n    color: var(--text-first);\n  }\n"]))),J=b.b.ul(y||(y=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  list-style: none;\n  text-align: center;\n  margin-right: -22px;\n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),M=b.b.li(k||(k=Object(p.a)(["\n  height: 100px;\n"]))),T=b.b.a(N||(N=Object(p.a)(["\n  color: var(--text-second);\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  font-size: 1.2rem;\n  height: 100%;\n  cursor: pointer;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 300;\n  text-transform: lowercase;\n  position: relative;\n\n  span {\n    color: var(--green);\n\n    &:hover {\n      font-weight: bold;\n      top: -2px;\n    }\n  }\n\n  &:hover {\n    font-weight: 500;\n    color: var(--text-first);\n    top: -2px;\n  }\n"]))),A=b.b.nav(z||(z=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),B=b.b.a(S||(S=Object(p.a)(["\n  width: 100px;\n  height: 45px;\n  color: var(--green);\n  background-color: transparent;\n  border: 1px solid var(--green);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  text-decoration: none;\n  font-family: 'Poppins' sans-serif;\n  font-weight: 300;\n  font-size: 1.1rem;\n  margin-left: 20px;\n\n  .icon {\n    margin-right: 5px;\n  }\n\n  &:hover {\n    text-decoration: none;\n    background: rgba(80,250,123,0.3);\n    font-weight: bold;\n    cursor: pointer;\n    color: #fff;\n  }\n"]))),D=t.p+"static/media/logo.89bfda4f.png";function L(n){var e=n.toggle;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(P,{children:Object(m.jsxs)(R,{children:[Object(m.jsx)(C,{to:"/",scrollToTop:0,children:Object(m.jsx)("img",{src:D,alt:""})}),Object(m.jsx)(H,{onClick:e,children:Object(m.jsx)(I.a,{})}),Object(m.jsxs)(J,{children:[Object(m.jsx)(M,{children:Object(m.jsxs)(T,{to:"healthy",children:[Object(m.jsx)("span",{children:"."}),"about",Object(m.jsx)("span",{children:"( )"})]})}),Object(m.jsx)(M,{children:Object(m.jsxs)(T,{to:"blog",children:[Object(m.jsx)("span",{children:"."}),"work",Object(m.jsx)("span",{children:"( )"})]})}),Object(m.jsx)(M,{children:Object(m.jsxs)(T,{to:"blog",children:[Object(m.jsx)("span",{children:"."}),"experience",Object(m.jsx)("span",{children:"( )"})]})}),Object(m.jsx)(M,{children:Object(m.jsxs)(T,{to:"join",children:[Object(m.jsx)("span",{children:"."}),"contact",Object(m.jsx)("span",{children:"( )"})]})}),Object(m.jsx)(A,{children:Object(m.jsxs)(B,{to:"/register",children:[Object(m.jsx)(I.d,{className:"icon"}),"Resume"]})})]})]})})})}var E,_=b.b.aside(F||(F=Object(p.a)(["\n  position: fixed;\n  bottom: 0;\n  right: -120px;\n  left: auto;\n  width: 40px;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n\n  animation: FadeInRightbar 2s ease 5s forwards;\n\n  .icone {\n    cursor: pointer;\n    color: #8892b0;\n    font-size: 1.8rem;\n    position: relative;\n\n    &:hover {\n      color: #fff;\n      top: -2px;\n    }\n  }\n\n  @keyframes FadeInRightbar {\n    from {\n      right: -120px;\n    } to {\n      right: 20px;\n    }\n  }\n"]))),q=b.b.div(Y||(Y=Object(p.a)(["\n  position: relative;\n  width: 100%;\n  display:flex;\n  justify-content: center;\n  cursor: pointer;\n  margin-bottom: 20px;\n"])));function V(){return Object(m.jsx)(_,{children:Object(m.jsxs)("ul",{children:[Object(m.jsx)(q,{children:Object(m.jsx)("a",{href:"https://www.github.com/kleytonsolinho",target:"_blank",rel:"noreferrer",children:Object(m.jsx)(I.e,{className:"icone"})})}),Object(m.jsx)(q,{children:Object(m.jsx)("a",{href:"https://www.linkedin.com/",target:"_blank",rel:"noreferrer",children:Object(m.jsx)(I.g,{className:"icone"})})}),Object(m.jsx)(q,{children:Object(m.jsx)("a",{href:"https://www.instagram.com/kleytonsolinho",target:"_blank",rel:"noreferrer",children:Object(m.jsx)(I.f,{className:"icone"})})}),Object(m.jsx)(q,{children:Object(m.jsx)("a",{href:"https://www.codepen.io/",target:"_blank",rel:"noreferrer",children:Object(m.jsx)(I.c,{className:"icone"})})})]})})}var W,K,G=b.b.section(E||(E=Object(p.a)(["\n  width: calc(100% - 160px);\n  max-width: 1268px;\n  height: 100vh;\n  max-height: 800px;\n  margin: 0 auto;\n\n  .perfil {\n    position: relative;\n    width: 40%;\n    height: 100%;\n    float: left;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    img {\n      width: 90%;\n      position: relative;\n      z-index: -1;\n    }\n\n    h2 {\n      writing-mode: tb-rl;\n      transform: rotate(180deg);\n      white-space: nowrap;\n      font-size: 8rem;\n      position: absolute;\n      top: 0;\n      left: 0;\n      opacity: 0.7;\n\n      &:hover {\n        opacity: 1;\n      }\n    }\n\n    h3 {\n      position: absolute;\n      bottom: 50px;\n      right: 0;\n      text-align: center;\n      opacity: 0.5;\n      font-size: 4rem;\n\n      &:hover {\n        opacity: 1;\n      }\n    }\n  }\n\n  .content {\n    width: 60%;\n    height: 100%;\n    float: right;\n    padding: 0 25px;\n    //display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n    color: #fff;\n    position: relative;\n\n    h1 {\n      font-size: 5rem;\n      text-align: center;\n    }\n\n    p {\n      font-size: 1.3rem;\n      padding: 10px 0;\n    }\n  }\n"]))),U=t.p+"static/media/profile-pic.7b7107e9.png";function X(){return Object(m.jsxs)(G,{children:[Object(m.jsxs)("div",{className:"perfil",children:[Object(m.jsx)("h2",{className:"stroke",children:"startup"}),Object(m.jsx)("img",{src:U,alt:""}),Object(m.jsx)("h3",{className:"stroke",children:"[...fintech, next]"})]}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h1",{className:"stroke-invert",children:"Hi, I am Kleyton!"}),Object(m.jsx)("p",{children:"Comecei a programar em 2008 com Visual Basic na \xe9poca desenvolvendo softwares de Gest\xe3o Empresarial e NFe 2.0, ao longo do tempo fui migrando para Tecnologias da Web como HTML5, CSS3, JavaScript e PHP com o crescente n\xfamero de SaaS."}),Object(m.jsx)("p",{children:"Hoje estudo e me especializo nas Tecnologias de Frontend como React JS/NEXT JS, React Native e Node JS (Backend), pois no futuro pretendo me tornar um desenvolvedor fullstack."}),Object(m.jsx)("p",{children:"Me formando bacharel em Sistemas de Informa\xe7\xe3o em 2022, tamb\xe9m sou apaixonado por Economia, paix\xe3o essa que me fez fazer bacharel em Ci\xeancias Economicas, o que me fez entender alguns conceitos movimentos da nova economia, como escala, CAC/LTV + Stock Options/IPO e Equity! ;D"}),Object(m.jsx)("p",{children:"Como voc\xea pode ver eu n\xe3o sou s\xf3 um desenvolvedor, tenho cabe\xe7a de empreendedor, busco projetos que v\xe3o gerar valor para sociedade e me ajudar a atingir o pr\xf3ximo n\xedvel!"})]})]})}var Q,Z=b.b.section(W||(W=Object(p.a)(["\n  width: calc(100% - 160px);\n  max-width: 1268px;\n  height: 100%;\n  margin: 0 auto;\n\n  section {\n    width: 100%;\n    height: 100%;\n    max-height: 100vh;\n    display: flex;\n\n    .container {\n      width: 40%;\n      height: 100vh;\n      color: var(--text-first);\n\n      h3 {\n        font-size: 2.5rem;\n        position: relative;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100px;\n        line-height: 100px;\n      }\n\n      .content {\n        width: 100%;\n        height: calc(100% - 200px);\n\n        h1 {\n          font-size: 4.5rem;\n          text-align: left;\n          background-size: auto auto;\n        }\n\n        h2 {\n          font-size: 1.5rem;\n          padding: 10px 0;\n        }\n\n        p {\n          font-size: 1.2rem;\n          padding: 25px 0px;\n        }\n\n        div {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n\n          a {\n            text-decoration: none;\n          }\n        }\n\n        button {\n          margin: 0 10px;\n        }\n\n      }\n\n      .tecnology {\n        width: 100%;\n        height: 100px;\n\n        div {\n          width: 25%;\n          height: 100%;\n          border: 1px solid #333;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          text-align: center;\n          flex-direction: column;\n\n        }\n      }\n    }\n\n    .banner {\n      width: 60%;\n      height: 100vh;\n      display:flex;\n      align-items: center;\n      justify-content: center;\n\n      .web {\n        width: 95%;\n      }\n\n      .app {\n        height: 95%;\n      }\n    }\n  }\n"]))),$=b.b.a(K||(K=Object(p.a)(["\n  width: 175px;\n  height: 45px;\n  color: var(--green);\n  background-color: transparent;\n  border: 1px solid var(--green);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  text-decoration: none;\n  font-family: 'Poppins' sans-serif;\n  font-weight: 300;\n  font-size: 1.1rem;\n  margin-left: 20px;\n  margin-top: 25px;\n  margin-bottom: 25px;\n\n  .icon {\n    margin-right: 5px;\n  }\n\n  &:hover {\n    text-decoration: none;\n    background: rgba(80,250,123,0.3);\n    font-weight: bold;\n    cursor: pointer;\n    color: var(--text-first);\n  }\n"]))),nn=[{id:1,number:"01",mobile:!0,title:"My App",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptas totam.",category:"React Native App",tecnology:"Mobile Developer",github:"https://www.github.com/kleytonsolinho",demo:"https://www.github.com/kleytonsolinho"},{id:2,number:"02",mobile:!1,title:"My Web App",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptas totam.",category:"React JS Web App",tecnology:"Frontend Developer",github:"https://www.github.com/kleytonsolinho",demo:"https://www.github.com/kleytonsolinho"}],en=t.p+"static/media/iphone.5182c2bc.png",tn=t.p+"static/media/ipad-pro.e42be19e.png";function an(){return Object(m.jsx)(Z,{children:nn.map((function(n,e){var t=e.id;return Object(m.jsxs)("section",{children:[Object(m.jsxs)("div",{className:"container",defaultValue:t,children:[Object(m.jsx)("h3",{children:n.number}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h1",{className:"stroke-invert",children:n.title}),Object(m.jsx)("h2",{children:n.tecnology}),Object(m.jsx)("p",{children:n.description}),Object(m.jsxs)("div",{children:[Object(m.jsx)("a",{href:n.github,target:"_blank",rel:"noreferrer",children:Object(m.jsxs)($,{children:[Object(m.jsx)(I.e,{className:"icon"}),"Github Coding"]})}),Object(m.jsx)("a",{href:n.demo,target:"_blank",rel:"noreferrer",children:n.mobile?Object(m.jsxs)($,{children:[Object(m.jsx)(I.h,{className:"icon"}),"Video App"]}):Object(m.jsxs)($,{children:[Object(m.jsx)(I.b,{className:"icon"}),"Live Demo"]})})]}),Object(m.jsx)("h2",{children:"Tecnologias:"}),Object(m.jsxs)("div",{className:"tecnology",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)(I.e,{}),Object(m.jsx)("span",{children:"React JS"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(I.e,{}),Object(m.jsx)("span",{children:"TypeScript"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(I.e,{}),Object(m.jsx)("span",{children:"Styled Components"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(I.e,{}),Object(m.jsx)("span",{children:"Node JS"})]})]})]})]}),Object(m.jsx)("div",{className:"banner",children:n.mobile?Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)("img",{src:en,alt:"",className:"app"}),Object(m.jsx)("img",{src:en,alt:"",className:"app"})]}):Object(m.jsx)("img",{src:tn,alt:"",className:"web"})})]},t)}))})}var rn,on=b.b.section(Q||(Q=Object(p.a)(["\n  width: 100%;\n  max-width: 1268px;\n  height: calc(100vh - 100px);\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  .content {\n    text-align: center;\n\n    h1 {\n      font-size: 7rem;\n      text-transform: capitalize;\n    }\n\n    h3 {\n      font-size: 2rem;\n      margin-bottom: 45px;\n    }\n\n    a {\n      text-decoration: none;\n    }\n\n    img {\n      width: 25%;\n    }\n  }\n"]))),sn=t.p+"static/media/contact-pic.e3995bee.png";function cn(){return Object(m.jsx)(on,{children:Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h3",{children:"Need a developer?"}),Object(m.jsx)("a",{href:"mailto:kleytonsolinho@gmail.com",children:Object(m.jsx)("h1",{className:"stroke",children:"Lets work together!"})}),Object(m.jsx)("img",{src:sn,alt:""})]})})}var ln=b.b.footer(rn||(rn=Object(p.a)(["\n  width: calc(100% - 160px);\n  max-width: 1268px;\n  height: 100px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: var(--text-second);\n\n  h1 {\n    font-family: 'Arizonia', sans-serif;\n    font-size: 1.5rem;\n    color: var(--text-second);\n\n    &:hover {\n      color: var(--text-first);\n    }\n  }\n\n  p {\n    font-family: 'Poppins', sans-serif;\n    font-size: 0.8rem;\n  }\n"])));function dn(){return Object(m.jsxs)(ln,{children:[Object(m.jsx)("h1",{children:"Kleyton Solinho"}),Object(m.jsx)("p",{children:"\xa9 2021 All rights reserved - Designed e built by Kleyton Solinho."})]})}var pn,bn,hn=t.p+"static/media/banner-1.9bd1d733.png",xn=t.p+"static/media/banner-2.dbd64ee8.png",mn=b.b.section(pn||(pn=Object(p.a)(["\n  width: calc(100% - 160px);\n  max-width: 1268px;\n  height: calc(100vh - 100px);\n  margin: 0 auto;\n  margin-top: 100px;\n\n  #box1 {\n    width: 530px;\n    height: 625px;\n    background-image: url(",");\n    position: absolute;\n    bottom: -100%;\n    left: 30%;\n    animation: anim 2s ease 500ms forwards, anim2 2s ease 2.5s forwards;\n  }\n\n  #box1:after {\n    content: '';\n    position: absolute;\n    width: 530px;\n    height: 625px;\n    background-image: url(",");\n    left: 0px;\n  }\n\n  #box2 {\n    width: auto;\n    height: auto;\n    font-family: 'Poppins', sans-serif;\n    color: #fff;\n    font-size: 6rem;\n    font-weight: 600;\n    line-height: 100%;\n    position: relative;\n    top: 15%;\n    left: 100px;\n    overflow: hidden;\n    z-index: -1;\n\n    p {\n      background-size: 100% 100%;\n    }\n\n    span {\n      background-size: auto auto;\n    }\n  }\n\n  #box3 {\n    width: auto;\n    height: auto;\n    font-family: 'Poppins', sans-serif;\n    color: #8892b0;\n    font-size: 2rem;\n    font-weight: 400;\n    line-height: 100%;\n    position: relative;\n    top: 30%;\n    left: 100px;\n    overflow: hidden;\n    z-index: -1;\n  }\n\n  .text {\n    position: relative;\n    left: -100%;\n    opacity: 0;\n\n    animation: anim3 2s ease 2.5s forwards;\n  }\n\n  .wrapper {\n    display: inline-flex;\n  }\n\n  .static-text {\n    color: #fff;\n  }\n\n  .dynamic-txts {\n    margin-left: 10px;\n    height: 24px;\n    line-height: 24px;\n    //background: red;\n    overflow: hidden;\n  }\n\n  .dynamic-txts li {\n    list-style: none;\n    position: relative;\n    top: 0;\n\n    animation: slide 8s steps(4) infinite;\n  }\n\n  .dynamic-txts li span {\n    position: relative;\n  }\n\n  .dynamic-txts li span::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: var(--background);\n    border-left: 2px solid #fff;\n\n    animation: typing 1.2s steps(10) infinite 4s forwards;\n  }\n\n  @keyframes anim {\n    from {\n      bottom: -100%;\n    } to {\n      bottom: 0%;\n    }\n  }\n\n  @keyframes anim2 {\n    from {\n      left: 30%;\n      width: 530px;\n    } to {\n      width: 0px;\n      left: 50%;\n    }\n  }\n\n  @keyframes anim3 {\n    from {\n      left: -100%;\n      opacity: 0;\n    } to {\n      left: 10%;\n      opacity: 1;\n    }\n  }\n\n  @keyframes typing {\n    to {\n      left: 100%;\n      margin: 0 -35px 0 35px;\n    }\n  }\n\n  @keyframes slide {\n    to {\n      top: -95px;\n    }\n  }\n"])),hn,xn);function jn(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(L,{}),Object(m.jsx)(V,{}),Object(m.jsxs)(mn,{children:[Object(m.jsx)("div",{id:"box1"}),Object(m.jsxs)("div",{id:"box2",className:"text",children:[Object(m.jsx)("p",{className:"stroke-invert",children:"Mobile &"}),Object(m.jsx)("p",{className:"stroke",children:"Frontend"}),Object(m.jsx)("span",{className:"stroke-invert",children:"Developer"})]}),Object(m.jsxs)("div",{id:"box3",className:"text wrapper",children:[Object(m.jsx)("div",{className:"static-txt",children:"I like stack "}),Object(m.jsxs)("ul",{className:"dynamic-txts",children:[Object(m.jsx)("li",{children:Object(m.jsx)("span",{children:"React JS"})}),Object(m.jsx)("li",{children:Object(m.jsx)("span",{children:"HTML5"})}),Object(m.jsx)("li",{children:Object(m.jsx)("span",{children:"React Native"})}),Object(m.jsx)("li",{children:Object(m.jsx)("span",{children:"CSS3 + SASS"})}),Object(m.jsx)("li",{children:Object(m.jsx)("span",{children:"JavaScript"})})]})]})]}),Object(m.jsx)(X,{}),Object(m.jsx)(an,{}),Object(m.jsx)(cn,{}),Object(m.jsx)(dn,{})]})}var fn=Object(b.a)(bn||(bn=Object(p.a)(["\n:root {\n    --background: #0b1930;\n    --green: #00ff98;\n    --text-first: #ffffff;\n    --text-second: #8892b0;\n  }\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n    scrollbar-width: thin;\n    scrollbar-color: var(--green);\n  }\n\n*::-webkit-scrollbar {\n  width: 5px;\n}\n\n*::-webkit-scrollbar-track {\n  background: var(--background);\n}\n\n*::-webkit-scrollbar-thumb {\n  background-color: var(--green);\n  border-radius: 20px;\n}\n\n  html {\n    @media (max-width: 1080px) {\n      font-size: 93.75%;\n    }\n    @media (min-width: 720px) {\n      font-size: 87.5%;\n    }\n  }\n\n  body {\n    background: var(--background);\n    -webkit-font-smoothing: antialiased;\n    scrollbar-color: #50fa7b var(--background);\n  }\n\n  body, input, textarea, button {\n    font-family: 'Poppins', sans-serif;\n    font-weight: 400;\n  }\n\n  h1, h2, h3, h4, h5, h6, strong {\n    font-family: 'Poppins', sans-serif;\n    font-weight: 600;\n    color: var(--text-first);\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  [disabled] {\n    opacity: 0.6;\n    cursor: not-allowed;\n  }\n\n  .stroke {\n      cursor: pointer;\n      background: linear-gradient(-45deg, #eeaa52, #e73c6f, #2394d5, #2af3b7);\n      background-size: 100% 100%;\n      background-clip: text;\n      -webkit-background-clip: text;\n      -moz-background-clip: text;\n      -webkit-text-stroke: 5px transparent;\n      color: var(--background);\n\n      &:hover {\n        -webkit-text-stroke: 0px transparent;\n        color: transparent;\n      }\n    }\n\n    .stroke-invert {\n      cursor: pointer;\n      background: linear-gradient(-45deg, #eeaa52, #e73c6f, #2394d5, #2af3b7);\n      background-size: 200% 200%;\n      background-clip: text;\n      -webkit-background-clip: text;\n      -moz-background-clip: text;\n      -webkit-text-stroke: 0px transparent;\n      color: transparent;\n\n      &:hover {\n        -webkit-text-stroke: 5px transparent;\n        color: var(--background);\n      }\n    }\n\n    @keyframes FadeInFadeOut {\n    0% {\n      opacity: 0;\n      transform: translateY(3rem);\n    } 25% {\n      opacity: 0.50;\n      transform: translateY(0rem);\n    } 50% {\n      opacity: 0.50;\n      transform: translateY(0rem);\n    } 75% {\n      opacity: 0.50;\n      transform: translateY(0rem);\n    } 100% {\n      opacity: 0;\n      transform: translateY(3rem);\n    }\n  }\n\n  @keyframes FadeInFadeOut100 {\n    0% {\n      opacity: 0;\n      transform: translateY(3rem);\n    } 25% {\n      opacity: 1;\n      transform: translateY(0rem);\n    } 50% {\n      opacity: 1;\n      transform: translateY(0rem);\n    } 75% {\n      opacity: 1;\n      transform: translateY(0rem);\n    } 100% {\n      opacity: 0;\n      transform: translateY(3rem);\n    }\n  }\n\n  @keyframes FadeInNavbar {\n    from {\n      top: -100%;\n    } to {\n      top: 0%;\n    }\n  }\n\n  @keyframes FadeOutNavbar {\n    from {\n      top: 0%;\n    } to {\n      top: -100%;\n    }\n  }\n"])));var gn=function(){var n=Object(o.useState)(!1),e=Object(d.a)(n,2),t=e[0],i=e[1];return setTimeout((function(){i(!0)}),9e3),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(fn,{}),!t&&Object(m.jsx)(j,{}),!t&&Object(m.jsx)(g,{}),t&&Object(m.jsx)(jn,{})]})};l.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(gn,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.b0f13bc6.chunk.js.map