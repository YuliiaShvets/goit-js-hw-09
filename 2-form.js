import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},s=document.querySelector(".feedback-form"),o=s.elements.email,l=s.elements.message,m="feedback-form-state";s.addEventListener("input",r);s.addEventListener("submit",c);function r(t){const{name:a,value:n}=t.target;e[a]=n.trim(),localStorage.setItem(m,JSON.stringify(e))}function i(){const t=localStorage.getItem(m);if(t){const a=JSON.parse(t);o.value=a.email||"",l.value=a.message||"",e.email=a.email||"",e.message=a.message||""}}i();function c(t){if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(m),e.email="",e.message="",s.reset()}
//# sourceMappingURL=2-form.js.map