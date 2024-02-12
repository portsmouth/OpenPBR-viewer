(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yl="159",Sr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zf=0,yc=1,Jf=2,Wh=1,Qf=2,wi=3,Jn=0,gn=1,$n=2,Vi=0,es=1,bc=2,Sc=3,wc=4,ed=5,ar=100,td=101,nd=102,Mc=103,Ec=104,id=200,rd=201,sd=202,od=203,Sl=204,wl=205,ad=206,ld=207,cd=208,ud=209,hd=210,fd=211,dd=212,pd=213,md=214,_d=0,gd=1,vd=2,ea=3,xd=4,yd=5,bd=6,Sd=7,Xh=0,wd=1,Md=2,Gi=0,Ed=1,Td=2,Ad=3,Rd=4,Ld=5,Tc="attached",Cd="detached",jh=300,is=301,rs=302,Ml=303,El=304,ha=306,ss=1e3,Bn=1001,ta=1002,It=1003,Tl=1004,Jo=1005,bn=1006,qh=1007,pr=1008,ui=1009,Al=1010,Yh=1011,fa=1012,ks=1013,Cn=1014,_n=1015,qs=1016,$h=1017,Kh=1018,hr=1020,Pd=1021,nn=1023,Dd=1024,Id=1025,fr=1026,os=1027,Zh=1028,$l=1029,Jh=1030,da=1031,Ys=1033,wa=33776,Ma=33777,Ea=33778,Ta=33779,Ac=35840,Rc=35841,Lc=35842,Cc=35843,Qh=36196,Pc=37492,Dc=37496,Ic=37808,Nc=37809,Fc=37810,Oc=37811,Uc=37812,Bc=37813,zc=37814,kc=37815,Hc=37816,Vc=37817,Gc=37818,Wc=37819,Xc=37820,jc=37821,Aa=36492,qc=36494,Yc=36495,Nd=36283,$c=36284,Kc=36285,Zc=36286,$s=2300,as=2301,Ra=2302,Jc=2400,Qc=2401,eu=2402,Fd=2500,Od=0,ef=1,Rl=2,tf=3e3,Wi=3001,Ud=3200,Bd=3201,nf=0,zd=1,zn="",zt="srgb",sn="srgb-linear",Kl="display-p3",pa="display-p3-linear",na="linear",Tt="srgb",ia="rec709",ra="p3",Mr=7680,tu=519,kd=512,Hd=513,Vd=514,rf=515,Gd=516,Wd=517,Xd=518,jd=519,Ll=35044,nu="300 es",Cl=1035,Ei=2e3,sa=2001;class _r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let iu=1234567;const Hs=Math.PI/180,ls=180/Math.PI;function Kn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[r&255]+ln[r>>8&255]+ln[r>>16&255]+ln[r>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function Qt(r,e,t){return Math.max(e,Math.min(t,r))}function Zl(r,e){return(r%e+e)%e}function qd(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Yd(r,e,t){return r!==e?(t-r)/(e-r):0}function Vs(r,e,t){return(1-t)*r+t*e}function $d(r,e,t,n){return Vs(r,e,1-Math.exp(-t*n))}function Kd(r,e=1){return e-Math.abs(Zl(r,e*2)-e)}function Zd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Jd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Qd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ep(r,e){return r+Math.random()*(e-r)}function tp(r){return r*(.5-Math.random())}function np(r){r!==void 0&&(iu=r);let e=iu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ip(r){return r*Hs}function rp(r){return r*ls}function Pl(r){return(r&r-1)===0&&r!==0}function sp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function oa(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function op(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ci(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function yt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const sf={DEG2RAD:Hs,RAD2DEG:ls,generateUUID:Kn,clamp:Qt,euclideanModulo:Zl,mapLinear:qd,inverseLerp:Yd,lerp:Vs,damp:$d,pingpong:Kd,smoothstep:Zd,smootherstep:Jd,randInt:Qd,randFloat:ep,randFloatSpread:tp,seededRandom:np,degToRad:ip,radToDeg:rp,isPowerOfTwo:Pl,ceilPowerOfTwo:sp,floorPowerOfTwo:oa,setQuaternionFromProperEuler:op,normalize:yt,denormalize:ci};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,n,i,s,o,a,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],b=i[1],v=i[4],y=i[7],x=i[2],E=i[5],T=i[8];return s[0]=o*g+a*b+l*x,s[3]=o*m+a*v+l*E,s[6]=o*p+a*y+l*T,s[1]=c*g+u*b+h*x,s[4]=c*m+u*v+h*E,s[7]=c*p+u*y+h*T,s[2]=f*g+d*b+_*x,s[5]=f*m+d*v+_*E,s[8]=f*p+d*y+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(La.makeScale(e,t)),this}rotate(e){return this.premultiply(La.makeRotation(-e)),this}translate(e,t){return this.premultiply(La.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const La=new rt;function of(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ks(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ap(){const r=Ks("canvas");return r.style.display="block",r}const ru={};function Gs(r){r in ru||(ru[r]=!0,console.warn(r))}const su=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ou=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),io={[sn]:{transfer:na,primaries:ia,toReference:r=>r,fromReference:r=>r},[zt]:{transfer:Tt,primaries:ia,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[pa]:{transfer:na,primaries:ra,toReference:r=>r.applyMatrix3(ou),fromReference:r=>r.applyMatrix3(su)},[Kl]:{transfer:Tt,primaries:ra,toReference:r=>r.convertSRGBToLinear().applyMatrix3(ou),fromReference:r=>r.applyMatrix3(su).convertLinearToSRGB()}},lp=new Set([sn,pa]),dt={enabled:!0,_workingColorSpace:sn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!lp.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=io[e].toReference,i=io[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return io[r].primaries},getTransfer:function(r){return r===zn?na:io[r].transfer}};function ts(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ca(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Er;class af{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Er===void 0&&(Er=Ks("canvas")),Er.width=e.width,Er.height=e.height;const n=Er.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ks("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ts(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ts(t[n]/255)*255):t[n]=ts(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cp=0;class lf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Kn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Pa(i[o].image)):s.push(Pa(i[o]))}else s=Pa(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Pa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?af.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let up=0;class rn extends _r{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,n=Bn,i=Bn,s=bn,o=pr,a=nn,l=ui,c=rn.DEFAULT_ANISOTROPY,u=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Kn(),this.name="",this.source=new lf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Wi?zt:zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ss:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ss:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?Wi:tf}set encoding(e){Gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Wi?zt:zn}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=jh;rn.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,i=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(d+1)/2,x=(p+1)/2,E=(u+f)/4,T=(h+g)/4,I=(_+m)/4;return v>y&&v>x?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=E/n,s=T/n):y>x?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=I/i):x<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(x),n=T/s,i=I/s),this.set(n,i,s,t),this}let b=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(h-g)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hp extends _r{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Gs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Wi?zt:zn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new rn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends hp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class cf extends rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=It,this.minFilter=It,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fp extends rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=It,this.minFilter=It,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class di{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let m=1-a;const p=l*f+c*d+u*_+h*g,b=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const x=Math.sqrt(v),E=Math.atan2(x,p*b);m=Math.sin(m*E)/x,a=Math.sin(a*E)/x}const y=a*b;if(l=l*m+f*y,c=c*m+d*y,u=u*m+_*y,h=h*m+g*y,m===1-a){const x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(au.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(au.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Da.copy(this).projectOnVector(e),this.sub(Da)}reflect(e){return this.sub(Da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Da=new P,au=new di;class kt{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(s,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ro.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ro.copy(n.boundingBox)),ro.applyMatrix4(e.matrixWorld),this.union(ro)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),so.subVectors(this.max,bs),Tr.subVectors(e.a,bs),Ar.subVectors(e.b,bs),Rr.subVectors(e.c,bs),Pi.subVectors(Ar,Tr),Di.subVectors(Rr,Ar),Ki.subVectors(Tr,Rr);let t=[0,-Pi.z,Pi.y,0,-Di.z,Di.y,0,-Ki.z,Ki.y,Pi.z,0,-Pi.x,Di.z,0,-Di.x,Ki.z,0,-Ki.x,-Pi.y,Pi.x,0,-Di.y,Di.x,0,-Ki.y,Ki.x,0];return!Ia(t,Tr,Ar,Rr,so)||(t=[1,0,0,0,1,0,0,0,1],!Ia(t,Tr,Ar,Rr,so))?!1:(oo.crossVectors(Pi,Di),t=[oo.x,oo.y,oo.z],Ia(t,Tr,Ar,Rr,so))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new P,new P,new P,new P,new P,new P,new P,new P],Wn=new P,ro=new kt,Tr=new P,Ar=new P,Rr=new P,Pi=new P,Di=new P,Ki=new P,bs=new P,so=new P,oo=new P,Zi=new P;function Ia(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Zi.fromArray(r,s);const a=i.x*Math.abs(Zi.x)+i.y*Math.abs(Zi.y)+i.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),u=n.dot(Zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const dp=new kt,Ss=new P,Na=new P;class ei{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ss.subVectors(e,this.center);const t=Ss.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ss,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ss.copy(e.center).add(Na)),this.expandByPoint(Ss.copy(e.center).sub(Na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new P,Fa=new P,ao=new P,Ii=new P,Oa=new P,lo=new P,Ua=new P;class Qs{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fa.copy(e).add(t).multiplyScalar(.5),ao.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(Fa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ao),a=Ii.dot(this.direction),l=-Ii.dot(ao),c=Ii.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Fa).addScaledVector(ao,f),d}intersectSphere(e,t){vi.subVectors(e.center,this.origin);const n=vi.dot(this.direction),i=vi.dot(vi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,n,i,s){Oa.subVectors(t,e),lo.subVectors(n,e),Ua.crossVectors(Oa,lo);let o=this.direction.dot(Ua),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);const l=a*this.direction.dot(lo.crossVectors(Ii,lo));if(l<0)return null;const c=a*this.direction.dot(Oa.cross(Ii));if(c<0||l+c>o)return null;const u=-a*Ii.dot(Ua);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,m){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,m)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Lr.setFromMatrixColumn(e,0).length(),s=1/Lr.setFromMatrixColumn(e,1).length(),o=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pp,e,mp)}lookAt(e,t,n){const i=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Ni.crossVectors(n,Rn),Ni.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Ni.crossVectors(n,Rn)),Ni.normalize(),co.crossVectors(Rn,Ni),i[0]=Ni.x,i[4]=co.x,i[8]=Rn.x,i[1]=Ni.y,i[5]=co.y,i[9]=Rn.y,i[2]=Ni.z,i[6]=co.z,i[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],b=n[3],v=n[7],y=n[11],x=n[15],E=i[0],T=i[4],I=i[8],S=i[12],A=i[1],z=i[5],O=i[9],G=i[13],D=i[2],H=i[6],K=i[10],Z=i[14],ce=i[3],ie=i[7],se=i[11],me=i[15];return s[0]=o*E+a*A+l*D+c*ce,s[4]=o*T+a*z+l*H+c*ie,s[8]=o*I+a*O+l*K+c*se,s[12]=o*S+a*G+l*Z+c*me,s[1]=u*E+h*A+f*D+d*ce,s[5]=u*T+h*z+f*H+d*ie,s[9]=u*I+h*O+f*K+d*se,s[13]=u*S+h*G+f*Z+d*me,s[2]=_*E+g*A+m*D+p*ce,s[6]=_*T+g*z+m*H+p*ie,s[10]=_*I+g*O+m*K+p*se,s[14]=_*S+g*G+m*Z+p*me,s[3]=b*E+v*A+y*D+x*ce,s[7]=b*T+v*z+y*H+x*ie,s[11]=b*I+v*O+y*K+x*se,s[15]=b*S+v*G+y*Z+x*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+g*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],b=h*m*c-g*f*c+g*l*d-a*m*d-h*l*p+a*f*p,v=_*f*c-u*m*c-_*l*d+o*m*d+u*l*p-o*f*p,y=u*g*c-_*h*c+_*a*d-o*g*d-u*a*p+o*h*p,x=_*h*l-u*g*l-_*a*f+o*g*f+u*a*m-o*h*m,E=t*b+n*v+i*y+s*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=b*T,e[1]=(g*f*s-h*m*s-g*i*d+n*m*d+h*i*p-n*f*p)*T,e[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*T,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*T,e[4]=v*T,e[5]=(u*m*s-_*f*s+_*i*d-t*m*d-u*i*p+t*f*p)*T,e[6]=(_*l*s-o*m*s-_*i*c+t*m*c+o*i*p-t*l*p)*T,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*T,e[8]=y*T,e[9]=(_*h*s-u*g*s-_*n*d+t*g*d+u*n*p-t*h*p)*T,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*p+t*a*p)*T,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*T,e[12]=x*T,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*m+t*h*m)*T,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*m-t*a*m)*T,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,m=o*h,p=a*h,b=l*c,v=l*u,y=l*h,x=n.x,E=n.y,T=n.z;return i[0]=(1-(g+p))*x,i[1]=(d+y)*x,i[2]=(_-v)*x,i[3]=0,i[4]=(d-y)*E,i[5]=(1-(f+p))*E,i[6]=(m+b)*E,i[7]=0,i[8]=(_+v)*T,i[9]=(m-b)*T,i[10]=(1-(f+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Lr.set(i[0],i[1],i[2]).length();const o=Lr.set(i[4],i[5],i[6]).length(),a=Lr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Xn.copy(this);const c=1/s,u=1/o,h=1/a;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=h,Xn.elements[9]*=h,Xn.elements[10]*=h,t.setFromRotationMatrix(Xn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Ei){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,_;if(a===Ei)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===sa)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Ei){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,d=(n+i)*u;let _,g;if(a===Ei)_=(o+s)*h,g=-2*h;else if(a===sa)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Lr=new P,Xn=new Ve,pp=new P(0,0,0),mp=new P(1,1,1),Ni=new P,co=new P,Rn=new P,lu=new Ve,cu=new di;class ma{constructor(e=0,t=0,n=0,i=ma.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cu.setFromEuler(this),this.setFromQuaternion(cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ma.DEFAULT_ORDER="XYZ";class uf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _p=0;const uu=new P,Cr=new di,xi=new Ve,uo=new P,ws=new P,gp=new P,vp=new di,hu=new P(1,0,0),fu=new P(0,1,0),du=new P(0,0,1),xp={type:"added"},yp={type:"removed"};class Ot extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new P,t=new ma,n=new di,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new rt}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(hu,e)}rotateY(e){return this.rotateOnAxis(fu,e)}rotateZ(e){return this.rotateOnAxis(du,e)}translateOnAxis(e,t){return uu.copy(e).applyQuaternion(this.quaternion),this.position.add(uu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hu,e)}translateY(e){return this.translateOnAxis(fu,e)}translateZ(e){return this.translateOnAxis(du,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?uo.copy(e):uo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(ws,uo,this.up):xi.lookAt(uo,ws,this.up),this.quaternion.setFromRotationMatrix(xi),i&&(xi.extractRotation(i.matrixWorld),Cr.setFromRotationMatrix(xi),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,e,gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,vp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ot.DEFAULT_UP=new P(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new P,yi=new P,Ba=new P,bi=new P,Pr=new P,Dr=new P,pu=new P,za=new P,ka=new P,Ha=new P;let ho=!1;class un{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),jn.subVectors(e,t),i.cross(jn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){jn.subVectors(i,t),yi.subVectors(n,t),Ba.subVectors(e,t);const o=jn.dot(jn),a=jn.dot(yi),l=jn.dot(Ba),c=yi.dot(yi),u=yi.dot(Ba),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,bi),bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getUV(e,t,n,i,s,o,a,l){return ho===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ho=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,bi),l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l}static isFrontFacing(e,t,n,i){return jn.subVectors(n,t),yi.subVectors(e,t),jn.cross(yi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),jn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ho===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ho=!0),un.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return un.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Pr.subVectors(i,n),Dr.subVectors(s,n),za.subVectors(e,n);const l=Pr.dot(za),c=Dr.dot(za);if(l<=0&&c<=0)return t.copy(n);ka.subVectors(e,i);const u=Pr.dot(ka),h=Dr.dot(ka);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Pr,o);Ha.subVectors(e,s);const d=Pr.dot(Ha),_=Dr.dot(Ha);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Dr,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return pu.subVectors(s,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(pu,a);const p=1/(m+g+f);return o=g*p,a=f*p,t.copy(n).addScaledVector(Pr,o).addScaledVector(Dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},fo={h:0,s:0,l:0};function Va(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=Zl(e,1),t=Qt(t,0,1),n=Qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Va(o,s,e+1/3),this.g=Va(o,s,e),this.b=Va(o,s,e-1/3)}return dt.toWorkingColorSpace(this,i),this}setStyle(e,t=zt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=hf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return dt.fromWorkingColorSpace(cn.copy(this),e),Math.round(Qt(cn.r*255,0,255))*65536+Math.round(Qt(cn.g*255,0,255))*256+Math.round(Qt(cn.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(cn.copy(this),t);const n=cn.r,i=cn.g,s=cn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=zt){dt.fromWorkingColorSpace(cn.copy(this),e);const t=cn.r,n=cn.g,i=cn.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(fo);const n=Vs(Fi.h,fo.h,t),i=Vs(Fi.s,fo.s,t),s=Vs(Fi.l,fo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new et;et.NAMES=hf;let bp=0;class hi extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=es,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=wl,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sl&&(n.blendSrc=this.blendSrc),this.blendDst!==wl&&(n.blendDst=this.blendDst),this.blendEquation!==ar&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ea&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ki extends hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new P,po=new Oe;class jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ll,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)po.fromBufferAttribute(this,t),po.applyMatrix3(e),this.setXY(t,po.x,po.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ll&&(e.usage=this.usage),e}}class ff extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class df extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zn extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Sp=0;const Fn=new Ve,Ga=new Ot,Ir=new P,Ln=new kt,Ms=new kt,Jt=new P;class vn extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(of(e)?df:ff)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return Ga.lookAt(e),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Zn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Ln.min,Ms.min),Ln.expandByPoint(Jt),Jt.addVectors(Ln.max,Ms.max),Ln.expandByPoint(Jt)):(Ln.expandByPoint(Ms.min),Ln.expandByPoint(Ms.max))}Ln.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Jt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Jt.fromBufferAttribute(a,c),l&&(Ir.fromBufferAttribute(e,c),Jt.add(Ir)),i=Math.max(i,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new P,u[A]=new P;const h=new P,f=new P,d=new P,_=new Oe,g=new Oe,m=new Oe,p=new P,b=new P;function v(A,z,O){h.fromArray(i,A*3),f.fromArray(i,z*3),d.fromArray(i,O*3),_.fromArray(o,A*2),g.fromArray(o,z*2),m.fromArray(o,O*2),f.sub(h),d.sub(h),g.sub(_),m.sub(_);const G=1/(g.x*m.y-m.x*g.y);isFinite(G)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(G),b.copy(d).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(G),c[A].add(p),c[z].add(p),c[O].add(p),u[A].add(b),u[z].add(b),u[O].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let A=0,z=y.length;A<z;++A){const O=y[A],G=O.start,D=O.count;for(let H=G,K=G+D;H<K;H+=3)v(n[H+0],n[H+1],n[H+2])}const x=new P,E=new P,T=new P,I=new P;function S(A){T.fromArray(s,A*3),I.copy(T);const z=c[A];x.copy(z),x.sub(T.multiplyScalar(T.dot(z))).normalize(),E.crossVectors(I,z);const G=E.dot(u[A])<0?-1:1;l[A*4]=x.x,l[A*4+1]=x.y,l[A*4+2]=x.z,l[A*4+3]=G}for(let A=0,z=y.length;A<z;++A){const O=y[A],G=O.start,D=O.count;for(let H=G,K=G+D;H<K;H+=3)S(n[H+0]),S(n[H+1]),S(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new P,s=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new jt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mu=new Ve,Ji=new Qs,mo=new ei,_u=new P,Nr=new P,Fr=new P,Or=new P,Wa=new P,_o=new P,go=new Oe,vo=new Oe,xo=new Oe,gu=new P,vu=new P,xu=new P,yo=new P,bo=new P;class Mn extends Ot{constructor(e=new vn,t=new ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){_o.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Wa.fromBufferAttribute(h,e),o?_o.addScaledVector(Wa,u):_o.addScaledVector(Wa.sub(t),u))}t.add(_o)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),Ji.copy(e.ray).recast(e.near),!(mo.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(mo,_u)===null||Ji.origin.distanceToSquared(_u)>(e.far-e.near)**2))&&(mu.copy(s).invert(),Ji.copy(e.ray).applyMatrix4(mu),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],b=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=b,x=v;y<x;y+=3){const E=a.getX(y),T=a.getX(y+1),I=a.getX(y+2);i=So(this,p,e,n,c,u,h,E,T,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const b=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);i=So(this,o,e,n,c,u,h,b,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],b=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=b,x=v;y<x;y+=3){const E=y,T=y+1,I=y+2;i=So(this,p,e,n,c,u,h,E,T,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const b=m,v=m+1,y=m+2;i=So(this,o,e,n,c,u,h,b,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function wp(r,e,t,n,i,s,o,a){let l;if(e.side===gn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Jn,a),l===null)return null;bo.copy(a),bo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(bo);return c<t.near||c>t.far?null:{distance:c,point:bo.clone(),object:r}}function So(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Nr),r.getVertexPosition(l,Fr),r.getVertexPosition(c,Or);const u=wp(r,e,t,n,Nr,Fr,Or,yo);if(u){i&&(go.fromBufferAttribute(i,a),vo.fromBufferAttribute(i,l),xo.fromBufferAttribute(i,c),u.uv=un.getInterpolation(yo,Nr,Fr,Or,go,vo,xo,new Oe)),s&&(go.fromBufferAttribute(s,a),vo.fromBufferAttribute(s,l),xo.fromBufferAttribute(s,c),u.uv1=un.getInterpolation(yo,Nr,Fr,Or,go,vo,xo,new Oe),u.uv2=u.uv1),o&&(gu.fromBufferAttribute(o,a),vu.fromBufferAttribute(o,l),xu.fromBufferAttribute(o,c),u.normal=un.getInterpolation(yo,Nr,Fr,Or,gu,vu,xu,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new P,materialIndex:0};un.getNormal(Nr,Fr,Or,h.normal),u.face=h}return u}class eo extends vn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Zn(c,3)),this.setAttribute("normal",new Zn(u,3)),this.setAttribute("uv",new Zn(h,2));function _(g,m,p,b,v,y,x,E,T,I,S){const A=y/T,z=x/I,O=y/2,G=x/2,D=E/2,H=T+1,K=I+1;let Z=0,ce=0;const ie=new P;for(let se=0;se<K;se++){const me=se*z-G;for(let ve=0;ve<H;ve++){const Q=ve*A-O;ie[g]=Q*b,ie[m]=me*v,ie[p]=D,c.push(ie.x,ie.y,ie.z),ie[g]=0,ie[m]=0,ie[p]=E>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(ve/T),h.push(1-se/I),Z+=1}}for(let se=0;se<I;se++)for(let me=0;me<T;me++){const ve=f+me+H*se,Q=f+me+H*(se+1),oe=f+(me+1)+H*(se+1),Se=f+(me+1)+H*se;l.push(ve,Q,Se),l.push(Q,oe,Se),ce+=6}a.addGroup(d,ce,S),d+=ce,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function dn(r){const e={};for(let t=0;t<r.length;t++){const n=cs(r[t]);for(const i in n)e[i]=n[i]}return e}function Mp(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function pf(r){return r.getRenderTarget()===null?r.outputColorSpace:dt.workingColorSpace}const Ep={clone:cs,merge:dn};var Tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tp,this.fragmentShader=Ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=Mp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class mf extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class mn extends mf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ur=-90,Br=1;class Rp extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new mn(Ur,Br,e,t);i.layers=this.layers,this.add(i);const s=new mn(Ur,Br,e,t);s.layers=this.layers,this.add(s);const o=new mn(Ur,Br,e,t);o.layers=this.layers,this.add(o);const a=new mn(Ur,Br,e,t);a.layers=this.layers,this.add(a);const l=new mn(Ur,Br,e,t);l.layers=this.layers,this.add(l);const c=new mn(Ur,Br,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class _f extends rn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:is,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lp extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Gs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Wi?zt:zn),this.texture=new _f(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new eo(5,5,5),s=new ji({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Vi});s.uniforms.tEquirect.value=t;const o=new Mn(i,s),a=t.minFilter;return t.minFilter===pr&&(t.minFilter=bn),new Rp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Xa=new P,Cp=new P,Pp=new rt;class ai{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Xa.subVectors(n,t).cross(Cp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Pp.getNormalMatrix(e),i=this.coplanarPoint(Xa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new ei,wo=new P;class Jl{constructor(e=new ai,t=new ai,n=new ai,i=new ai,s=new ai,o=new ai){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ei){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],m=i[11],p=i[12],b=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-s,f-c,m-d,y-p).normalize(),n[1].setComponents(l+s,f+c,m+d,y+p).normalize(),n[2].setComponents(l+o,f+u,m+_,y+b).normalize(),n[3].setComponents(l-o,f-u,m-_,y-b).normalize(),n[4].setComponents(l-a,f-h,m-g,y-v).normalize(),t===Ei)n[5].setComponents(l+a,f+h,m+g,y+v).normalize();else if(t===sa)n[5].setComponents(a,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(wo.x=i.normal.x>0?e.max.x:e.min.x,wo.y=i.normal.y>0?e.max.y:e.min.y,wo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gf(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Dp(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=h.byteLength,_=r.createBuffer();r.bindBuffer(u,_),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,u,h){const f=u.array,d=u._updateRange,_=u.updateRanges;if(r.bindBuffer(h,c),d.count===-1&&_.length===0&&r.bufferSubData(h,0,f),_.length!==0){for(let g=0,m=_.length;g<m;g++){const p=_[g];t?r.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):r.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}d.count!==-1&&(t?r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class Ql extends vn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const b=p*f-o;for(let v=0;v<c;v++){const y=v*h-s;_.push(y,-b,0),g.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const v=b+c*p,y=b+c*(p+1),x=b+1+c*(p+1),E=b+1+c*p;d.push(v,y,E),d.push(y,x,E)}this.setIndex(d),this.setAttribute("position",new Zn(_,3)),this.setAttribute("normal",new Zn(g,3)),this.setAttribute("uv",new Zn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ip=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Np=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Up=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,im=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",um=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,hm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ym=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Em=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Dm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Im=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Om=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Um=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ym=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$m=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Km=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,t_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,n_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,l_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,m_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,__=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,g_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,v_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,S_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,T_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,A_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,R_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,C_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,P_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const D_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,z_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,k_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,H_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,q_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Z_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Q_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ig=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ug=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:Ip,alphahash_pars_fragment:Np,alphamap_fragment:Fp,alphamap_pars_fragment:Op,alphatest_fragment:Up,alphatest_pars_fragment:Bp,aomap_fragment:zp,aomap_pars_fragment:kp,batching_pars_vertex:Hp,batching_vertex:Vp,begin_vertex:Gp,beginnormal_vertex:Wp,bsdfs:Xp,iridescence_fragment:jp,bumpmap_pars_fragment:qp,clipping_planes_fragment:Yp,clipping_planes_pars_fragment:$p,clipping_planes_pars_vertex:Kp,clipping_planes_vertex:Zp,color_fragment:Jp,color_pars_fragment:Qp,color_pars_vertex:em,color_vertex:tm,common:nm,cube_uv_reflection_fragment:im,defaultnormal_vertex:rm,displacementmap_pars_vertex:sm,displacementmap_vertex:om,emissivemap_fragment:am,emissivemap_pars_fragment:lm,colorspace_fragment:cm,colorspace_pars_fragment:um,envmap_fragment:hm,envmap_common_pars_fragment:fm,envmap_pars_fragment:dm,envmap_pars_vertex:pm,envmap_physical_pars_fragment:Tm,envmap_vertex:mm,fog_vertex:_m,fog_pars_vertex:gm,fog_fragment:vm,fog_pars_fragment:xm,gradientmap_pars_fragment:ym,lightmap_fragment:bm,lightmap_pars_fragment:Sm,lights_lambert_fragment:wm,lights_lambert_pars_fragment:Mm,lights_pars_begin:Em,lights_toon_fragment:Am,lights_toon_pars_fragment:Rm,lights_phong_fragment:Lm,lights_phong_pars_fragment:Cm,lights_physical_fragment:Pm,lights_physical_pars_fragment:Dm,lights_fragment_begin:Im,lights_fragment_maps:Nm,lights_fragment_end:Fm,logdepthbuf_fragment:Om,logdepthbuf_pars_fragment:Um,logdepthbuf_pars_vertex:Bm,logdepthbuf_vertex:zm,map_fragment:km,map_pars_fragment:Hm,map_particle_fragment:Vm,map_particle_pars_fragment:Gm,metalnessmap_fragment:Wm,metalnessmap_pars_fragment:Xm,morphcolor_vertex:jm,morphnormal_vertex:qm,morphtarget_pars_vertex:Ym,morphtarget_vertex:$m,normal_fragment_begin:Km,normal_fragment_maps:Zm,normal_pars_fragment:Jm,normal_pars_vertex:Qm,normal_vertex:e_,normalmap_pars_fragment:t_,clearcoat_normal_fragment_begin:n_,clearcoat_normal_fragment_maps:i_,clearcoat_pars_fragment:r_,iridescence_pars_fragment:s_,opaque_fragment:o_,packing:a_,premultiplied_alpha_fragment:l_,project_vertex:c_,dithering_fragment:u_,dithering_pars_fragment:h_,roughnessmap_fragment:f_,roughnessmap_pars_fragment:d_,shadowmap_pars_fragment:p_,shadowmap_pars_vertex:m_,shadowmap_vertex:__,shadowmask_pars_fragment:g_,skinbase_vertex:v_,skinning_pars_vertex:x_,skinning_vertex:y_,skinnormal_vertex:b_,specularmap_fragment:S_,specularmap_pars_fragment:w_,tonemapping_fragment:M_,tonemapping_pars_fragment:E_,transmission_fragment:T_,transmission_pars_fragment:A_,uv_pars_fragment:R_,uv_pars_vertex:L_,uv_vertex:C_,worldpos_vertex:P_,background_vert:D_,background_frag:I_,backgroundCube_vert:N_,backgroundCube_frag:F_,cube_vert:O_,cube_frag:U_,depth_vert:B_,depth_frag:z_,distanceRGBA_vert:k_,distanceRGBA_frag:H_,equirect_vert:V_,equirect_frag:G_,linedashed_vert:W_,linedashed_frag:X_,meshbasic_vert:j_,meshbasic_frag:q_,meshlambert_vert:Y_,meshlambert_frag:$_,meshmatcap_vert:K_,meshmatcap_frag:Z_,meshnormal_vert:J_,meshnormal_frag:Q_,meshphong_vert:eg,meshphong_frag:tg,meshphysical_vert:ng,meshphysical_frag:ig,meshtoon_vert:rg,meshtoon_frag:sg,points_vert:og,points_frag:ag,shadow_vert:lg,shadow_frag:cg,sprite_vert:ug,sprite_frag:hg},xe={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},li={basic:{uniforms:dn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:dn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new et(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:dn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:dn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:dn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new et(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:dn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:dn([xe.points,xe.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:dn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:dn([xe.common,xe.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:dn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:dn([xe.sprite,xe.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:dn([xe.common,xe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:dn([xe.lights,xe.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};li.physical={uniforms:dn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Mo={r:0,b:0,g:0};function fg(r,e,t,n,i,s,o){const a=new et(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(m,p){let b=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),b=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||b)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ha)?(u===void 0&&(u=new Mn(new eo(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:cs(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(x,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=dt.getTransfer(v.colorSpace)!==Tt,(h!==v||f!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Mn(new Ql(2,2),new ji({name:"BackgroundMaterial",uniforms:cs(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=dt.getTransfer(v.colorSpace)!==Tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(Mo,pf(r)),n.buffers.color.setClear(Mo.r,Mo.g,Mo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function dg(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(D,H,K,Z,ce){let ie=!1;if(o){const se=g(Z,K,H);c!==se&&(c=se,d(c.object)),ie=p(D,Z,K,ce),ie&&b(D,Z,K,ce)}else{const se=H.wireframe===!0;(c.geometry!==Z.id||c.program!==K.id||c.wireframe!==se)&&(c.geometry=Z.id,c.program=K.id,c.wireframe=se,ie=!0)}ce!==null&&t.update(ce,r.ELEMENT_ARRAY_BUFFER),(ie||u)&&(u=!1,I(D,H,K,Z),ce!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ce).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function g(D,H,K){const Z=K.wireframe===!0;let ce=a[D.id];ce===void 0&&(ce={},a[D.id]=ce);let ie=ce[H.id];ie===void 0&&(ie={},ce[H.id]=ie);let se=ie[Z];return se===void 0&&(se=m(f()),ie[Z]=se),se}function m(D){const H=[],K=[],Z=[];for(let ce=0;ce<i;ce++)H[ce]=0,K[ce]=0,Z[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:Z,object:D,attributes:{},index:null}}function p(D,H,K,Z){const ce=c.attributes,ie=H.attributes;let se=0;const me=K.getAttributes();for(const ve in me)if(me[ve].location>=0){const oe=ce[ve];let Se=ie[ve];if(Se===void 0&&(ve==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),ve==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor)),oe===void 0||oe.attribute!==Se||Se&&oe.data!==Se.data)return!0;se++}return c.attributesNum!==se||c.index!==Z}function b(D,H,K,Z){const ce={},ie=H.attributes;let se=0;const me=K.getAttributes();for(const ve in me)if(me[ve].location>=0){let oe=ie[ve];oe===void 0&&(ve==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),ve==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor));const Se={};Se.attribute=oe,oe&&oe.data&&(Se.data=oe.data),ce[ve]=Se,se++}c.attributes=ce,c.attributesNum=se,c.index=Z}function v(){const D=c.newAttributes;for(let H=0,K=D.length;H<K;H++)D[H]=0}function y(D){x(D,0)}function x(D,H){const K=c.newAttributes,Z=c.enabledAttributes,ce=c.attributeDivisors;K[D]=1,Z[D]===0&&(r.enableVertexAttribArray(D),Z[D]=1),ce[D]!==H&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,H),ce[D]=H)}function E(){const D=c.newAttributes,H=c.enabledAttributes;for(let K=0,Z=H.length;K<Z;K++)H[K]!==D[K]&&(r.disableVertexAttribArray(K),H[K]=0)}function T(D,H,K,Z,ce,ie,se){se===!0?r.vertexAttribIPointer(D,H,K,ce,ie):r.vertexAttribPointer(D,H,K,Z,ce,ie)}function I(D,H,K,Z){if(n.isWebGL2===!1&&(D.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const ce=Z.attributes,ie=K.getAttributes(),se=H.defaultAttributeValues;for(const me in ie){const ve=ie[me];if(ve.location>=0){let Q=ce[me];if(Q===void 0&&(me==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),me==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){const oe=Q.normalized,Se=Q.itemSize,Pe=t.get(Q);if(Pe===void 0)continue;const _e=Pe.buffer,Xe=Pe.type,Ge=Pe.bytesPerElement,Ne=n.isWebGL2===!0&&(Xe===r.INT||Xe===r.UNSIGNED_INT||Q.gpuType===ks);if(Q.isInterleavedBufferAttribute){const Ye=Q.data,W=Ye.stride,Rt=Q.offset;if(Ye.isInstancedInterleavedBuffer){for(let Le=0;Le<ve.locationSize;Le++)x(ve.location+Le,Ye.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let Le=0;Le<ve.locationSize;Le++)y(ve.location+Le);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let Le=0;Le<ve.locationSize;Le++)T(ve.location+Le,Se/ve.locationSize,Xe,oe,W*Ge,(Rt+Se/ve.locationSize*Le)*Ge,Ne)}else{if(Q.isInstancedBufferAttribute){for(let Ye=0;Ye<ve.locationSize;Ye++)x(ve.location+Ye,Q.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ye=0;Ye<ve.locationSize;Ye++)y(ve.location+Ye);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let Ye=0;Ye<ve.locationSize;Ye++)T(ve.location+Ye,Se/ve.locationSize,Xe,oe,Se*Ge,Se/ve.locationSize*Ye*Ge,Ne)}}else if(se!==void 0){const oe=se[me];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(ve.location,oe);break;case 3:r.vertexAttrib3fv(ve.location,oe);break;case 4:r.vertexAttrib4fv(ve.location,oe);break;default:r.vertexAttrib1fv(ve.location,oe)}}}}E()}function S(){O();for(const D in a){const H=a[D];for(const K in H){const Z=H[K];for(const ce in Z)_(Z[ce].object),delete Z[ce];delete H[K]}delete a[D]}}function A(D){if(a[D.id]===void 0)return;const H=a[D.id];for(const K in H){const Z=H[K];for(const ce in Z)_(Z[ce].object),delete Z[ce];delete H[K]}delete a[D.id]}function z(D){for(const H in a){const K=a[H];if(K[D.id]===void 0)continue;const Z=K[D.id];for(const ce in Z)_(Z[ce].object),delete Z[ce];delete K[D.id]}}function O(){G(),u=!0,c!==l&&(c=l,d(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:O,resetDefaultState:G,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:y,disableUnusedAttributes:E}}function pg(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,h){r.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,f){if(f===0)return;let d,_;if(i)d=r,_="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[_](s,u,h,f),t.update(h,s,f)}function c(u,h,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<f;_++)this.render(u[_],h[_]);else{d.multiDrawArraysWEBGL(s,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g];t.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function mg(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,y=o||e.has("OES_texture_float"),x=v&&y,E=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:x,maxSamples:E}}function _g(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new ai,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const b=s?0:n,v=b*4;let y=p.clippingState||null;l.value=y,y=u(_,f,v,d);for(let x=0;x!==v;++x)y[x]=t[x];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=d;v!==g;++v,y+=4)o.copy(h[v]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function gg(r){let e=new WeakMap;function t(o,a){return a===Ml?o.mapping=is:a===El&&(o.mapping=rs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ml||a===El)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lp(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class to extends mf{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Jr=4,yu=[.125,.215,.35,.446,.526,.582],lr=20,ja=new to,bu=new et;let qa=null,Ya=0,$a=0;const rr=(1+Math.sqrt(5))/2,zr=1/rr,Su=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,rr,zr),new P(0,rr,-zr),new P(zr,0,rr),new P(-zr,0,rr),new P(rr,zr,0),new P(-rr,zr,0)];class wu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qa,Ya,$a),e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:qs,format:nn,colorSpace:sn,depthBuffer:!1},i=Mu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vg(s)),this._blurMaterial=xg(s,e,t)}return i}_compileMaterial(e){const t=new Mn(this._lodPlanes[0],e);this._renderer.compile(t,ja)}_sceneToCubeUV(e,t,n,i){const a=new mn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(bu),u.toneMapping=Gi,u.autoClear=!1;const d=new ki({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),_=new Mn(new eo,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(bu),g=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Eo(i,b*v,p>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===is||e.mapping===rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eu());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Mn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Eo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ja)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Su[(i-1)%Su.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Mn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*lr-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):lr;m>lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lr}`);const p=[];let b=0;for(let T=0;T<lr;++T){const I=T/g,S=Math.exp(-I*I/2);p.push(S),T===0?b+=S:T<m&&(b+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const y=this._sizeLods[i],x=3*y*(i>v-Jr?i-v+Jr:0),E=4*(this._cubeSize-y);Eo(t,x,E,3*y,2*y),l.setRenderTarget(t),l.render(h,ja)}}function vg(r){const e=[],t=[],n=[];let i=r;const s=r-Jr+1+yu.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Jr?l=yu[o-r+Jr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,b=new Float32Array(g*_*d),v=new Float32Array(m*_*d),y=new Float32Array(p*_*d);for(let E=0;E<d;E++){const T=E%3*2/3-1,I=E>2?0:-1,S=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];b.set(S,g*_*E),v.set(f,m*_*E);const A=[E,E,E,E,E,E];y.set(A,p*_*E)}const x=new vn;x.setAttribute("position",new jt(b,g)),x.setAttribute("uv",new jt(v,m)),x.setAttribute("faceIndex",new jt(y,p)),e.push(x),i>Jr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mu(r,e,t){const n=new Xi(r,e,t);return n.texture.mapping=ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Eo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function xg(r,e,t){const n=new Float32Array(lr),i=new P(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Eu(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Tu(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function ec(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yg(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ml||l===El,u=l===is||l===rs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new wu(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new wu(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function bg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Sg(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const b=d.array;g=d.version;for(let v=0,y=b.length;v<y;v+=3){const x=b[v+0],E=b[v+1],T=b[v+2];f.push(x,E,E,T,T,x)}}else if(_!==void 0){const b=_.array;g=_.version;for(let v=0,y=b.length/3-1;v<y;v+=3){const x=v+0,E=v+1,T=v+2;f.push(x,E,E,T,T,x)}}else return;const m=new(of(f)?df:ff)(f,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function wg(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,_){r.drawElements(s,_,a,d*l),t.update(_,s,1)}function h(d,_,g){if(g===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,_,a,d*l,g),t.update(_,s,g)}function f(d,_,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<g;p++)this.render(d[p]/l,_[p]);else{m.multiDrawElementsWEBGL(s,_,0,a,d,0,g);let p=0;for(let b=0;b<g;b++)p+=_[b];t.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function Mg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Eg(r,e){return r[0]-e[0]}function Tg(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Ag(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new pt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(u);if(m===void 0||m.count!==g){let H=function(){G.dispose(),s.delete(u),u.removeEventListener("dispose",H)};var d=H;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),x===!0&&(S=3);let A=u.attributes.position.count*S,z=1;A>e.maxTextureSize&&(z=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const O=new Float32Array(A*z*4*g),G=new cf(O,A,z,g);G.type=_n,G.needsUpdate=!0;const D=S*4;for(let K=0;K<g;K++){const Z=E[K],ce=T[K],ie=I[K],se=A*z*4*K;for(let me=0;me<Z.count;me++){const ve=me*D;v===!0&&(o.fromBufferAttribute(Z,me),O[se+ve+0]=o.x,O[se+ve+1]=o.y,O[se+ve+2]=o.z,O[se+ve+3]=0),y===!0&&(o.fromBufferAttribute(ce,me),O[se+ve+4]=o.x,O[se+ve+5]=o.y,O[se+ve+6]=o.z,O[se+ve+7]=0),x===!0&&(o.fromBufferAttribute(ie,me),O[se+ve+8]=o.x,O[se+ve+9]=o.y,O[se+ve+10]=o.z,O[se+ve+11]=ie.itemSize===4?o.w:1)}}m={count:g,texture:G,size:new Oe(A,z)},s.set(u,m),u.addEventListener("dispose",H)}let p=0;for(let v=0;v<f.length;v++)p+=f[v];const b=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",b),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const _=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let y=0;y<_;y++)g[y]=[y,0];n[u.id]=g}for(let y=0;y<_;y++){const x=g[y];x[0]=y,x[1]=f[y]}g.sort(Tg);for(let y=0;y<8;y++)y<_&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Eg);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let b=0;for(let y=0;y<8;y++){const x=a[y],E=x[0],T=x[1];E!==Number.MAX_SAFE_INTEGER&&T?(m&&u.getAttribute("morphTarget"+y)!==m[E]&&u.setAttribute("morphTarget"+y,m[E]),p&&u.getAttribute("morphNormal"+y)!==p[E]&&u.setAttribute("morphNormal"+y,p[E]),i[y]=T,b+=T):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),p&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const v=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Rg(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class vf extends rn{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:fr,u!==fr&&u!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===fr&&(n=Cn),n===void 0&&u===os&&(n=hr),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:It,this.minFilter=l!==void 0?l:It,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const xf=new rn,yf=new vf(1,1);yf.compareFunction=rf;const bf=new cf,Sf=new fp,wf=new _f,Au=[],Ru=[],Lu=new Float32Array(16),Cu=new Float32Array(9),Pu=new Float32Array(4);function ds(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Au[i];if(s===void 0&&(s=new Float32Array(i),Au[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function $t(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function _a(r,e){let t=Ru[e];t===void 0&&(t=new Int32Array(e),Ru[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Lg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Cg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2fv(this.addr,e),$t(t,e)}}function Pg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;r.uniform3fv(this.addr,e),$t(t,e)}}function Dg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4fv(this.addr,e),$t(t,e)}}function Ig(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;Pu.set(n),r.uniformMatrix2fv(this.addr,!1,Pu),$t(t,n)}}function Ng(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;Cu.set(n),r.uniformMatrix3fv(this.addr,!1,Cu),$t(t,n)}}function Fg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;Lu.set(n),r.uniformMatrix4fv(this.addr,!1,Lu),$t(t,n)}}function Og(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ug(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2iv(this.addr,e),$t(t,e)}}function Bg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;r.uniform3iv(this.addr,e),$t(t,e)}}function zg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4iv(this.addr,e),$t(t,e)}}function kg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Hg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2uiv(this.addr,e),$t(t,e)}}function Vg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;r.uniform3uiv(this.addr,e),$t(t,e)}}function Gg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4uiv(this.addr,e),$t(t,e)}}function Wg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?yf:xf;t.setTexture2D(e||s,i)}function Xg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Sf,i)}function jg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wf,i)}function qg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||bf,i)}function Yg(r){switch(r){case 5126:return Lg;case 35664:return Cg;case 35665:return Pg;case 35666:return Dg;case 35674:return Ig;case 35675:return Ng;case 35676:return Fg;case 5124:case 35670:return Og;case 35667:case 35671:return Ug;case 35668:case 35672:return Bg;case 35669:case 35673:return zg;case 5125:return kg;case 36294:return Hg;case 36295:return Vg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return qg}}function $g(r,e){r.uniform1fv(this.addr,e)}function Kg(r,e){const t=ds(e,this.size,2);r.uniform2fv(this.addr,t)}function Zg(r,e){const t=ds(e,this.size,3);r.uniform3fv(this.addr,t)}function Jg(r,e){const t=ds(e,this.size,4);r.uniform4fv(this.addr,t)}function Qg(r,e){const t=ds(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ev(r,e){const t=ds(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function tv(r,e){const t=ds(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function nv(r,e){r.uniform1iv(this.addr,e)}function iv(r,e){r.uniform2iv(this.addr,e)}function rv(r,e){r.uniform3iv(this.addr,e)}function sv(r,e){r.uniform4iv(this.addr,e)}function ov(r,e){r.uniform1uiv(this.addr,e)}function av(r,e){r.uniform2uiv(this.addr,e)}function lv(r,e){r.uniform3uiv(this.addr,e)}function cv(r,e){r.uniform4uiv(this.addr,e)}function uv(r,e,t){const n=this.cache,i=e.length,s=_a(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||xf,s[o])}function hv(r,e,t){const n=this.cache,i=e.length,s=_a(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Sf,s[o])}function fv(r,e,t){const n=this.cache,i=e.length,s=_a(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||wf,s[o])}function dv(r,e,t){const n=this.cache,i=e.length,s=_a(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||bf,s[o])}function pv(r){switch(r){case 5126:return $g;case 35664:return Kg;case 35665:return Zg;case 35666:return Jg;case 35674:return Qg;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return rv;case 35669:case 35673:return sv;case 5125:return ov;case 36294:return av;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return dv}}class mv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yg(t.type)}}class _v{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pv(t.type)}}class gv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ka=/(\w+)(\])?(\[|\.)?/g;function Du(r,e){r.seq.push(e),r.map[e.id]=e}function vv(r,e,t){const n=r.name,i=n.length;for(Ka.lastIndex=0;;){const s=Ka.exec(n),o=Ka.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Du(t,c===void 0?new mv(a,r,e):new _v(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new gv(a),Du(t,h)),t=h}}}class Qo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);vv(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Iu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const xv=37297;let yv=0;function bv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Sv(r){const e=dt.getPrimaries(dt.workingColorSpace),t=dt.getPrimaries(r);let n;switch(e===t?n="":e===ra&&t===ia?n="LinearDisplayP3ToLinearSRGB":e===ia&&t===ra&&(n="LinearSRGBToLinearDisplayP3"),r){case sn:case pa:return[n,"LinearTransferOETF"];case zt:case Kl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Nu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+bv(r.getShaderSource(e),o)}else return i}function wv(r,e){const t=Sv(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Mv(r,e){let t;switch(e){case Ed:t="Linear";break;case Td:t="Reinhard";break;case Ad:t="OptimizedCineon";break;case Rd:t="ACESFilmic";break;case Ld:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ev(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Us).join(`
`)}function Tv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Av(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Us(r){return r!==""}function Fu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ou(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(r){return r.replace(Rv,Cv)}const Lv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Cv(r,e){let t=nt[e];if(t===void 0){const n=Lv.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Dl(t)}const Pv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uu(r){return r.replace(Pv,Dv)}function Dv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Bu(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Iv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Wh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Qf?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function Nv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case is:case rs:e="ENVMAP_TYPE_CUBE";break;case ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fv(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case rs:e="ENVMAP_MODE_REFRACTION";break}return e}function Ov(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Xh:e="ENVMAP_BLENDING_MULTIPLY";break;case wd:e="ENVMAP_BLENDING_MIX";break;case Md:e="ENVMAP_BLENDING_ADD";break}return e}function Uv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Bv(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Iv(t),c=Nv(t),u=Fv(t),h=Ov(t),f=Uv(t),d=t.isWebGL2?"":Ev(t),_=Tv(s),g=i.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Us).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Us).join(`
`),p.length>0&&(p+=`
`)):(m=[Bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),p=[d,Bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?nt.tonemapping_pars_fragment:"",t.toneMapping!==Gi?Mv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,wv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Us).join(`
`)),o=Dl(o),o=Fu(o,t),o=Ou(o,t),a=Dl(a),a=Fu(a,t),a=Ou(a,t),o=Uu(o),a=Uu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=b+m+o,y=b+p+a,x=Iu(i,i.VERTEX_SHADER,v),E=Iu(i,i.FRAGMENT_SHADER,y);i.attachShader(g,x),i.attachShader(g,E),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(z){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(g).trim(),G=i.getShaderInfoLog(x).trim(),D=i.getShaderInfoLog(E).trim();let H=!0,K=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,x,E);else{const Z=Nu(i,x,"vertex"),ce=Nu(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+O+`
`+Z+`
`+ce)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(G===""||D==="")&&(K=!1);K&&(z.diagnostics={runnable:H,programLog:O,vertexShader:{log:G,prefix:m},fragmentShader:{log:D,prefix:p}})}i.deleteShader(x),i.deleteShader(E),I=new Qo(i,g),S=Av(i,g)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(g,xv)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=x,this.fragmentShader=E,this}let zv=0;class kv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Hv(e),t.set(e,n)),n}}class Hv{constructor(e){this.id=zv++,this.code=e,this.usedTimes=0}}function Vv(r,e,t,n,i,s,o){const a=new uf,l=new kv,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,A,z,O,G){const D=O.fog,H=G.geometry,K=S.isMeshStandardMaterial?O.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||K),ce=Z&&Z.mapping===ha?Z.image.height:null,ie=_[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const se=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,me=se!==void 0?se.length:0;let ve=0;H.morphAttributes.position!==void 0&&(ve=1),H.morphAttributes.normal!==void 0&&(ve=2),H.morphAttributes.color!==void 0&&(ve=3);let Q,oe,Se,Pe;if(ie){const Ht=li[ie];Q=Ht.vertexShader,oe=Ht.fragmentShader}else Q=S.vertexShader,oe=S.fragmentShader,l.update(S),Se=l.getVertexShaderID(S),Pe=l.getFragmentShaderID(S);const _e=r.getRenderTarget(),Xe=G.isInstancedMesh===!0,Ge=G.isBatchedMesh===!0,Ne=!!S.map,Ye=!!S.matcap,W=!!Z,Rt=!!S.aoMap,Le=!!S.lightMap,$e=!!S.bumpMap,Be=!!S.normalMap,mt=!!S.displacementMap,Ke=!!S.emissiveMap,ze=!!S.metalnessMap,st=!!S.roughnessMap,Mt=S.anisotropy>0,Lt=S.clearcoat>0,C=S.iridescence>0,w=S.sheen>0,X=S.transmission>0,le=Mt&&!!S.anisotropyMap,re=Lt&&!!S.clearcoatMap,fe=Lt&&!!S.clearcoatNormalMap,Ee=Lt&&!!S.clearcoatRoughnessMap,pe=C&&!!S.iridescenceMap,ye=C&&!!S.iridescenceThicknessMap,N=w&&!!S.sheenColorMap,de=w&&!!S.sheenRoughnessMap,ne=!!S.specularMap,Fe=!!S.specularColorMap,Ae=!!S.specularIntensityMap,Ce=X&&!!S.transmissionMap,Me=X&&!!S.thicknessMap,be=!!S.gradientMap,He=!!S.alphaMap,F=S.alphaTest>0,ge=!!S.alphaHash,ae=!!S.extensions,ee=!!H.attributes.uv1,he=!!H.attributes.uv2,Re=!!H.attributes.uv3;let tt=Gi;return S.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(tt=r.toneMapping),{isWebGL2:u,shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:Q,fragmentShader:oe,defines:S.defines,customVertexShaderID:Se,customFragmentShaderID:Pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Ge,instancing:Xe,instancingColor:Xe&&G.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:sn,map:Ne,matcap:Ye,envMap:W,envMapMode:W&&Z.mapping,envMapCubeUVHeight:ce,aoMap:Rt,lightMap:Le,bumpMap:$e,normalMap:Be,displacementMap:f&&mt,emissiveMap:Ke,normalMapObjectSpace:Be&&S.normalMapType===zd,normalMapTangentSpace:Be&&S.normalMapType===nf,metalnessMap:ze,roughnessMap:st,anisotropy:Mt,anisotropyMap:le,clearcoat:Lt,clearcoatMap:re,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ee,iridescence:C,iridescenceMap:pe,iridescenceThicknessMap:ye,sheen:w,sheenColorMap:N,sheenRoughnessMap:de,specularMap:ne,specularColorMap:Fe,specularIntensityMap:Ae,transmission:X,transmissionMap:Ce,thicknessMap:Me,gradientMap:be,opaque:S.transparent===!1&&S.blending===es,alphaMap:He,alphaTest:F,alphaHash:ge,combine:S.combine,mapUv:Ne&&g(S.map.channel),aoMapUv:Rt&&g(S.aoMap.channel),lightMapUv:Le&&g(S.lightMap.channel),bumpMapUv:$e&&g(S.bumpMap.channel),normalMapUv:Be&&g(S.normalMap.channel),displacementMapUv:mt&&g(S.displacementMap.channel),emissiveMapUv:Ke&&g(S.emissiveMap.channel),metalnessMapUv:ze&&g(S.metalnessMap.channel),roughnessMapUv:st&&g(S.roughnessMap.channel),anisotropyMapUv:le&&g(S.anisotropyMap.channel),clearcoatMapUv:re&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:N&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:de&&g(S.sheenRoughnessMap.channel),specularMapUv:ne&&g(S.specularMap.channel),specularColorMapUv:Fe&&g(S.specularColorMap.channel),specularIntensityMapUv:Ae&&g(S.specularIntensityMap.channel),transmissionMapUv:Ce&&g(S.transmissionMap.channel),thicknessMapUv:Me&&g(S.thicknessMap.channel),alphaMapUv:He&&g(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Be||Mt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:ee,vertexUv2s:he,vertexUv3s:Re,pointsUvs:G.isPoints===!0&&!!H.attributes.uv&&(Ne||He),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:G.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:ve,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:tt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ne&&S.map.isVideoTexture===!0&&dt.getTransfer(S.map.colorSpace)===Tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===$n,flipSided:S.side===gn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ae&&S.extensions.derivatives===!0,extensionFragDepth:ae&&S.extensions.fragDepth===!0,extensionDrawBuffers:ae&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)A.push(z),A.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(b(A,S),v(A,S),A.push(r.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function b(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function v(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const A=_[S.type];let z;if(A){const O=li[A];z=Ep.clone(O.uniforms)}else z=S.uniforms;return z}function x(S,A){let z;for(let O=0,G=c.length;O<G;O++){const D=c[O];if(D.cacheKey===A){z=D,++z.usedTimes;break}}return z===void 0&&(z=new Bv(r,A,S,s),c.push(z)),z}function E(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function T(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:x,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:I}}function Gv(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Wv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function zu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ku(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,_,g,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function a(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||Wv),n.length>1&&n.sort(f||zu),i.length>1&&i.sort(f||zu)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Xv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new ku,r.set(n,[o])):i>=s.length?(o=new ku,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function jv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new et};break;case"SpotLight":t={position:new P,direction:new P,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function qv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Yv=0;function $v(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Kv(r,e){const t=new jv,n=qv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new P);const s=new P,o=new Ve,a=new Ve;function l(u,h){let f=0,d=0,_=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let g=0,m=0,p=0,b=0,v=0,y=0,x=0,E=0,T=0,I=0,S=0;u.sort($v);const A=h===!0?Math.PI:1;for(let O=0,G=u.length;O<G;O++){const D=u[O],H=D.color,K=D.intensity,Z=D.distance,ce=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=H.r*K*A,d+=H.g*K*A,_+=H.b*K*A;else if(D.isLightProbe){for(let ie=0;ie<9;ie++)i.probe[ie].addScaledVector(D.sh.coefficients[ie],K);S++}else if(D.isDirectionalLight){const ie=t.get(D);if(ie.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){const se=D.shadow,me=n.get(D);me.shadowBias=se.bias,me.shadowNormalBias=se.normalBias,me.shadowRadius=se.radius,me.shadowMapSize=se.mapSize,i.directionalShadow[g]=me,i.directionalShadowMap[g]=ce,i.directionalShadowMatrix[g]=D.shadow.matrix,y++}i.directional[g]=ie,g++}else if(D.isSpotLight){const ie=t.get(D);ie.position.setFromMatrixPosition(D.matrixWorld),ie.color.copy(H).multiplyScalar(K*A),ie.distance=Z,ie.coneCos=Math.cos(D.angle),ie.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),ie.decay=D.decay,i.spot[p]=ie;const se=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,se.updateMatrices(D),D.castShadow&&I++),i.spotLightMatrix[p]=se.matrix,D.castShadow){const me=n.get(D);me.shadowBias=se.bias,me.shadowNormalBias=se.normalBias,me.shadowRadius=se.radius,me.shadowMapSize=se.mapSize,i.spotShadow[p]=me,i.spotShadowMap[p]=ce,E++}p++}else if(D.isRectAreaLight){const ie=t.get(D);ie.color.copy(H).multiplyScalar(K),ie.halfWidth.set(D.width*.5,0,0),ie.halfHeight.set(0,D.height*.5,0),i.rectArea[b]=ie,b++}else if(D.isPointLight){const ie=t.get(D);if(ie.color.copy(D.color).multiplyScalar(D.intensity*A),ie.distance=D.distance,ie.decay=D.decay,D.castShadow){const se=D.shadow,me=n.get(D);me.shadowBias=se.bias,me.shadowNormalBias=se.normalBias,me.shadowRadius=se.radius,me.shadowMapSize=se.mapSize,me.shadowCameraNear=se.camera.near,me.shadowCameraFar=se.camera.far,i.pointShadow[m]=me,i.pointShadowMap[m]=ce,i.pointShadowMatrix[m]=D.shadow.matrix,x++}i.point[m]=ie,m++}else if(D.isHemisphereLight){const ie=t.get(D);ie.skyColor.copy(D.color).multiplyScalar(K*A),ie.groundColor.copy(D.groundColor).multiplyScalar(K*A),i.hemi[v]=ie,v++}}b>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=_;const z=i.hash;(z.directionalLength!==g||z.pointLength!==m||z.spotLength!==p||z.rectAreaLength!==b||z.hemiLength!==v||z.numDirectionalShadows!==y||z.numPointShadows!==x||z.numSpotShadows!==E||z.numSpotMaps!==T||z.numLightProbes!==S)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=b,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=E+T-I,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=S,z.directionalLength=g,z.pointLength=m,z.spotLength=p,z.rectAreaLength=b,z.hemiLength=v,z.numDirectionalShadows=y,z.numPointShadows=x,z.numSpotShadows=E,z.numSpotMaps=T,z.numLightProbes=S,i.version=Yv++)}function c(u,h){let f=0,d=0,_=0,g=0,m=0;const p=h.matrixWorldInverse;for(let b=0,v=u.length;b<v;b++){const y=u[b];if(y.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),f++}else if(y.isSpotLight){const x=i.spot[_];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),_++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const x=i.hemi[m];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Hu(r,e){const t=new Kv(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Zv(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Hu(r,e),t.set(s,[l])):o>=a.length?(l=new Hu(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Jv extends hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qv extends hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const e0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function n0(r,e,t){let n=new Jl;const i=new Oe,s=new Oe,o=new pt,a=new Jv({depthPacking:Bd}),l=new Qv,c={},u=t.maxTextureSize,h={[Jn]:gn,[gn]:Jn,[$n]:$n},f=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:e0,fragmentShader:t0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new vn;_.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Mn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wh;let p=this.type;this.render=function(x,E,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const I=r.getRenderTarget(),S=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Vi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=p!==wi&&this.type===wi,G=p===wi&&this.type!==wi;for(let D=0,H=x.length;D<H;D++){const K=x[D],Z=K.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);const ce=Z.getFrameExtents();if(i.multiply(ce),s.copy(Z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ce.x),i.x=s.x*ce.x,Z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ce.y),i.y=s.y*ce.y,Z.mapSize.y=s.y)),Z.map===null||O===!0||G===!0){const se=this.type!==wi?{minFilter:It,magFilter:It}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Xi(i.x,i.y,se),Z.map.texture.name=K.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const ie=Z.getViewportCount();for(let se=0;se<ie;se++){const me=Z.getViewport(se);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),z.viewport(o),Z.updateMatrices(K,se),n=Z.getFrustum(),y(E,T,Z.camera,K,this.type)}Z.isPointLightShadow!==!0&&this.type===wi&&b(Z,T),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(I,S,A)};function b(x,E){const T=e.update(g);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,d.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Xi(i.x,i.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(E,null,T,f,g,null),d.uniforms.shadow_pass.value=x.mapPass.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(E,null,T,d,g,null)}function v(x,E,T,I){let S=null;const A=T.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(A!==void 0)S=A;else if(S=T.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const z=S.uuid,O=E.uuid;let G=c[z];G===void 0&&(G={},c[z]=G);let D=G[O];D===void 0&&(D=S.clone(),G[O]=D),S=D}if(S.visible=E.visible,S.wireframe=E.wireframe,I===wi?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:h[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=r.properties.get(S);z.light=T}return S}function y(x,E,T,I,S){if(x.visible===!1)return;if(x.layers.test(E.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&S===wi)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,x.matrixWorld);const O=e.update(x),G=x.material;if(Array.isArray(G)){const D=O.groups;for(let H=0,K=D.length;H<K;H++){const Z=D[H],ce=G[Z.materialIndex];if(ce&&ce.visible){const ie=v(x,ce,I,S);x.onBeforeShadow(r,x,E,T,O,ie,Z),r.renderBufferDirect(T,null,O,ie,x,Z),x.onAfterShadow(r,x,E,T,O,ie,Z)}}}else if(G.visible){const D=v(x,G,I,S);x.onBeforeShadow(r,x,E,T,O,D,null),r.renderBufferDirect(T,null,O,D,x,null),x.onAfterShadow(r,x,E,T,O,D,null)}}const z=x.children;for(let O=0,G=z.length;O<G;O++)y(z[O],E,T,I,S)}}function i0(r,e,t){const n=t.isWebGL2;function i(){let F=!1;const ge=new pt;let ae=null;const ee=new pt(0,0,0,0);return{setMask:function(he){ae!==he&&!F&&(r.colorMask(he,he,he,he),ae=he)},setLocked:function(he){F=he},setClear:function(he,Re,tt,_t,Ht){Ht===!0&&(he*=_t,Re*=_t,tt*=_t),ge.set(he,Re,tt,_t),ee.equals(ge)===!1&&(r.clearColor(he,Re,tt,_t),ee.copy(ge))},reset:function(){F=!1,ae=null,ee.set(-1,0,0,0)}}}function s(){let F=!1,ge=null,ae=null,ee=null;return{setTest:function(he){he?Ge(r.DEPTH_TEST):Ne(r.DEPTH_TEST)},setMask:function(he){ge!==he&&!F&&(r.depthMask(he),ge=he)},setFunc:function(he){if(ae!==he){switch(he){case _d:r.depthFunc(r.NEVER);break;case gd:r.depthFunc(r.ALWAYS);break;case vd:r.depthFunc(r.LESS);break;case ea:r.depthFunc(r.LEQUAL);break;case xd:r.depthFunc(r.EQUAL);break;case yd:r.depthFunc(r.GEQUAL);break;case bd:r.depthFunc(r.GREATER);break;case Sd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ae=he}},setLocked:function(he){F=he},setClear:function(he){ee!==he&&(r.clearDepth(he),ee=he)},reset:function(){F=!1,ge=null,ae=null,ee=null}}}function o(){let F=!1,ge=null,ae=null,ee=null,he=null,Re=null,tt=null,_t=null,Ht=null;return{setTest:function(ut){F||(ut?Ge(r.STENCIL_TEST):Ne(r.STENCIL_TEST))},setMask:function(ut){ge!==ut&&!F&&(r.stencilMask(ut),ge=ut)},setFunc:function(ut,ht,yn){(ae!==ut||ee!==ht||he!==yn)&&(r.stencilFunc(ut,ht,yn),ae=ut,ee=ht,he=yn)},setOp:function(ut,ht,yn){(Re!==ut||tt!==ht||_t!==yn)&&(r.stencilOp(ut,ht,yn),Re=ut,tt=ht,_t=yn)},setLocked:function(ut){F=ut},setClear:function(ut){Ht!==ut&&(r.clearStencil(ut),Ht=ut)},reset:function(){F=!1,ge=null,ae=null,ee=null,he=null,Re=null,tt=null,_t=null,Ht=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},_=new WeakMap,g=[],m=null,p=!1,b=null,v=null,y=null,x=null,E=null,T=null,I=null,S=new et(0,0,0),A=0,z=!1,O=null,G=null,D=null,H=null,K=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,ie=0;const se=r.getParameter(r.VERSION);se.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(se)[1]),ce=ie>=1):se.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),ce=ie>=2);let me=null,ve={};const Q=r.getParameter(r.SCISSOR_BOX),oe=r.getParameter(r.VIEWPORT),Se=new pt().fromArray(Q),Pe=new pt().fromArray(oe);function _e(F,ge,ae,ee){const he=new Uint8Array(4),Re=r.createTexture();r.bindTexture(F,Re),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let tt=0;tt<ae;tt++)n&&(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)?r.texImage3D(ge,0,r.RGBA,1,1,ee,0,r.RGBA,r.UNSIGNED_BYTE,he):r.texImage2D(ge+tt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,he);return Re}const Xe={};Xe[r.TEXTURE_2D]=_e(r.TEXTURE_2D,r.TEXTURE_2D,1),Xe[r.TEXTURE_CUBE_MAP]=_e(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Xe[r.TEXTURE_2D_ARRAY]=_e(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Xe[r.TEXTURE_3D]=_e(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ge(r.DEPTH_TEST),l.setFunc(ea),Ke(!1),ze(yc),Ge(r.CULL_FACE),Be(Vi);function Ge(F){f[F]!==!0&&(r.enable(F),f[F]=!0)}function Ne(F){f[F]!==!1&&(r.disable(F),f[F]=!1)}function Ye(F,ge){return d[F]!==ge?(r.bindFramebuffer(F,ge),d[F]=ge,n&&(F===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ge),F===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ge)),!0):!1}function W(F,ge){let ae=g,ee=!1;if(F)if(ae=_.get(ge),ae===void 0&&(ae=[],_.set(ge,ae)),F.isWebGLMultipleRenderTargets){const he=F.texture;if(ae.length!==he.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let Re=0,tt=he.length;Re<tt;Re++)ae[Re]=r.COLOR_ATTACHMENT0+Re;ae.length=he.length,ee=!0}}else ae[0]!==r.COLOR_ATTACHMENT0&&(ae[0]=r.COLOR_ATTACHMENT0,ee=!0);else ae[0]!==r.BACK&&(ae[0]=r.BACK,ee=!0);ee&&(t.isWebGL2?r.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function Rt(F){return m!==F?(r.useProgram(F),m=F,!0):!1}const Le={[ar]:r.FUNC_ADD,[td]:r.FUNC_SUBTRACT,[nd]:r.FUNC_REVERSE_SUBTRACT};if(n)Le[Mc]=r.MIN,Le[Ec]=r.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(Le[Mc]=F.MIN_EXT,Le[Ec]=F.MAX_EXT)}const $e={[id]:r.ZERO,[rd]:r.ONE,[sd]:r.SRC_COLOR,[Sl]:r.SRC_ALPHA,[hd]:r.SRC_ALPHA_SATURATE,[cd]:r.DST_COLOR,[ad]:r.DST_ALPHA,[od]:r.ONE_MINUS_SRC_COLOR,[wl]:r.ONE_MINUS_SRC_ALPHA,[ud]:r.ONE_MINUS_DST_COLOR,[ld]:r.ONE_MINUS_DST_ALPHA,[fd]:r.CONSTANT_COLOR,[dd]:r.ONE_MINUS_CONSTANT_COLOR,[pd]:r.CONSTANT_ALPHA,[md]:r.ONE_MINUS_CONSTANT_ALPHA};function Be(F,ge,ae,ee,he,Re,tt,_t,Ht,ut){if(F===Vi){p===!0&&(Ne(r.BLEND),p=!1);return}if(p===!1&&(Ge(r.BLEND),p=!0),F!==ed){if(F!==b||ut!==z){if((v!==ar||E!==ar)&&(r.blendEquation(r.FUNC_ADD),v=ar,E=ar),ut)switch(F){case es:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bc:r.blendFunc(r.ONE,r.ONE);break;case Sc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case wc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case es:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Sc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case wc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,x=null,T=null,I=null,S.set(0,0,0),A=0,b=F,z=ut}return}he=he||ge,Re=Re||ae,tt=tt||ee,(ge!==v||he!==E)&&(r.blendEquationSeparate(Le[ge],Le[he]),v=ge,E=he),(ae!==y||ee!==x||Re!==T||tt!==I)&&(r.blendFuncSeparate($e[ae],$e[ee],$e[Re],$e[tt]),y=ae,x=ee,T=Re,I=tt),(_t.equals(S)===!1||Ht!==A)&&(r.blendColor(_t.r,_t.g,_t.b,Ht),S.copy(_t),A=Ht),b=F,z=!1}function mt(F,ge){F.side===$n?Ne(r.CULL_FACE):Ge(r.CULL_FACE);let ae=F.side===gn;ge&&(ae=!ae),Ke(ae),F.blending===es&&F.transparent===!1?Be(Vi):Be(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const ee=F.stencilWrite;c.setTest(ee),ee&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Mt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ge(r.SAMPLE_ALPHA_TO_COVERAGE):Ne(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(F){O!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),O=F)}function ze(F){F!==Zf?(Ge(r.CULL_FACE),F!==G&&(F===yc?r.cullFace(r.BACK):F===Jf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ne(r.CULL_FACE),G=F}function st(F){F!==D&&(ce&&r.lineWidth(F),D=F)}function Mt(F,ge,ae){F?(Ge(r.POLYGON_OFFSET_FILL),(H!==ge||K!==ae)&&(r.polygonOffset(ge,ae),H=ge,K=ae)):Ne(r.POLYGON_OFFSET_FILL)}function Lt(F){F?Ge(r.SCISSOR_TEST):Ne(r.SCISSOR_TEST)}function C(F){F===void 0&&(F=r.TEXTURE0+Z-1),me!==F&&(r.activeTexture(F),me=F)}function w(F,ge,ae){ae===void 0&&(me===null?ae=r.TEXTURE0+Z-1:ae=me);let ee=ve[ae];ee===void 0&&(ee={type:void 0,texture:void 0},ve[ae]=ee),(ee.type!==F||ee.texture!==ge)&&(me!==ae&&(r.activeTexture(ae),me=ae),r.bindTexture(F,ge||Xe[F]),ee.type=F,ee.texture=ge)}function X(){const F=ve[me];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function le(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function N(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(F){Se.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Se.copy(F))}function Ce(F){Pe.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Pe.copy(F))}function Me(F,ge){let ae=h.get(ge);ae===void 0&&(ae=new WeakMap,h.set(ge,ae));let ee=ae.get(F);ee===void 0&&(ee=r.getUniformBlockIndex(ge,F.name),ae.set(F,ee))}function be(F,ge){const ee=h.get(ge).get(F);u.get(ge)!==ee&&(r.uniformBlockBinding(ge,ee,F.__bindingPointIndex),u.set(ge,ee))}function He(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},me=null,ve={},d={},_=new WeakMap,g=[],m=null,p=!1,b=null,v=null,y=null,x=null,E=null,T=null,I=null,S=new et(0,0,0),A=0,z=!1,O=null,G=null,D=null,H=null,K=null,Se.set(0,0,r.canvas.width,r.canvas.height),Pe.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ge,disable:Ne,bindFramebuffer:Ye,drawBuffers:W,useProgram:Rt,setBlending:Be,setMaterial:mt,setFlipSided:Ke,setCullFace:ze,setLineWidth:st,setPolygonOffset:Mt,setScissorTest:Lt,activeTexture:C,bindTexture:w,unbindTexture:X,compressedTexImage2D:le,compressedTexImage3D:re,texImage2D:ne,texImage3D:Fe,updateUBOMapping:Me,uniformBlockBinding:be,texStorage2D:N,texStorage3D:de,texSubImage2D:fe,texSubImage3D:Ee,compressedTexSubImage2D:pe,compressedTexSubImage3D:ye,scissor:Ae,viewport:Ce,reset:He}}function r0(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,w){return p?new OffscreenCanvas(C,w):Ks("canvas")}function v(C,w,X,le){let re=1;if((C.width>le||C.height>le)&&(re=le/Math.max(C.width,C.height)),re<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const fe=w?oa:Math.floor,Ee=fe(re*C.width),pe=fe(re*C.height);g===void 0&&(g=b(Ee,pe));const ye=X?b(Ee,pe):g;return ye.width=Ee,ye.height=pe,ye.getContext("2d").drawImage(C,0,0,Ee,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ee+"x"+pe+")."),ye}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return Pl(C.width)&&Pl(C.height)}function x(C){return a?!1:C.wrapS!==Bn||C.wrapT!==Bn||C.minFilter!==It&&C.minFilter!==bn}function E(C,w){return C.generateMipmaps&&w&&C.minFilter!==It&&C.minFilter!==bn}function T(C){r.generateMipmap(C)}function I(C,w,X,le,re=!1){if(a===!1)return w;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let fe=w;if(w===r.RED&&(X===r.FLOAT&&(fe=r.R32F),X===r.HALF_FLOAT&&(fe=r.R16F),X===r.UNSIGNED_BYTE&&(fe=r.R8)),w===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(fe=r.R8UI),X===r.UNSIGNED_SHORT&&(fe=r.R16UI),X===r.UNSIGNED_INT&&(fe=r.R32UI),X===r.BYTE&&(fe=r.R8I),X===r.SHORT&&(fe=r.R16I),X===r.INT&&(fe=r.R32I)),w===r.RG&&(X===r.FLOAT&&(fe=r.RG32F),X===r.HALF_FLOAT&&(fe=r.RG16F),X===r.UNSIGNED_BYTE&&(fe=r.RG8)),w===r.RGBA){const Ee=re?na:dt.getTransfer(le);X===r.FLOAT&&(fe=r.RGBA32F),X===r.HALF_FLOAT&&(fe=r.RGBA16F),X===r.UNSIGNED_BYTE&&(fe=Ee===Tt?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function S(C,w,X){return E(C,X)===!0||C.isFramebufferTexture&&C.minFilter!==It&&C.minFilter!==bn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function A(C){return C===It||C===Tl||C===Jo?r.NEAREST:r.LINEAR}function z(C){const w=C.target;w.removeEventListener("dispose",z),G(w),w.isVideoTexture&&_.delete(w)}function O(C){const w=C.target;w.removeEventListener("dispose",O),H(w)}function G(C){const w=n.get(C);if(w.__webglInit===void 0)return;const X=C.source,le=m.get(X);if(le){const re=le[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&D(C),Object.keys(le).length===0&&m.delete(X)}n.remove(C)}function D(C){const w=n.get(C);r.deleteTexture(w.__webglTexture);const X=C.source,le=m.get(X);delete le[w.__cacheKey],o.memory.textures--}function H(C){const w=C.texture,X=n.get(C),le=n.get(w);if(le.__webglTexture!==void 0&&(r.deleteTexture(le.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(X.__webglFramebuffer[re]))for(let fe=0;fe<X.__webglFramebuffer[re].length;fe++)r.deleteFramebuffer(X.__webglFramebuffer[re][fe]);else r.deleteFramebuffer(X.__webglFramebuffer[re]);X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer[re])}else{if(Array.isArray(X.__webglFramebuffer))for(let re=0;re<X.__webglFramebuffer.length;re++)r.deleteFramebuffer(X.__webglFramebuffer[re]);else r.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&r.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let re=0;re<X.__webglColorRenderbuffer.length;re++)X.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(X.__webglColorRenderbuffer[re]);X.__webglDepthRenderbuffer&&r.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let re=0,fe=w.length;re<fe;re++){const Ee=n.get(w[re]);Ee.__webglTexture&&(r.deleteTexture(Ee.__webglTexture),o.memory.textures--),n.remove(w[re])}n.remove(w),n.remove(C)}let K=0;function Z(){K=0}function ce(){const C=K;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),K+=1,C}function ie(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function se(C,w){const X=n.get(C);if(C.isVideoTexture&&Mt(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const le=C.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(X,C,w);return}}t.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+w)}function me(C,w){const X=n.get(C);if(C.version>0&&X.__version!==C.version){Ge(X,C,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+w)}function ve(C,w){const X=n.get(C);if(C.version>0&&X.__version!==C.version){Ge(X,C,w);return}t.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+w)}function Q(C,w){const X=n.get(C);if(C.version>0&&X.__version!==C.version){Ne(X,C,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+w)}const oe={[ss]:r.REPEAT,[Bn]:r.CLAMP_TO_EDGE,[ta]:r.MIRRORED_REPEAT},Se={[It]:r.NEAREST,[Tl]:r.NEAREST_MIPMAP_NEAREST,[Jo]:r.NEAREST_MIPMAP_LINEAR,[bn]:r.LINEAR,[qh]:r.LINEAR_MIPMAP_NEAREST,[pr]:r.LINEAR_MIPMAP_LINEAR},Pe={[kd]:r.NEVER,[jd]:r.ALWAYS,[Hd]:r.LESS,[rf]:r.LEQUAL,[Vd]:r.EQUAL,[Xd]:r.GEQUAL,[Gd]:r.GREATER,[Wd]:r.NOTEQUAL};function _e(C,w,X){if(X?(r.texParameteri(C,r.TEXTURE_WRAP_S,oe[w.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,oe[w.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,oe[w.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,Se[w.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,Se[w.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(w.wrapS!==Bn||w.wrapT!==Bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,A(w.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,A(w.minFilter)),w.minFilter!==It&&w.minFilter!==bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Pe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===It||w.minFilter!==Jo&&w.minFilter!==pr||w.type===_n&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===qs&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(C,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Xe(C,w){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",z));const le=w.source;let re=m.get(le);re===void 0&&(re={},m.set(le,re));const fe=ie(w);if(fe!==C.__cacheKey){re[fe]===void 0&&(re[fe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),re[fe].usedTimes++;const Ee=re[C.__cacheKey];Ee!==void 0&&(re[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&D(w)),C.__cacheKey=fe,C.__webglTexture=re[fe].texture}return X}function Ge(C,w,X){let le=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(le=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(le=r.TEXTURE_3D);const re=Xe(C,w),fe=w.source;t.bindTexture(le,C.__webglTexture,r.TEXTURE0+X);const Ee=n.get(fe);if(fe.version!==Ee.__version||re===!0){t.activeTexture(r.TEXTURE0+X);const pe=dt.getPrimaries(dt.workingColorSpace),ye=w.colorSpace===zn?null:dt.getPrimaries(w.colorSpace),N=w.colorSpace===zn||pe===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,N);const de=x(w)&&y(w.image)===!1;let ne=v(w.image,de,!1,u);ne=Lt(w,ne);const Fe=y(ne)||a,Ae=s.convert(w.format,w.colorSpace);let Ce=s.convert(w.type),Me=I(w.internalFormat,Ae,Ce,w.colorSpace,w.isVideoTexture);_e(le,w,Fe);let be;const He=w.mipmaps,F=a&&w.isVideoTexture!==!0&&Me!==Qh,ge=Ee.__version===void 0||re===!0,ae=S(w,ne,Fe);if(w.isDepthTexture)Me=r.DEPTH_COMPONENT,a?w.type===_n?Me=r.DEPTH_COMPONENT32F:w.type===Cn?Me=r.DEPTH_COMPONENT24:w.type===hr?Me=r.DEPTH24_STENCIL8:Me=r.DEPTH_COMPONENT16:w.type===_n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===fr&&Me===r.DEPTH_COMPONENT&&w.type!==fa&&w.type!==Cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Cn,Ce=s.convert(w.type)),w.format===os&&Me===r.DEPTH_COMPONENT&&(Me=r.DEPTH_STENCIL,w.type!==hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=hr,Ce=s.convert(w.type))),ge&&(F?t.texStorage2D(r.TEXTURE_2D,1,Me,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,Me,ne.width,ne.height,0,Ae,Ce,null));else if(w.isDataTexture)if(He.length>0&&Fe){F&&ge&&t.texStorage2D(r.TEXTURE_2D,ae,Me,He[0].width,He[0].height);for(let ee=0,he=He.length;ee<he;ee++)be=He[ee],F?t.texSubImage2D(r.TEXTURE_2D,ee,0,0,be.width,be.height,Ae,Ce,be.data):t.texImage2D(r.TEXTURE_2D,ee,Me,be.width,be.height,0,Ae,Ce,be.data);w.generateMipmaps=!1}else F?(ge&&t.texStorage2D(r.TEXTURE_2D,ae,Me,ne.width,ne.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne.width,ne.height,Ae,Ce,ne.data)):t.texImage2D(r.TEXTURE_2D,0,Me,ne.width,ne.height,0,Ae,Ce,ne.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){F&&ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,Me,He[0].width,He[0].height,ne.depth);for(let ee=0,he=He.length;ee<he;ee++)be=He[ee],w.format!==nn?Ae!==null?F?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,be.width,be.height,ne.depth,Ae,be.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,Me,be.width,be.height,ne.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,be.width,be.height,ne.depth,Ae,Ce,be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,Me,be.width,be.height,ne.depth,0,Ae,Ce,be.data)}else{F&&ge&&t.texStorage2D(r.TEXTURE_2D,ae,Me,He[0].width,He[0].height);for(let ee=0,he=He.length;ee<he;ee++)be=He[ee],w.format!==nn?Ae!==null?F?t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,be.width,be.height,Ae,be.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,Me,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?t.texSubImage2D(r.TEXTURE_2D,ee,0,0,be.width,be.height,Ae,Ce,be.data):t.texImage2D(r.TEXTURE_2D,ee,Me,be.width,be.height,0,Ae,Ce,be.data)}else if(w.isDataArrayTexture)F?(ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,Me,ne.width,ne.height,ne.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Ae,Ce,ne.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Me,ne.width,ne.height,ne.depth,0,Ae,Ce,ne.data);else if(w.isData3DTexture)F?(ge&&t.texStorage3D(r.TEXTURE_3D,ae,Me,ne.width,ne.height,ne.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Ae,Ce,ne.data)):t.texImage3D(r.TEXTURE_3D,0,Me,ne.width,ne.height,ne.depth,0,Ae,Ce,ne.data);else if(w.isFramebufferTexture){if(ge)if(F)t.texStorage2D(r.TEXTURE_2D,ae,Me,ne.width,ne.height);else{let ee=ne.width,he=ne.height;for(let Re=0;Re<ae;Re++)t.texImage2D(r.TEXTURE_2D,Re,Me,ee,he,0,Ae,Ce,null),ee>>=1,he>>=1}}else if(He.length>0&&Fe){F&&ge&&t.texStorage2D(r.TEXTURE_2D,ae,Me,He[0].width,He[0].height);for(let ee=0,he=He.length;ee<he;ee++)be=He[ee],F?t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Ae,Ce,be):t.texImage2D(r.TEXTURE_2D,ee,Me,Ae,Ce,be);w.generateMipmaps=!1}else F?(ge&&t.texStorage2D(r.TEXTURE_2D,ae,Me,ne.width,ne.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,Ce,ne)):t.texImage2D(r.TEXTURE_2D,0,Me,Ae,Ce,ne);E(w,Fe)&&T(le),Ee.__version=fe.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Ne(C,w,X){if(w.image.length!==6)return;const le=Xe(C,w),re=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+X);const fe=n.get(re);if(re.version!==fe.__version||le===!0){t.activeTexture(r.TEXTURE0+X);const Ee=dt.getPrimaries(dt.workingColorSpace),pe=w.colorSpace===zn?null:dt.getPrimaries(w.colorSpace),ye=w.colorSpace===zn||Ee===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const N=w.isCompressedTexture||w.image[0].isCompressedTexture,de=w.image[0]&&w.image[0].isDataTexture,ne=[];for(let ee=0;ee<6;ee++)!N&&!de?ne[ee]=v(w.image[ee],!1,!0,c):ne[ee]=de?w.image[ee].image:w.image[ee],ne[ee]=Lt(w,ne[ee]);const Fe=ne[0],Ae=y(Fe)||a,Ce=s.convert(w.format,w.colorSpace),Me=s.convert(w.type),be=I(w.internalFormat,Ce,Me,w.colorSpace),He=a&&w.isVideoTexture!==!0,F=fe.__version===void 0||le===!0;let ge=S(w,Fe,Ae);_e(r.TEXTURE_CUBE_MAP,w,Ae);let ae;if(N){He&&F&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,be,Fe.width,Fe.height);for(let ee=0;ee<6;ee++){ae=ne[ee].mipmaps;for(let he=0;he<ae.length;he++){const Re=ae[he];w.format!==nn?Ce!==null?He?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,0,0,Re.width,Re.height,Ce,Re.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,be,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,0,0,Re.width,Re.height,Ce,Me,Re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,be,Re.width,Re.height,0,Ce,Me,Re.data)}}}else{ae=w.mipmaps,He&&F&&(ae.length>0&&ge++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,be,ne[0].width,ne[0].height));for(let ee=0;ee<6;ee++)if(de){He?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ne[ee].width,ne[ee].height,Ce,Me,ne[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,be,ne[ee].width,ne[ee].height,0,Ce,Me,ne[ee].data);for(let he=0;he<ae.length;he++){const tt=ae[he].image[ee].image;He?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,0,0,tt.width,tt.height,Ce,Me,tt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,be,tt.width,tt.height,0,Ce,Me,tt.data)}}else{He?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ce,Me,ne[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,be,Ce,Me,ne[ee]);for(let he=0;he<ae.length;he++){const Re=ae[he];He?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,0,0,Ce,Me,Re.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,be,Ce,Me,Re.image[ee])}}}E(w,Ae)&&T(r.TEXTURE_CUBE_MAP),fe.__version=re.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Ye(C,w,X,le,re,fe){const Ee=s.convert(X.format,X.colorSpace),pe=s.convert(X.type),ye=I(X.internalFormat,Ee,pe,X.colorSpace);if(!n.get(w).__hasExternalTextures){const de=Math.max(1,w.width>>fe),ne=Math.max(1,w.height>>fe);re===r.TEXTURE_3D||re===r.TEXTURE_2D_ARRAY?t.texImage3D(re,fe,ye,de,ne,w.depth,0,Ee,pe,null):t.texImage2D(re,fe,ye,de,ne,0,Ee,pe,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),st(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,re,n.get(X).__webglTexture,0,ze(w)):(re===r.TEXTURE_2D||re>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,le,re,n.get(X).__webglTexture,fe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function W(C,w,X){if(r.bindRenderbuffer(r.RENDERBUFFER,C),w.depthBuffer&&!w.stencilBuffer){let le=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(X||st(w)){const re=w.depthTexture;re&&re.isDepthTexture&&(re.type===_n?le=r.DEPTH_COMPONENT32F:re.type===Cn&&(le=r.DEPTH_COMPONENT24));const fe=ze(w);st(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,le,w.width,w.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,le,w.width,w.height)}else r.renderbufferStorage(r.RENDERBUFFER,le,w.width,w.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(w.depthBuffer&&w.stencilBuffer){const le=ze(w);X&&st(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,r.DEPTH24_STENCIL8,w.width,w.height):st(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,r.DEPTH24_STENCIL8,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const le=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0;re<le.length;re++){const fe=le[re],Ee=s.convert(fe.format,fe.colorSpace),pe=s.convert(fe.type),ye=I(fe.internalFormat,Ee,pe,fe.colorSpace),N=ze(w);X&&st(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,N,ye,w.width,w.height):st(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N,ye,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,ye,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Rt(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),se(w.depthTexture,0);const le=n.get(w.depthTexture).__webglTexture,re=ze(w);if(w.depthTexture.format===fr)st(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,le,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,le,0);else if(w.depthTexture.format===os)st(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,le,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Le(C){const w=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Rt(w.__webglFramebuffer,C)}else if(X){w.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[le]),w.__webglDepthbuffer[le]=r.createRenderbuffer(),W(w.__webglDepthbuffer[le],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),W(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function $e(C,w,X){const le=n.get(C);w!==void 0&&Ye(le.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&Le(C)}function Be(C){const w=C.texture,X=n.get(C),le=n.get(w);C.addEventListener("dispose",O),C.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture()),le.__version=w.version,o.memory.textures++);const re=C.isWebGLCubeRenderTarget===!0,fe=C.isWebGLMultipleRenderTargets===!0,Ee=y(C)||a;if(re){X.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(a&&w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[pe]=[];for(let ye=0;ye<w.mipmaps.length;ye++)X.__webglFramebuffer[pe][ye]=r.createFramebuffer()}else X.__webglFramebuffer[pe]=r.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)X.__webglFramebuffer[pe]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(fe)if(i.drawBuffers){const pe=C.texture;for(let ye=0,N=pe.length;ye<N;ye++){const de=n.get(pe[ye]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&st(C)===!1){const pe=fe?w:[w];X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ye=0;ye<pe.length;ye++){const N=pe[ye];X.__webglColorRenderbuffer[ye]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[ye]);const de=s.convert(N.format,N.colorSpace),ne=s.convert(N.type),Fe=I(N.internalFormat,de,ne,N.colorSpace,C.isXRRenderTarget===!0),Ae=ze(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,Fe,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,X.__webglColorRenderbuffer[ye])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),W(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(re){t.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),_e(r.TEXTURE_CUBE_MAP,w,Ee);for(let pe=0;pe<6;pe++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let ye=0;ye<w.mipmaps.length;ye++)Ye(X.__webglFramebuffer[pe][ye],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye);else Ye(X.__webglFramebuffer[pe],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);E(w,Ee)&&T(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){const pe=C.texture;for(let ye=0,N=pe.length;ye<N;ye++){const de=pe[ye],ne=n.get(de);t.bindTexture(r.TEXTURE_2D,ne.__webglTexture),_e(r.TEXTURE_2D,de,Ee),Ye(X.__webglFramebuffer,C,de,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,0),E(de,Ee)&&T(r.TEXTURE_2D)}t.unbindTexture()}else{let pe=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?pe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,le.__webglTexture),_e(pe,w,Ee),a&&w.mipmaps&&w.mipmaps.length>0)for(let ye=0;ye<w.mipmaps.length;ye++)Ye(X.__webglFramebuffer[ye],C,w,r.COLOR_ATTACHMENT0,pe,ye);else Ye(X.__webglFramebuffer,C,w,r.COLOR_ATTACHMENT0,pe,0);E(w,Ee)&&T(pe),t.unbindTexture()}C.depthBuffer&&Le(C)}function mt(C){const w=y(C)||a,X=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let le=0,re=X.length;le<re;le++){const fe=X[le];if(E(fe,w)){const Ee=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,pe=n.get(fe).__webglTexture;t.bindTexture(Ee,pe),T(Ee),t.unbindTexture()}}}function Ke(C){if(a&&C.samples>0&&st(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],X=C.width,le=C.height;let re=r.COLOR_BUFFER_BIT;const fe=[],Ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=n.get(C),ye=C.isWebGLMultipleRenderTargets===!0;if(ye)for(let N=0;N<w.length;N++)t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+N,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+N,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let N=0;N<w.length;N++){fe.push(r.COLOR_ATTACHMENT0+N),C.depthBuffer&&fe.push(Ee);const de=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(de===!1&&(C.depthBuffer&&(re|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(re|=r.STENCIL_BUFFER_BIT)),ye&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,pe.__webglColorRenderbuffer[N]),de===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ee]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ee])),ye){const ne=n.get(w[N]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ne,0)}r.blitFramebuffer(0,0,X,le,0,0,X,le,re,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,fe)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ye)for(let N=0;N<w.length;N++){t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+N,r.RENDERBUFFER,pe.__webglColorRenderbuffer[N]);const de=n.get(w[N]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+N,r.TEXTURE_2D,de,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function ze(C){return Math.min(h,C.samples)}function st(C){const w=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Mt(C){const w=o.render.frame;_.get(C)!==w&&(_.set(C,w),C.update())}function Lt(C,w){const X=C.colorSpace,le=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Cl||X!==sn&&X!==zn&&(dt.getTransfer(X)===Tt?a===!1?e.has("EXT_sRGB")===!0&&le===nn?(C.format=Cl,C.minFilter=bn,C.generateMipmaps=!1):w=af.sRGBToLinear(w):(le!==nn||re!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}this.allocateTextureUnit=ce,this.resetTextureUnits=Z,this.setTexture2D=se,this.setTexture2DArray=me,this.setTexture3D=ve,this.setTextureCube=Q,this.rebindTextures=$e,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=st}function s0(r,e,t){const n=t.isWebGL2;function i(s,o=zn){let a;const l=dt.getTransfer(o);if(s===ui)return r.UNSIGNED_BYTE;if(s===$h)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Kh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Al)return r.BYTE;if(s===Yh)return r.SHORT;if(s===fa)return r.UNSIGNED_SHORT;if(s===ks)return r.INT;if(s===Cn)return r.UNSIGNED_INT;if(s===_n)return r.FLOAT;if(s===qs)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Pd)return r.ALPHA;if(s===nn)return r.RGBA;if(s===Dd)return r.LUMINANCE;if(s===Id)return r.LUMINANCE_ALPHA;if(s===fr)return r.DEPTH_COMPONENT;if(s===os)return r.DEPTH_STENCIL;if(s===Cl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Zh)return r.RED;if(s===$l)return r.RED_INTEGER;if(s===Jh)return r.RG;if(s===da)return r.RG_INTEGER;if(s===Ys)return r.RGBA_INTEGER;if(s===wa||s===Ma||s===Ea||s===Ta)if(l===Tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===wa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===wa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ma)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ea)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ta)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ac||s===Rc||s===Lc||s===Cc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ac)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Lc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Cc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Pc||s===Dc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Pc)return l===Tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Dc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ic||s===Nc||s===Fc||s===Oc||s===Uc||s===Bc||s===zc||s===kc||s===Hc||s===Vc||s===Gc||s===Wc||s===Xc||s===jc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ic)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Nc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Oc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Uc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===kc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Vc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===jc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Aa||s===qc||s===Yc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Aa)return l===Tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===qc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Nd||s===$c||s===Kc||s===Zc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Aa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===$c)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Kc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Zc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hr?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class o0 extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ur extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a0={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(a0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ur;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class l0 extends _r{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=t.getContextAttributes();let m=null,p=null;const b=[],v=[],y=new Oe;let x=null;const E=new mn;E.layers.enable(1),E.viewport=new pt;const T=new mn;T.layers.enable(2),T.viewport=new pt;const I=[E,T],S=new o0;S.layers.enable(1),S.layers.enable(2);let A=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let oe=b[Q];return oe===void 0&&(oe=new Za,b[Q]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Q){let oe=b[Q];return oe===void 0&&(oe=new Za,b[Q]=oe),oe.getGripSpace()},this.getHand=function(Q){let oe=b[Q];return oe===void 0&&(oe=new Za,b[Q]=oe),oe.getHandSpace()};function O(Q){const oe=v.indexOf(Q.inputSource);if(oe===-1)return;const Se=b[oe];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,c||o),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function G(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",D);for(let Q=0;Q<b.length;Q++){const oe=v[Q];oe!==null&&(v[Q]=null,b[Q].disconnect(oe))}A=null,z=null,e.setRenderTarget(m),d=null,f=null,h=null,i=null,p=null,ve.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",G),i.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Xi(d.framebufferWidth,d.framebufferHeight,{format:nn,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let oe=null,Se=null,Pe=null;g.depth&&(Pe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=g.stencil?os:fr,Se=g.stencil?hr:Cn);const _e={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(_e),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new Xi(f.textureWidth,f.textureHeight,{format:nn,type:ui,depthTexture:new vf(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Xe=e.properties.get(p);Xe.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ve.setContext(i),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(Q){for(let oe=0;oe<Q.removed.length;oe++){const Se=Q.removed[oe],Pe=v.indexOf(Se);Pe>=0&&(v[Pe]=null,b[Pe].disconnect(Se))}for(let oe=0;oe<Q.added.length;oe++){const Se=Q.added[oe];let Pe=v.indexOf(Se);if(Pe===-1){for(let Xe=0;Xe<b.length;Xe++)if(Xe>=v.length){v.push(Se),Pe=Xe;break}else if(v[Xe]===null){v[Xe]=Se,Pe=Xe;break}if(Pe===-1)break}const _e=b[Pe];_e&&_e.connect(Se)}}const H=new P,K=new P;function Z(Q,oe,Se){H.setFromMatrixPosition(oe.matrixWorld),K.setFromMatrixPosition(Se.matrixWorld);const Pe=H.distanceTo(K),_e=oe.projectionMatrix.elements,Xe=Se.projectionMatrix.elements,Ge=_e[14]/(_e[10]-1),Ne=_e[14]/(_e[10]+1),Ye=(_e[9]+1)/_e[5],W=(_e[9]-1)/_e[5],Rt=(_e[8]-1)/_e[0],Le=(Xe[8]+1)/Xe[0],$e=Ge*Rt,Be=Ge*Le,mt=Pe/(-Rt+Le),Ke=mt*-Rt;oe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ke),Q.translateZ(mt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const ze=Ge+mt,st=Ne+mt,Mt=$e-Ke,Lt=Be+(Pe-Ke),C=Ye*Ne/st*ze,w=W*Ne/st*ze;Q.projectionMatrix.makePerspective(Mt,Lt,C,w,ze,st),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function ce(Q,oe){oe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(oe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;S.near=T.near=E.near=Q.near,S.far=T.far=E.far=Q.far,(A!==S.near||z!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,z=S.far);const oe=Q.parent,Se=S.cameras;ce(S,oe);for(let Pe=0;Pe<Se.length;Pe++)ce(Se[Pe],oe);Se.length===2?Z(S,E,T):S.projectionMatrix.copy(E.projectionMatrix),ie(Q,S,oe)};function ie(Q,oe,Se){Se===null?Q.matrix.copy(oe.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(oe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(oe.projectionMatrix),Q.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ls*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)};let se=null;function me(Q,oe){if(u=oe.getViewerPose(c||o),_=oe,u!==null){const Se=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let Pe=!1;Se.length!==S.cameras.length&&(S.cameras.length=0,Pe=!0);for(let _e=0;_e<Se.length;_e++){const Xe=Se[_e];let Ge=null;if(d!==null)Ge=d.getViewport(Xe);else{const Ye=h.getViewSubImage(f,Xe);Ge=Ye.viewport,_e===0&&(e.setRenderTargetTextures(p,Ye.colorTexture,f.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(p))}let Ne=I[_e];Ne===void 0&&(Ne=new mn,Ne.layers.enable(_e),Ne.viewport=new pt,I[_e]=Ne),Ne.matrix.fromArray(Xe.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Xe.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),_e===0&&(S.matrix.copy(Ne.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Pe===!0&&S.cameras.push(Ne)}}for(let Se=0;Se<b.length;Se++){const Pe=v[Se],_e=b[Se];Pe!==null&&_e!==void 0&&_e.update(Pe,oe,c||o)}se&&se(Q,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),_=null}const ve=new gf;ve.setAnimationLoop(me),this.setAnimationLoop=function(Q){se=Q},this.dispose=function(){}}}function c0(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,pf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function u0(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,v){const y=v.program;n.uniformBlockBinding(b,y)}function c(b,v){let y=i[b.id];y===void 0&&(_(b),y=u(b),i[b.id]=y,b.addEventListener("dispose",m));const x=v.program;n.updateUBOMapping(b,x);const E=e.render.frame;s[b.id]!==E&&(f(b),s[b.id]=E)}function u(b){const v=h();b.__bindingPointIndex=v;const y=r.createBuffer(),x=b.__size,E=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,x,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const v=i[b.id],y=b.uniforms,x=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let E=0,T=y.length;E<T;E++){const I=y[E];if(d(I,E,x)===!0){const S=I.__offset,A=Array.isArray(I.value)?I.value:[I.value];let z=0;for(let O=0;O<A.length;O++){const G=A[O],D=g(G);typeof G=="number"?(I.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,S+z,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=G.elements[0],I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=G.elements[0],I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=G.elements[0]):(G.toArray(I.__data,z),z+=D.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,S,I.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(b,v,y){const x=b.value;if(y[v]===void 0){if(typeof x=="number")y[v]=x;else{const E=Array.isArray(x)?x:[x],T=[];for(let I=0;I<E.length;I++)T.push(E[I].clone());y[v]=T}return!0}else if(typeof x=="number"){if(y[v]!==x)return y[v]=x,!0}else{const E=Array.isArray(y[v])?y[v]:[y[v]],T=Array.isArray(x)?x:[x];for(let I=0;I<E.length;I++){const S=E[I];if(S.equals(T[I])===!1)return S.copy(T[I]),!0}}return!1}function _(b){const v=b.uniforms;let y=0;const x=16;let E=0;for(let T=0,I=v.length;T<I;T++){const S=v[T],A={boundary:0,storage:0},z=Array.isArray(S.value)?S.value:[S.value];for(let O=0,G=z.length;O<G;O++){const D=z[O],H=g(D);A.boundary+=H.boundary,A.storage+=H.storage}if(S.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,T>0){E=y%x;const O=x-E;E!==0&&O-A.boundary<0&&(y+=x-E,S.__offset=y)}y+=A.storage}return E=y%x,E>0&&(y+=x-E),b.__size=y,b.__cache={},this}function g(b){const v={boundary:0,storage:0};return typeof b=="number"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){const v=b.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Mf{constructor(e={}){const{canvas:t=ap(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=Gi,this.toneMappingExposure=1;const v=this;let y=!1,x=0,E=0,T=null,I=-1,S=null;const A=new pt,z=new pt;let O=null;const G=new et(0);let D=0,H=t.width,K=t.height,Z=1,ce=null,ie=null;const se=new pt(0,0,H,K),me=new pt(0,0,H,K);let ve=!1;const Q=new Jl;let oe=!1,Se=!1,Pe=null;const _e=new Ve,Xe=new Oe,Ge=new P,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return T===null?Z:1}let W=n;function Rt(R,k){for(let j=0;j<R.length;j++){const $=R[j],q=t.getContext($,k);if(q!==null)return q}return null}try{const R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yl}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",ge,!1),W===null){const k=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&k.shift(),W=Rt(k,R),W===null)throw Rt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Le,$e,Be,mt,Ke,ze,st,Mt,Lt,C,w,X,le,re,fe,Ee,pe,ye,N,de,ne,Fe,Ae,Ce;function Me(){Le=new bg(W),$e=new mg(W,Le,e),Le.init($e),Fe=new s0(W,Le,$e),Be=new i0(W,Le,$e),mt=new Mg(W),Ke=new Gv,ze=new r0(W,Le,Be,Ke,$e,Fe,mt),st=new gg(v),Mt=new yg(v),Lt=new Dp(W,$e),Ae=new dg(W,Le,Lt,$e),C=new Sg(W,Lt,mt,Ae),w=new Rg(W,C,Lt,mt),N=new Ag(W,$e,ze),Ee=new _g(Ke),X=new Vv(v,st,Mt,Le,$e,Ae,Ee),le=new c0(v,Ke),re=new Xv,fe=new Zv(Le,$e),ye=new fg(v,st,Mt,Be,w,f,l),pe=new n0(v,w,$e),Ce=new u0(W,mt,$e,Be),de=new pg(W,Le,mt,$e),ne=new wg(W,Le,mt,$e),mt.programs=X.programs,v.capabilities=$e,v.extensions=Le,v.properties=Ke,v.renderLists=re,v.shadowMap=pe,v.state=Be,v.info=mt}Me();const be=new l0(v,W);this.xr=be,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=Le.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Le.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(H,K,!1))},this.getSize=function(R){return R.set(H,K)},this.setSize=function(R,k,j=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,K=k,t.width=Math.floor(R*Z),t.height=Math.floor(k*Z),j===!0&&(t.style.width=R+"px",t.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(H*Z,K*Z).floor()},this.setDrawingBufferSize=function(R,k,j){H=R,K=k,Z=j,t.width=Math.floor(R*j),t.height=Math.floor(k*j),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(se)},this.setViewport=function(R,k,j,$){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,k,j,$),Be.viewport(A.copy(se).multiplyScalar(Z).floor())},this.getScissor=function(R){return R.copy(me)},this.setScissor=function(R,k,j,$){R.isVector4?me.set(R.x,R.y,R.z,R.w):me.set(R,k,j,$),Be.scissor(z.copy(me).multiplyScalar(Z).floor())},this.getScissorTest=function(){return ve},this.setScissorTest=function(R){Be.setScissorTest(ve=R)},this.setOpaqueSort=function(R){ce=R},this.setTransparentSort=function(R){ie=R},this.getClearColor=function(R){return R.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(R=!0,k=!0,j=!0){let $=0;if(R){let q=!1;if(T!==null){const we=T.texture.format;q=we===Ys||we===da||we===$l}if(q){const we=T.texture.type,De=we===ui||we===Cn||we===fa||we===hr||we===$h||we===Kh,ke=ye.getClearColor(),We=ye.getClearAlpha(),Qe=ke.r,je=ke.g,Ze=ke.b;De?(d[0]=Qe,d[1]=je,d[2]=Ze,d[3]=We,W.clearBufferuiv(W.COLOR,0,d)):(_[0]=Qe,_[1]=je,_[2]=Ze,_[3]=We,W.clearBufferiv(W.COLOR,0,_))}else $|=W.COLOR_BUFFER_BIT}k&&($|=W.DEPTH_BUFFER_BIT),j&&($|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),re.dispose(),fe.dispose(),Ke.dispose(),st.dispose(),Mt.dispose(),w.dispose(),Ae.dispose(),Ce.dispose(),X.dispose(),be.dispose(),be.removeEventListener("sessionstart",Ht),be.removeEventListener("sessionend",ut),Pe&&(Pe.dispose(),Pe=null),ht.stop()};function He(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=mt.autoReset,k=pe.enabled,j=pe.autoUpdate,$=pe.needsUpdate,q=pe.type;Me(),mt.autoReset=R,pe.enabled=k,pe.autoUpdate=j,pe.needsUpdate=$,pe.type=q}function ge(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ae(R){const k=R.target;k.removeEventListener("dispose",ae),ee(k)}function ee(R){he(R),Ke.remove(R)}function he(R){const k=Ke.get(R).programs;k!==void 0&&(k.forEach(function(j){X.releaseProgram(j)}),R.isShaderMaterial&&X.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,j,$,q,we){k===null&&(k=Ne);const De=q.isMesh&&q.matrixWorld.determinant()<0,ke=Vn(R,k,j,$,q);Be.setMaterial($,De);let We=j.index,Qe=1;if($.wireframe===!0){if(We=C.getWireframeAttribute(j),We===void 0)return;Qe=2}const je=j.drawRange,Ze=j.attributes.position;let vt=je.start*Qe,Vt=(je.start+je.count)*Qe;we!==null&&(vt=Math.max(vt,we.start*Qe),Vt=Math.min(Vt,(we.start+we.count)*Qe)),We!==null?(vt=Math.max(vt,0),Vt=Math.min(Vt,We.count)):Ze!=null&&(vt=Math.max(vt,0),Vt=Math.min(Vt,Ze.count));const Ut=Vt-vt;if(Ut<0||Ut===1/0)return;Ae.setup(q,$,ke,j,We);let an,ot=de;if(We!==null&&(an=Lt.get(We),ot=ne,ot.setIndex(an)),q.isMesh)$.wireframe===!0?(Be.setLineWidth($.wireframeLinewidth*Ye()),ot.setMode(W.LINES)):ot.setMode(W.TRIANGLES);else if(q.isLine){let Je=$.linewidth;Je===void 0&&(Je=1),Be.setLineWidth(Je*Ye()),q.isLineSegments?ot.setMode(W.LINES):q.isLineLoop?ot.setMode(W.LINE_LOOP):ot.setMode(W.LINE_STRIP)}else q.isPoints?ot.setMode(W.POINTS):q.isSprite&&ot.setMode(W.TRIANGLES);if(q.isBatchedMesh)ot.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)ot.renderInstances(vt,Ut,q.count);else if(j.isInstancedBufferGeometry){const Je=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Yi=Math.min(j.instanceCount,Je);ot.renderInstances(vt,Ut,Yi)}else ot.render(vt,Ut)};function Re(R,k,j){R.transparent===!0&&R.side===$n&&R.forceSinglePass===!1?(R.side=gn,R.needsUpdate=!0,ni(R,k,j),R.side=Jn,R.needsUpdate=!0,ni(R,k,j),R.side=$n):ni(R,k,j)}this.compile=function(R,k,j=null){j===null&&(j=R),m=fe.get(j),m.init(),b.push(m),j.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),R!==j&&R.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(v._useLegacyLights);const $=new Set;return R.traverse(function(q){const we=q.material;if(we)if(Array.isArray(we))for(let De=0;De<we.length;De++){const ke=we[De];Re(ke,j,q),$.add(ke)}else Re(we,j,q),$.add(we)}),b.pop(),m=null,$},this.compileAsync=function(R,k,j=null){const $=this.compile(R,k,j);return new Promise(q=>{function we(){if($.forEach(function(De){Ke.get(De).currentProgram.isReady()&&$.delete(De)}),$.size===0){q(R);return}setTimeout(we,10)}Le.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let tt=null;function _t(R){tt&&tt(R)}function Ht(){ht.stop()}function ut(){ht.start()}const ht=new gf;ht.setAnimationLoop(_t),typeof self<"u"&&ht.setContext(self),this.setAnimationLoop=function(R){tt=R,be.setAnimationLoop(R),R===null?ht.stop():ht.start()},be.addEventListener("sessionstart",Ht),be.addEventListener("sessionend",ut),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(k),k=be.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,k,T),m=fe.get(R,b.length),m.init(),b.push(m),_e.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Q.setFromProjectionMatrix(_e),Se=this.localClippingEnabled,oe=Ee.init(this.clippingPlanes,Se),g=re.get(R,p.length),g.init(),p.push(g),yn(R,k,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ce,ie),this.info.render.frame++,oe===!0&&Ee.beginShadows();const j=m.state.shadowsArray;if(pe.render(j,R,k),oe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),ye.render(g,R),m.setupLights(v._useLegacyLights),k.isArrayCamera){const $=k.cameras;for(let q=0,we=$.length;q<we;q++){const De=$[q];ti(g,R,De,De.viewport)}}else ti(g,R,k);T!==null&&(ze.updateMultisampleRenderTarget(T),ze.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(v,R,k),Ae.resetDefaultState(),I=-1,S=null,b.pop(),b.length>0?m=b[b.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function yn(R,k,j,$){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){$&&Ge.setFromMatrixPosition(R.matrixWorld).applyMatrix4(_e);const De=w.update(R),ke=R.material;ke.visible&&g.push(R,De,ke,j,Ge.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const De=w.update(R),ke=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ge.copy(R.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ge.copy(De.boundingSphere.center)),Ge.applyMatrix4(R.matrixWorld).applyMatrix4(_e)),Array.isArray(ke)){const We=De.groups;for(let Qe=0,je=We.length;Qe<je;Qe++){const Ze=We[Qe],vt=ke[Ze.materialIndex];vt&&vt.visible&&g.push(R,De,vt,j,Ge.z,Ze)}}else ke.visible&&g.push(R,De,ke,j,Ge.z,null)}}const we=R.children;for(let De=0,ke=we.length;De<ke;De++)yn(we[De],k,j,$)}function ti(R,k,j,$){const q=R.opaque,we=R.transmissive,De=R.transparent;m.setupLightsView(j),oe===!0&&Ee.setGlobalState(v.clippingPlanes,j),we.length>0&&on(q,we,k,j),$&&Be.viewport(A.copy($)),q.length>0&&Li(q,k,j),we.length>0&&Li(we,k,j),De.length>0&&Li(De,k,j),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function on(R,k,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const we=$e.isWebGL2;Pe===null&&(Pe=new Xi(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?qs:ui,minFilter:pr,samples:we?4:0})),v.getDrawingBufferSize(Xe),we?Pe.setSize(Xe.x,Xe.y):Pe.setSize(oa(Xe.x),oa(Xe.y));const De=v.getRenderTarget();v.setRenderTarget(Pe),v.getClearColor(G),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const ke=v.toneMapping;v.toneMapping=Gi,Li(R,j,$),ze.updateMultisampleRenderTarget(Pe),ze.updateRenderTargetMipmap(Pe);let We=!1;for(let Qe=0,je=k.length;Qe<je;Qe++){const Ze=k[Qe],vt=Ze.object,Vt=Ze.geometry,Ut=Ze.material,an=Ze.group;if(Ut.side===$n&&vt.layers.test($.layers)){const ot=Ut.side;Ut.side=gn,Ut.needsUpdate=!0,gr(vt,j,$,Vt,Ut,an),Ut.side=ot,Ut.needsUpdate=!0,We=!0}}We===!0&&(ze.updateMultisampleRenderTarget(Pe),ze.updateRenderTargetMipmap(Pe)),v.setRenderTarget(De),v.setClearColor(G,D),v.toneMapping=ke}function Li(R,k,j){const $=k.isScene===!0?k.overrideMaterial:null;for(let q=0,we=R.length;q<we;q++){const De=R[q],ke=De.object,We=De.geometry,Qe=$===null?De.material:$,je=De.group;ke.layers.test(j.layers)&&gr(ke,k,j,We,Qe,je)}}function gr(R,k,j,$,q,we){R.onBeforeRender(v,k,j,$,q,we),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(v,k,j,$,R,we),q.transparent===!0&&q.side===$n&&q.forceSinglePass===!1?(q.side=gn,q.needsUpdate=!0,v.renderBufferDirect(j,k,$,q,R,we),q.side=Jn,q.needsUpdate=!0,v.renderBufferDirect(j,k,$,q,R,we),q.side=$n):v.renderBufferDirect(j,k,$,q,R,we),R.onAfterRender(v,k,j,$,q,we)}function ni(R,k,j){k.isScene!==!0&&(k=Ne);const $=Ke.get(R),q=m.state.lights,we=m.state.shadowsArray,De=q.state.version,ke=X.getParameters(R,q.state,we,k,j),We=X.getProgramCacheKey(ke);let Qe=$.programs;$.environment=R.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(R.isMeshStandardMaterial?Mt:st).get(R.envMap||$.environment),Qe===void 0&&(R.addEventListener("dispose",ae),Qe=new Map,$.programs=Qe);let je=Qe.get(We);if(je!==void 0){if($.currentProgram===je&&$.lightsStateVersion===De)return xr(R,ke),je}else ke.uniforms=X.getUniforms(R),R.onBuild(j,ke,v),R.onBeforeCompile(ke,v),je=X.acquireProgram(ke,We),Qe.set(We,je),$.uniforms=ke.uniforms;const Ze=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=Ee.uniform),xr(R,ke),$.needsLights=vs(R),$.lightsStateVersion=De,$.needsLights&&(Ze.ambientLightColor.value=q.state.ambient,Ze.lightProbe.value=q.state.probe,Ze.directionalLights.value=q.state.directional,Ze.directionalLightShadows.value=q.state.directionalShadow,Ze.spotLights.value=q.state.spot,Ze.spotLightShadows.value=q.state.spotShadow,Ze.rectAreaLights.value=q.state.rectArea,Ze.ltc_1.value=q.state.rectAreaLTC1,Ze.ltc_2.value=q.state.rectAreaLTC2,Ze.pointLights.value=q.state.point,Ze.pointLightShadows.value=q.state.pointShadow,Ze.hemisphereLights.value=q.state.hemi,Ze.directionalShadowMap.value=q.state.directionalShadowMap,Ze.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ze.spotShadowMap.value=q.state.spotShadowMap,Ze.spotLightMatrix.value=q.state.spotLightMatrix,Ze.spotLightMap.value=q.state.spotLightMap,Ze.pointShadowMap.value=q.state.pointShadowMap,Ze.pointShadowMatrix.value=q.state.pointShadowMatrix),$.currentProgram=je,$.uniformsList=null,je}function vr(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=Qo.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function xr(R,k){const j=Ke.get(R);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function Vn(R,k,j,$,q){k.isScene!==!0&&(k=Ne),ze.resetTextureUnits();const we=k.fog,De=$.isMeshStandardMaterial?k.environment:null,ke=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:sn,We=($.isMeshStandardMaterial?Mt:st).get($.envMap||De),Qe=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,je=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ze=!!j.morphAttributes.position,vt=!!j.morphAttributes.normal,Vt=!!j.morphAttributes.color;let Ut=Gi;$.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ut=v.toneMapping);const an=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ot=an!==void 0?an.length:0,Je=Ke.get($),Yi=m.state.lights;if(oe===!0&&(Se===!0||R!==S)){const te=R===S&&$.id===I;Ee.setState($,R,te)}let xt=!1;$.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Yi.state.version||Je.outputColorSpace!==ke||q.isBatchedMesh&&Je.batching===!1||!q.isBatchedMesh&&Je.batching===!0||q.isInstancedMesh&&Je.instancing===!1||!q.isInstancedMesh&&Je.instancing===!0||q.isSkinnedMesh&&Je.skinning===!1||!q.isSkinnedMesh&&Je.skinning===!0||q.isInstancedMesh&&Je.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Je.instancingColor===!1&&q.instanceColor!==null||Je.envMap!==We||$.fog===!0&&Je.fog!==we||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ee.numPlanes||Je.numIntersection!==Ee.numIntersection)||Je.vertexAlphas!==Qe||Je.vertexTangents!==je||Je.morphTargets!==Ze||Je.morphNormals!==vt||Je.morphColors!==Vt||Je.toneMapping!==Ut||$e.isWebGL2===!0&&Je.morphTargetsCount!==ot)&&(xt=!0):(xt=!0,Je.__version=$.version);let In=Je.currentProgram;xt===!0&&(In=ni($,k,q));let yr=!1,Kt=!1,en=!1;const Gt=In.getUniforms(),M=Je.uniforms;if(Be.useProgram(In.program)&&(yr=!0,Kt=!0,en=!0),$.id!==I&&(I=$.id,Kt=!0),yr||S!==R){Gt.setValue(W,"projectionMatrix",R.projectionMatrix),Gt.setValue(W,"viewMatrix",R.matrixWorldInverse);const te=Gt.map.cameraPosition;te!==void 0&&te.setValue(W,Ge.setFromMatrixPosition(R.matrixWorld)),$e.logarithmicDepthBuffer&&Gt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Gt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Kt=!0,en=!0)}if(q.isSkinnedMesh){Gt.setOptional(W,q,"bindMatrix"),Gt.setOptional(W,q,"bindMatrixInverse");const te=q.skeleton;te&&($e.floatVertexTextures?(te.boneTexture===null&&te.computeBoneTexture(),Gt.setValue(W,"boneTexture",te.boneTexture,ze)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(Gt.setOptional(W,q,"batchingTexture"),Gt.setValue(W,"batchingTexture",q._matricesTexture,ze));const B=j.morphAttributes;if((B.position!==void 0||B.normal!==void 0||B.color!==void 0&&$e.isWebGL2===!0)&&N.update(q,j,In),(Kt||Je.receiveShadow!==q.receiveShadow)&&(Je.receiveShadow=q.receiveShadow,Gt.setValue(W,"receiveShadow",q.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(M.envMap.value=We,M.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),Kt&&(Gt.setValue(W,"toneMappingExposure",v.toneMappingExposure),Je.needsLights&&Ci(M,en),we&&$.fog===!0&&le.refreshFogUniforms(M,we),le.refreshMaterialUniforms(M,$,Z,K,Pe),Qo.upload(W,vr(Je),M,ze)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Qo.upload(W,vr(Je),M,ze),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Gt.setValue(W,"center",q.center),Gt.setValue(W,"modelViewMatrix",q.modelViewMatrix),Gt.setValue(W,"normalMatrix",q.normalMatrix),Gt.setValue(W,"modelMatrix",q.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const te=$.uniformsGroups;for(let V=0,ue=te.length;V<ue;V++)if($e.isWebGL2){const Ie=te[V];Ce.update(Ie,In),Ce.bind(Ie,In)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return In}function Ci(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function vs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,k,j){Ke.get(R.texture).__webglTexture=k,Ke.get(R.depthTexture).__webglTexture=j;const $=Ke.get(R);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=j===void 0,$.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,k){const j=Ke.get(R);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,j=0){T=R,x=k,E=j;let $=!0,q=null,we=!1,De=!1;if(R){const We=Ke.get(R);We.__useDefaultFramebuffer!==void 0?(Be.bindFramebuffer(W.FRAMEBUFFER,null),$=!1):We.__webglFramebuffer===void 0?ze.setupRenderTarget(R):We.__hasExternalTextures&&ze.rebindTextures(R,Ke.get(R.texture).__webglTexture,Ke.get(R.depthTexture).__webglTexture);const Qe=R.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(De=!0);const je=Ke.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(je[k])?q=je[k][j]:q=je[k],we=!0):$e.isWebGL2&&R.samples>0&&ze.useMultisampledRTT(R)===!1?q=Ke.get(R).__webglMultisampledFramebuffer:Array.isArray(je)?q=je[j]:q=je,A.copy(R.viewport),z.copy(R.scissor),O=R.scissorTest}else A.copy(se).multiplyScalar(Z).floor(),z.copy(me).multiplyScalar(Z).floor(),O=ve;if(Be.bindFramebuffer(W.FRAMEBUFFER,q)&&$e.drawBuffers&&$&&Be.drawBuffers(R,q),Be.viewport(A),Be.scissor(z),Be.setScissorTest(O),we){const We=Ke.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+k,We.__webglTexture,j)}else if(De){const We=Ke.get(R.texture),Qe=k||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,We.__webglTexture,j||0,Qe)}I=-1},this.readRenderTargetPixels=function(R,k,j,$,q,we,De){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Ke.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(ke=ke[De]),ke){Be.bindFramebuffer(W.FRAMEBUFFER,ke);try{const We=R.texture,Qe=We.format,je=We.type;if(Qe!==nn&&Fe.convert(Qe)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=je===qs&&(Le.has("EXT_color_buffer_half_float")||$e.isWebGL2&&Le.has("EXT_color_buffer_float"));if(je!==ui&&Fe.convert(je)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===_n&&($e.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-$&&j>=0&&j<=R.height-q&&W.readPixels(k,j,$,q,Fe.convert(Qe),Fe.convert(je),we)}finally{const We=T!==null?Ke.get(T).__webglFramebuffer:null;Be.bindFramebuffer(W.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(R,k,j=0){const $=Math.pow(2,-j),q=Math.floor(k.image.width*$),we=Math.floor(k.image.height*$);ze.setTexture2D(k,0),W.copyTexSubImage2D(W.TEXTURE_2D,j,0,0,R.x,R.y,q,we),Be.unbindTexture()},this.copyTextureToTexture=function(R,k,j,$=0){const q=k.image.width,we=k.image.height,De=Fe.convert(j.format),ke=Fe.convert(j.type);ze.setTexture2D(j,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,j.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,j.unpackAlignment),k.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,$,R.x,R.y,q,we,De,ke,k.image.data):k.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,$,R.x,R.y,k.mipmaps[0].width,k.mipmaps[0].height,De,k.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,$,R.x,R.y,De,ke,k.image),$===0&&j.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Be.unbindTexture()},this.copyTextureToTexture3D=function(R,k,j,$,q=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=R.max.x-R.min.x+1,De=R.max.y-R.min.y+1,ke=R.max.z-R.min.z+1,We=Fe.convert($.format),Qe=Fe.convert($.type);let je;if($.isData3DTexture)ze.setTexture3D($,0),je=W.TEXTURE_3D;else if($.isDataArrayTexture)ze.setTexture2DArray($,0),je=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,$.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,$.unpackAlignment);const Ze=W.getParameter(W.UNPACK_ROW_LENGTH),vt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Vt=W.getParameter(W.UNPACK_SKIP_PIXELS),Ut=W.getParameter(W.UNPACK_SKIP_ROWS),an=W.getParameter(W.UNPACK_SKIP_IMAGES),ot=j.isCompressedTexture?j.mipmaps[0]:j.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,ot.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ot.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,R.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,R.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,R.min.z),j.isDataTexture||j.isData3DTexture?W.texSubImage3D(je,q,k.x,k.y,k.z,we,De,ke,We,Qe,ot.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(je,q,k.x,k.y,k.z,we,De,ke,We,ot.data)):W.texSubImage3D(je,q,k.x,k.y,k.z,we,De,ke,We,Qe,ot),W.pixelStorei(W.UNPACK_ROW_LENGTH,Ze),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,vt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Vt),W.pixelStorei(W.UNPACK_SKIP_ROWS,Ut),W.pixelStorei(W.UNPACK_SKIP_IMAGES,an),q===0&&$.generateMipmaps&&W.generateMipmap(je),Be.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?ze.setTextureCube(R,0):R.isData3DTexture?ze.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ze.setTexture2DArray(R,0):ze.setTexture2D(R,0),Be.unbindTexture()},this.resetState=function(){x=0,E=0,T=null,Be.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Kl?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===pa?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?Wi:tf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Wi?zt:sn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class h0 extends Mf{}h0.prototype.isWebGL1Renderer=!0;class f0 extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class d0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ll,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.InterleavedBuffer: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const fn=new P;class tc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new tc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Vu=new P,Gu=new pt,Wu=new pt,p0=new P,Xu=new Ve,To=new P,Ja=new ei,ju=new Ve,Qa=new Qs;class m0 extends Mn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tc,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new kt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,To),this.boundingBox.expandByPoint(To)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ei),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,To),this.boundingSphere.expandByPoint(To)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ja.copy(this.boundingSphere),Ja.applyMatrix4(i),e.ray.intersectsSphere(Ja)!==!1&&(ju.copy(i).invert(),Qa.copy(e.ray).applyMatrix4(ju),!(this.boundingBox!==null&&Qa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Qa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Gu.fromBufferAttribute(i.attributes.skinIndex,e),Wu.fromBufferAttribute(i.attributes.skinWeight,e),Vu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Wu.getComponent(s);if(o!==0){const a=Gu.getComponent(s);Xu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(p0.copy(Vu).applyMatrix4(Xu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Ef extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class aa extends rn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=It,u=It,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qu=new Ve,_0=new Ve;class nc{constructor(e=[],t=[]){this.uuid=Kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:_0;qu.multiplyMatrices(a,t[s]),qu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new nc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new aa(t,e,e,nn,_n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Ef),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Il extends jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const kr=new Ve,Yu=new Ve,Ao=[],$u=new kt,g0=new Ve,Es=new Mn,Ts=new ei;class v0 extends Mn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Il(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,g0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,kr),$u.copy(e.boundingBox).applyMatrix4(kr),this.boundingBox.union($u)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,kr),Ts.copy(e.boundingSphere).applyMatrix4(kr),this.boundingSphere.union(Ts)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ts.copy(this.boundingSphere),Ts.applyMatrix4(n),e.ray.intersectsSphere(Ts)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,kr),Yu.multiplyMatrices(n,kr),Es.matrixWorld=Yu,Es.raycast(e,Ao);for(let o=0,a=Ao.length;o<a;o++){const l=Ao[o];l.instanceId=s,l.object=this,t.push(l)}Ao.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Il(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Tf extends hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ku=new P,Zu=new P,Ju=new Ve,el=new Qs,Ro=new ei;class ic extends Ot{constructor(e=new vn,t=new Tf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ku.fromBufferAttribute(t,i-1),Zu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ku.distanceTo(Zu);e.setAttribute("lineDistance",new Zn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(i),Ro.radius+=s,e.ray.intersectsSphere(Ro)===!1)return;Ju.copy(i).invert(),el.copy(e.ray).applyMatrix4(Ju);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,u=new P,h=new P,f=new P,d=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const p=Math.max(0,o.start),b=Math.min(_.count,o.start+o.count);for(let v=p,y=b-1;v<y;v+=d){const x=_.getX(v),E=_.getX(v+1);if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,E),el.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),b=Math.min(m.count,o.start+o.count);for(let v=p,y=b-1;v<y;v+=d){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),el.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Qu=new P,eh=new P;class x0 extends ic{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Qu.fromBufferAttribute(t,i),eh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Qu.distanceTo(eh);e.setAttribute("lineDistance",new Zn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class y0 extends ic{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Af extends hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const th=new Ve,Nl=new Qs,Lo=new ei,Co=new P;class b0 extends Ot{constructor(e=new vn,t=new Af){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(i),Lo.radius+=s,e.ray.intersectsSphere(Lo)===!1)return;th.copy(i).invert(),Nl.copy(e.ray).applyMatrix4(th);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const m=c.getX(_);Co.fromBufferAttribute(h,m),nh(Co,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)Co.fromBufferAttribute(h,_),nh(Co,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function nh(r,e,t,n,i,s,o){const a=Nl.distanceSqToPoint(r);if(a<t){const l=new P;Nl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class rc extends hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nf,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ri extends rc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Po(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function S0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function w0(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ih(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Rf(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class no{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class M0 extends no{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jc,endingEnd:Jc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qc:s=e,a=2*t-n;break;case eu:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qc:o=e,l=2*n-t;break;case eu:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-f*m+2*f*g-f*_,b=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,v=(-1-d)*m+(1.5+d)*g+.5*_,y=d*m-d*g;for(let x=0;x!==a;++x)s[x]=p*o[u+x]+b*o[c+x]+v*o[l+x]+y*o[h+x];return s}}class E0 extends no{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class T0 extends no{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class pi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Po(t,this.TimeBufferType),this.values=Po(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Po(e.times,Array),values:Po(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new T0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new E0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new M0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $s:t=this.InterpolantFactoryMethodDiscrete;break;case as:t=this.InterpolantFactoryMethodLinear;break;case Ra:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return as;case this.InterpolantFactoryMethodSmooth:return Ra}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&S0(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ra,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=as;class ps extends pi{}ps.prototype.ValueTypeName="bool";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=$s;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;class Lf extends pi{}Lf.prototype.ValueTypeName="color";class us extends pi{}us.prototype.ValueTypeName="number";class A0 extends no{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)di.slerpFlat(s,0,o,c-a,o,c,l);return s}}class mr extends pi{InterpolantFactoryMethodLinear(e){return new A0(this.times,this.values,this.getValueSize(),e)}}mr.prototype.ValueTypeName="quaternion";mr.prototype.DefaultInterpolation=as;mr.prototype.InterpolantFactoryMethodSmooth=void 0;class ms extends pi{}ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=$s;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;class hs extends pi{}hs.prototype.ValueTypeName="vector";class R0{constructor(e,t=-1,n,i=Fd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Kn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(C0(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(pi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=w0(l);l=ih(l,1,u),c=ih(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new us(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,_,g){if(d.length!==0){const m=[],p=[];Rf(d,m,p,_),m.length!==0&&g.push(new h(f,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let b=0;b!==f[_].morphTargets.length;++b){const v=f[_];m.push(v.time),p.push(v.morphTarget===g?1:0)}i.push(new us(".morphTargetInfluence["+g+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(hs,d+".position",f,"pos",i),n(mr,d+".quaternion",f,"rot",i),n(hs,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function L0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return us;case"vector":case"vector2":case"vector3":case"vector4":return hs;case"color":return Lf;case"quaternion":return mr;case"bool":case"boolean":return ps;case"string":return ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function C0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=L0(r.type);if(r.times===void 0){const t=[],n=[];Rf(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const fs={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class P0{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const D0=new P0;class _s{constructor(e){this.manager=e!==void 0?e:D0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}_s.DEFAULT_MATERIAL_NAME="__DEFAULT";const Si={};class I0 extends Error{constructor(e,t){super(e),this.response=t}}class Cf extends _s{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=fs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Si[e]!==void 0){Si[e].push({onLoad:t,onProgress:n,onError:i});return}Si[e]=[],Si[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Si[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){b();function b(){h.read().then(({done:v,value:y})=>{if(v)p.close();else{g+=y.byteLength;const x=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let E=0,T=u.length;E<T;E++){const I=u[E];I.onProgress&&I.onProgress(x)}p.enqueue(y),b()}})}}});return new Response(m)}else throw new I0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{fs.add(e,c);const u=Si[e];delete Si[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Si[e];if(u===void 0)throw this.manager.itemError(e),c;delete Si[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class N0 extends _s{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=fs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ks("img");function l(){u(),fs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class F0 extends _s{constructor(e){super(e)}load(e,t,n,i){const s=new rn,o=new N0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ga extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const tl=new Ve,rh=new P,sh=new P;class sc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jl,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;rh.setFromMatrixPosition(e.matrixWorld),t.position.copy(rh),sh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sh),t.updateMatrixWorld(),tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class O0 extends sc{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ls*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class U0 extends ga{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new O0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const oh=new Ve,As=new P,nl=new P;class B0 extends sc{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),As.setFromMatrixPosition(e.matrixWorld),n.position.copy(As),nl.copy(n.position),nl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(nl),n.updateMatrixWorld(),i.makeTranslation(-As.x,-As.y,-As.z),oh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oh)}}class z0 extends ga{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new B0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class k0 extends sc{constructor(){super(new to(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pf extends ga{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new k0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class H0 extends ga{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ws{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class V0 extends _s{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=fs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){fs.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const oc="\\[\\]\\.:\\/",G0=new RegExp("["+oc+"]","g"),ac="[^"+oc+"]",W0="[^"+oc.replace("\\.","")+"]",X0=/((?:WC+[\/:])*)/.source.replace("WC",ac),j0=/(WCOD+)?/.source.replace("WCOD",W0),q0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ac),Y0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ac),$0=new RegExp("^"+X0+j0+q0+Y0+"$"),K0=["material","materials","bones","map"];class Z0{constructor(e,t,n){const i=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class gt{constructor(e,t,n){this.path=t,this.parsedPath=n||gt.parseTrackName(t),this.node=gt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new gt.Composite(e,t,n):new gt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(G0,"")}static parseTrackName(e){const t=$0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);K0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=gt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}gt.Composite=Z0;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ah{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Qt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const lh=new P,Do=new P;class Ti{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){lh.subVectors(e,this.start),Do.subVectors(this.end,this.start);const n=Do.dot(Do);let s=Do.dot(lh)/n;return t&&(s=Qt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yl);const ch={type:"change"},il={type:"start"},uh={type:"end"},Io=new Qs,hh=new ai,J0=Math.cos(70*sf.DEG2RAD);class Q0 extends _r{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Sr.ROTATE,MIDDLE:Sr.DOLLY,RIGHT:Sr.PAN},this.touches={ONE:wr.ROTATE,TWO:wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",w),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",w),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ch),n.update(),s=i.NONE},this.update=function(){const N=new P,de=new di().setFromUnitVectors(e.up,new P(0,1,0)),ne=de.clone().invert(),Fe=new P,Ae=new di,Ce=new P,Me=2*Math.PI;return function(He=null){const F=n.object.position;N.copy(F).sub(n.target),N.applyQuaternion(de),a.setFromVector3(N),n.autoRotate&&s===i.NONE&&z(S(He)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ge=n.minAzimuthAngle,ae=n.maxAzimuthAngle;isFinite(ge)&&isFinite(ae)&&(ge<-Math.PI?ge+=Me:ge>Math.PI&&(ge-=Me),ae<-Math.PI?ae+=Me:ae>Math.PI&&(ae-=Me),ge<=ae?a.theta=Math.max(ge,Math.min(ae,a.theta)):a.theta=a.theta>(ge+ae)/2?Math.max(ge,a.theta):Math.min(ae,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&E||n.object.isOrthographicCamera?a.radius=ie(a.radius):a.radius=ie(a.radius*c),N.setFromSpherical(a),N.applyQuaternion(ne),F.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ee=!1;if(n.zoomToCursor&&E){let he=null;if(n.object.isPerspectiveCamera){const Re=N.length();he=ie(Re*c);const tt=Re-he;n.object.position.addScaledVector(y,tt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Re=new P(x.x,x.y,0);Re.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ee=!0;const tt=new P(x.x,x.y,0);tt.unproject(n.object),n.object.position.sub(tt).add(Re),n.object.updateMatrixWorld(),he=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;he!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(he).add(n.object.position):(Io.origin.copy(n.object.position),Io.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Io.direction))<J0?e.lookAt(n.target):(hh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Io.intersectPlane(hh,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ee=!0);return c=1,E=!1,ee||Fe.distanceToSquared(n.object.position)>o||8*(1-Ae.dot(n.object.quaternion))>o||Ce.distanceToSquared(n.target)>0?(n.dispatchEvent(ch),Fe.copy(n.object.position),Ae.copy(n.object.quaternion),Ce.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",re),n.domElement.removeEventListener("pointerdown",Ke),n.domElement.removeEventListener("pointercancel",st),n.domElement.removeEventListener("wheel",C),n.domElement.removeEventListener("pointermove",ze),n.domElement.removeEventListener("pointerup",st),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",w),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new ah,l=new ah;let c=1;const u=new P,h=new Oe,f=new Oe,d=new Oe,_=new Oe,g=new Oe,m=new Oe,p=new Oe,b=new Oe,v=new Oe,y=new P,x=new Oe;let E=!1;const T=[],I={};function S(N){return N!==null?2*Math.PI/60*n.autoRotateSpeed*N:2*Math.PI/60/60*n.autoRotateSpeed}function A(){return Math.pow(.95,n.zoomSpeed)}function z(N){l.theta-=N}function O(N){l.phi-=N}const G=function(){const N=new P;return function(ne,Fe){N.setFromMatrixColumn(Fe,0),N.multiplyScalar(-ne),u.add(N)}}(),D=function(){const N=new P;return function(ne,Fe){n.screenSpacePanning===!0?N.setFromMatrixColumn(Fe,1):(N.setFromMatrixColumn(Fe,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(ne),u.add(N)}}(),H=function(){const N=new P;return function(ne,Fe){const Ae=n.domElement;if(n.object.isPerspectiveCamera){const Ce=n.object.position;N.copy(Ce).sub(n.target);let Me=N.length();Me*=Math.tan(n.object.fov/2*Math.PI/180),G(2*ne*Me/Ae.clientHeight,n.object.matrix),D(2*Fe*Me/Ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(G(ne*(n.object.right-n.object.left)/n.object.zoom/Ae.clientWidth,n.object.matrix),D(Fe*(n.object.top-n.object.bottom)/n.object.zoom/Ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function K(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ce(N){if(!n.zoomToCursor)return;E=!0;const de=n.domElement.getBoundingClientRect(),ne=N.clientX-de.left,Fe=N.clientY-de.top,Ae=de.width,Ce=de.height;x.x=ne/Ae*2-1,x.y=-(Fe/Ce)*2+1,y.set(x.x,x.y,1).unproject(n.object).sub(n.object.position).normalize()}function ie(N){return Math.max(n.minDistance,Math.min(n.maxDistance,N))}function se(N){h.set(N.clientX,N.clientY)}function me(N){ce(N),p.set(N.clientX,N.clientY)}function ve(N){_.set(N.clientX,N.clientY)}function Q(N){f.set(N.clientX,N.clientY),d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const de=n.domElement;z(2*Math.PI*d.x/de.clientHeight),O(2*Math.PI*d.y/de.clientHeight),h.copy(f),n.update()}function oe(N){b.set(N.clientX,N.clientY),v.subVectors(b,p),v.y>0?K(A()):v.y<0&&Z(A()),p.copy(b),n.update()}function Se(N){g.set(N.clientX,N.clientY),m.subVectors(g,_).multiplyScalar(n.panSpeed),H(m.x,m.y),_.copy(g),n.update()}function Pe(N){ce(N),N.deltaY<0?Z(A()):N.deltaY>0&&K(A()),n.update()}function _e(N){let de=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),de=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),de=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),de=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),de=!0;break}de&&(N.preventDefault(),n.update())}function Xe(){if(T.length===1)h.set(T[0].pageX,T[0].pageY);else{const N=.5*(T[0].pageX+T[1].pageX),de=.5*(T[0].pageY+T[1].pageY);h.set(N,de)}}function Ge(){if(T.length===1)_.set(T[0].pageX,T[0].pageY);else{const N=.5*(T[0].pageX+T[1].pageX),de=.5*(T[0].pageY+T[1].pageY);_.set(N,de)}}function Ne(){const N=T[0].pageX-T[1].pageX,de=T[0].pageY-T[1].pageY,ne=Math.sqrt(N*N+de*de);p.set(0,ne)}function Ye(){n.enableZoom&&Ne(),n.enablePan&&Ge()}function W(){n.enableZoom&&Ne(),n.enableRotate&&Xe()}function Rt(N){if(T.length==1)f.set(N.pageX,N.pageY);else{const ne=ye(N),Fe=.5*(N.pageX+ne.x),Ae=.5*(N.pageY+ne.y);f.set(Fe,Ae)}d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const de=n.domElement;z(2*Math.PI*d.x/de.clientHeight),O(2*Math.PI*d.y/de.clientHeight),h.copy(f)}function Le(N){if(T.length===1)g.set(N.pageX,N.pageY);else{const de=ye(N),ne=.5*(N.pageX+de.x),Fe=.5*(N.pageY+de.y);g.set(ne,Fe)}m.subVectors(g,_).multiplyScalar(n.panSpeed),H(m.x,m.y),_.copy(g)}function $e(N){const de=ye(N),ne=N.pageX-de.x,Fe=N.pageY-de.y,Ae=Math.sqrt(ne*ne+Fe*Fe);b.set(0,Ae),v.set(0,Math.pow(b.y/p.y,n.zoomSpeed)),K(v.y),p.copy(b)}function Be(N){n.enableZoom&&$e(N),n.enablePan&&Le(N)}function mt(N){n.enableZoom&&$e(N),n.enableRotate&&Rt(N)}function Ke(N){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",ze),n.domElement.addEventListener("pointerup",st)),fe(N),N.pointerType==="touch"?X(N):Mt(N))}function ze(N){n.enabled!==!1&&(N.pointerType==="touch"?le(N):Lt(N))}function st(N){Ee(N),T.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",ze),n.domElement.removeEventListener("pointerup",st)),n.dispatchEvent(uh),s=i.NONE}function Mt(N){let de;switch(N.button){case 0:de=n.mouseButtons.LEFT;break;case 1:de=n.mouseButtons.MIDDLE;break;case 2:de=n.mouseButtons.RIGHT;break;default:de=-1}switch(de){case Sr.DOLLY:if(n.enableZoom===!1)return;me(N),s=i.DOLLY;break;case Sr.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;ve(N),s=i.PAN}else{if(n.enableRotate===!1)return;se(N),s=i.ROTATE}break;case Sr.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;se(N),s=i.ROTATE}else{if(n.enablePan===!1)return;ve(N),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(il)}function Lt(N){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Q(N);break;case i.DOLLY:if(n.enableZoom===!1)return;oe(N);break;case i.PAN:if(n.enablePan===!1)return;Se(N);break}}function C(N){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(N.preventDefault(),n.dispatchEvent(il),Pe(N),n.dispatchEvent(uh))}function w(N){n.enabled===!1||n.enablePan===!1||_e(N)}function X(N){switch(pe(N),T.length){case 1:switch(n.touches.ONE){case wr.ROTATE:if(n.enableRotate===!1)return;Xe(),s=i.TOUCH_ROTATE;break;case wr.PAN:if(n.enablePan===!1)return;Ge(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case wr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ye(),s=i.TOUCH_DOLLY_PAN;break;case wr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;W(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(il)}function le(N){switch(pe(N),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Rt(N),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Le(N),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Be(N),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;mt(N),n.update();break;default:s=i.NONE}}function re(N){n.enabled!==!1&&N.preventDefault()}function fe(N){T.push(N)}function Ee(N){delete I[N.pointerId];for(let de=0;de<T.length;de++)if(T[de].pointerId==N.pointerId){T.splice(de,1);return}}function pe(N){let de=I[N.pointerId];de===void 0&&(de=new Oe,I[N.pointerId]=de),de.set(N.pageX,N.pageY)}function ye(N){const de=N.pointerId===T[0].pointerId?T[1]:T[0];return I[de.pointerId]}n.domElement.addEventListener("contextmenu",re),n.domElement.addEventListener("pointerdown",Ke),n.domElement.addEventListener("pointercancel",st),n.domElement.addEventListener("wheel",C,{passive:!1}),this.update()}}const ex=new to(-1,1,1,-1,0,1);class tx extends vn{constructor(){super(),this.setAttribute("position",new Zn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zn([0,2,0,0,2,0],2))}}const nx=new tx;class fh{constructor(e){this._mesh=new Mn(nx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ex)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}function dh(r,e){if(e===Od)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Rl||e===ef){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Rl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class ix extends _s{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new lx(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new vx(t)}),this.register(function(t){return new xx(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new hx(t)}),this.register(function(t){return new fx(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new _x(t)}),this.register(function(t){return new mx(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new yx(t)}),this.register(function(t){return new bx(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ws.extractUrlBase(e);o=Ws.resolveURL(c,this.path)}else o=Ws.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Cf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Df){try{o[at.KHR_BINARY_GLTF]=new Sx(e)}catch(h){i&&i(h);return}s=JSON.parse(o[at.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Fx(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case at.KHR_MATERIALS_UNLIT:o[h]=new ox;break;case at.KHR_DRACO_MESH_COMPRESSION:o[h]=new wx(s,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:o[h]=new Mx;break;case at.KHR_MESH_QUANTIZATION:o[h]=new Ex;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function rx(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class sx{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new et(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],sn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Pf(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new z0(u),c.distance=h;break;case"spot":c=new U0(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Bi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class ox{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return ki}extendParams(e,t,n){const i=[];e.color=new et(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],sn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,zt))}return Promise.all(i)}}class ax{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class lx{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(a,a)}return Promise.all(s)}}class cx{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class ux{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new et(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],sn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,zt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class hx{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class fx{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new et().setRGB(a[0],a[1],a[2],sn),Promise.all(s)}}class dx{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class px{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new et().setRGB(a[0],a[1],a[2],sn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,zt)),Promise.all(s)}}class mx{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class _x{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class gx{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class vx{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class xx{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class yx{constructor(e){this.name=at.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class bx{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Un.TRIANGLES&&c.mode!==Un.TRIANGLE_STRIP&&c.mode!==Un.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const _ of h){const g=new Ve,m=new P,p=new di,b=new P(1,1,1),v=new v0(_.geometry,_.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&b.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,g.compose(m,p,b));for(const y in l)if(y==="_COLOR_0"){const x=l[y];v.instanceColor=new Il(x.array,x.itemSize,x.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&_.geometry.setAttribute(y,l[y]);Ot.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Df="glTF",Rs=12,ph={JSON:1313821514,BIN:5130562};class Sx{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Rs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Df)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Rs,s=new DataView(e,Rs);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===ph.JSON){const c=new Uint8Array(e,Rs+o,a);this.content=n.decode(c)}else if(l===ph.BIN){const c=Rs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class wx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Fl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Fl[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=ns[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const d in f.attributes){const _=f.attributes[d],g=l[d];g!==void 0&&(_.normalized=g)}h(f)},a,c)})})}}class Mx{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Ex{constructor(){this.name=at.KHR_MESH_QUANTIZATION}}class If extends no{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*c,g=_-c,m=-2*d+3*f,p=d-f,b=1-m,v=p-f+h;for(let y=0;y!==a;y++){const x=o[g+y+a],E=o[g+y+l]*u,T=o[_+y+a],I=o[_+y]*u;s[y]=b*x+v*E+m*T+p*I}return s}}const Tx=new di;class Ax extends If{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Tx.fromArray(s).normalize().toArray(s),s}}const Un={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ns={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mh={9728:It,9729:bn,9984:Tl,9985:qh,9986:Jo,9987:pr},_h={33071:Bn,33648:ta,10497:ss},rl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Oi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Rx={CUBICSPLINE:void 0,LINEAR:as,STEP:$s},sl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Lx(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new rc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),r.DefaultMaterial}function er(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Bi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Cx(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function Px(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Dx(r){let e;const t=r.extensions&&r.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ol(t.attributes):e=r.indices+":"+ol(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ol(r.targets[n]);return e}function ol(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ol(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ix(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Nx=new Ve;class Fx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new rx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new F0(this.options.manager):this.textureLoader=new V0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Cf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return er(s,a,i),Bi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Ws.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=rl[i.type],a=ns[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new jt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=rl[i.type],c=ns[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(d&&d!==h){const p=Math.floor(f/d),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(b);v||(g=new c(a,p*d,i.count*d/u),v=new d0(g,d/u),t.cache.add(b,v)),m=new tc(v,l,f%d/u,_)}else a===null?g=new c(i.count*l):g=new c(a,f,i.count*l),m=new jt(g,l,_);if(i.sparse!==void 0){const p=rl.SCALAR,b=ns[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,x=new b(o[1],v,i.sparse.count*p),E=new c(o[2],y,i.sparse.count*l);a!==null&&(m=new jt(m.array.slice(),m.itemSize,m.normalized));for(let T=0,I=x.length;T<I;T++){const S=x[T];if(m.setX(S,E[T*l]),l>=2&&m.setY(S,E[T*l+1]),l>=3&&m.setZ(S,E[T*l+2]),l>=4&&m.setW(S,E[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=mh[f.magFilter]||bn,u.minFilter=mh[f.minFilter]||pr,u.wrapS=_h[f.wrapS]||ss,u.wrapT=_h[f.wrapT]||ss,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){const m=new rn(g);m.needsUpdate=!0,f(m)}),t.load(Ws.resolveURL(h,s.path),_,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||Ix(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[at.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Af,hi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Tf,hi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return rc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[at.KHR_MATERIALS_UNLIT]){const h=i[at.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new et(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],sn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,zt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=$n);const u=s.alphaMode||sl.OPAQUE;if(u===sl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===sl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ki&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Oe(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==ki&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ki){const h=s.emissiveFactor;a.emissive=new et().setRGB(h[0],h[1],h[2],sn)}return s.emissiveTexture!==void 0&&o!==ki&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,zt)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),Bi(h,s),t.associations.set(h,{materials:e}),s.extensions&&er(i,h,s),h})}createUniqueName(e){const t=gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return gh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Dx(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[at.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=gh(new vn,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Lx(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],m=o[d];let p;const b=c[d];if(m.mode===Un.TRIANGLES||m.mode===Un.TRIANGLE_STRIP||m.mode===Un.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new m0(g,b):new Mn(g,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Un.TRIANGLE_STRIP?p.geometry=dh(p.geometry,ef):m.mode===Un.TRIANGLE_FAN&&(p.geometry=dh(p.geometry,Rl));else if(m.mode===Un.LINES)p=new x0(g,b);else if(m.mode===Un.LINE_STRIP)p=new ic(g,b);else if(m.mode===Un.LINE_LOOP)p=new y0(g,b);else if(m.mode===Un.POINTS)p=new b0(g,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Px(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Bi(p,s),m.extensions&&er(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&er(i,h[0],s),h[0];const f=new ur;s.extensions&&er(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new mn(sf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new to(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Bi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Ve;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new nc(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],_=i.samplers[d.sampler],g=d.target,m=g.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,b=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],_=h[2],g=h[3],m=h[4],p=[];for(let b=0,v=f.length;b<v;b++){const y=f[b],x=d[b],E=_[b],T=g[b],I=m[b];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const S=n._createAnimationTracks(y,x,E,T,I);if(S)for(let A=0;A<S.length;A++)p.push(S[A])}return new R0(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Nx)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Ef:c.length>1?u=new ur:c.length===1?u=c[0]:u=new Ot,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Bi(u,s),s.extensions&&er(n,u,s),s.matrix!==void 0){const h=new Ve;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ur;n.name&&(s.name=i.createUniqueName(n.name)),Bi(s,n),n.extensions&&er(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof hi||f instanceof rn)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Oi[s.path]===Oi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Oi[s.path]){case Oi.weights:c=us;break;case Oi.rotation:c=mr;break;case Oi.position:case Oi.scale:c=hs;break;default:switch(n.itemSize){case 1:c=us;break;case 2:case 3:default:c=hs;break}break}const u=i.interpolation!==void 0?Rx[i.interpolation]:as,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const _=new c(l[f]+"."+Oi[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ol(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof mr?Ax:If;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ox(r,e,t){const n=e.attributes,i=new kt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const u=Ol(ns[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new P,l=new P;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const g=Ol(ns[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new ei;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function gh(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Fl[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return dt.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),Bi(r,e),Ox(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Cx(r,e.targets,t):r})}var Ul=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ux(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Nf={exports:{}};(function(r,e){(function(t,n){r.exports=n()})(Ul,function(){var t=function(){function n(d){return o.appendChild(d.dom),d}function i(d){for(var _=0;_<o.children.length;_++)o.children[_].style.display=_===d?"block":"none";s=d}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(d){d.preventDefault(),i(++s%o.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,u=n(new t.Panel("FPS","#0ff","#002")),h=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:o,addPanel:n,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var d=(performance||Date).now();if(h.update(d-a,200),d>l+1e3&&(u.update(1e3*c/(d-l),100),l=d,c=0,f)){var _=performance.memory;f.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return d},update:function(){a=this.end()},domElement:o,setMode:i}};return t.Panel=function(n,i,s){var o=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,h=48*c,f=3*c,d=2*c,_=3*c,g=15*c,m=74*c,p=30*c,b=document.createElement("canvas");b.width=u,b.height=h,b.style.cssText="width:80px;height:48px";var v=b.getContext("2d");return v.font="bold "+9*c+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=s,v.fillRect(0,0,u,h),v.fillStyle=i,v.fillText(n,f,d),v.fillRect(_,g,m,p),v.fillStyle=s,v.globalAlpha=.9,v.fillRect(_,g,m,p),{dom:b,update:function(y,x){o=Math.min(o,y),a=Math.max(a,y),v.fillStyle=s,v.globalAlpha=1,v.fillRect(0,0,u,g),v.fillStyle=i,v.fillText(l(y)+" "+n+" ("+l(o)+"-"+l(a)+")",f,d),v.drawImage(b,_+c,g,m-c,p,_,g,m-c,p),v.fillRect(_+m-c,g,c,p),v.fillStyle=s,v.globalAlpha=.9,v.fillRect(_+m-c,g,c,l((1-y/x)*p))}}},t})})(Nf);var Bx=Nf.exports;const zx=Ux(Bx),Ff=0,kx=1,Of=2,vh=2,al=1.25,xh=1,dr=6*4+4+4,va=65535,Hx=Math.pow(2,-24),ll=Symbol("SKIP_GENERATION");function Uf(r){return r.index?r.index.count:r.attributes.position.count}function gs(r){return Uf(r)/3}function Bf(r,e=ArrayBuffer){return r>65535?new Uint32Array(new e(4*r)):new Uint16Array(new e(2*r))}function Vx(r,e){if(!r.index){const t=r.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Bf(t,n);r.setIndex(new jt(i,1));for(let s=0;s<t;s++)i[s]=s}}function zf(r){const e=gs(r),t=r.drawRange,n=t.start/3,i=(t.start+t.count)/3,s=Math.max(0,n),o=Math.min(e,i)-s;return[{offset:Math.floor(s),count:Math.floor(o)}]}function kf(r){if(!r.groups||!r.groups.length)return zf(r);const e=[],t=new Set,n=r.drawRange,i=n.start/3,s=(n.start+n.count)/3;for(const a of r.groups){const l=a.start/3,c=(a.start+a.count)/3;t.add(Math.max(i,l)),t.add(Math.min(s,c))}const o=Array.from(t.values()).sort((a,l)=>a-l);for(let a=0;a<o.length-1;a++){const l=o[a],c=o[a+1];e.push({offset:Math.floor(l),count:Math.floor(c-l)})}return e}function Gx(r){if(r.groups.length===0)return!1;const e=gs(r),t=kf(r).sort((s,o)=>s.offset-o.offset),n=t[t.length-1];n.count=Math.min(e-n.offset,n.count);let i=0;return t.forEach(({count:s})=>i+=s),e!==i}function Ft(r,e,t){return t.min.x=e[r],t.min.y=e[r+1],t.min.z=e[r+2],t.max.x=e[r+3],t.max.y=e[r+4],t.max.z=e[r+5],t}function Wx(r){r[0]=r[1]=r[2]=1/0,r[3]=r[4]=r[5]=-1/0}function yh(r){let e=-1,t=-1/0;for(let n=0;n<3;n++){const i=r[n+3]-r[n];i>t&&(t=i,e=n)}return e}function bh(r,e){e.set(r)}function Sh(r,e,t){let n,i;for(let s=0;s<3;s++){const o=s+3;n=r[s],i=e[s],t[s]=n<i?n:i,n=r[o],i=e[o],t[o]=n>i?n:i}}function No(r,e,t){for(let n=0;n<3;n++){const i=e[r+2*n],s=e[r+2*n+1],o=i-s,a=i+s;o<t[n]&&(t[n]=o),a>t[n+3]&&(t[n+3]=a)}}function Ls(r){const e=r[3]-r[0],t=r[4]-r[1],n=r[5]-r[2];return 2*(e*t+t*n+n*e)}function cl(r,e,t,n,i=null){let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0,h=1/0,f=1/0,d=1/0,_=-1/0,g=-1/0,m=-1/0;const p=i!==null;for(let b=e*6,v=(e+t)*6;b<v;b+=6){const y=r[b+0],x=r[b+1],E=y-x,T=y+x;E<s&&(s=E),T>l&&(l=T),p&&y<h&&(h=y),p&&y>_&&(_=y);const I=r[b+2],S=r[b+3],A=I-S,z=I+S;A<o&&(o=A),z>c&&(c=z),p&&I<f&&(f=I),p&&I>g&&(g=I);const O=r[b+4],G=r[b+5],D=O-G,H=O+G;D<a&&(a=D),H>u&&(u=H),p&&O<d&&(d=O),p&&O>m&&(m=O)}n[0]=s,n[1]=o,n[2]=a,n[3]=l,n[4]=c,n[5]=u,p&&(i[0]=h,i[1]=f,i[2]=d,i[3]=_,i[4]=g,i[5]=m)}function Xx(r,e,t,n){let i=1/0,s=1/0,o=1/0,a=-1/0,l=-1/0,c=-1/0;for(let u=e*6,h=(e+t)*6;u<h;u+=6){const f=r[u+0];f<i&&(i=f),f>a&&(a=f);const d=r[u+2];d<s&&(s=d),d>l&&(l=d);const _=r[u+4];_<o&&(o=_),_>c&&(c=_)}n[0]=i,n[1]=s,n[2]=o,n[3]=a,n[4]=l,n[5]=c}function jx(r,e){Wx(e);const t=r.attributes.position,n=r.index?r.index.array:null,i=gs(r),s=new Float32Array(i*6),o=t.normalized,a=t.array,l=t.offset||0;let c=3;t.isInterleavedBufferAttribute&&(c=t.data.stride);const u=["getX","getY","getZ"];for(let h=0;h<i;h++){const f=h*3,d=h*6;let _=f+0,g=f+1,m=f+2;n&&(_=n[_],g=n[g],m=n[m]),o||(_=_*c+l,g=g*c+l,m=m*c+l);for(let p=0;p<3;p++){let b,v,y;o?(b=t[u[p]](_),v=t[u[p]](g),y=t[u[p]](m)):(b=a[_+p],v=a[g+p],y=a[m+p]);let x=b;v<x&&(x=v),y<x&&(x=y);let E=b;v>E&&(E=v),y>E&&(E=y);const T=(E-x)/2,I=p*2;s[d+I+0]=x+T,s[d+I+1]=T+(Math.abs(x)+T)*Hx,x<e[p]&&(e[p]=x),E>e[p+3]&&(e[p+3]=E)}}return s}const Mi=32,qx=(r,e)=>r.candidate-e.candidate,Ui=new Array(Mi).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Fo=new Float32Array(6);function Yx(r,e,t,n,i,s){let o=-1,a=0;if(s===Ff)o=yh(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(s===kx)o=yh(r),o!==-1&&(a=$x(t,n,i,o));else if(s===Of){const l=Ls(r);let c=al*i;const u=n*6,h=(n+i)*6;for(let f=0;f<3;f++){const d=e[f],m=(e[f+3]-d)/Mi;if(i<Mi/4){const p=[...Ui];p.length=i;let b=0;for(let y=u;y<h;y+=6,b++){const x=p[b];x.candidate=t[y+2*f],x.count=0;const{bounds:E,leftCacheBounds:T,rightCacheBounds:I}=x;for(let S=0;S<3;S++)I[S]=1/0,I[S+3]=-1/0,T[S]=1/0,T[S+3]=-1/0,E[S]=1/0,E[S+3]=-1/0;No(y,t,E)}p.sort(qx);let v=i;for(let y=0;y<v;y++){const x=p[y];for(;y+1<v&&p[y+1].candidate===x.candidate;)p.splice(y+1,1),v--}for(let y=u;y<h;y+=6){const x=t[y+2*f];for(let E=0;E<v;E++){const T=p[E];x>=T.candidate?No(y,t,T.rightCacheBounds):(No(y,t,T.leftCacheBounds),T.count++)}}for(let y=0;y<v;y++){const x=p[y],E=x.count,T=i-x.count,I=x.leftCacheBounds,S=x.rightCacheBounds;let A=0;E!==0&&(A=Ls(I)/l);let z=0;T!==0&&(z=Ls(S)/l);const O=xh+al*(A*E+z*T);O<c&&(o=f,c=O,a=x.candidate)}}else{for(let v=0;v<Mi;v++){const y=Ui[v];y.count=0,y.candidate=d+m+v*m;const x=y.bounds;for(let E=0;E<3;E++)x[E]=1/0,x[E+3]=-1/0}for(let v=u;v<h;v+=6){let E=~~((t[v+2*f]-d)/m);E>=Mi&&(E=Mi-1);const T=Ui[E];T.count++,No(v,t,T.bounds)}const p=Ui[Mi-1];bh(p.bounds,p.rightCacheBounds);for(let v=Mi-2;v>=0;v--){const y=Ui[v],x=Ui[v+1];Sh(y.bounds,x.rightCacheBounds,y.rightCacheBounds)}let b=0;for(let v=0;v<Mi-1;v++){const y=Ui[v],x=y.count,E=y.bounds,I=Ui[v+1].rightCacheBounds;x!==0&&(b===0?bh(E,Fo):Sh(E,Fo,Fo)),b+=x;let S=0,A=0;b!==0&&(S=Ls(Fo)/l);const z=i-b;z!==0&&(A=Ls(I)/l);const O=xh+al*(S*b+A*z);O<c&&(o=f,c=O,a=y.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function $x(r,e,t,n){let i=0;for(let s=e,o=e+t;s<o;s++)i+=r[s*6+n*2];return i/t}class Oo{constructor(){}}function Kx(r,e,t,n,i,s){let o=n,a=n+i-1;const l=s.pos,c=s.axis*2;for(;;){for(;o<=a&&t[o*6+c]<l;)o++;for(;o<=a&&t[a*6+c]>=l;)a--;if(o<a){for(let u=0;u<3;u++){let h=e[o*3+u];e[o*3+u]=e[a*3+u],e[a*3+u]=h}for(let u=0;u<6;u++){let h=t[o*6+u];t[o*6+u]=t[a*6+u],t[a*6+u]=h}o++,a--}else return o}}function Zx(r,e,t,n,i,s){let o=n,a=n+i-1;const l=s.pos,c=s.axis*2;for(;;){for(;o<=a&&t[o*6+c]<l;)o++;for(;o<=a&&t[a*6+c]>=l;)a--;if(o<a){let u=r[o];r[o]=r[a],r[a]=u;for(let h=0;h<6;h++){let f=t[o*6+h];t[o*6+h]=t[a*6+h],t[a*6+h]=f}o++,a--}else return o}}function Jx(r,e){const t=(r.index?r.index.count:r.attributes.position.count)/3,n=t>2**16,i=n?4:2,s=e?new SharedArrayBuffer(t*i):new ArrayBuffer(t*i),o=n?new Uint32Array(s):new Uint16Array(s);for(let a=0,l=o.length;a<l;a++)o[a]=a;return o}function Qx(r,e){const t=r.geometry,n=t.index?t.index.array:null,i=e.maxDepth,s=e.verbose,o=e.maxLeafTris,a=e.strategy,l=e.onProgress,c=gs(t),u=r._indirectBuffer;let h=!1;const f=new Float32Array(6),d=new Float32Array(6),_=jx(t,f),g=e.indirect?Zx:Kx,m=[],p=e.indirect?zf(t):kf(t);if(p.length===1){const y=p[0],x=new Oo;x.boundingData=f,Xx(_,y.offset,y.count,d),v(x,y.offset,y.count,d),m.push(x)}else for(let y of p){const x=new Oo;x.boundingData=new Float32Array(6),cl(_,y.offset,y.count,x.boundingData,d),v(x,y.offset,y.count,d),m.push(x)}return m;function b(y){l&&l(y/c)}function v(y,x,E,T=null,I=0){if(!h&&I>=i&&(h=!0,s&&(console.warn(`MeshBVH: Max depth of ${i} reached when generating BVH. Consider increasing maxDepth.`),console.warn(t))),E<=o||I>=i)return b(x+E),y.offset=x,y.count=E,y;const S=Yx(y.boundingData,T,_,x,E,a);if(S.axis===-1)return b(x+E),y.offset=x,y.count=E,y;const A=g(u,n,_,x,E,S);if(A===x||A===x+E)b(x+E),y.offset=x,y.count=E;else{y.splitAxis=S.axis;const z=new Oo,O=x,G=A-x;y.left=z,z.boundingData=new Float32Array(6),cl(_,O,G,z.boundingData,d),v(z,O,G,d,I+1);const D=new Oo,H=A,K=E-G;y.right=D,D.boundingData=new Float32Array(6),cl(_,H,K,D.boundingData,d),v(D,H,K,d,I+1)}return y}}function ey(r,e){const t=r.geometry;e.indirect&&(r._indirectBuffer=Jx(t,e.useSharedArrayBuffer),Gx(t)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),r._indirectBuffer||Vx(t,e);const n=Qx(r,e);let i,s,o;const a=[],l=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;for(let h=0;h<n.length;h++){const f=n[h];let d=c(f);const _=new l(dr*d);i=new Float32Array(_),s=new Uint32Array(_),o=new Uint16Array(_),u(0,f),a.push(_)}r._roots=a;return;function c(h){return h.count?1:1+c(h.left)+c(h.right)}function u(h,f){const d=h/4,_=h/2,g=!!f.count,m=f.boundingData;for(let p=0;p<6;p++)i[d+p]=m[p];if(g){const p=f.offset,b=f.count;return s[d+6]=p,o[_+14]=b,o[_+15]=va,h+dr}else{const p=f.left,b=f.right,v=f.splitAxis;let y;if(y=u(h+dr,p),y/4>Math.pow(2,32))throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return s[d+6]=y/4,y=u(y,b),s[d+7]=v,y}}}class Ai{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let s=0,o=e.length;s<o;s++){const l=e[s][t];n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let s=0,o=t.length;s<o;s++){const a=t[s],l=e.dot(a);n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}Ai.prototype.setFromBox=function(){const r=new P;return function(t,n){const i=n.min,s=n.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let u=0;u<=1;u++){r.x=i.x*l+s.x*(1-l),r.y=i.y*c+s.y*(1-c),r.z=i.z*u+s.z*(1-u);const h=t.dot(r);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}}();const ty=function(){const r=new P,e=new P,t=new P;return function(i,s,o){const a=i.start,l=r,c=s.start,u=e;t.subVectors(a,c),r.subVectors(i.end,i.start),e.subVectors(s.end,s.start);const h=t.dot(u),f=u.dot(l),d=u.dot(u),_=t.dot(l),m=l.dot(l)*d-f*f;let p,b;m!==0?p=(h*f-_*d)/m:p=0,b=(h+p*f)/d,o.x=p,o.y=b}}(),lc=function(){const r=new Oe,e=new P,t=new P;return function(i,s,o,a){ty(i,s,r);let l=r.x,c=r.y;if(l>=0&&l<=1&&c>=0&&c<=1){i.at(l,o),s.at(c,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),i.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?i.at(0,o):i.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let u;l<0?u=i.start:u=i.end;let h;c<0?h=s.start:h=s.end;const f=e,d=t;if(i.closestPointToPoint(h,!0,e),s.closestPointToPoint(u,!0,t),f.distanceToSquared(h)<=d.distanceToSquared(u)){o.copy(f),a.copy(h);return}else{o.copy(u),a.copy(d);return}}}}(),ny=function(){const r=new P,e=new P,t=new ai,n=new Ti;return function(s,o){const{radius:a,center:l}=s,{a:c,b:u,c:h}=o;if(n.start=c,n.end=u,n.closestPointToPoint(l,!0,r).distanceTo(l)<=a||(n.start=c,n.end=h,n.closestPointToPoint(l,!0,r).distanceTo(l)<=a)||(n.start=u,n.end=h,n.closestPointToPoint(l,!0,r).distanceTo(l)<=a))return!0;const g=o.getPlane(t);if(Math.abs(g.distanceToPoint(l))<=a){const p=g.projectPoint(l,e);if(o.containsPoint(p))return!0}return!1}}(),iy=1e-15;function ul(r){return Math.abs(r)<iy}class Qn extends un{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new P),this.satBounds=new Array(4).fill().map(()=>new Ai),this.points=[this.a,this.b,this.c],this.sphere=new ei,this.plane=new ai,this.needsUpdate=!0}intersectsSphere(e){return ny(e,this)}update(){const e=this.a,t=this.b,n=this.c,i=this.points,s=this.satAxes,o=this.satBounds,a=s[0],l=o[0];this.getNormal(a),l.setFromPoints(a,i);const c=s[1],u=o[1];c.subVectors(e,t),u.setFromPoints(c,i);const h=s[2],f=o[2];h.subVectors(t,n),f.setFromPoints(h,i);const d=s[3],_=o[3];d.subVectors(n,e),_.setFromPoints(d,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}}Qn.prototype.closestPointToSegment=function(){const r=new P,e=new P,t=new Ti;return function(i,s=null,o=null){const{start:a,end:l}=i,c=this.points;let u,h=1/0;for(let f=0;f<3;f++){const d=(f+1)%3;t.start.copy(c[f]),t.end.copy(c[d]),lc(t,i,r,e),u=r.distanceToSquared(e),u<h&&(h=u,s&&s.copy(r),o&&o.copy(e))}return this.closestPointToPoint(a,r),u=a.distanceToSquared(r),u<h&&(h=u,s&&s.copy(r),o&&o.copy(a)),this.closestPointToPoint(l,r),u=l.distanceToSquared(r),u<h&&(h=u,s&&s.copy(r),o&&o.copy(l)),Math.sqrt(h)}}();Qn.prototype.intersectsTriangle=function(){const r=new Qn,e=new Array(3),t=new Array(3),n=new Ai,i=new Ai,s=new P,o=new P,a=new P,l=new P,c=new P,u=new Ti,h=new Ti,f=new Ti,d=new P;function _(g,m,p){const b=g.points;let v=0,y=-1;for(let x=0;x<3;x++){const{start:E,end:T}=u;E.copy(b[x]),T.copy(b[(x+1)%3]),u.delta(o);const I=ul(m.distanceToPoint(E));if(ul(m.normal.dot(o))&&I){p.copy(u),v=2;break}const S=m.intersectLine(u,d);if(!S&&I&&d.copy(E),(S||I)&&!ul(d.distanceTo(T))){if(v<=1)(v===1?p.start:p.end).copy(d),I&&(y=v);else if(v>=2){(y===1?p.start:p.end).copy(d),v=2;break}if(v++,v===2&&y===-1)break}}return v}return function(m,p=null,b=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(r.copy(m),r.update(),m=r);const v=this.plane,y=m.plane;if(Math.abs(v.normal.dot(y.normal))>1-1e-10){const x=this.satBounds,E=this.satAxes;t[0]=m.a,t[1]=m.b,t[2]=m.c;for(let S=0;S<4;S++){const A=x[S],z=E[S];if(n.setFromPoints(z,t),A.isSeparated(n))return!1}const T=m.satBounds,I=m.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let S=0;S<4;S++){const A=T[S],z=I[S];if(n.setFromPoints(z,e),A.isSeparated(n))return!1}for(let S=0;S<4;S++){const A=E[S];for(let z=0;z<4;z++){const O=I[z];if(s.crossVectors(A,O),n.setFromPoints(s,e),i.setFromPoints(s,t),n.isSeparated(i))return!1}}return p&&(b||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{const x=_(this,y,h);if(x===1&&m.containsPoint(h.end))return p&&(p.start.copy(h.end),p.end.copy(h.end)),!0;if(x!==2)return!1;const E=_(m,v,f);if(E===1&&this.containsPoint(f.end))return p&&(p.start.copy(f.end),p.end.copy(f.end)),!0;if(E!==2)return!1;if(h.delta(a),f.delta(l),a.dot(l)<0){let G=f.start;f.start=f.end,f.end=G}const T=h.start.dot(a),I=h.end.dot(a),S=f.start.dot(a),A=f.end.dot(a),z=I<S,O=T<A;return T!==A&&S!==I&&z===O?!1:(p&&(c.subVectors(h.start,f.start),c.dot(a)>0?p.start.copy(h.start):p.start.copy(f.start),c.subVectors(h.end,f.end),c.dot(a)<0?p.end.copy(h.end):p.end.copy(f.end)),!0)}}}();Qn.prototype.distanceToPoint=function(){const r=new P;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}}();Qn.prototype.distanceToTriangle=function(){const r=new P,e=new P,t=["a","b","c"],n=new Ti,i=new Ti;return function(o,a=null,l=null){const c=a||l?n:null;if(this.intersectsTriangle(o,c))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let u=1/0;for(let h=0;h<3;h++){let f;const d=t[h],_=o[d];this.closestPointToPoint(_,r),f=_.distanceToSquared(r),f<u&&(u=f,a&&a.copy(r),l&&l.copy(_));const g=this[d];o.closestPointToPoint(g,r),f=g.distanceToSquared(r),f<u&&(u=f,a&&a.copy(g),l&&l.copy(r))}for(let h=0;h<3;h++){const f=t[h],d=t[(h+1)%3];n.set(this[f],this[d]);for(let _=0;_<3;_++){const g=t[_],m=t[(_+1)%3];i.set(o[g],o[m]),lc(n,i,r,e);const p=r.distanceToSquared(e);p<u&&(u=p,a&&a.copy(r),l&&l.copy(e))}}return Math.sqrt(u)}}();class xn{constructor(e,t,n){this.isOrientedBox=!0,this.min=new P,this.max=new P,this.matrix=new Ve,this.invMatrix=new Ve,this.points=new Array(8).fill().map(()=>new P),this.satAxes=new Array(3).fill().map(()=>new P),this.satBounds=new Array(3).fill().map(()=>new Ai),this.alignedSatBounds=new Array(3).fill().map(()=>new Ai),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}xn.prototype.update=function(){return function(){const e=this.matrix,t=this.min,n=this.max,i=this.points;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const f=1*c|2*u|4*h,d=i[f];d.x=c?n.x:t.x,d.y=u?n.y:t.y,d.z=h?n.z:t.z,d.applyMatrix4(e)}const s=this.satBounds,o=this.satAxes,a=i[0];for(let c=0;c<3;c++){const u=o[c],h=s[c],f=1<<c,d=i[f];u.subVectors(a,d),h.setFromPoints(u,i)}const l=this.alignedSatBounds;l[0].setFromPointsField(i,"x"),l[1].setFromPointsField(i,"y"),l[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();xn.prototype.intersectsBox=function(){const r=new Ai;return function(t){this.needsUpdate&&this.update();const n=t.min,i=t.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(r.min=n.x,r.max=i.x,a[0].isSeparated(r)||(r.min=n.y,r.max=i.y,a[1].isSeparated(r))||(r.min=n.z,r.max=i.z,a[2].isSeparated(r)))return!1;for(let l=0;l<3;l++){const c=o[l],u=s[l];if(r.setFromBox(c,t),u.isSeparated(r))return!1}return!0}}();xn.prototype.intersectsTriangle=function(){const r=new Qn,e=new Array(3),t=new Ai,n=new Ai,i=new P;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(r.copy(o),r.update(),o=r);const a=this.satBounds,l=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let f=0;f<3;f++){const d=a[f],_=l[f];if(t.setFromPoints(_,e),d.isSeparated(t))return!1}const c=o.satBounds,u=o.satAxes,h=this.points;for(let f=0;f<3;f++){const d=c[f],_=u[f];if(t.setFromPoints(_,h),d.isSeparated(t))return!1}for(let f=0;f<3;f++){const d=l[f];for(let _=0;_<4;_++){const g=u[_];if(i.crossVectors(d,g),t.setFromPoints(i,e),n.setFromPoints(i,h),t.isSeparated(n))return!1}}return!0}}();xn.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();xn.prototype.distanceToPoint=function(){const r=new P;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}}();xn.prototype.distanceToBox=function(){const r=["x","y","z"],e=new Array(12).fill().map(()=>new Ti),t=new Array(12).fill().map(()=>new Ti),n=new P,i=new P;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(i),this.closestPointToPoint(i,n),o.closestPointToPoint(n,i),l&&l.copy(n),c&&c.copy(i)),0;const u=a*a,h=o.min,f=o.max,d=this.points;let _=1/0;for(let m=0;m<8;m++){const p=d[m];i.copy(p).clamp(h,f);const b=p.distanceToSquared(i);if(b<_&&(_=b,l&&l.copy(p),c&&c.copy(i),b<u))return Math.sqrt(b)}let g=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let b=0;b<=1;b++){const v=(m+1)%3,y=(m+2)%3,x=p<<v|b<<y,E=1<<m|p<<v|b<<y,T=d[x],I=d[E];e[g].set(T,I);const A=r[m],z=r[v],O=r[y],G=t[g],D=G.start,H=G.end;D[A]=h[A],D[z]=p?h[z]:f[z],D[O]=b?h[O]:f[z],H[A]=f[A],H[z]=p?h[z]:f[z],H[O]=b?h[O]:f[z],g++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let b=0;b<=1;b++){i.x=m?f.x:h.x,i.y=p?f.y:h.y,i.z=b?f.z:h.z,this.closestPointToPoint(i,n);const v=i.distanceToSquared(n);if(v<_&&(_=v,l&&l.copy(n),c&&c.copy(i),v<u))return Math.sqrt(v)}for(let m=0;m<12;m++){const p=e[m];for(let b=0;b<12;b++){const v=t[b];lc(p,v,n,i);const y=n.distanceToSquared(i);if(y<_&&(_=y,l&&l.copy(n),c&&c.copy(i),y<u))return Math.sqrt(y)}}return Math.sqrt(_)}}();class cc{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class ry extends cc{constructor(){super(()=>new Qn)}}const kn=new ry;function wn(r,e){return e[r+15]===65535}function En(r,e){return e[r+6]}function Pn(r,e){return e[r+14]}function Hn(r){return r+8}function Dn(r,e){return e[r+6]}function uc(r,e){return e[r+7]}class sy{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const At=new sy;let Hi,Qr;const Hr=[],Uo=new cc(()=>new kt);function oy(r,e,t,n,i,s){Hi=Uo.getPrimitive(),Qr=Uo.getPrimitive(),Hr.push(Hi,Qr),At.setBuffer(r._roots[e]);const o=Bl(0,r.geometry,t,n,i,s);At.clearBuffer(),Uo.releasePrimitive(Hi),Uo.releasePrimitive(Qr),Hr.pop(),Hr.pop();const a=Hr.length;return a>0&&(Qr=Hr[a-1],Hi=Hr[a-2]),o}function Bl(r,e,t,n,i=null,s=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:c}=At;let u=r*2;if(wn(u,l)){const _=En(r,c),g=Pn(u,l);return Ft(r,a,Hi),n(_,g,!1,o,s+r,Hi)}else{let O=function(D){const{uint16Array:H,uint32Array:K}=At;let Z=D*2;for(;!wn(Z,H);)D=Hn(D),Z=D*2;return En(D,K)},G=function(D){const{uint16Array:H,uint32Array:K}=At;let Z=D*2;for(;!wn(Z,H);)D=Dn(D,K),Z=D*2;return En(D,K)+Pn(Z,H)};var f=O,d=G;const _=Hn(r),g=Dn(r,c);let m=_,p=g,b,v,y,x;if(i&&(y=Hi,x=Qr,Ft(m,a,y),Ft(p,a,x),b=i(y),v=i(x),v<b)){m=g,p=_;const D=b;b=v,v=D,y=x}y||(y=Hi,Ft(m,a,y));const E=wn(m*2,l),T=t(y,E,b,o+1,s+m);let I;if(T===vh){const D=O(m),K=G(m)-D;I=n(D,K,!0,o+1,s+m,y)}else I=T&&Bl(m,e,t,n,i,s,o+1);if(I)return!0;x=Qr,Ft(p,a,x);const S=wn(p*2,l),A=t(x,S,v,o+1,s+p);let z;if(A===vh){const D=O(p),K=G(p)-D;z=n(D,K,!0,o+1,s+p,x)}else z=A&&Bl(p,e,t,n,i,s,o+1);return!!z}}const Cs=new P,hl=new P;function ay(r,e,t={},n=0,i=1/0){const s=n*n,o=i*i;let a=1/0,l=null;if(r.shapecast({boundsTraverseOrder:u=>(Cs.copy(e).clamp(u.min,u.max),Cs.distanceToSquared(e)),intersectsBounds:(u,h,f)=>f<a&&f<o,intersectsTriangle:(u,h)=>{u.closestPointToPoint(e,Cs);const f=e.distanceToSquared(Cs);return f<a&&(hl.copy(Cs),a=f,l=h),f<s}}),a===1/0)return null;const c=Math.sqrt(a);return t.point?t.point.copy(hl):t.point=hl.clone(),t.distance=c,t.faceIndex=l,t}const Vr=new P,Gr=new P,Wr=new P,Bo=new Oe,zo=new Oe,ko=new Oe,wh=new P,Mh=new P,Eh=new P,Ho=new P;function ly(r,e,t,n,i,s){let o;return s===gn?o=r.intersectTriangle(n,t,e,!0,i):o=r.intersectTriangle(e,t,n,s!==$n,i),o===null?null:{distance:r.origin.distanceTo(i),point:i.clone()}}function cy(r,e,t,n,i,s,o,a,l){Vr.fromBufferAttribute(e,s),Gr.fromBufferAttribute(e,o),Wr.fromBufferAttribute(e,a);const c=ly(r,Vr,Gr,Wr,Ho,l);if(c){n&&(Bo.fromBufferAttribute(n,s),zo.fromBufferAttribute(n,o),ko.fromBufferAttribute(n,a),c.uv=un.getInterpolation(Ho,Vr,Gr,Wr,Bo,zo,ko,new Oe)),i&&(Bo.fromBufferAttribute(i,s),zo.fromBufferAttribute(i,o),ko.fromBufferAttribute(i,a),c.uv1=un.getInterpolation(Ho,Vr,Gr,Wr,Bo,zo,ko,new Oe)),t&&(wh.fromBufferAttribute(t,s),Mh.fromBufferAttribute(t,o),Eh.fromBufferAttribute(t,a),c.normal=un.getInterpolation(Ho,Vr,Gr,Wr,wh,Mh,Eh,new P),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));const u={a:s,b:o,c:a,normal:new P,materialIndex:0};un.getNormal(Vr,Gr,Wr,u.normal),c.face=u,c.faceIndex=s}return c}function xa(r,e,t,n,i){const s=n*3;let o=s+0,a=s+1,l=s+2;const c=r.index;r.index&&(o=c.getX(o),a=c.getX(a),l=c.getX(l));const{position:u,normal:h,uv:f,uv1:d}=r.attributes,_=cy(t,u,h,f,d,o,a,l,e);return _?(_.faceIndex=n,i&&i.push(_),_):null}function Xt(r,e,t,n){const i=r.a,s=r.b,o=r.c;let a=e,l=e+1,c=e+2;t&&(a=t.getX(a),l=t.getX(l),c=t.getX(c)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),s.x=n.getX(l),s.y=n.getY(l),s.z=n.getZ(l),o.x=n.getX(c),o.y=n.getY(c),o.z=n.getZ(c)}function uy(r,e,t,n,i,s){const{geometry:o,_indirectBuffer:a}=r;for(let l=n,c=n+i;l<c;l++)xa(o,e,t,l,s)}function hy(r,e,t,n,i){const{geometry:s,_indirectBuffer:o}=r;let a=1/0,l=null;for(let c=n,u=n+i;c<u;c++){let h;h=xa(s,e,t,c),h&&h.distance<a&&(l=h,a=h.distance)}return l}function fy(r,e,t,n,i,s,o){const{geometry:a}=t,{index:l}=a,c=a.attributes.position;for(let u=r,h=e+r;u<h;u++){let f;if(f=u,Xt(o,f*3,l,c),o.needsUpdate=!0,n(o,f,i,s))return!0}return!1}function dy(r,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=r.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let s,o,a,l,c=0;const u=r._roots;for(let f=0,d=u.length;f<d;f++)s=u[f],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),h(0,c),c+=s.byteLength;function h(f,d,_=!1){const g=f*2;if(a[g+15]===va){const p=o[f+6],b=a[g+14];let v=1/0,y=1/0,x=1/0,E=-1/0,T=-1/0,I=-1/0;for(let S=3*p,A=3*(p+b);S<A;S++){let z=n[S];const O=i.getX(z),G=i.getY(z),D=i.getZ(z);O<v&&(v=O),O>E&&(E=O),G<y&&(y=G),G>T&&(T=G),D<x&&(x=D),D>I&&(I=D)}return l[f+0]!==v||l[f+1]!==y||l[f+2]!==x||l[f+3]!==E||l[f+4]!==T||l[f+5]!==I?(l[f+0]=v,l[f+1]=y,l[f+2]=x,l[f+3]=E,l[f+4]=T,l[f+5]=I,!0):!1}else{const p=f+8,b=o[f+6],v=p+d,y=b+d;let x=_,E=!1,T=!1;e?x||(E=e.has(v),T=e.has(y),x=!E&&!T):(E=!0,T=!0);const I=x||E,S=x||T;let A=!1;I&&(A=h(p,d,x));let z=!1;S&&(z=h(b,d,x));const O=A||z;if(O)for(let G=0;G<3;G++){const D=p+G,H=b+G,K=l[D],Z=l[D+3],ce=l[H],ie=l[H+3];l[f+G]=K<ce?K:ce,l[f+G+3]=Z>ie?Z:ie}return O}}}const Th=new kt;function qi(r,e,t,n){return Ft(r,e,Th),t.intersectBox(Th,n)}function py(r,e,t,n,i,s){const{geometry:o,_indirectBuffer:a}=r;for(let l=n,c=n+i;l<c;l++){let u=a?a[l]:l;xa(o,e,t,u,s)}}function my(r,e,t,n,i){const{geometry:s,_indirectBuffer:o}=r;let a=1/0,l=null;for(let c=n,u=n+i;c<u;c++){let h;h=xa(s,e,t,o?o[c]:c),h&&h.distance<a&&(l=h,a=h.distance)}return l}function _y(r,e,t,n,i,s,o){const{geometry:a}=t,{index:l}=a,c=a.attributes.position;for(let u=r,h=e+r;u<h;u++){let f;if(f=t.resolveTriangleIndex(u),Xt(o,f*3,l,c),o.needsUpdate=!0,n(o,f,i,s))return!0}return!1}const Ah=new P;function gy(r,e,t,n,i){At.setBuffer(r._roots[e]),zl(0,r,t,n,i),At.clearBuffer()}function zl(r,e,t,n,i){const{float32Array:s,uint16Array:o,uint32Array:a}=At,l=r*2;if(wn(l,o)){const u=En(r,a),h=Pn(l,o);uy(e,t,n,u,h,i)}else{const u=Hn(r);qi(u,s,n,Ah)&&zl(u,e,t,n,i);const h=Dn(r,a);qi(h,s,n,Ah)&&zl(h,e,t,n,i)}}const Rh=new P,vy=["x","y","z"];function xy(r,e,t,n){At.setBuffer(r._roots[e]);const i=kl(0,r,t,n);return At.clearBuffer(),i}function kl(r,e,t,n){const{float32Array:i,uint16Array:s,uint32Array:o}=At;let a=r*2;if(wn(a,s)){const c=En(r,o),u=Pn(a,s);return hy(e,t,n,c,u)}else{const c=uc(r,o),u=vy[c],f=n.direction[u]>=0;let d,_;f?(d=Hn(r),_=Dn(r,o)):(d=Dn(r,o),_=Hn(r));const m=qi(d,i,n,Rh)?kl(d,e,t,n):null;if(m){const v=m.point[u];if(f?v<=i[_+c]:v>=i[_+c+3])return m}const b=qi(_,i,n,Rh)?kl(_,e,t,n):null;return m&&b?m.distance<=b.distance?m:b:m||b||null}}const Vo=new kt,Xr=new Qn,jr=new Qn,Ps=new Ve,Lh=new xn,Go=new xn;function yy(r,e,t,n){At.setBuffer(r._roots[e]);const i=Hl(0,r,t,n);return At.clearBuffer(),i}function Hl(r,e,t,n,i=null){const{float32Array:s,uint16Array:o,uint32Array:a}=At;let l=r*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),Lh.set(t.boundingBox.min,t.boundingBox.max,n),i=Lh),wn(l,o)){const u=e.geometry,h=u.index,f=u.attributes.position,d=t.index,_=t.attributes.position,g=En(r,a),m=Pn(l,o);if(Ps.copy(n).invert(),t.boundsTree)return Ft(r,s,Go),Go.matrix.copy(Ps),Go.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:b=>Go.intersectsBox(b),intersectsTriangle:b=>{b.a.applyMatrix4(n),b.b.applyMatrix4(n),b.c.applyMatrix4(n),b.needsUpdate=!0;for(let v=g*3,y=(m+g)*3;v<y;v+=3)if(Xt(jr,v,h,f),jr.needsUpdate=!0,b.intersectsTriangle(jr))return!0;return!1}});for(let p=g*3,b=(m+g)*3;p<b;p+=3){Xt(Xr,p,h,f),Xr.a.applyMatrix4(Ps),Xr.b.applyMatrix4(Ps),Xr.c.applyMatrix4(Ps),Xr.needsUpdate=!0;for(let v=0,y=d.count;v<y;v+=3)if(Xt(jr,v,d,_),jr.needsUpdate=!0,Xr.intersectsTriangle(jr))return!0}}else{const u=r+8,h=a[r+6];return Ft(u,s,Vo),!!(i.intersectsBox(Vo)&&Hl(u,e,t,n,i)||(Ft(h,s,Vo),i.intersectsBox(Vo)&&Hl(h,e,t,n,i)))}}const Wo=new Ve,fl=new xn,Ds=new xn,by=new P,Sy=new P,wy=new P,My=new P;function Ey(r,e,t,n={},i={},s=0,o=1/0){e.boundingBox||e.computeBoundingBox(),fl.set(e.boundingBox.min,e.boundingBox.max,t),fl.needsUpdate=!0;const a=r.geometry,l=a.attributes.position,c=a.index,u=e.attributes.position,h=e.index,f=kn.getPrimitive(),d=kn.getPrimitive();let _=by,g=Sy,m=null,p=null;i&&(m=wy,p=My);let b=1/0,v=null,y=null;return Wo.copy(t).invert(),Ds.matrix.copy(Wo),r.shapecast({boundsTraverseOrder:x=>fl.distanceToBox(x),intersectsBounds:(x,E,T)=>T<b&&T<o?(E&&(Ds.min.copy(x.min),Ds.max.copy(x.max),Ds.needsUpdate=!0),!0):!1,intersectsRange:(x,E)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:I=>Ds.distanceToBox(I),intersectsBounds:(I,S,A)=>A<b&&A<o,intersectsRange:(I,S)=>{for(let A=I,z=I+S;A<z;A++){Xt(d,3*A,h,u),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let O=x,G=x+E;O<G;O++){Xt(f,3*O,c,l),f.needsUpdate=!0;const D=f.distanceToTriangle(d,_,m);if(D<b&&(g.copy(_),p&&p.copy(m),b=D,v=O,y=A),D<s)return!0}}}});{const T=gs(e);for(let I=0,S=T;I<S;I++){Xt(d,3*I,h,u),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let A=x,z=x+E;A<z;A++){Xt(f,3*A,c,l),f.needsUpdate=!0;const O=f.distanceToTriangle(d,_,m);if(O<b&&(g.copy(_),p&&p.copy(m),b=O,v=A,y=I),O<s)return!0}}}}}),kn.releasePrimitive(f),kn.releasePrimitive(d),b===1/0?null:(n.point?n.point.copy(g):n.point=g.clone(),n.distance=b,n.faceIndex=v,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(Wo),g.applyMatrix4(Wo),i.distance=g.sub(i.point).length(),i.faceIndex=y),n)}function Ty(r,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=r.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let s,o,a,l,c=0;const u=r._roots;for(let f=0,d=u.length;f<d;f++)s=u[f],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),h(0,c),c+=s.byteLength;function h(f,d,_=!1){const g=f*2;if(a[g+15]===va){const p=o[f+6],b=a[g+14];let v=1/0,y=1/0,x=1/0,E=-1/0,T=-1/0,I=-1/0;for(let S=p,A=p+b;S<A;S++){const z=3*r.resolveTriangleIndex(S);for(let O=0;O<3;O++){let G=z+O;G=n?n[G]:G;const D=i.getX(G),H=i.getY(G),K=i.getZ(G);D<v&&(v=D),D>E&&(E=D),H<y&&(y=H),H>T&&(T=H),K<x&&(x=K),K>I&&(I=K)}}return l[f+0]!==v||l[f+1]!==y||l[f+2]!==x||l[f+3]!==E||l[f+4]!==T||l[f+5]!==I?(l[f+0]=v,l[f+1]=y,l[f+2]=x,l[f+3]=E,l[f+4]=T,l[f+5]=I,!0):!1}else{const p=f+8,b=o[f+6],v=p+d,y=b+d;let x=_,E=!1,T=!1;e?x||(E=e.has(v),T=e.has(y),x=!E&&!T):(E=!0,T=!0);const I=x||E,S=x||T;let A=!1;I&&(A=h(p,d,x));let z=!1;S&&(z=h(b,d,x));const O=A||z;if(O)for(let G=0;G<3;G++){const D=p+G,H=b+G,K=l[D],Z=l[D+3],ce=l[H],ie=l[H+3];l[f+G]=K<ce?K:ce,l[f+G+3]=Z>ie?Z:ie}return O}}}const Ch=new P;function Ay(r,e,t,n,i){At.setBuffer(r._roots[e]),Vl(0,r,t,n,i),At.clearBuffer()}function Vl(r,e,t,n,i){const{float32Array:s,uint16Array:o,uint32Array:a}=At,l=r*2;if(wn(l,o)){const u=En(r,a),h=Pn(l,o);py(e,t,n,u,h,i)}else{const u=Hn(r);qi(u,s,n,Ch)&&Vl(u,e,t,n,i);const h=Dn(r,a);qi(h,s,n,Ch)&&Vl(h,e,t,n,i)}}const Ph=new P,Ry=["x","y","z"];function Ly(r,e,t,n){At.setBuffer(r._roots[e]);const i=Gl(0,r,t,n);return At.clearBuffer(),i}function Gl(r,e,t,n){const{float32Array:i,uint16Array:s,uint32Array:o}=At;let a=r*2;if(wn(a,s)){const c=En(r,o),u=Pn(a,s);return my(e,t,n,c,u)}else{const c=uc(r,o),u=Ry[c],f=n.direction[u]>=0;let d,_;f?(d=Hn(r),_=Dn(r,o)):(d=Dn(r,o),_=Hn(r));const m=qi(d,i,n,Ph)?Gl(d,e,t,n):null;if(m){const v=m.point[u];if(f?v<=i[_+c]:v>=i[_+c+3])return m}const b=qi(_,i,n,Ph)?Gl(_,e,t,n):null;return m&&b?m.distance<=b.distance?m:b:m||b||null}}const Xo=new kt,qr=new Qn,Yr=new Qn,Is=new Ve,Dh=new xn,jo=new xn;function Cy(r,e,t,n){At.setBuffer(r._roots[e]);const i=Wl(0,r,t,n);return At.clearBuffer(),i}function Wl(r,e,t,n,i=null){const{float32Array:s,uint16Array:o,uint32Array:a}=At;let l=r*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),Dh.set(t.boundingBox.min,t.boundingBox.max,n),i=Dh),wn(l,o)){const u=e.geometry,h=u.index,f=u.attributes.position,d=t.index,_=t.attributes.position,g=En(r,a),m=Pn(l,o);if(Is.copy(n).invert(),t.boundsTree)return Ft(r,s,jo),jo.matrix.copy(Is),jo.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:b=>jo.intersectsBox(b),intersectsTriangle:b=>{b.a.applyMatrix4(n),b.b.applyMatrix4(n),b.c.applyMatrix4(n),b.needsUpdate=!0;for(let v=g,y=m+g;v<y;v++)if(Xt(Yr,3*e.resolveTriangleIndex(v),h,f),Yr.needsUpdate=!0,b.intersectsTriangle(Yr))return!0;return!1}});for(let p=g,b=m+g;p<b;p++){const v=e.resolveTriangleIndex(p);Xt(qr,3*v,h,f),qr.a.applyMatrix4(Is),qr.b.applyMatrix4(Is),qr.c.applyMatrix4(Is),qr.needsUpdate=!0;for(let y=0,x=d.count;y<x;y+=3)if(Xt(Yr,y,d,_),Yr.needsUpdate=!0,qr.intersectsTriangle(Yr))return!0}}else{const u=r+8,h=a[r+6];return Ft(u,s,Xo),!!(i.intersectsBox(Xo)&&Wl(u,e,t,n,i)||(Ft(h,s,Xo),i.intersectsBox(Xo)&&Wl(h,e,t,n,i)))}}const qo=new Ve,dl=new xn,Ns=new xn,Py=new P,Dy=new P,Iy=new P,Ny=new P;function Fy(r,e,t,n={},i={},s=0,o=1/0){e.boundingBox||e.computeBoundingBox(),dl.set(e.boundingBox.min,e.boundingBox.max,t),dl.needsUpdate=!0;const a=r.geometry,l=a.attributes.position,c=a.index,u=e.attributes.position,h=e.index,f=kn.getPrimitive(),d=kn.getPrimitive();let _=Py,g=Dy,m=null,p=null;i&&(m=Iy,p=Ny);let b=1/0,v=null,y=null;return qo.copy(t).invert(),Ns.matrix.copy(qo),r.shapecast({boundsTraverseOrder:x=>dl.distanceToBox(x),intersectsBounds:(x,E,T)=>T<b&&T<o?(E&&(Ns.min.copy(x.min),Ns.max.copy(x.max),Ns.needsUpdate=!0),!0):!1,intersectsRange:(x,E)=>{if(e.boundsTree){const T=e.boundsTree;return T.shapecast({boundsTraverseOrder:I=>Ns.distanceToBox(I),intersectsBounds:(I,S,A)=>A<b&&A<o,intersectsRange:(I,S)=>{for(let A=I,z=I+S;A<z;A++){const O=T.resolveTriangleIndex(A);Xt(d,3*O,h,u),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let G=x,D=x+E;G<D;G++){const H=r.resolveTriangleIndex(G);Xt(f,3*H,c,l),f.needsUpdate=!0;const K=f.distanceToTriangle(d,_,m);if(K<b&&(g.copy(_),p&&p.copy(m),b=K,v=G,y=A),K<s)return!0}}}})}else{const T=gs(e);for(let I=0,S=T;I<S;I++){Xt(d,3*I,h,u),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let A=x,z=x+E;A<z;A++){const O=r.resolveTriangleIndex(A);Xt(f,3*O,c,l),f.needsUpdate=!0;const G=f.distanceToTriangle(d,_,m);if(G<b&&(g.copy(_),p&&p.copy(m),b=G,v=A,y=I),G<s)return!0}}}}}),kn.releasePrimitive(f),kn.releasePrimitive(d),b===1/0?null:(n.point?n.point.copy(g):n.point=g.clone(),n.distance=b,n.faceIndex=v,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(qo),g.applyMatrix4(qo),i.distance=g.sub(i.point).length(),i.faceIndex=y),n)}function Oy(){return typeof SharedArrayBuffer<"u"}const Xs=new At.constructor,la=new At.constructor,zi=new cc(()=>new kt),$r=new kt,Kr=new kt,pl=new kt,ml=new kt;let _l=!1;function Uy(r,e,t,n){if(_l)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");_l=!0;const i=r._roots,s=e._roots;let o,a=0,l=0;const c=new Ve().copy(t).invert();for(let u=0,h=i.length;u<h;u++){Xs.setBuffer(i[u]),l=0;const f=zi.getPrimitive();Ft(0,Xs.float32Array,f),f.applyMatrix4(c);for(let d=0,_=s.length;d<_&&(la.setBuffer(s[u]),o=Yn(0,0,t,c,n,a,l,0,0,f),la.clearBuffer(),l+=s[d].length,!o);d++);if(zi.releasePrimitive(f),Xs.clearBuffer(),a+=i[u].length,o)break}return _l=!1,o}function Yn(r,e,t,n,i,s=0,o=0,a=0,l=0,c=null,u=!1){let h,f;u?(h=la,f=Xs):(h=Xs,f=la);const d=h.float32Array,_=h.uint32Array,g=h.uint16Array,m=f.float32Array,p=f.uint32Array,b=f.uint16Array,v=r*2,y=e*2,x=wn(v,g),E=wn(y,b);let T=!1;if(E&&x)u?T=i(En(e,p),Pn(e*2,b),En(r,_),Pn(r*2,g),l,o+e,a,s+r):T=i(En(r,_),Pn(r*2,g),En(e,p),Pn(e*2,b),a,s+r,l,o+e);else if(E){const I=zi.getPrimitive();Ft(e,m,I),I.applyMatrix4(t);const S=Hn(r),A=Dn(r,_);Ft(S,d,$r),Ft(A,d,Kr);const z=I.intersectsBox($r),O=I.intersectsBox(Kr);T=z&&Yn(e,S,n,t,i,o,s,l,a+1,I,!u)||O&&Yn(e,A,n,t,i,o,s,l,a+1,I,!u),zi.releasePrimitive(I)}else{const I=Hn(e),S=Dn(e,p);Ft(I,m,pl),Ft(S,m,ml);const A=c.intersectsBox(pl),z=c.intersectsBox(ml);if(A&&z)T=Yn(r,I,t,n,i,s,o,a,l+1,c,u)||Yn(r,S,t,n,i,s,o,a,l+1,c,u);else if(A)if(x)T=Yn(r,I,t,n,i,s,o,a,l+1,c,u);else{const O=zi.getPrimitive();O.copy(pl).applyMatrix4(t);const G=Hn(r),D=Dn(r,_);Ft(G,d,$r),Ft(D,d,Kr);const H=O.intersectsBox($r),K=O.intersectsBox(Kr);T=H&&Yn(I,G,n,t,i,o,s,l,a+1,O,!u)||K&&Yn(I,D,n,t,i,o,s,l,a+1,O,!u),zi.releasePrimitive(O)}else if(z)if(x)T=Yn(r,S,t,n,i,s,o,a,l+1,c,u);else{const O=zi.getPrimitive();O.copy(ml).applyMatrix4(t);const G=Hn(r),D=Dn(r,_);Ft(G,d,$r),Ft(D,d,Kr);const H=O.intersectsBox($r),K=O.intersectsBox(Kr);T=H&&Yn(S,G,n,t,i,o,s,l,a+1,O,!u)||K&&Yn(S,D,n,t,i,o,s,l,a+1,O,!u),zi.releasePrimitive(O)}}return T}const Yo=new xn,Ih=new kt;class hc{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,i=e._roots,s=e._indirectBuffer,o=n.getIndex();let a;return t.cloneBuffers?a={roots:i.map(l=>l.slice()),index:o.array.slice(),indirectBuffer:s?s.slice():null}:a={roots:i,index:o.array,indirectBuffer:s},a}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:i,roots:s,indirectBuffer:o}=e,a=new hc(t,{...n,[ll]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){const l=t.getIndex();if(l===null){const c=new jt(e.index,1,!1);t.setIndex(c)}else l.array!==i&&(l.array.set(i),l.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({strategy:Ff,maxDepth:40,maxLeafTris:10,verbose:!0,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,[ll]:!1},t),t.useSharedArrayBuffer&&!Oy())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[ll]||(ey(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new kt)));const{_indirectBuffer:n}=this;this.resolveTriangleIndex=t.indirect?i=>n[i]:i=>i}refit(e=null){return(this.indirect?Ty:dy)(this,e)}traverse(e,t=0){const n=this._roots[t],i=new Uint32Array(n),s=new Uint16Array(n);o(0);function o(a,l=0){const c=a*2,u=s[c+15]===va;if(u){const h=i[a+6],f=s[c+14];e(l,u,new Float32Array(n,a*4,6),h,f)}else{const h=a+dr/4,f=i[a+6],d=i[a+7];e(l,u,new Float32Array(n,a*4,6),d)||(o(h,l+1),o(f,l+1))}}}raycast(e,t=Jn){const n=this._roots,i=this.geometry,s=[],o=t.isMaterial,a=Array.isArray(t),l=i.groups,c=o?t.side:t,u=this.indirect?Ay:gy;for(let h=0,f=n.length;h<f;h++){const d=a?t[l[h].materialIndex].side:c,_=s.length;if(u(this,h,d,e,s),a){const g=l[h].materialIndex;for(let m=_,p=s.length;m<p;m++)s[m].face.materialIndex=g}}return s}raycastFirst(e,t=Jn){const n=this._roots,i=this.geometry,s=t.isMaterial,o=Array.isArray(t);let a=null;const l=i.groups,c=s?t.side:t,u=this.indirect?Ly:xy;for(let h=0,f=n.length;h<f;h++){const d=o?t[l[h].materialIndex].side:c,_=u(this,h,d,e);_!=null&&(a==null||_.distance<a.distance)&&(a=_,o&&(_.face.materialIndex=l[h].materialIndex))}return a}intersectsGeometry(e,t){let n=!1;const i=this._roots,s=this.indirect?Cy:yy;for(let o=0,a=i.length;o<a&&(n=s(this,o,e,t),!n);o++);return n}shapecast(e){const t=kn.getPrimitive(),n=this.indirect?_y:fy;let{boundsTraverseOrder:i,intersectsBounds:s,intersectsRange:o,intersectsTriangle:a}=e;if(o&&a){const h=o;o=(f,d,_,g,m)=>h(f,d,_,g,m)?!0:n(f,d,this,a,_,g,t)}else o||(a?o=(h,f,d,_)=>n(h,f,this,a,d,_,t):o=(h,f,d)=>d);let l=!1,c=0;const u=this._roots;for(let h=0,f=u.length;h<f;h++){const d=u[h];if(l=oy(this,h,s,o,i,c),l)break;c+=d.byteLength}return kn.releasePrimitive(t),l}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:s}=n;const o=kn.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?_=>{const g=this.resolveTriangleIndex(_);Xt(o,g*3,a,l)}:_=>{Xt(o,_*3,a,l)},u=kn.getPrimitive(),h=e.geometry.index,f=e.geometry.attributes.position,d=e.indirect?_=>{const g=e.resolveTriangleIndex(_);Xt(u,g*3,h,f)}:_=>{Xt(u,_*3,h,f)};if(s){const _=(g,m,p,b,v,y,x,E)=>{for(let T=p,I=p+b;T<I;T++){d(T),u.a.applyMatrix4(t),u.b.applyMatrix4(t),u.c.applyMatrix4(t),u.needsUpdate=!0;for(let S=g,A=g+m;S<A;S++)if(c(S),o.needsUpdate=!0,s(o,u,S,T,v,y,x,E))return!0}return!1};if(i){const g=i;i=function(m,p,b,v,y,x,E,T){return g(m,p,b,v,y,x,E,T)?!0:_(m,p,b,v,y,x,E,T)}}else i=_}return Uy(this,e,t,i)}intersectsBox(e,t){return Yo.set(e.min,e.max,t),Yo.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Yo.intersectsBox(n),intersectsTriangle:n=>Yo.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},s=0,o=1/0){return(this.indirect?Fy:Ey)(this,e,t,n,i,s,o)}closestPointToPoint(e,t={},n=0,i=1/0){return ay(this,e,t,n,i)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{Ft(0,new Float32Array(n),Ih),e.union(Ih)}),e}}function By(r){switch(r){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function zy(r){switch(r){case 1:return Zh;case 2:return Jh;case 3:return nn;case 4:return nn}}function Nh(r){switch(r){case 1:return $l;case 2:return da;case 3:return Ys;case 4:return Ys}}class Hf extends aa{constructor(){super(),this.minFilter=It,this.magFilter=It,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){const t=this.overrideItemSize,n=e.itemSize,i=e.count;if(t!==null){if(n*i%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=i*n/t}const s=e.itemSize,o=e.count,a=e.normalized,l=e.array.constructor,c=l.BYTES_PER_ELEMENT;let u=this._forcedType,h=s;if(u===null)switch(l){case Float32Array:u=_n;break;case Uint8Array:case Uint16Array:case Uint32Array:u=Cn;break;case Int8Array:case Int16Array:case Int32Array:u=ks;break}let f,d,_,g,m=By(s);switch(u){case _n:_=1,d=zy(s),a&&c===1?(g=l,m+="8",l===Uint8Array?f=ui:(f=Al,m+="_SNORM")):(g=Float32Array,m+="32F",f=_n);break;case ks:m+=c*8+"I",_=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,d=Nh(s),c===1?(g=Int8Array,f=Al):c===2?(g=Int16Array,f=Yh):(g=Int32Array,f=ks);break;case Cn:m+=c*8+"UI",_=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,d=Nh(s),c===1?(g=Uint8Array,f=ui):c===2?(g=Uint16Array,f=fa):(g=Uint32Array,f=Cn);break}h===3&&(d===nn||d===Ys)&&(h=4);const p=Math.ceil(Math.sqrt(o)),b=h*p*p,v=new g(b),y=e.normalized;e.normalized=!1;for(let x=0;x<o;x++){const E=h*x;v[E]=e.getX(x)/_,s>=2&&(v[E+1]=e.getY(x)/_),s>=3&&(v[E+2]=e.getZ(x)/_,h===4&&(v[E+3]=1)),s>=4&&(v[E+3]=e.getW(x)/_)}e.normalized=y,this.internalFormat=m,this.format=d,this.type=f,this.image.width=p,this.image.height=p,this.image.data=v,this.needsUpdate=!0,this.dispose(),e.itemSize=n,e.count=i}}class ky extends Hf{constructor(){super(),this._forcedType=Cn}}class Bs extends Hf{constructor(){super(),this._forcedType=_n}}class Fh{constructor(){this.index=new ky,this.position=new Bs,this.bvhBounds=new aa,this.bvhContents=new aa,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){const{geometry:t}=e;if(Vy(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){const n=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{const i=Bf(Uf(t));this._cachedIndexAttr=new jt(i,1,!1)}Hy(t,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){const{index:e,position:t,bvhBounds:n,bvhContents:i}=this;e&&e.dispose(),t&&t.dispose(),n&&n.dispose(),i&&i.dispose()}}function Hy(r,e,t){const n=t.array,i=r.index?r.index.array:null;for(let s=0,o=e.length;s<o;s++){const a=3*s,l=3*e[s];for(let c=0;c<3;c++)n[a+c]=i?i[l+c]:l+c}}function Vy(r,e,t){const n=r._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const i=n[0],s=new Uint16Array(i),o=new Uint32Array(i),a=new Float32Array(i),l=i.byteLength/dr,c=2*Math.ceil(Math.sqrt(l/2)),u=new Float32Array(4*c*c),h=Math.ceil(Math.sqrt(l)),f=new Uint32Array(2*h*h);for(let d=0;d<l;d++){const _=d*dr/4,g=_*2,m=_;for(let p=0;p<3;p++)u[8*d+0+p]=a[m+0+p],u[8*d+4+p]=a[m+3+p];if(wn(g,s)){const p=Pn(g,s),b=En(_,o),v=4294901760|p;f[d*2+0]=v,f[d*2+1]=b}else{const p=4*Dn(_,o)/dr,b=uc(_,o);f[d*2+0]=b,f[d*2+1]=p}}e.image.data=u,e.image.width=c,e.image.height=c,e.format=nn,e.type=_n,e.internalFormat="RGBA32F",e.minFilter=It,e.magFilter=It,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=f,t.image.width=h,t.image.height=h,t.format=da,t.type=Cn,t.internalFormat="RG32UI",t.minFilter=It,t.magFilter=It,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}const Gy=`
#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,Wy=`

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}

// Raycasting
float intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	float dist = max( t0, 0.0 );

	return t1 >= dist ? dist : INFINITY;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	BVH bvh, vec3 rayOrigin, vec3 rayDirection, uint offset, uint count,
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( bvh.index, i ).xyz;
		vec3 a = texelFetch1D( bvh.position, indices.x ).rgb;
		vec3 b = texelFetch1D( bvh.position, indices.y ).rgb;
		vec3 c = texelFetch1D( bvh.position, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

float intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, BVH bvh, uint currNodeIndex ) {

	vec3 boundsMin = texelFetch1D( bvh.bvhBounds, currNodeIndex * 2u + 0u ).xyz;
	vec3 boundsMax = texelFetch1D( bvh.bvhBounds, currNodeIndex * 2u + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax );

}

bool bvhIntersectFirstHit(
	BVH bvh, vec3 rayOrigin, vec3 rayDirection,

	// output variables
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ 60 ];
	stack[ 0 ] = 0u;

	float triangleDistance = 1e20;
	bool found = false;
	while ( ptr > - 1 && ptr < 60 ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance = intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh, currNodeIndex );
		if ( boundsHitDistance == INFINITY || boundsHitDistance > triangleDistance ) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh.bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh, rayOrigin, rayDirection, offset, count, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,tr=new P,nr=new P,ir=new P,Oh=new pt,$o=new P,gl=new P,Uh=new pt,Bh=new pt,Ko=new Ve,zh=new Ve;function Fs(r,e){if(!r&&!e)return;const t=r.count===e.count,n=r.normalized===e.normalized,i=r.array.constructor===e.array.constructor,s=r.itemSize===e.itemSize;if(!t||!n||!i||!s)throw new Error}function zs(r,e=null){const t=r.array.constructor,n=r.normalized,i=r.itemSize,s=e===null?r.count:e;return new jt(new t(i*s),i,n)}function Vf(r,e,t=0){if(r.isInterleavedBufferAttribute){const n=r.itemSize;for(let i=0,s=r.count;i<s;i++){const o=i+t;e.setX(o,r.getX(i)),n>=2&&e.setY(o,r.getY(i)),n>=3&&e.setZ(o,r.getZ(i)),n>=4&&e.setW(o,r.getW(i))}}else{const n=e.array,i=n.constructor,s=n.BYTES_PER_ELEMENT*r.itemSize*t;new i(n.buffer,s,r.array.length).set(r.array)}}function Xy(r,e,t){const n=r.elements,i=e.elements;for(let s=0,o=i.length;s<o;s++)n[s]+=i[s]*t}function kh(r,e,t){const n=r.skeleton,i=r.geometry,s=n.bones,o=n.boneInverses;Uh.fromBufferAttribute(i.attributes.skinIndex,e),Bh.fromBufferAttribute(i.attributes.skinWeight,e),Ko.elements.fill(0);for(let a=0;a<4;a++){const l=Bh.getComponent(a);if(l!==0){const c=Uh.getComponent(a);zh.multiplyMatrices(s[c].matrixWorld,o[c]),Xy(Ko,zh,l)}}return Ko.multiply(r.bindMatrix).premultiply(r.bindMatrixInverse),t.transformDirection(Ko),t}function vl(r,e,t,n,i){$o.set(0,0,0);for(let s=0,o=r.length;s<o;s++){const a=e[s],l=r[s];a!==0&&(gl.fromBufferAttribute(l,n),t?$o.addScaledVector(gl,a):$o.addScaledVector(gl.sub(i),a))}i.add($o)}function jy(r,e={useGroups:!1,updateIndex:!1,skipAttributes:[]},t=new vn){const n=r[0].index!==null,{useGroups:i=!1,updateIndex:s=!1,skipAttributes:o=[]}=e,a=new Set(Object.keys(r[0].attributes)),l={};let c=0;t.clearGroups();for(let u=0;u<r.length;++u){const h=r[u];let f=0;if(n!==(h.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const d in h.attributes){if(!a.has(d))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.');l[d]===void 0&&(l[d]=[]),l[d].push(h.attributes[d]),f++}if(f!==a.size)throw new Error("StaticGeometryGenerator: Make sure all geometries have the same number of attributes.");if(i){let d;if(n)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else throw new Error("StaticGeometryGenerator: The geometry must have either an index or a position attribute");t.addGroup(c,d,u),c+=d}}if(n){let u=!1;if(!t.index){let h=0;for(let f=0;f<r.length;++f)h+=r[f].index.count;t.setIndex(new jt(new Uint32Array(h),1,!1)),u=!0}if(s||u){const h=t.index;let f=0,d=0;for(let _=0;_<r.length;++_){const g=r[_],m=g.index;if(o[_]!==!0)for(let p=0;p<m.count;++p)h.setX(f,m.getX(p)+d),f++;d+=g.attributes.position.count}}}for(const u in l){const h=l[u];if(!(u in t.attributes)){let _=0;for(const g in h)_+=h[g].count;t.setAttribute(u,zs(l[u][0],_))}const f=t.attributes[u];let d=0;for(let _=0,g=h.length;_<g;_++){const m=h[_];o[_]!==!0&&Vf(m,f,d),d+=m.count}}return t}function qy(r,e){if(r===null||e===null)return r===e;if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}class Yy{constructor(e){this.matrixWorld=new Ve,this.geometryHash=null,this.boneMatrices=null,this.primitiveCount=-1,this.mesh=e,this.update()}update(){const e=this.mesh,t=e.geometry,n=e.skeleton,i=(t.index?t.index.count:t.attributes.position.count)/3;if(this.matrixWorld.copy(e.matrixWorld),this.geometryHash=t.attributes.position.version,this.primitiveCount=i,n){n.boneTexture||n.computeBoneTexture(),n.update();const s=n.boneMatrices;!this.boneMatrices||this.boneMatrices.length!==s.length?this.boneMatrices=s.slice():this.boneMatrices.set(s)}else this.boneMatrices=null}didChange(){const e=this.mesh,t=e.geometry,n=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===t.attributes.position.version&&qy(e.skeleton&&e.skeleton.boneMatrices||null,this.boneMatrices)&&this.primitiveCount===n)}}class $y{constructor(e){Array.isArray(e)||(e=[e]);const t=[];e.forEach(n=>{n.traverseVisible(i=>{i.isMesh&&t.push(i)})}),this.meshes=t,this.useGroups=!0,this.applyWorldTransforms=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Array(t.length).fill().map(()=>new vn),this._diffMap=new WeakMap}getMaterials(){const e=[];return this.meshes.forEach(t=>{Array.isArray(t.material)?e.push(...t.material):e.push(t.material)}),e}generate(e=new vn){let t=[];const{meshes:n,useGroups:i,_intermediateGeometry:s,_diffMap:o}=this;for(let a=0,l=n.length;a<l;a++){const c=n[a],u=s[a],h=o.get(c);!h||h.didChange(c)?(this._convertToStaticGeometry(c,u),t.push(!1),h?h.update():o.set(c,new Yy(c))):t.push(!0)}jy(s,{useGroups:i,skipAttributes:t},e);for(const a in e.attributes)e.attributes[a].needsUpdate=!0;return e}_convertToStaticGeometry(e,t=new vn){const n=e.geometry,i=this.applyWorldTransforms,s=this.attributes.includes("normal"),o=this.attributes.includes("tangent"),a=n.attributes,l=t.attributes;t.index||(t.index=n.index),l.position||t.setAttribute("position",zs(a.position)),s&&!l.normal&&a.normal&&t.setAttribute("normal",zs(a.normal)),o&&!l.tangent&&a.tangent&&t.setAttribute("tangent",zs(a.tangent)),Fs(n.index,t.index),Fs(a.position,l.position),s&&Fs(a.normal,l.normal),o&&Fs(a.tangent,l.tangent);const c=a.position,u=s?a.normal:null,h=o?a.tangent:null,f=n.morphAttributes.position,d=n.morphAttributes.normal,_=n.morphAttributes.tangent,g=n.morphTargetsRelative,m=e.morphTargetInfluences,p=new rt;p.getNormalMatrix(e.matrixWorld);for(let b=0,v=a.position.count;b<v;b++)tr.fromBufferAttribute(c,b),u&&nr.fromBufferAttribute(u,b),h&&(Oh.fromBufferAttribute(h,b),ir.fromBufferAttribute(h,b)),m&&(f&&vl(f,m,g,b,tr),d&&vl(d,m,g,b,nr),_&&vl(_,m,g,b,ir)),e.isSkinnedMesh&&(e.applyBoneTransform(b,tr),u&&kh(e,b,nr),h&&kh(e,b,ir)),i&&tr.applyMatrix4(e.matrixWorld),l.position.setXYZ(b,tr.x,tr.y,tr.z),u&&(i&&nr.applyNormalMatrix(p),l.normal.setXYZ(b,nr.x,nr.y,nr.z)),h&&(i&&ir.transformDirection(e.matrixWorld),l.tangent.setXYZW(b,ir.x,ir.y,ir.z,Oh.w));for(const b in this.attributes){const v=this.attributes[b];v==="position"||v==="tangent"||v==="normal"||!(v in a)||(l[v]||t.setAttribute(v,zs(a[v])),Fs(a[v],l[v]),Vf(a[v],l[v]))}return t}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class fi{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),fi.nextNameID=fi.nextNameID||0,this.$name.id="lil-gui-name-"+ ++fi.nextNameID,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ky extends fi{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Xl(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const Zy={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Xl,toHexString:Xl},Zs={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},Jy={isPrimitive:!1,match:Array.isArray,fromHexString(r,e,t=1){const n=Zs.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(255&n)/255*t},toHexString:([r,e,t],n=1)=>Zs.toHexString(r*(n=255/n)<<16^e*n<<8^t*n<<0)},Qy={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=Zs.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(255&n)/255*t},toHexString:({r,g:e,b:t},n=1)=>Zs.toHexString(r*(n=255/n)<<16^e*n<<8^t*n<<0)},eb=[Zy,Zs,Jy,Qy];class tb extends fi{constructor(e,t,n,i){var s;super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(s=this.initialValue,eb.find(o=>o.match(s))),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=Xl(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class xl extends fi{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class nb extends fi{constructor(e,t,n,i,s,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=u=>{const h=parseFloat(this.$input.value);isNaN(h)||(this._snapClampSetValue(h+u),this.$input.value=this.getValue())};let t,n,i,s,o,a=!1;const l=u=>{if(a){const h=u.clientX-t,f=u.clientY-n;Math.abs(f)>5?(u.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(h)>5&&c()}if(!a){const h=u.clientY-i;o-=h*this._step*this._arrowKeyMultiplier(u),s+o>this._max?o=this._max-s:s+o<this._min&&(o=this._min-s),this._snapClampSetValue(s+o)}i=u.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c)};this.$input.addEventListener("input",()=>{let u=parseFloat(this.$input.value);isNaN(u)||(this._stepExplicit&&(u=this._snap(u)),this.setValue(this._clamp(u)))}),this.$input.addEventListener("keydown",u=>{u.code==="Enter"&&this.$input.blur(),u.code==="ArrowUp"&&(u.preventDefault(),e(this._step*this._arrowKeyMultiplier(u))),u.code==="ArrowDown"&&(u.preventDefault(),e(this._step*this._arrowKeyMultiplier(u)*-1))}),this.$input.addEventListener("wheel",u=>{this._inputFocused&&(u.preventDefault(),e(this._step*this._normalizeMouseWheel(u)))},{passive:!1}),this.$input.addEventListener("mousedown",u=>{t=u.clientX,n=i=u.clientY,a=!0,s=this.getValue(),o=0,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=f=>{const d=this.$slider.getBoundingClientRect();let _=(g=f,m=d.left,p=d.right,b=this._min,v=this._max,(g-m)/(p-m)*(v-b)+b);var g,m,p,b,v;this._snapClampSetValue(_)},t=f=>{e(f.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",n)};let i,s,o=!1;const a=f=>{f.preventDefault(),this._setDraggingStyle(!0),e(f.touches[0].clientX),o=!1},l=f=>{if(o){const d=f.touches[0].clientX-i,_=f.touches[0].clientY-s;Math.abs(d)>Math.abs(_)?a(f):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c))}else f.preventDefault(),e(f.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c)},u=this._callOnFinishChange.bind(this);let h;this.$slider.addEventListener("mousedown",f=>{this._setDraggingStyle(!0),e(f.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",f=>{f.touches.length>1||(this._hasScrollBar?(i=f.touches[0].clientX,s=f.touches[0].clientY,o=!0):a(f),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",c))},{passive:!1}),this.$slider.addEventListener("wheel",f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const d=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+d),this.$input.value=this.getValue(),clearTimeout(h),h=setTimeout(u,400)},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class ib extends fi{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(s=>{const o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class rb extends fi{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Hh=!1;class fc{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Hh&&o&&(function(l){const c=document.createElement("style");c.innerHTML=l;const u=document.querySelector("head link[rel=stylesheet], head style");u?document.head.insertBefore(c,u):document.head.appendChild(c)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Hh=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,n,i,s){if(Object(n)===n)return new ib(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new nb(this,e,t,n,i,s);case"boolean":return new Ky(this,e,t);case"string":return new rb(this,e,t);case"function":return new xl(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new tb(this,e,t,n)}addFolder(e){return new fc({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof xl||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof xl)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const sb=`\r
//////////////////////////////////////////////////////\r
// camera uniforms\r
//////////////////////////////////////////////////////\r
\r
uniform mat4 cameraWorldMatrix;\r
uniform mat4 invProjectionMatrix;\r
uniform mat4 invModelMatrix;\r
uniform vec2 resolution;\r
\r
//////////////////////////////////////////////////////\r
// geometry uniforms\r
//////////////////////////////////////////////////////\r
\r
uniform BVH bvh_surface;\r
uniform BVH bvh_props;\r
\r
uniform sampler2D normalAttribute_surface;\r
uniform sampler2D normalAttribute_props;\r
uniform sampler2D tangentAttribute_surface;\r
uniform sampler2D tangentAttribute_props;\r
uniform bool has_normals_surface;\r
uniform bool has_tangents_surface;\r
uniform bool has_normals_props;\r
uniform bool has_tangents_props;\r
\r
//////////////////////////////////////////////////////\r
// renderer uniforms\r
//////////////////////////////////////////////////////\r
\r
uniform float accumulation_weight;\r
uniform float samples;\r
uniform bool wireframe;\r
uniform vec3 neutral_color;\r
uniform bool smooth_normals;\r
\r
//////////////////////////////////////////////////////\r
// material uniforms\r
//////////////////////////////////////////////////////\r
\r
uniform float base_weight;\r
uniform vec3 base_color;\r
uniform float base_roughness;\r
uniform float base_metalness;\r
\r
uniform float specular_weight;\r
uniform vec3  specular_color;\r
uniform float specular_roughness;\r
uniform float specular_anisotropy;\r
uniform float specular_rotation;\r
uniform float specular_ior;\r
\r
uniform float transmission_weight;\r
uniform vec3  transmission_color;\r
uniform float transmission_depth;\r
uniform vec3  transmission_scatter;\r
uniform float transmission_scatter_anisotropy;\r
uniform float transmission_dispersion_abbe_number;\r
uniform float transmission_dispersion_scale;\r
\r
uniform float subsurface_weight;\r
uniform vec3  subsurface_color;\r
uniform float subsurface_radius;\r
uniform vec3  subsurface_radius_scale;\r
uniform float subsurface_anisotropy;\r
\r
uniform float coat_weight;\r
uniform vec3  coat_color;\r
uniform float coat_roughness;\r
uniform float coat_anisotropy;\r
uniform float coat_rotation;\r
uniform float coat_ior;\r
\r
uniform float fuzz_weight;\r
uniform vec3  fuzz_color;\r
uniform float fuzz_roughness;\r
\r
uniform float geometry_opacity;\r
uniform bool geometry_thin_walled;\r
\r
//////////////////////////////////////////////////////\r
// lighting uniforms\r
//////////////////////////////////////////////////////\r
\r
uniform float skyPower;\r
uniform vec3 skyColor;\r
\r
uniform float sunPower;\r
uniform float sunAngularSize;\r
uniform vec3 sunColor;\r
uniform vec3 sunDir;\r
\r
//////////////////////////////////////////////////////\r
// UVs\r
//////////////////////////////////////////////////////\r
varying vec2 vUv;\r
\r
//////////////////////////////////////////////////////\r
// useful constants\r
//////////////////////////////////////////////////////\r
\r
const float PI                    = 3.141592653589793;\r
const float PI2                   = 6.283185307179586;\r
const float PI_HALF               = 1.5707963267948966;\r
const float RECIPROCAL_PI         = 0.3183098861837907;\r
const float RECIPROCAL_PI2        = 0.15915494309189535;\r
\r
// tolerances\r
const float HUGE_DIST             = 1.0e20;\r
const float RAY_OFFSET            = 1.0e-4;\r
const float DENOM_TOLERANCE       = 1.0e-10;\r
const float RADIANCE_EPSILON      = 1.0e-12;\r
const float TRANSMITTANCE_EPSILON = 1.0e-4;\r
const float THROUGHPUT_EPSILON    = 1.0e-6;\r
const float PDF_EPSILON           = 1.0e-6;\r
const float IOR_EPSILON           = 1.0e-5;\r
const float FLT_EPSILON           = 1.1920929e-7;\r
\r
// material indices\r
const int MATERIAL_PROPS   = 0;\r
const int MATERIAL_OPENPBR = 1;\r
\r
//////////////////////////////////////////////////////\r
// utils\r
//////////////////////////////////////////////////////\r
\r
vec3 safe_normalize(in vec3 N)\r
{\r
    float l = length(N);\r
    return N/max(l, DENOM_TOLERANCE);\r
}\r
\r
float maxComponent(in vec3 v)\r
{\r
    return max(v.x, max(v.y, v.z));\r
}\r
\r
float minComponent(in vec3 v)\r
{\r
    return min(v.x, min(v.y, v.z));\r
}\r
\r
#define sqr(x) ((x)*(x))\r
\r
float cosTheta2( in vec3 w)  { return w.z*w.z; }\r
float cosTheta(  in vec3 w)  { return w.z; }\r
float sinTheta2( in vec3 w)  { return 1.0 - cosTheta2(w); }\r
float sinTheta(  in vec3 w)  { return sqrt(max(0.0, sinTheta2(w))); }\r
float tanTheta2(in vec3 nLocal) { float ct2 = cosTheta2(nLocal); return max(0.0, 1.0 - ct2) / max(ct2, DENOM_TOLERANCE); }\r
float tanTheta(in vec3 nLocal)  { return sqrt(max(0.0, tanTheta2(nLocal))); }\r
float cosPhi(in vec3 w) { float S = sinTheta(w); return (S == 0.0) ? 1.0 : clamp(w.x / S, -1.0, 1.0); }\r
float sinPhi(in vec3 w) { float S = sinTheta(w); return (S == 0.0) ? 1.0 : clamp(w.y / S, -1.0, 1.0); }\r
\r
/////////////////////////////////////////////////////////////////////////\r
// Transform to/from local space basis (i.e. tangent space frame)\r
/////////////////////////////////////////////////////////////////////////\r
\r
struct Basis\r
{\r
    // right-handed coordinate system\r
    vec3 nW; // aligned with the z-axis in local space\r
    vec3 tW; // aligned with the x-axis in local space\r
    vec3 bW; // aligned with the y-axis in local space\r
    vec3 baryCoord;\r
};\r
\r
vec3 normalToTangent(in vec3 N)\r
{\r
    vec3 T;\r
    if (abs(N.z) < abs(N.x))\r
        T = vec3(N.z, 0.0, -N.x);\r
    else\r
        T = vec3(0.0, N.z, -N.y);\r
    T = safe_normalize(T);\r
    return T;\r
}\r
\r
Basis makeBasis(in vec3 nW)\r
{\r
    Basis basis;\r
    basis.nW = safe_normalize(nW);\r
    basis.tW = normalToTangent(nW);\r
    basis.bW = cross(basis.nW, basis.tW);\r
    return basis;\r
}\r
\r
Basis makeBasis(in vec3 nW, in vec3 tW, in vec3 baryCoord)\r
{\r
    Basis basis;\r
    basis.nW = safe_normalize(nW);\r
    basis.tW = safe_normalize(tW);\r
    basis.bW = cross(basis.nW, basis.tW);\r
    basis.baryCoord = baryCoord;\r
    return basis;\r
}\r
\r
vec3 worldToLocal(in vec3 vWorld, in Basis basis)\r
{\r
    return vec3( dot(vWorld, basis.tW),\r
                 dot(vWorld, basis.bW),\r
                 dot(vWorld, basis.nW) );\r
}\r
\r
vec3 localToWorld(in vec3 vLocal, in Basis basis)\r
{\r
    return basis.tW*vLocal.x + basis.bW*vLocal.y + basis.nW*vLocal.z;\r
}\r
\r
\r
/////////////////////////////////////////////////////////////////////////\r
// Transform to/from rotated basis, for anisotropy calculations\r
/////////////////////////////////////////////////////////////////////////\r
\r
struct LocalFrameRotation\r
{\r
    mat2 M;\r
    mat2 Minv;\r
};\r
\r
LocalFrameRotation getLocalFrameRotation(in float angle)\r
{\r
    LocalFrameRotation rotation;\r
    if (angle==0.0 || angle==PI2)\r
    {\r
        mat2 identity = mat2(1.0, 0.0, 0.0, 1.0);\r
        rotation.M    = identity;\r
        rotation.Minv = identity;\r
    }\r
    else\r
    {\r
        float cos_rot = cos(angle);\r
        float sin_rot = sin(angle);\r
        rotation.M    = mat2(cos_rot,  sin_rot, -sin_rot, cos_rot);\r
        rotation.Minv = mat2(cos_rot, -sin_rot,  sin_rot, cos_rot);\r
    }\r
    return rotation;\r
}\r
\r
vec3 localToRotated(in vec3 vLocal, in LocalFrameRotation rotation)\r
{\r
    vec2 xy_rot = rotation.M * vLocal.xy;\r
    return vec3(xy_rot.x, xy_rot.y, vLocal.z);\r
}\r
\r
vec3 rotatedToLocal(in vec3 vRotated, in LocalFrameRotation rotation)\r
{\r
    vec2 xy_local = rotation.Minv * vRotated.xy;\r
    return vec3(xy_local.x, xy_local.y, vRotated.z);\r
}\r
\r
\r
/////////////////////////////////////////////////////////////////////////\r
// Sampling formulae\r
/////////////////////////////////////////////////////////////////////////\r
\r
// https://www.pcg-random.org/\r
uint pcg(uint v)\r
{\r
	uint state = v * 747796405u + 2891336453u;\r
	uint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\r
	return (word >> 22u) ^ word;\r
}\r
\r
void xorshift(inout uint seed)\r
{\r
    // https://en.wikipedia.org/wiki/Xorshift\r
    seed ^= seed << 13u;\r
    seed ^= seed >> 17u;\r
    seed ^= seed << 5u;\r
}\r
\r
float rand(inout uint seed)\r
{\r
    seed = pcg(seed);\r
    const float uint_range = 1.0 / float(0xFFFFFFFFU);\r
    return float(seed - 1U) * uint_range;\r
}\r
\r
// PDF for cosine-weighted sampling of hemisphere\r
float pdfHemisphereCosineWeighted(in vec3 wiL)\r
{\r
    if (wiL.z <= PDF_EPSILON) return PDF_EPSILON / PI;\r
    return wiL.z / PI;\r
}\r
\r
// Do cosine-weighted sampling of hemisphere\r
vec3 sampleHemisphereCosineWeighted(inout uint rndSeed, inout float pdf)\r
{\r
    float r = sqrt(rand(rndSeed));\r
    float theta = 2.0 * PI * rand(rndSeed);\r
    float x = r * cos(theta);\r
    float y = r * sin(theta);\r
    float z = sqrt(max(0.0, 1.0 - x*x - y*y));\r
    pdf = max(PDF_EPSILON, abs(z) / PI);\r
    return vec3(x, y, z);\r
}\r
\r
float powerHeuristic(const float a, const float b)\r
{\r
    return sqr(a) / max(DENOM_TOLERANCE, sqr(a) + sqr(b));\r
}\r
\r
float sample_triangle_filter(float xi)\r
{\r
    // sample from triangle filter, returning result in [-1, 1]\r
    return xi < 0.5 ? sqrt(2.0*xi) - 1.0 : 1.0 - sqrt(2.0 - 2.0*xi);\r
}\r
\r
\r
/////////////////////////////////////////////////////////////////////////\r
// material calculations\r
/////////////////////////////////////////////////////////////////////////\r
\r
bool cutout(in int material, inout uint rndSeed)\r
{\r
    if (material != MATERIAL_OPENPBR)\r
        return false;\r
    if (!geometry_thin_walled || geometry_opacity==1.0)\r
        return false;\r
    float X = rand(rndSeed);\r
    if (X < 1.0 - geometry_opacity) return true;\r
    return false;\r
}\r
\r
// cosi    = magnitude of the cosine of the incident ray angle to the micronormal\r
// eta_ti  = ratio et/ei of the transmitted IOR (et) and incident IOR (ei)\r
float FresnelDielectricReflectance(in float cosi, in float eta_ti)\r
{\r
    float c = cosi;\r
    float g = eta_ti*eta_ti - 1.0 + c*c;\r
    if (g > 0.0)\r
    {\r
        g = sqrt(g);\r
        float A = (g-c) / (g+c);\r
        float B = (c*(g+c) - 1.0) / (c*(g-c) + 1.0);\r
        return 0.5*A*A*(1.0 + B*B);\r
    }\r
    return 1.0; // total internal reflection\r
}\r
\r
\r
/////////////////////////////////////////////////////////////////////////\r
// GGX Microfacet formulae\r
/////////////////////////////////////////////////////////////////////////\r
\r
// m = the microfacet normal (in the local space where z = the macrosurface normal)\r
float ggx_ndf_eval(in vec3 m, in float alpha_x, in float alpha_y)\r
{\r
    // Evaluate the anisotropic GGX NDF\r
    float ax = max(alpha_x, DENOM_TOLERANCE);\r
    float ay = max(alpha_y, DENOM_TOLERANCE);\r
    float Ddenom = PI * ax * ay * sqr(sqr(m.x/ax) + sqr(m.y/ay) + sqr(m.z));\r
    return 1.0 / max(Ddenom, DENOM_TOLERANCE);\r
}\r
\r
// GGX NDF sampling routine, as described in\r
//  "Sampling Visible GGX Normals with Spherical Caps", Dupuy et al., HPG 2023.\r
// NB, this assumes wiL is in the +z hemisphere, and returns a sampled micronormal in that hemisphere.\r
vec3 ggx_ndf_sample(in vec3 wiL, float alpha_x, float alpha_y, inout uint rndSeed)\r
{\r
    vec2 Xi = vec2(rand(rndSeed), rand(rndSeed));\r
    vec3 V = wiL;\r
    vec2 alpha = vec2(alpha_x, alpha_y);\r
\r
    // Transform the view direction to the hemisphere configuration.\r
    V = normalize(vec3(V.xy * alpha, V.z));\r
\r
    // Sample a spherical cap in (-V.z, 1].\r
    float phi = 2.0 * PI * Xi.x;\r
    float z = (1.0 - Xi.y) * (1.0 + V.z) - V.z;\r
    float sinTheta = sqrt(clamp(1.0 - z * z, 0.0, 1.0));\r
    float x = sinTheta * cos(phi);\r
    float y = sinTheta * sin(phi);\r
    vec3 c = vec3(x, y, z);\r
\r
    // Compute the microfacet normal.\r
    vec3 H = c + V;\r
\r
    // Transform the microfacet normal back to the ellipsoid configuration.\r
    H = normalize(vec3(H.xy * alpha, H.z));\r
\r
    return H;\r
}\r
\r
float ggx_lambda(in vec3 w, float alpha_x, float alpha_y)\r
{\r
    if (abs(w.z) < FLT_EPSILON) return 0.0;\r
    return (-1.0 + sqrt(1.0 + (sqr(alpha_x*w.x) + sqr(alpha_y*w.y))/sqr(w.z))) / 2.0;\r
}\r
\r
float ggx_G1(in vec3 w, float alpha_x, float alpha_y)\r
{\r
    return 1.0 / (1.0 + ggx_lambda(w, alpha_x, alpha_y));\r
}\r
\r
// Height-correlated form of GGX shadowing-masking function\r
float ggx_G2(in vec3 woL, in vec3 wiL, float alpha_x, float alpha_y)\r
{\r
    return 1.0 / (1.0 + ggx_lambda(woL, alpha_x, alpha_y) + ggx_lambda(wiL,  alpha_x, alpha_y));\r
}\r
\r
\r
/////////////////////////////////////////////////////////////////////////\r
// Volumetrics\r
/////////////////////////////////////////////////////////////////////////\r
\r
// Describes the internal volume of bulk transmissive media\r
struct Volume\r
{\r
    vec3 extinction;    // units of inverse length\r
    vec3 albedo;        // dimensional, single-scattering albedo\r
    float anisotropy;   // phase function anisotropy in [-1, 1]\r
};\r
\r
// Sample Henyey-Greenstein phase function\r
vec3 samplePhaseFunction(in vec3 dW, float anisotropy, inout uint rndSeed)\r
{\r
    float U = rand(rndSeed);\r
    float V = rand(rndSeed);\r
    float g = anisotropy;\r
    float costheta;\r
    if (abs(g) < 1.0e-3)\r
        costheta = 1.0 - 2.0*U;\r
    else\r
        costheta = 1.0/(2.0*g) * (1.0 + g*g - ((1.0-g*g)*(1.0-g+2.0*g*U)));\r
    float sintheta = sqrt(max(0.0, 1.0-costheta*costheta));\r
    float phi = 2.0*PI*V;\r
    Basis basis = makeBasis(dW);\r
    return costheta*dW + sintheta*(cos(phi)*basis.tW + sin(phi)*basis.bW);\r
}\r
\r
float wavelength_nm;\r
\r
// Wavelength-dependent IOR according to Cauchy formula\r
float specular_ior_dispersive()\r
{\r
    const float lambda_C = 656.3;\r
    const float lambda_d = 587.6;\r
    const float lambda_F = 486.1;\r
    const float lambda_FC2 = 1.0 / (1.0/(lambda_F*lambda_F) - 1.0/(lambda_C*lambda_C));\r
    float Vd = transmission_dispersion_abbe_number / max(DENOM_TOLERANCE, transmission_dispersion_scale);\r
    float nd = specular_ior;\r
    float B = (nd - 1.0) * lambda_FC2 / max(DENOM_TOLERANCE, Vd);\r
    float A = nd - B/sqr(lambda_d);\r
    return A + B/sqr(wavelength_nm);\r
}\r
\r
\r
/////////////////////////////////////////////////////////////////////////\r
// Color utils\r
/////////////////////////////////////////////////////////////////////////\r
\r
// Spectrum to XYZ approx function from Sloan: http://jcgt.org/published/0002/02/01/paper.pdf\r
// Inputs:  Wavelength in nanometers\r
float xFit_1931(float w)\r
{\r
    float t1 = (w-442.0)*((w<442.0)?0.0624:0.0374),\r
          t2 = (w-599.8)*((w<599.8)?0.0264:0.0323),\r
          t3 = (w-501.1)*((w<501.1)?0.0490:0.0382);\r
    return 0.362*exp(-0.5*t1*t1) + 1.056*exp(-0.5*t2*t2)- 0.065*exp(-0.5*t3*t3);\r
}\r
float yFit_1931(float w)\r
{\r
    float t1 = (w-568.8)*((w<568.8)?0.0213:0.0247),\r
          t2 = (w-530.9)*((w<530.9)?0.0613:0.0322);\r
    return 0.821*exp(-0.5*t1*t1) + 0.286*exp(-0.5*t2*t2);\r
}\r
float zFit_1931(float w)\r
{\r
    float t1 = (w-437.0)*((w<437.0)?0.0845:0.0278),\r
          t2 = (w-459.0)*((w<459.0)?0.0385:0.0725);\r
    return 1.217*exp(-0.5*t1*t1) + 0.681*exp(-0.5*t2*t2);\r
}\r
\r
#define xyzFit_1931(w) vec3(xFit_1931(w), yFit_1931(w), zFit_1931(w))\r
\r
vec3 xyzToRgb(vec3 XYZ)\r
{\r
	return XYZ * mat3( 3.240479, -1.537150, -0.498535,\r
	                  -0.969256 , 1.875991,  0.041556,\r
	                   0.055648, -0.204043,  1.057311);\r
}\r
`,ob=`\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// "Coat" dielectric microfacet BSDF\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
\r
void coat_ndf_roughnesses(out float alpha_x, out float alpha_y)\r
{\r
    float rsqr = sqr(coat_roughness);\r
    alpha_x = rsqr * sqrt(2.0/(1.0 + sqr(1.0 - coat_anisotropy)));\r
    alpha_y = (1.0 - coat_anisotropy) * alpha_x;\r
    // (Here opt to clamp to a mininum roughness, rather than deal with a special degenerate case for zero roughness)\r
    const float min_alpha = 1.0e-4;\r
    alpha_x = max(min_alpha, alpha_x);\r
    alpha_y = max(min_alpha, alpha_y);\r
}\r
\r
\r
vec3 coat_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,\r
                        inout float pdf_woutputL)\r
{\r
    bool transmitted = woutputL.z * winputL.z < 0.0;\r
    if (transmitted)\r
        return vec3(0.0);\r
\r
    // We assume that the local frame is setup so that the z direction points from the dielectric interior to the exterior.\r
    // Thus we can determine if the reflection is internal or external to the dielectric:\r
    vec3 beamOutgoingL = winputL;\r
    bool external_reflection = (beamOutgoingL.z > 0.0);\r
\r
    // Compute IOR ratio at interface:\r
    //  eta_ti_refl = (IOR in hemi. opposite to reflection) / (IOR in hemi. of reflection)\r
    float n_exterior = 1.0;\r
    float n_interior = coat_ior;\r
    float eta_ti_refl = external_reflection ? n_interior/n_exterior : n_exterior/n_interior;\r
    if (abs(eta_ti_refl - 1.0) < IOR_EPSILON)\r
        return vec3(0.0); // degenerate case of index-matched interface, BRDF goes to zero\r
\r
    // Compute the NDF roughnesses in the rotated frame\r
    float alpha_x, alpha_y;\r
    coat_ndf_roughnesses(alpha_x, alpha_y);\r
\r
    // Construct basis such that x, y are aligned with the T, B in the local, rotated frame\r
    LocalFrameRotation rotation = getLocalFrameRotation(PI2*coat_rotation);\r
    vec3 winputR  = localToRotated(winputL,  rotation);\r
    vec3 woutputR = localToRotated(woutputL, rotation);\r
\r
    // Compute the micronormal mR in the local (rotated) frame, from the reflection half-vector\r
    vec3 mR = normalize(woutputR + winputR);\r
\r
    // Compute NDF, and "distribution of visible normals" DV\r
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);\r
    float DV = D * ggx_G1(winputR, alpha_x, alpha_y) * max(0.0, dot(winputR, mR)) / winputR.z;\r
\r
    // Compute Fresnel factor for the dielectric reflection\r
    float F = FresnelDielectricReflectance(abs(dot(winputR, mR)), eta_ti_refl);\r
\r
    // Thus compute PDF of woutputL sample\r
    float dwh_dwo = 1.0 / max(abs(4.0*dot(winputR, mR)), DENOM_TOLERANCE); // Jacobian of the half-direction mapping\r
    pdf_woutputL = DV * dwh_dwo;\r
\r
    // Thus evaluate BRDF\r
    return vec3(F) * D * ggx_G2(winputR, woutputR, alpha_x, alpha_y) / max(4.0*abs(woutputL.z)*abs(winputL.z), DENOM_TOLERANCE);\r
}\r
\r
\r
vec3 coat_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,\r
                      out vec3 woutputL, out float pdf_woutputL)\r
{\r
    // We assume that the local frame is setup so that the z direction points from the dielectric interior to the exterior.\r
    // Thus we can determine if the reflection is internal or external to the dielectric:\r
    vec3 beamOutgoingL = winputL;\r
    bool external_reflection = (beamOutgoingL.z > 0.0);\r
\r
    // Compute IOR ratio at interface:\r
    //  eta_ti_refl = (IOR in hemi. opposite to reflection) / (IOR in hemi. of reflection)\r
    float n_exterior = 1.0;\r
    float n_interior = coat_ior;\r
    float eta_ti_refl = external_reflection ? n_interior/n_exterior : n_exterior/n_interior;\r
    if (abs(eta_ti_refl - 1.0) < IOR_EPSILON)\r
        return vec3(0.0); // degenerate limit case of index-matched interface, BRDF goes to zero\r
\r
    // Compute the NDF roughnesses in the rotated frame\r
    float alpha_x, alpha_y;\r
    coat_ndf_roughnesses(alpha_x, alpha_y);\r
\r
    // Construct basis such that x, y are aligned with the T, B in the rotated frame\r
    LocalFrameRotation rotation = getLocalFrameRotation(PI2*coat_rotation);\r
    vec3 winputR = localToRotated(winputL, rotation);\r
\r
    // Sample local microfacet normal mR, according to Heitz "Sampling the GGX Distribution of Visible Normals"\r
    vec3 mR = ggx_ndf_sample(winputR, alpha_x, alpha_y, rndSeed);\r
    if (winputR.z > 0.0)\r
        mR = ggx_ndf_sample(winputR, alpha_x, alpha_y, rndSeed);\r
    else\r
        return vec3(0.0); // coat internal reflection ignored (not strictly physical)\r
\r
    // Compute woutputR (and thus woutputL) by reflecting winputR about mR\r
    vec3 woutputR = -winputR + 2.0*dot(winputR, mR)*mR;\r
    if (winputR.z * woutputR.z < FLT_EPSILON)\r
        return vec3(0.0); // no reflection if ray direction in wrong hemisphere (in absence of a multi-scatter approx. currently)\r
\r
    // Rotate woutputR back to local space\r
    woutputL = rotatedToLocal(woutputR, rotation);\r
\r
    // Compute NDF, and "distribution of visible normals" DV\r
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);\r
    float DV = D * ggx_G1(winputR, alpha_x, alpha_y) * abs(dot(winputR, mR)) / max(DENOM_TOLERANCE, abs(winputR.z));\r
\r
    // Compute shadowing-masking term\r
    float G2 = ggx_G2(winputR, woutputR, alpha_x, alpha_y);\r
\r
    // Thus compute PDF of woutputL sample\r
    float dwh_dwo = 1.0 / max(abs(4.0*dot(winputR, mR)), DENOM_TOLERANCE); // Jacobian of the half-direction mapping\r
    pdf_woutputL = DV * dwh_dwo;\r
\r
    // Compute Fresnel factor for the dielectric reflection\r
    float F = FresnelDielectricReflectance(abs(dot(winputR, mR)), eta_ti_refl);\r
\r
    // Thus evaluate BRDF\r
    vec3 f = vec3(F) * D * G2 / max(4.0 * abs(woutputL.z) * abs(winputL.z), DENOM_TOLERANCE);\r
    return f;\r
}\r
\r
\r
vec3 coat_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)\r
{\r
    // Estimate of the BRDF albedo, used to compute the discrete probability of selecting this lobe\r
    float n_exterior = 1.0;\r
    float n_interior = coat_ior;\r
    float eta = n_interior/n_exterior;\r
    if (abs(eta - 1.0) < IOR_EPSILON)\r
    {\r
        // degenerate case of index-matched interface, BRDF goes to zero\r
        return vec3(0.0);\r
    }\r
\r
    // Approximate albedo via Monte-Carlo sampling:\r
    const int num_samples = 1;\r
    vec3 albedo = vec3(0.0);\r
    for (int n=0; n<num_samples; ++n)\r
    {\r
        vec3 woutputL;\r
        float pdf_woutputL;\r
        vec3 f = coat_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_woutputL);\r
        if (length(f) > RADIANCE_EPSILON)\r
            albedo += f * abs(woutputL.z) / max(PDF_EPSILON, pdf_woutputL);\r
    }\r
    albedo /= float(num_samples);\r
    return albedo;\r
}\r
`,ab=`\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// "Metal" conductor microfacet BSDF\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
vec3 FresnelSchlick(vec3 F0, float mu)\r
{\r
    return F0 + pow(1.0 - mu, 5.0)*(vec3(1.0) - F0);\r
}\r
\r
vec3 FresnelF82Tint(float mu, in vec3 F0, in vec3 F82tint)\r
{\r
    const float mu_bar = 1.0/7.0;\r
    const float denom = mu_bar * pow(1.0 - mu_bar, 6.0);\r
    vec3 Fschlick_bar = FresnelSchlick(F0, mu_bar);\r
    vec3 Fschlick     = FresnelSchlick(F0, mu);\r
    return Fschlick - mu * pow(1.0 - mu, 6.0) * (vec3(1.0) - F82tint) * Fschlick_bar / denom;\r
}\r
\r
\r
vec3 metal_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,\r
                         inout float pdf_woutputL)\r
{\r
    if (winputL.z < DENOM_TOLERANCE || woutputL.z < DENOM_TOLERANCE)\r
    {\r
        pdf_woutputL = PDF_EPSILON;\r
        return vec3(0.0);\r
    }\r
\r
    // Construct basis such that x, y are aligned with the T, B in the local, rotated frame\r
    LocalFrameRotation rotation = getLocalFrameRotation(PI2*specular_rotation);\r
    vec3 winputR  = localToRotated(winputL,  rotation);\r
    vec3 woutputR = localToRotated(woutputL, rotation);\r
\r
    // Compute the NDF roughnesses in the rotated frame\r
    // (Note that the metal shares the same NDF as the dielectric/specular base)\r
    float alpha_x, alpha_y;\r
    specular_ndf_roughnesses(alpha_x, alpha_y);\r
\r
    // Compute the micronormal mR in the local (rotated) frame, from the reflection half-vector\r
    vec3 mR = normalize(woutputR + winputR);\r
\r
    // Compute NDF, and "distribution of visible normals" DV\r
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);\r
    float DV = D * ggx_G1(winputR, alpha_x, alpha_y) * max(0.0, dot(winputR, mR)) / max(DENOM_TOLERANCE, winputR.z);\r
\r
    // Thus compute PDF of woutputL sample\r
    float dwh_dwo = 1.0 / max(abs(4.0*dot(winputR, mR)), DENOM_TOLERANCE); // Jacobian of the half-direction mapping\r
    pdf_woutputL = max(PDF_EPSILON, DV * dwh_dwo);\r
\r
    // Compute Fresnel factor for the conductor reflection\r
    vec3 F = FresnelF82Tint(abs(dot(winputR, mR)), base_weight * base_color, specular_weight * specular_color);\r
\r
    // Compute shadowing-masking term\r
    float G2 = ggx_G2(winputR, woutputR, alpha_x, alpha_y);\r
\r
    // Thus evaluate BRDF\r
    return F * D * G2 / max(4.0*abs(woutputL.z)*abs(winputL.z), DENOM_TOLERANCE);\r
}\r
\r
\r
vec3 metal_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,\r
                       out vec3 woutputL, out float pdf_woutputL)\r
{\r
    if (winputL.z < DENOM_TOLERANCE)\r
    {\r
        pdf_woutputL = PDF_EPSILON;\r
        return vec3(0.0);\r
    }\r
\r
    // Compute the NDF roughnesses in the rotated frame\r
    // (Note that the metal shares the same NDF as the dielectric/specular base)\r
    float alpha_x, alpha_y;\r
    specular_ndf_roughnesses(alpha_x, alpha_y);\r
\r
    // Construct basis such that x, y are aligned with the T, B in the rotated frame\r
    LocalFrameRotation rotation = getLocalFrameRotation(PI2*specular_rotation);\r
    vec3 winputR = localToRotated(winputL, rotation);\r
\r
    // Sample local microfacet normal mR, according to Heitz "Sampling the GGX Distribution of Visible Normals"\r
    vec3 mR = ggx_ndf_sample(winputR, alpha_x, alpha_y, rndSeed);\r
\r
    // Compute woutputR (and thus woutputL) by reflecting winputR about mR\r
    vec3 woutputR = -winputR + 2.0*dot(winputR, mR)*mR;\r
    if (winputR.z * woutputR.z < FLT_EPSILON)\r
        return vec3(0.0); // no reflection if ray direction in wrong hemisphere (in absence of a multi-scatter approx. currently)\r
    woutputL = rotatedToLocal(woutputR, rotation);\r
\r
    // Compute NDF, and "distribution of visible normals" DV\r
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);\r
    float DV = D * ggx_G1(winputR, alpha_x, alpha_y) * max(0.0, dot(winputR, mR)) / max(DENOM_TOLERANCE, winputR.z);\r
\r
    // Thus compute PDF of woutputL sample\r
    float dwh_dwo = 1.0 / max(abs(4.0*dot(winputR, mR)), DENOM_TOLERANCE); // Jacobian of the half-direction mapping\r
    pdf_woutputL = max(PDF_EPSILON, DV * dwh_dwo);\r
\r
    // Compute Fresnel factor for the conductor reflection\r
    vec3 F = FresnelF82Tint(abs(dot(winputR, mR)), base_weight * base_color, specular_weight * specular_color);\r
\r
    // Compute shadowing-masking term\r
    float G2 = ggx_G2(winputR, woutputR, alpha_x, alpha_y);\r
\r
    // Thus evaluate BRDF\r
    return F * D * G2 / max(4.0*abs(woutputL.z)*abs(winputL.z), DENOM_TOLERANCE);\r
}\r
\r
\r
vec3 metal_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)\r
{\r
    // Estimate of the BRDF albedo, used to compute the discrete probability of selecting this lobe\r
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0);\r
\r
    // Approximate albedo via Monte-Carlo sampling:\r
    const int num_samples = 1;\r
    vec3 albedo = vec3(0.0);\r
    for (int n=0; n<num_samples; ++n)\r
    {\r
        vec3 woutputL;\r
        float pdf_woutputL;\r
        vec3 f = metal_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_woutputL);\r
        if (length(f) > RADIANCE_EPSILON)\r
            albedo += f * abs(woutputL.z) / max(PDF_EPSILON, pdf_woutputL);\r
    }\r
    albedo /= float(num_samples);\r
    return albedo;\r
}\r
\r
\r
\r
\r
`,lb=`\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// "Specular" dielectric microfacet BRDF\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
\r
void specular_ndf_roughnesses(out float alpha_x, out float alpha_y)\r
{\r
    float rsqr = sqr(specular_roughness);\r
    alpha_x = rsqr * sqrt(2.0/(1.0 + sqr(1.0 - specular_anisotropy)));\r
    alpha_y = (1.0 - specular_anisotropy) * alpha_x;\r
    // (Here opt to clamp to a mininum roughness, rather than deal with a special degenerate case for zero roughness)\r
    const float min_alpha = 1.0e-4;\r
    alpha_x = max(min_alpha, alpha_x);\r
    alpha_y = max(min_alpha, alpha_y);\r
}\r
\r
\r
vec3 specular_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,\r
                            inout float pdf_woutputL)\r
{\r
    bool transmitted = woutputL.z * winputL.z < 0.0;\r
    if (transmitted)\r
        return vec3(0.0);\r
\r
    // We assume that the local frame is setup so that the z direction points from the dielectric interior to the exterior.\r
    // Thus we can determine if the reflection is internal or external to the dielectric:\r
    vec3 beamOutgoingL = winputL;\r
    bool external_reflection = (beamOutgoingL.z > 0.0);\r
\r
    // Compute IOR ratio at interface:\r
    //  eta_ti_refl = (IOR in hemi. opposite to reflection) / (IOR in hemi. of reflection)\r
    float n_exterior = 1.0;\r
    float n_interior = specular_ior;\r
    float eta_ti_refl = external_reflection ? n_interior/n_exterior : n_exterior/n_interior;\r
    if (abs(eta_ti_refl - 1.0) < IOR_EPSILON) // degenerate case of index-matched interface, BRDF goes to zero\r
        return vec3(0.0);\r
\r
    // Non-physical Fresnel tint to apply\r
    vec3 tint = specular_weight * specular_color;\r
\r
   // Compute the NDF roughnesses in the rotated frame\r
    float alpha_x, alpha_y;\r
    specular_ndf_roughnesses(alpha_x, alpha_y);\r
\r
    // Construct basis such that x, y are aligned with the T, B in the local, rotated frame\r
    LocalFrameRotation rotation = getLocalFrameRotation(PI2 * specular_rotation);\r
    vec3 winputR  = localToRotated(winputL,  rotation);\r
    vec3 woutputR = localToRotated(woutputL, rotation);\r
\r
    // Compute the micronormal mR in the local (rotated) frame, from the reflection half-vector\r
    vec3 mR = normalize(woutputR + winputR);\r
\r
    // Discard backfacing microfacets\r
    if (dot(mR, winputR) * winputR.z < 0.0 || dot(mR, woutputR) * woutputR.z < 0.0)\r
        return vec3(0.0);\r
\r
    // Compute NDF\r
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);\r
    float DV = D * ggx_G1(winputR, alpha_x, alpha_y) * max(0.0, dot(winputR, mR)) / max(DENOM_TOLERANCE, winputR.z);\r
\r
    // Thus compute PDF of woutputL sample\r
    float dwh_dwo = 1.0 / max(abs(4.0*dot(winputR, mR)), DENOM_TOLERANCE); // Jacobian of the half-direction mapping\r
    pdf_woutputL = DV * dwh_dwo;\r
\r
    // Compute shadowing-masking term\r
    float G2 = ggx_G2(winputR, woutputR, alpha_x, alpha_y);\r
\r
    // Compute Fresnel factor for the dielectric reflection\r
    float F = FresnelDielectricReflectance(abs(dot(winputR, mR)), eta_ti_refl);\r
\r
    // Thus evaluate BRDF.\r
    float f = F * D * G2 / max(4.0 * abs(woutputL.z) * abs(winputL.z), DENOM_TOLERANCE);\r
    return f * tint;\r
}\r
\r
\r
vec3 specular_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,\r
                          out vec3 woutputL, out float pdf_woutputL)\r
{\r
    // We assume that the local frame is setup so that the z direction points from the dielectric interior to the exterior.\r
    // Thus we can determine if the reflection is internal or external to the dielectric:\r
    vec3 beamOutgoingL = winputL;\r
    bool external_reflection = (beamOutgoingL.z > 0.0);\r
\r
    // Compute IOR ratio at interface:\r
    //  eta_ti_refl = (IOR in hemi. opposite to reflection) / (IOR in hemi. of reflection)\r
    float n_exterior = 1.0;\r
    float n_interior = specular_ior;\r
    float eta_ti_refl = external_reflection ? n_interior/n_exterior : n_exterior/n_interior;\r
    if (abs(eta_ti_refl - 1.0) < IOR_EPSILON) // degenerate case of index-matched interface, BRDF goes to zero\r
        return vec3(0.0);\r
\r
    // Non-physical Fresnel tint to apply\r
    vec3 tint = specular_weight * specular_color;\r
\r
    // Compute the NDF roughnesses in the rotated frame\r
    float alpha_x, alpha_y;\r
    specular_ndf_roughnesses(alpha_x, alpha_y);\r
\r
    // Construct basis such that x, y are aligned with the T, B in the rotated frame\r
    LocalFrameRotation rotation = getLocalFrameRotation(PI2 * specular_rotation);\r
    vec3 winputR = localToRotated(winputL, rotation);\r
\r
    // Sample local microfacet normal mR, according to Heitz "Sampling the GGX Distribution of Visible Normals"\r
    vec3 mR;\r
    if (winputR.z > 0.0)\r
        mR = ggx_ndf_sample(winputR, alpha_x, alpha_y, rndSeed);\r
    else\r
    {\r
        // GGX sampling in negative hemisphere\r
        vec3 winputR_reflected = winputR;\r
        winputR_reflected.z *= -1.0;\r
        mR = ggx_ndf_sample(winputR_reflected, alpha_x, alpha_y, rndSeed);\r
        mR.z *= -1.0;\r
    }\r
\r
    // Compute woutputR (and thus woutputL) by reflecting winputR about mR\r
    vec3 woutputR = -winputR + 2.0*dot(winputR, mR)*mR;\r
    if (winputR.z * woutputR.z < 0.0)\r
    {\r
        pdf_woutputL = 1.0;\r
        return vec3(0.0);\r
    }\r
\r
    // Rotate woutputR back to local space\r
    woutputL = rotatedToLocal(woutputR, rotation);\r
\r
    // Compute NDF, and "distribution of visible normals" DV\r
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);\r
    float DV = D * ggx_G1(winputR, alpha_x, alpha_y) * abs(dot(winputR, mR)) / max(DENOM_TOLERANCE, abs(winputR.z));\r
\r
    // Thus compute PDF of woutputL sample\r
    float dwh_dwo = 1.0 / max(abs(4.0*dot(winputR, mR)), DENOM_TOLERANCE); // Jacobian of the half-direction mapping\r
    pdf_woutputL = DV * dwh_dwo;\r
\r
    // Compute shadowing-masking term\r
    float G2 = ggx_G2(winputR, woutputR, alpha_x, alpha_y);\r
\r
    // Compute Fresnel factor for the dielectric reflection\r
    float F = FresnelDielectricReflectance(abs(dot(winputR, mR)), eta_ti_refl);\r
\r
     // Thus evaluate BRDF.\r
    float f = F * D * G2 / max(4.0 * abs(woutputL.z) * abs(winputL.z), DENOM_TOLERANCE);\r
    return f * tint;\r
}\r
\r
\r
vec3 specular_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)\r
{\r
    // Estimate of the BRDF albedo, used to compute the discrete probability of selecting this lobe\r
    float n_exterior = 1.0;\r
    float n_interior = specular_ior;\r
    float eta = n_interior/n_exterior;\r
    if (abs(eta - 1.0) < IOR_EPSILON)\r
    {\r
        // degenerate case of index-matched interface, BRDF goes to zero\r
        return vec3(0.0);\r
    }\r
\r
    // Approximate albedo via Monte-Carlo sampling:\r
    const int num_samples = 1;\r
    vec3 albedo = vec3(0.0);\r
    for (int n=0; n<num_samples; ++n)\r
    {\r
        vec3 woutputL;\r
        float pdf_woutputL;\r
        vec3 f = specular_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_woutputL);\r
        if (length(f) > RADIANCE_EPSILON)\r
            albedo += f * abs(woutputL.z) / max(DENOM_TOLERANCE, pdf_woutputL);\r
    }\r
    albedo /= float(num_samples);\r
    return albedo;\r
}\r
`,cb=`\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// "Specular" dielectric microfacet BTDF\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
\r
vec3 specular_btdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,\r
                            inout float pdf_woutputL)\r
{\r
    bool reflected = woutputL.z * winputL.z > 0.0;\r
    if (reflected)\r
    {\r
        pdf_woutputL = 1.0;\r
        return vec3(0.0);\r
    }\r
\r
    // We assume that the local frame is setup so that the z direction points from the dielectric interior to the exterior.\r
    // Thus we can determine if the photon transmission is to the exterior (from the interior), or the opposite:\r
    vec3 beamOutgoingL = winputL;\r
    bool external_transmission = (beamOutgoingL.z > 0.0);\r
\r
    // Compute IOR ratio at interface:\r
    //  eta_ti_photon = (IOR in hemi. of transmitted photon) / (IOR in hemi. of incident photon)\r
    float n_exterior = 1.0;\r
    float n_interior = specular_ior_dispersive();\r
    float eta_ti_photon = external_transmission ? n_exterior/n_interior : n_interior/n_exterior;\r
    if (abs(eta_ti_photon - 1.0) < IOR_EPSILON)\r
    {\r
        // degenerate case of index-matched interface, BTDF is a delta-function\r
        vec3 tint = (transmission_depth == 0.0) ? transmission_color : vec3(1.0);\r
        pdf_woutputL = 1.0/PDF_EPSILON;\r
        return tint * pdf_woutputL / max(DENOM_TOLERANCE, abs(woutputL.z));\r
    }\r
\r
    // Construct basis such that x, y are aligned with the T, B in the local, rotated frame\r
    LocalFrameRotation rotation = getLocalFrameRotation(PI2 * specular_rotation);\r
    vec3 winputR  = localToRotated(winputL,  rotation);\r
    vec3 woutputR = localToRotated(woutputL, rotation);\r
\r
    // Compute the micronormal mR in the local (rotated) frame, such that -woutputR is refracted to winputR\r
    vec3 beamIncidentR = -woutputR;\r
    vec3 beamOutgoingR = winputR;\r
    vec3 mR = beamIncidentR - eta_ti_photon*beamOutgoingR;\r
    if (dot(mR, mR) == 0.0)\r
        return vec3(0.0);\r
    mR = safe_normalize(mR);\r
    if (mR.z <= 0.0) mR *= -1.0; // orient the micronormal into the positive hemisphere\r
\r
    // Compute Jacobian of the half-direction mapping\r
    float im = dot(-beamIncidentR, mR);\r
    float dwh_dwo;\r
    {\r
        float om = dot(beamOutgoingR, mR);\r
        dwh_dwo = sqr(eta_ti_photon) * abs(om) / max(sqr(im + eta_ti_photon*om), DENOM_TOLERANCE);\r
    }\r
\r
    // Compute the NDF roughnesses in the rotated frame\r
    float alpha_x, alpha_y;\r
    specular_ndf_roughnesses(alpha_x, alpha_y);\r
    float roughness = specular_roughness;\r
\r
    // Compute NDF, and "distribution of visible normals" DV\r
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);\r
    float DV = D * ggx_G1(winputR, alpha_x, alpha_y) * max(0.0, dot(winputR, mR)) / max(DENOM_TOLERANCE, abs(winputR.z));\r
\r
    // Thus compute PDF of woutputL sample\r
    pdf_woutputL = DV * dwh_dwo;\r
\r
    // Compute shadowing-masking term\r
    float G2 = ggx_G2(winputR, woutputR, alpha_x, alpha_y);\r
\r
    // Compute Fresnel factor for the dielectric transmission (from that of the corresponding time-reversed reflection)\r
    float eta_ti_refl = 1.0 / eta_ti_photon;\r
    float T = max(0.0, 1.0 - FresnelDielectricReflectance(abs(dot(winputR, mR)), eta_ti_refl));\r
\r
    // Thus evaluate BTDF.\r
    float f = T * abs(dot(winputR, mR)) * dwh_dwo * G2 * D / max(abs(woutputL.z) * abs(winputL.z), DENOM_TOLERANCE);\r
\r
    // Apply non-physical tint in zero transmission_depth case\r
    vec3 tint = (transmission_depth == 0.0) ? transmission_color : vec3(1.0);\r
    return f * tint;\r
}\r
\r
\r
// Given the direction (wt) of a light beam transmitted through a plane dielectric interface\r
// with the given normal (n) in any orientation, and the ratio eta_ti_photon = nt/ni of the transmitted IOR (nt) and incident IOR (ni),\r
// compute the direction of the incident light beam (wi). Returns false if no such beam exists, due to total internal reflection.\r
bool refraction_given_transmitted_beam(in vec3 n, in float eta_ti_photon, in vec3 wt, inout vec3 wi)\r
{\r
    float wtn = dot(wt, n);\r
    float disciminant = 1.0 - sqr(eta_ti_photon)*(1.0 - sqr(wtn));\r
    if (disciminant < 0.0) return false;\r
    wi = eta_ti_photon*wt - n*sign(wtn)*(eta_ti_photon*abs(wtn) - sqrt(disciminant));\r
    return true;\r
}\r
\r
\r
vec3 specular_btdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,\r
                          out vec3 woutputL, out float pdf_woutputL)\r
{\r
    // We assume that the local frame is setup so that the z direction points from the dielectric interior to the exterior.\r
    // Thus we can determine if the photon transmission is to the exterior (from the interior), or the opposite:\r
    vec3 beamOutgoingL = winputL;\r
    bool external_transmission = (beamOutgoingL.z > 0.0);\r
\r
    // Compute IOR ratio at interface:\r
    //  eta_ti_photon = (IOR in hemi. of transmitted photon) / (IOR in hemi. of incident photon)\r
    float n_exterior = 1.0;\r
    float n_interior = specular_ior_dispersive();\r
    float eta_ti_photon = external_transmission ? n_exterior/n_interior : n_interior/n_exterior;\r
    if (abs(eta_ti_photon - 1.0) < IOR_EPSILON)\r
    {\r
        // degenerate case of index-matched interface, BTDF is a delta-function\r
        woutputL = -winputL;\r
        pdf_woutputL = 1.0 / PDF_EPSILON;\r
        vec3 tint = (transmission_depth == 0.0) ? transmission_color : vec3(1.0);\r
        return tint * pdf_woutputL / max(DENOM_TOLERANCE, abs(woutputL.z));\r
    }\r
\r
    // Construct basis such that x, y are aligned with the T, B in the rotated frame\r
    LocalFrameRotation rotation = getLocalFrameRotation(PI2 * specular_rotation);\r
    vec3 winputR = localToRotated(winputL, rotation);\r
\r
    // Compute the NDF roughnesses in the rotated frame\r
    float alpha_x, alpha_y;\r
    specular_ndf_roughnesses(alpha_x, alpha_y);\r
\r
    // Sample local microfacet normal mR, according to Heitz "Sampling the GGX Distribution of Visible Normals"\r
    vec3 mR;\r
    if (winputR.z > 0.0)\r
        mR = ggx_ndf_sample(winputR, alpha_x, alpha_y, rndSeed);\r
    else\r
    {\r
        vec3 winputR_reflected = winputR;\r
        winputR_reflected.z *= -1.0;\r
        mR = ggx_ndf_sample(winputR_reflected, alpha_x, alpha_y, rndSeed);\r
        mR.z *= -1.0;\r
    }\r
\r
    // Compute the direction of the ray refracted through the microfacet, woutputL\r
    vec3 beamOutgoingR = winputR;\r
    vec3 beamIncidentR; // the incident photon direction, to be determined (where woutputR = -beamIncidentR)\r
    if (!refraction_given_transmitted_beam(mR, eta_ti_photon, beamOutgoingR, beamIncidentR))\r
    {\r
        // The case of a TIR configuration, in which case no transmission occurs\r
        pdf_woutputL = PDF_EPSILON;\r
        return vec3(0.0);\r
    }\r
    vec3 woutputR = -safe_normalize(beamIncidentR);\r
    woutputL = rotatedToLocal(woutputR, rotation); // refracted ray direction\r
\r
    // Compute NDF, and "distribution of visible normals" DV\r
    float D = ggx_ndf_eval(mR, alpha_x, alpha_y);\r
    float DV = D * ggx_G1(winputR, alpha_x, alpha_y) * abs(dot(winputR, mR)) / max(DENOM_TOLERANCE, abs(winputR.z));\r
\r
    // Compute Jacobian of the half-direction mapping\r
    float im = dot(-beamIncidentR, mR);\r
    float dwh_dwo;\r
    {\r
        float om = dot(beamOutgoingR, mR);\r
        dwh_dwo = sqr(eta_ti_photon) * abs(om) / max(sqr(im + eta_ti_photon*om), DENOM_TOLERANCE);\r
    }\r
\r
    // Thus compute PDF of woutputL sample\r
    pdf_woutputL = DV * dwh_dwo;\r
\r
    // Compute shadowing-masking term\r
    float G2 = ggx_G2(winputR, woutputR, alpha_x, alpha_y);\r
\r
    // Compute Fresnel factor for the dielectric transmission (from that of the corresponding time-reversed reflection)\r
    float eta_ti_refl = 1.0 / eta_ti_photon;\r
    float T = max(0.0, 1.0 - FresnelDielectricReflectance(abs(dot(winputR, mR)), eta_ti_refl));\r
\r
    // Thus evaluate BTDF.\r
    float f = T * abs(dot(winputR, mR)) * dwh_dwo * G2 * D / max(abs(woutputL.z) * abs(winputL.z), DENOM_TOLERANCE);\r
\r
    // Apply non-physical tint in zero transmission_depth case\r
    vec3 tint = (transmission_depth == 0.0) ? transmission_color : vec3(1.0);\r
    return f * tint;\r
}\r
\r
\r
vec3 specular_btdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)\r
{\r
    // Estimate of the BTDF albedo, used to compute the discrete probability of selecting this lobe\r
    float n_exterior = 1.0;\r
    float n_interior = specular_ior_dispersive();\r
    float eta = n_interior/n_exterior;\r
    if (abs(eta - 1.0) < IOR_EPSILON)\r
    {\r
        // degenerate case of index-matched interface, BTDF is a delta-function\r
        vec3 tint = (transmission_depth == 0.0) ? transmission_color : vec3(1.0);\r
        return tint;\r
    }\r
\r
    // Approximate albedo via Monte-Carlo sampling:\r
    const int num_samples = 1;\r
    vec3 albedo = vec3(0.0);\r
    for (int n=0; n<num_samples; ++n)\r
    {\r
        vec3 woutputL;\r
        float pdf_woutputL;\r
        vec3 f = specular_btdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_woutputL);\r
        if (length(f) > RADIANCE_EPSILON)\r
            albedo += f * abs(woutputL.z) / max(DENOM_TOLERANCE, pdf_woutputL);\r
    }\r
    albedo /= float(num_samples);\r
    return albedo;\r
}\r
`,ub=`\r
\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// "diffuse" - Oren-Nayar BRDF\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
\r
vec3 oren_nayar_eval(in vec3 woutputL, in vec3 winputL)\r
{\r
    float sigma = base_roughness * PI;\r
    float sigma2 = sqr(sigma);\r
    float A = 1.0 - (sigma2 / (2.0 * (sigma2 + 0.33)));\r
    float B = 0.45 * sigma2 / (sigma2 + 0.09);\r
    float sinThetaI = sinTheta(winputL);\r
    float sinThetaO = sinTheta(woutputL);\r
    float maxCos = 0.0;\r
    if (sinThetaI > 1e-4 && sinThetaO > 1e-4)\r
    {\r
        float sinPhiI = sinPhi(winputL);  float cosPhiI = cosPhi(winputL);\r
        float sinPhiO = sinPhi(woutputL); float cosPhiO = cosPhi(woutputL);\r
        float dCos = cosPhiI * cosPhiO + sinPhiI * sinPhiO;\r
        maxCos = max(0.0, dCos);\r
    }\r
    float sinAlpha, tanBeta;\r
    if (abs(cosTheta(winputL)) > abs(cosTheta(woutputL)))\r
    {\r
        sinAlpha = sinThetaO;\r
        tanBeta = sinThetaI / abs(cosTheta(winputL));\r
    }\r
    else\r
    {\r
        sinAlpha = sinThetaI;\r
        tanBeta = sinThetaO / abs(cosTheta(woutputL));\r
    }\r
    return base_weight * base_color / PI * (A + B * maxCos * sinAlpha * tanBeta);\r
}\r
\r
\r
vec3 diffuse_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,\r
                           inout float pdf_woutputL)\r
{\r
    if (winputL.z < DENOM_TOLERANCE || woutputL.z < DENOM_TOLERANCE) return vec3(0.0);\r
    pdf_woutputL = pdfHemisphereCosineWeighted(woutputL);\r
    return oren_nayar_eval(winputL, woutputL);\r
}\r
\r
\r
vec3 diffuse_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,\r
                         out vec3 woutputL, out float pdf_woutputL)\r
{\r
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0);\r
    woutputL = sampleHemisphereCosineWeighted(rndSeed, pdf_woutputL);\r
    return oren_nayar_eval(winputL, woutputL);\r
}\r
\r
\r
vec3 diffuse_brdf_albedo(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)\r
{\r
    // Estimate of the BRDF albedo, used to compute the discrete probability of selecting this lobe\r
    if (winputL.z < DENOM_TOLERANCE) return vec3(0.0);\r
    return base_weight * base_color;\r
}\r
`,hb=`\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// OpenPBR BSDF\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
\r
const int ID_FUZZ_BRDF = 0;\r
const int ID_COAT_BRDF = 1;\r
const int ID_META_BRDF = 2;\r
const int ID_SPEC_BRDF = 3;\r
const int ID_SPEC_BTDF = 4;\r
const int ID_DIFF_BRDF = 5;\r
const int ID_SSSC_BTDF = 6;\r
const int NUM_LOBES    = 7;\r
\r
// Weight multipliers of individual BSDF lobes\r
struct LobeWeights\r
{\r
    vec3 m[7];\r
};\r
\r
// Albedos of individual BDSF lobes\r
struct LobeAlbedos\r
{\r
    vec3 m[7];\r
};\r
\r
// Probabilities of individual BDSF lobes\r
struct LobeProbs\r
{\r
    float m[7];\r
};\r
\r
struct LobePDFs\r
{\r
    float m[7];\r
};\r
\r
LobeWeights lobe_weights;\r
LobeAlbedos lobe_albedos;\r
LobeProbs   lobe_probs;\r
\r
\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// OpenPBR BSDF: preparation\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
// Construct weights of individual BSDF lobes, according to OpenPBR surface model (in the non-reciprocal albedo-scaling approximation).\r
// Also compute the albedos of the (non-zero weight) lobes.\r
void openpbr_lobe_weights(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,\r
                          inout LobeWeights weights, inout LobeAlbedos albedos)\r
{\r
    // Surface //////////////////////\r
\r
    // Fuzz BRDF\r
    weights.m[ID_FUZZ_BRDF] = vec3(0.0); // fuzz_weight;\r
    if (maxComponent(weights.m[ID_FUZZ_BRDF]) > 0.0) albedos.m[ID_FUZZ_BRDF] = vec3(0.0); //fuzz_brdf_albedo(pW, basis, winputL, rndSeed);\r
    else                                             albedos.m[ID_FUZZ_BRDF] = vec3(0.0);\r
\r
    // Coated base //////////////////////\r
    vec3 w_coated_base = vec3(1.0); //mix(vec3(1.0), vec3(1.0) - albedos.m[ID_FUZZ_BRDF], fuzz_weight);\r
\r
    // Coat BRDF\r
    weights.m[ID_COAT_BRDF] = w_coated_base * coat_weight;\r
    albedos.m[ID_COAT_BRDF] = (maxComponent(weights.m[ID_COAT_BRDF]) > 0.0) ? coat_brdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);\r
\r
    // Base substrate //////////////////////\r
    vec3 w_base_substrate = w_coated_base * mix(vec3(1.0), coat_color*(vec3(1.0) - albedos.m[ID_COAT_BRDF]), coat_weight);\r
\r
    // Metal BRDF\r
    weights.m[ID_META_BRDF] = w_base_substrate * base_metalness;\r
    albedos.m[ID_META_BRDF] = (maxComponent(weights.m[ID_META_BRDF]) > 0.0) ? metal_brdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);\r
\r
    // Dielectric base //////////////////////\r
    vec3 w_dielectric_base = w_base_substrate * vec3(max(0.0, 1.0 - base_metalness));\r
\r
    // Specular BRDF\r
    weights.m[ID_SPEC_BRDF] = w_dielectric_base;\r
    albedos.m[ID_SPEC_BRDF] = (maxComponent(weights.m[ID_SPEC_BRDF]) > 0.0) ? specular_brdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);\r
\r
    // Specular BTDF\r
    weights.m[ID_SPEC_BTDF] = w_dielectric_base * transmission_weight;\r
    albedos.m[ID_SPEC_BTDF] = (maxComponent(weights.m[ID_SPEC_BTDF]) > 0.0) ? specular_btdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);\r
\r
    // Opaque dielectric base //////////////////////\r
    vec3 w_opaque_dielectric_base = w_dielectric_base * (1.0 - transmission_weight);\r
\r
    // Subsurface BSSRDF\r
    //  - the subsurface lobe is identical to the specular BTDF, apart from the associated internal volumetric medium\r
    weights.m[ID_SSSC_BTDF] = w_opaque_dielectric_base * subsurface_weight;\r
    albedos.m[ID_SSSC_BTDF] = (maxComponent(weights.m[ID_SSSC_BTDF]) > 0.0) ? specular_btdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);\r
\r
    // Diffuse BRDF\r
    weights.m[ID_DIFF_BRDF] = w_opaque_dielectric_base * (1.0 - subsurface_weight) * (vec3(1.0) - albedos.m[ID_SPEC_BRDF]);\r
    albedos.m[ID_DIFF_BRDF] = (maxComponent(weights.m[ID_DIFF_BRDF]) > 0.0) ? diffuse_brdf_albedo(pW, basis, winputL, rndSeed) : vec3(0.0);\r
}\r
\r
\r
void openpbr_lobe_probabilities(in LobeWeights weights, in LobeAlbedos albedos,\r
                                inout LobeProbs probs)\r
{\r
    // Compute probability of sampling each lobe, according to its albedo\r
    float W_total = 0.0;\r
    for (int lobe_id=0; lobe_id<NUM_LOBES; ++lobe_id)\r
    {\r
        probs.m[lobe_id] = length(weights.m[lobe_id] * albedos.m[lobe_id]);\r
        W_total += probs.m[lobe_id];\r
    }\r
    W_total = max(DENOM_TOLERANCE, W_total);\r
    for (int lobe_id=0; lobe_id<NUM_LOBES; ++lobe_id)\r
        probs.m[lobe_id] /= W_total;\r
}\r
\r
void openpbr_prepare(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed)\r
{\r
    // Compute the mixture weights and albedos for each lobe\r
    openpbr_lobe_weights(pW, basis, winputL, rndSeed, lobe_weights, lobe_albedos);\r
\r
    // Thus compute the discrete sampling probability for each lobe\r
    openpbr_lobe_probabilities(lobe_weights, lobe_albedos, lobe_probs);\r
}\r
\r
bool openpbr_is_opaque()\r
{\r
    if (transmission_weight > 0.0) return false;\r
    if (subsurface_weight > 0.0) return false;\r
    if (geometry_opacity < 1.0) return false;\r
    return true;\r
}\r
\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// OpenPBR BSDF: evaluation\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
vec3 openpbr_bsdf_evaluate_lobes(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,\r
                                 in int skip_lobe_id, inout LobePDFs pdfs)\r
{\r
    vec3 f = vec3(0.0);\r
    if (skip_lobe_id != ID_FUZZ_BRDF && lobe_probs.m[ID_FUZZ_BRDF] > 0.0) f += vec3(0.0);\r
    if (skip_lobe_id != ID_COAT_BRDF && lobe_probs.m[ID_COAT_BRDF] > 0.0) f += lobe_weights.m[ID_COAT_BRDF] *     coat_brdf_evaluate(pW, basis, winputL, woutputL, pdfs.m[ID_COAT_BRDF]);\r
    if (skip_lobe_id != ID_META_BRDF && lobe_probs.m[ID_META_BRDF] > 0.0) f += lobe_weights.m[ID_META_BRDF] *    metal_brdf_evaluate(pW, basis, winputL, woutputL, pdfs.m[ID_META_BRDF]);\r
    if (skip_lobe_id != ID_SPEC_BRDF && lobe_probs.m[ID_SPEC_BRDF] > 0.0) f += lobe_weights.m[ID_SPEC_BRDF] * specular_brdf_evaluate(pW, basis, winputL, woutputL, pdfs.m[ID_SPEC_BRDF]);\r
    if (skip_lobe_id != ID_DIFF_BRDF && lobe_probs.m[ID_DIFF_BRDF] > 0.0) f += lobe_weights.m[ID_DIFF_BRDF] *  diffuse_brdf_evaluate(pW, basis, winputL, woutputL, pdfs.m[ID_DIFF_BRDF]);\r
\r
    bool eval_spec_btdf = (skip_lobe_id != ID_SPEC_BTDF && lobe_probs.m[ID_SPEC_BTDF] > 0.0);\r
    bool eval_sssc_btdf = (skip_lobe_id != ID_SSSC_BTDF && lobe_probs.m[ID_SSSC_BTDF] > 0.0);\r
    bool eval_transmission = eval_spec_btdf || eval_sssc_btdf;\r
    if (eval_transmission)\r
    {\r
        vec3 f_spec_btdf = specular_btdf_evaluate(pW, basis, winputL, woutputL, pdfs.m[ID_SPEC_BTDF]);\r
        if (eval_spec_btdf) f += lobe_weights.m[ID_SPEC_BTDF] * f_spec_btdf;\r
        if (eval_sssc_btdf) f += lobe_weights.m[ID_SSSC_BTDF] * f_spec_btdf;\r
    }\r
    return f;\r
 }\r
\r
float openpbr_bsdf_total_pdf(in LobePDFs pdfs)\r
{\r
    // Compute total PDF of sampled output direction (according to 1-sample MIS)\r
    float pdf_woutputL = 0.0;\r
    for (int lobe_id=0; lobe_id<NUM_LOBES; ++lobe_id)\r
        pdf_woutputL += lobe_probs.m[lobe_id] * pdfs.m[lobe_id];\r
    return pdf_woutputL;\r
}\r
\r
vec3 openpbr_bsdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,\r
                           inout float pdf_woutputL)\r
{\r
    LobePDFs pdfs;\r
    vec3 f = openpbr_bsdf_evaluate_lobes(pW, basis, winputL, woutputL, -1, pdfs);\r
    pdf_woutputL = openpbr_bsdf_total_pdf(pdfs);\r
    return f;\r
}\r
\r
\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// OpenPBR BSDF: sampling\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
\r
vec3 openpbr_bsdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,\r
                         out vec3 woutputL, out float pdf_woutputL, out Volume internal_medium)\r
{\r
    // Sample a lobe according to these probabilities.\r
    // Also compute PDF of all other lobes in the sampled direction.\r
    float X = rand(rndSeed);\r
    float CDF = 0.0;\r
    for (int lobe_id=0; lobe_id<NUM_LOBES; ++lobe_id)\r
    {\r
        CDF += lobe_probs.m[lobe_id];\r
        if (X < CDF)\r
        {\r
            // Sample this lobe for the output direction woutputL, and corresponding (f_lobe, pdf_lobe)\r
            float pdf_lobe;\r
            vec3 f_lobe;\r
            if      (lobe_id==ID_FUZZ_BRDF) {}\r
            else if (lobe_id==ID_COAT_BRDF) { f_lobe =     coat_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_lobe); }\r
            else if (lobe_id==ID_META_BRDF) { f_lobe =    metal_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_lobe); }\r
            else if (lobe_id==ID_SPEC_BRDF) { f_lobe = specular_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_lobe); }\r
            else if (lobe_id==ID_SPEC_BTDF ||\r
                     lobe_id==ID_SSSC_BTDF) { f_lobe = specular_btdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_lobe); }\r
            else if (lobe_id==ID_DIFF_BRDF) { f_lobe =  diffuse_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_lobe); }\r
            else { break; }\r
\r
            // Evaluate the value and PDF of all other lobes at the sampled woutputL\r
            LobePDFs pdfs;\r
            int skip_lobe_id = lobe_id;\r
            vec3 f = openpbr_bsdf_evaluate_lobes(pW, basis, winputL, woutputL, skip_lobe_id, pdfs);\r
            f += lobe_weights.m[lobe_id] * f_lobe;\r
            pdfs.m[lobe_id] = pdf_lobe;\r
\r
            // Thus compute the value and PDF of the total BRDF, according to 1-sample MIS:\r
            pdf_woutputL = openpbr_bsdf_total_pdf(pdfs);\r
\r
            // If the specular BTDF or SSS lobe were sampled, producing a transmission into the object interior,\r
            // we also populate the associated volumetric bulk medium\r
            bool transmitted = woutputL.z * winputL.z < 0.0;\r
            bool transmitted_inside = transmitted && woutputL.z < 0.0;\r
            if (!transmitted_inside)\r
                return f;\r
\r
            // But if the specular BTDF or SSS lobe were sampled, producing a transmission into the object interior,\r
            // we also populate the associated volumetric bulk medium\r
            if (lobe_id==ID_SPEC_BTDF)\r
            {\r
                // Set up the volumetric medium according to the "Translucent Base" section of the OpenPBR spec\r
                if (transmission_depth > 0.0)\r
                {\r
                    vec3 mu_t = -log(transmission_color) / transmission_depth;\r
                    vec3 mu_s = transmission_scatter / transmission_depth;\r
                    vec3 mu_a = mu_t - mu_s;\r
                    if (minComponent(mu_a) < 0.0)\r
                        mu_a = mu_a - vec3(minComponent(mu_a));\r
                    internal_medium.extinction = mu_a + mu_s;\r
                    internal_medium.albedo = mu_s / (mu_a + mu_s);\r
                    internal_medium.anisotropy = transmission_scatter_anisotropy;\r
                }\r
                else\r
                    internal_medium.extinction = vec3(0.0);\r
            }\r
\r
            // Set up the volumetric medium according to the "Subsurface" section of the OpenPBR spec\r
            else if (lobe_id==ID_SSSC_BTDF)\r
            {\r
                float g = clamp(subsurface_anisotropy, -0.95, 0.95);           // scattering anisotropy\r
                vec3 A = subsurface_color;                                     // multi-scatter albedo\r
                vec3 r = subsurface_radius * subsurface_radius_scale;          // diffusion radius\r
                vec3 A2 = A*A;\r
                vec3 A3 = A*A2;\r
                vec3 A4 = A2*A2;\r
                vec3 S = 4.012 - 15.21*A + 32.34*A2 - 34.68*A3 + 13.91*A4;     // Hyperion fit for scale factor S = L / diffusion_lengths\r
                vec3 s2 = exp(-11.43*A + 15.38*A2 - 13.91*A3);                 // Hyperion fit for one minus single scatter albedo\r
                vec3 L = S * r;                                                // MFPs according to Hyperion paper\r
                vec3 alpha = (1.0 - s2);                                       // Hyperion fit for single scatter albedo\r
                //vec3 mu_t = 1.0 / max(vec3(3.0*RAY_OFFSET), L);              // OpenPBR extinction remapping\r
                vec3 mu_t = 1.0 / max(vec3(3.0*RAY_OFFSET), r);                // (v2)\r
                internal_medium.albedo     = alpha / (1.0 - g*s2);             // remapped single-scattering albedo\r
                internal_medium.extinction = mu_t * (1.0 - g*s2) / (1.0 - g);  // remapped extinction\r
                internal_medium.anisotropy = g;\r
            }\r
\r
            return f;\r
        }\r
    }\r
    pdf_woutputL = 1.0;\r
    return vec3(0.0);\r
}\r
\r
\r
`,fb=`\r
/////////////////////////////////////////////////////////////////////////\r
// Raytracing routines\r
/////////////////////////////////////////////////////////////////////////\r
\r
bool bvhIntersectFirstHitWithinDistance(\r
	BVH bvh, vec3 rayOrigin, vec3 rayDirection, in float maxDistance,\r
	// output variables\r
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,\r
	inout float side, inout float dist)\r
{\r
	// stack needs to be twice as long as the deepest tree we expect because\r
	// we push both the left and right child onto the stack every traversal\r
	int ptr = 0;\r
	uint stack[ 60 ];\r
	stack[ 0 ] = 0u;\r
	float triangleDistance = 1e20;\r
	bool found = false;\r
	while (ptr > - 1 && ptr < 60)\r
    {\r
		uint currNodeIndex = stack[ ptr ];\r
		ptr --;\r
		// check if we intersect the current bounds\r
		float boundsHitDistance = intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh, currNodeIndex );\r
		if (boundsHitDistance == INFINITY ||\r
            boundsHitDistance > triangleDistance ||\r
            boundsHitDistance > maxDistance)\r
		        continue;\r
		uvec2 boundsInfo = uTexelFetch1D( bvh.bvhContents, currNodeIndex ).xy;\r
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );\r
		if (isLeaf)\r
        {\r
			uint count = boundsInfo.x & 0x0000ffffu;\r
			uint offset = boundsInfo.y;\r
            float minDistance = min(maxDistance, triangleDistance);\r
            bool found_intersection = intersectTriangles(bvh, rayOrigin, rayDirection, offset, count, minDistance,\r
				                                         faceIndices, faceNormal, barycoord, side, dist);\r
            if (found_intersection)\r
            {\r
                triangleDistance = minDistance;\r
                found = true;\r
            }\r
		}\r
        else\r
        {\r
			uint leftIndex = currNodeIndex + 1u;\r
			uint splitAxis = boundsInfo.x & 0x0000ffffu;\r
			uint rightIndex = boundsInfo.y;\r
			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;\r
			uint c1 = leftToRight ? leftIndex : rightIndex;\r
			uint c2 = leftToRight ? rightIndex : leftIndex;\r
			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in\r
			// the stack while we traverse. The second pointer added is the one that will be\r
			// traversed first\r
			ptr ++;\r
			stack[ ptr ] = c2;\r
			ptr ++;\r
			stack[ ptr ] = c1;\r
		}\r
	}\r
	return found;\r
}\r
\r
bool trace(in vec3 rayOrigin, in vec3 rayDir, in float maxDistance,\r
            out vec3 P, out vec3 Ns, out vec3 Ng, out vec3 Ts, out vec3 baryCoord, out int material)\r
{\r
    // hit results\r
    uvec4 faceIndices_surface = uvec4(0u);\r
    vec3   faceNormal_surface = vec3(0.0, 0.0, 1.0);\r
    vec3    barycoord_surface = vec3(0.0);\r
    float        side_surface = 1.0;\r
    float        dist_surface = HUGE_DIST;\r
    bool hit_surface = bvhIntersectFirstHitWithinDistance( bvh_surface, rayOrigin, rayDir, maxDistance,\r
                                                           faceIndices_surface, faceNormal_surface, barycoord_surface, side_surface, dist_surface );\r
    uvec4 faceIndices_props = uvec4(0u);\r
    vec3   faceNormal_props = vec3(0.0, 0.0, 1.0);\r
    vec3    barycoord_props = vec3(0.0);\r
    float        side_props = 1.0;\r
    float        dist_props = HUGE_DIST;\r
    bool hit_props = bvhIntersectFirstHitWithinDistance( bvh_props, rayOrigin, rayDir, min(dist_surface, maxDistance),\r
                                                         faceIndices_props, faceNormal_props, barycoord_props, side_props, dist_props );\r
\r
    bool hit = hit_surface || hit_props;\r
    if (!hit)\r
        return false;\r
\r
    if (hit_surface && (!hit_props || (dist_surface <= dist_props)))\r
    {\r
        P = rayOrigin + dist_surface*rayDir;\r
        material = MATERIAL_OPENPBR;\r
        baryCoord = barycoord_surface;\r
        Ng = safe_normalize(faceNormal_surface);\r
        if (has_normals_surface)\r
        {\r
            Ns = textureSampleBarycoord(normalAttribute_surface, barycoord_surface, faceIndices_surface.xyz).xyz;\r
            const bool flip_normals = false;\r
            if (flip_normals)\r
                Ns *= -1.0;\r
        }\r
        else\r
            Ns = Ng;\r
        if (has_tangents_surface)\r
            Ts = textureSampleBarycoord(tangentAttribute_surface, barycoord_surface, faceIndices_surface.xyz).xyz;\r
        else\r
            Ts = normalToTangent(Ns);\r
    }\r
\r
    else if (hit_props)\r
    {\r
        P = rayOrigin + dist_props*rayDir;\r
        material = MATERIAL_PROPS;\r
        baryCoord = barycoord_props;\r
        Ng = safe_normalize(faceNormal_props);\r
        if (has_normals_props)\r
        {\r
            Ns = textureSampleBarycoord(normalAttribute_props, barycoord_props, faceIndices_props.xyz).xyz;\r
            const bool flip_normals = false;\r
            if (flip_normals)\r
                Ns *= -1.0;\r
        }\r
        else\r
            Ns = Ng;\r
        if (has_tangents_props)\r
            Ts = textureSampleBarycoord(tangentAttribute_props, barycoord_props, faceIndices_props.xyz).xyz;\r
        else\r
            Ts = normalToTangent(Ns);\r
    }\r
    return true;\r
}\r
\r
\r
float TraceShadow(in vec3 rayOrigin, in vec3 rayDir, in float maxDistance)\r
{\r
    int material;\r
    vec3 pW, nsW, ngW, TsW, baryCoord;\r
    bool hit = trace(rayOrigin, rayDir, maxDistance,\r
                     pW, nsW, ngW, TsW, baryCoord, material);\r
    return hit ? 0.0 : 1.0;\r
}\r
\r
\r
////////////////////////////////////////////////\r
// "Neutral" color Lambertian BRDF for props\r
////////////////////////////////////////////////\r
\r
vec3 neutral_brdf_evaluate(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL,\r
                        inout float pdf_woutputL)\r
{\r
    pdf_woutputL = pdfHemisphereCosineWeighted(winputL);\r
    if (winputL.z < 0.0 || woutputL.z < 0.0) return vec3(0.0);\r
    if (wireframe && minComponent(basis.baryCoord) < 0.003) return vec3(0.0);\r
    return neutral_color/PI;\r
}\r
\r
vec3 neutral_brdf_sample(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed,\r
                         out vec3 woutputL, out float pdf_woutputL)\r
{\r
    woutputL = sampleHemisphereCosineWeighted(rndSeed, pdf_woutputL);\r
    if (winputL.z < 0.0) return vec3(0.0);\r
    if (wireframe && minComponent(basis.baryCoord) < 0.003) return vec3(0.0);\r
    return neutral_color/PI;\r
}\r
\r
//////////////////////////////////////\r
// BSDF dispatch\r
//////////////////////////////////////\r
\r
vec3 evaluateBsdf(in vec3 pW, in Basis basis, in vec3 winputL, in vec3 woutputL, in int material,\r
                  inout float pdf_woutputL)\r
{\r
    if (material == MATERIAL_OPENPBR) return openpbr_bsdf_evaluate(pW, basis, winputL, woutputL, pdf_woutputL);\r
    else                              return neutral_brdf_evaluate(pW, basis, winputL, woutputL, pdf_woutputL);\r
}\r
\r
\r
vec3 sampleBsdf(in vec3 pW, in Basis basis, in vec3 winputL, inout uint rndSeed, in int material,\r
                out vec3 woutputL, out float pdf_woutputL, out Volume internal_medium)\r
{\r
    if (material == MATERIAL_OPENPBR) return openpbr_bsdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_woutputL, internal_medium);\r
    else                              return neutral_brdf_sample(pW, basis, winputL, rndSeed, woutputL, pdf_woutputL);\r
}\r
\r
\r
/////////////////////////////////////////////////////////////////////////\r
// lighting\r
/////////////////////////////////////////////////////////////////////////\r
\r
Basis sunBasis;\r
\r
vec3 sunRadiance(in vec3 woutputW)\r
{\r
    float theta_max = sunAngularSize * PI/180.0;\r
    if (dot(woutputW, sunDir) < cos(theta_max)) return vec3(0.0);\r
    return sunPower * sunColor;\r
}\r
\r
float sunTotalPower()\r
{\r
    float theta_max = sunAngularSize * PI/180.0;\r
    float solid_angle = PI2 *(1.0 - cos(theta_max));\r
    return length(sunPower * sunColor) * solid_angle;\r
}\r
\r
vec3 sunSample(Basis basis,\r
               inout vec3 woutputL, inout vec3 woutputW, inout float pdfDir,\r
               inout uint rndSeed)\r
{\r
    float theta_max = sunAngularSize * PI/180.0;\r
    float theta = theta_max * sqrt(rand(rndSeed));\r
    float costheta = cos(theta);\r
    float sintheta = sqrt(max(0.0, 1.0-costheta*costheta));\r
    float phi = 2.0 * PI * rand(rndSeed);\r
    float cosphi = cos(phi);\r
    float sinphi = sin(phi);\r
    float x = sintheta * cosphi;\r
    float y = sintheta * sinphi;\r
    float z = costheta;\r
    float solid_angle = PI2 *(1.0 - cos(theta_max));\r
    pdfDir = 1.0/solid_angle;\r
    woutputW = localToWorld(vec3(x, y, z), sunBasis);\r
    woutputL = worldToLocal(woutputW, basis);\r
    return sunPower * sunColor;\r
}\r
\r
float sunPdf(in vec3 woutputL, in vec3 woutputW)\r
{\r
    float theta_max = sunAngularSize * PI/180.0;\r
    if (dot(woutputW, sunDir) < cos(theta_max)) return 0.0;\r
    float solid_angle = 2.0*PI*(1.0 - cos(theta_max));\r
    return 1.0/solid_angle;\r
}\r
\r
vec3 skyRadiance(in vec3 woutputW)\r
{\r
    return skyPower * skyColor;\r
}\r
\r
float skyTotalPower()\r
{\r
    return length(skyPower * skyColor) * PI2;\r
}\r
\r
vec3 skySample(in Basis basis,\r
                out vec3 woutputL, out vec3 woutputW, out float pdfDir,\r
                inout uint rndSeed)\r
{\r
    woutputL = sampleHemisphereCosineWeighted(rndSeed, pdfDir);\r
    woutputW = localToWorld(woutputL, basis);\r
    return skyRadiance(woutputW);\r
}\r
\r
float skyPdf(in vec3 woutputL, in vec3 woutputWs)\r
{\r
    return pdfHemisphereCosineWeighted(woutputL);\r
}\r
\r
// Estimate direct radiance at the given surface vertex\r
vec3 LiDirect(in vec3 pW, in Basis basis,\r
              out vec3 shadowL, out vec3 shadowW,\r
              out float lightPdf,\r
              inout uint rndSeed)\r
{\r
    // Do 1-sample MIS between uniform sky and sun sampling\r
    vec3 Li;\r
    {\r
        float w_sun = sunTotalPower();\r
        float w_sky = skyTotalPower();\r
        float P_sun = w_sun / (w_sun + w_sky);\r
        float P_sky = max(0.0, 1.0 - P_sun);\r
        float pdf_sun, pdf_sky;\r
        float r = rand(rndSeed);\r
        if (r < P_sun)\r
        {\r
            Li = sunSample(basis, shadowL, shadowW, pdf_sun, rndSeed);\r
            Li += skyRadiance(shadowW);\r
            pdf_sky = skyPdf(shadowL, shadowW);\r
        }\r
        else\r
        {\r
            Li = skySample(basis, shadowL, shadowW, pdf_sky, rndSeed);\r
            Li += sunRadiance(shadowW);\r
            pdf_sun = sunPdf(shadowL, shadowW);\r
        }\r
        lightPdf = P_sun*pdf_sun + P_sky*pdf_sky; // Light PDF according to 1-sample MIS\r
    }\r
    if (shadowL.z < 0.0) return vec3(0.0);\r
    if (maxComponent(Li) < RADIANCE_EPSILON) return vec3(0.0);\r
    float visibility = TraceShadow(pW, shadowW, HUGE_DIST);\r
    return visibility * Li;\r
}\r
\r
\r
/////////////////////////////////////////////////////////////////////////\r
// pathtracer\r
/////////////////////////////////////////////////////////////////////////\r
\r
#define MAX_VOLUME_STEPS 8\r
#define MIN_VOLUME_STEPS_BEFORE_RR 3\r
\r
int sample_channel(in vec3 albedo, in vec3 throughput, inout uint rndSeed, inout vec3 channel_probs)\r
{\r
    // Sample color channel in proportion to throughput\r
    vec3 w = abs(throughput);\r
    float sum = w.r + w.g + w.b;\r
    channel_probs = w / max(DENOM_TOLERANCE, sum);\r
    float cdf = 0.0;\r
    float r = rand(rndSeed);\r
    for (int channel=0; channel<3; ++channel)\r
    {\r
        cdf += channel_probs[channel];\r
        if (r < cdf)\r
            return channel;\r
    }\r
    return 0;\r
}\r
\r
bool trace_volumetric(in vec3 pW, in vec3 dW, inout uint rndSeed,\r
                      in Volume volume,\r
                      out vec3 volume_throughput,\r
                      out vec3 pW_hit,\r
                      out vec3 dW_hit,\r
                      out vec3 NsW_hit,\r
                      out vec3 NgW_hit,\r
                      out vec3 TsW_hit,\r
                      out vec3 baryCoord_hit,\r
                      out int material_hit)\r
{\r
    // Do an "analogue random-walk" in the scattering medium, i.e. following the physical path of a photon.\r
    // Returns whether a surface hit occurred (and the hit data), and the volumetric path throughput.\r
    vec3 pWalk = pW;\r
    vec3 dWalk = dW;\r
    vec3 mfp = 1.0 / max(vec3(DENOM_TOLERANCE), volume.extinction);\r
    volume_throughput = vec3(1.0);\r
    for (int n=0; n < MAX_VOLUME_STEPS; ++n)\r
    {\r
        vec3 channel_probs;\r
        int channel = sample_channel(volume.albedo, volume_throughput, rndSeed, channel_probs);\r
        float walk_step = -log(rand(rndSeed)) * mfp[channel];\r
        bool surface_hit = trace(pWalk, dWalk, walk_step,\r
                                 pW_hit, NsW_hit, NgW_hit, TsW_hit, baryCoord_hit, material_hit);\r
        if (surface_hit)\r
        {\r
            // ray hits surface within walk_step, walk terminates.\r
            // update walk throughput on exit (via MIS)\r
            float dist_to_surface = length(pW_hit - pWalk);\r
            vec3 transmittance = exp(-dist_to_surface * volume.extinction);\r
            volume_throughput *= transmittance / max(DENOM_TOLERANCE, dot(channel_probs, transmittance));\r
            dW_hit = dWalk;\r
            return true;\r
        }\r
        // Scatter within the medium, and continue walking.\r
        // First, make a Russian-roulette termination decision (after a minimum number of steps has been taken)\r
        float termination_prob = 0.0;\r
        if (n > MIN_VOLUME_STEPS_BEFORE_RR)\r
        {\r
            float continuation_prob = clamp(maxComponent(volume_throughput), 0.0, 1.0);\r
            float termination_prob = 1.0 - continuation_prob;\r
            if (rand(rndSeed) < termination_prob)\r
                break;\r
            volume_throughput /= continuation_prob; // update walk throughput due to RR continuation\r
        }\r
\r
        // update walk throughput on scattering in medium (via MIS)\r
        vec3 transmittance = exp(-walk_step * volume.extinction);\r
        volume_throughput *= volume.albedo * volume.extinction * transmittance;\r
        volume_throughput /= max(DENOM_TOLERANCE, dot(channel_probs, volume.extinction * transmittance));\r
\r
        // walk in the sampled direction, staying inside the medium\r
        pWalk += walk_step * dWalk;\r
\r
        // scatter into a new direction sampled from Henyey-Greenstein phase function\r
        dWalk = samplePhaseFunction(dWalk, volume.anisotropy, rndSeed);\r
        dWalk = normalize(dWalk);\r
    }\r
    volume_throughput = vec3(0.0); // path terminated in the medium\r
    return false;\r
}\r
\r
\r
void main()\r
{\r
    vec2 frag = gl_FragCoord.xy;\r
\r
    // Initialize RNG\r
    uint rndSeed = uint(frag.x + frag.y*resolution.x);\r
    xorshift(rndSeed);\r
    rndSeed ^= uint(samples);\r
\r
    // Apply FIS to obtain pixel jitter about center in pixel units\r
    const float filterRadius = 1.0;\r
    float jx = 0.5 * filterRadius * sample_triangle_filter(rand(rndSeed));\r
    float jy = 0.5 * filterRadius * sample_triangle_filter(rand(rndSeed));\r
    vec2 pixel = frag + vec2(jx, jy);\r
\r
    // Get [-1, 1] normalized device coordinates,\r
    vec2 ndc = -1.0 + 2.0*(pixel/resolution.xy);\r
\r
    // Compute primary camera ray in world-space\r
    vec3 pW, dW;\r
    ndcToCameraRay(ndc, invModelMatrix * cameraWorldMatrix, invProjectionMatrix,\r
                    pW, dW);\r
    dW = normalize(dW);\r
\r
    // Setup sun basis\r
    sunBasis = makeBasis(sunDir);\r
\r
    // Perform uni-directional pathtrace starting from the (pinhole) camera lens to estimate the primary ray radiance, L\r
    vec3 L = vec3(0.0);\r
    vec3 throughput = vec3(1.0);\r
    float misWeightBSDF = 1.0; // For MIS book-keeping\r
\r
    // Initialize volumetric medium of camera ray\r
    // (NB, camera inside the volume is not handled properly in this implementation, for simplicity)\r
    Volume exterior_medium;\r
    exterior_medium.extinction = vec3(0.0);\r
    exterior_medium.albedo     = vec3(0.0);\r
    Volume current_medium = exterior_medium;\r
    bool in_dielectric = false;\r
\r
    // Stochastically choose wavelength for potential dispersion effect\r
    // (here just a crude uniform sample of the visible range)\r
    bool dispersive = false;\r
    wavelength_nm = 360.0 + (700.0 - 360.0)*rand(rndSeed);\r
\r
    for (int vertex=0; vertex <= BOUNCES; vertex++)\r
    {\r
        if (maxComponent(throughput) < THROUGHPUT_EPSILON)\r
            break;\r
\r
        // Generate next surface hit, given current vertex pW and current propagation direction dW\r
        bool surface_hit;\r
        vec3 pW_next;\r
        vec3 NsW_next;\r
        vec3 NgW_next;\r
        vec3 TsW_next;\r
        vec3 baryCoord_next;\r
        int material_next;\r
\r
        // If not inside a scattering volume, ray proceeds in a straight line to the next surface hit\r
        bool inside_volume            = in_dielectric && maxComponent(current_medium.extinction) > FLT_EPSILON;\r
        bool inside_scattering_volume = inside_volume && maxComponent(current_medium.albedo) > FLT_EPSILON;\r
        if (!inside_scattering_volume)\r
        {\r
            // Raycast along current propagation direction dW, from current vertex pW\r
            surface_hit = trace(pW, dW, HUGE_DIST,\r
                                pW_next, NsW_next, NgW_next, TsW_next, baryCoord_next, material_next);\r
\r
            // Apply Beer-Lambert law for absorption\r
            if (surface_hit && inside_volume)\r
            {\r
                float ray_length = length(pW_next - pW);\r
                throughput *= exp(-ray_length * current_medium.extinction);\r
            }\r
        }\r
\r
        // Otherwise volumetric scattering may occur before the next surface hit\r
        else\r
        {\r
            vec3 volume_throughput;\r
            vec3 dW_next;\r
            surface_hit = trace_volumetric(pW, dW, rndSeed, current_medium, volume_throughput,\r
                                           pW_next, dW_next, NsW_next, NgW_next, TsW_next, baryCoord_next, material_next);\r
            dW = dW_next;\r
            throughput *= volume_throughput;\r
        }\r
\r
        if (maxComponent(throughput) < THROUGHPUT_EPSILON)\r
            break;\r
\r
        if (!surface_hit)\r
        {\r
            // Camera ray missed all geometry; add contribution from distant lights\r
            L += throughput * misWeightBSDF * (sunRadiance(dW) + skyRadiance(dW));\r
\r
            // Ray escapes to infinity, terminate path\r
            break;\r
        }\r
\r
        if (vertex == BOUNCES)\r
            break;\r
\r
        // Update to the next surface vertex.\r
        // First, compute the normal and thus the local vertex basis:\r
        pW             = pW_next;\r
        vec3 NsW       = NsW_next;\r
        vec3 NgW       = NgW_next;\r
        vec3 TsW       = TsW_next;\r
        vec3 baryCoord = baryCoord_next;\r
        int material   = material_next;\r
\r
        if (material == MATERIAL_OPENPBR)\r
        {\r
            // Orient local shading normal so that it points from the surface interior to the exterior\r
            if ( (in_dielectric && dot(NsW, dW) < 0.0) ||\r
                (!in_dielectric && dot(NsW, dW) > 0.0))\r
                NsW *= -1.0;\r
        }\r
        else\r
        {\r
            // Otherwise surface is opaque, must be approaching from the exterior\r
            if (dot(NsW, dW) > 0.0)\r
                NsW *= -1.0;\r
        }\r
\r
        // Align geometric normal into same hemisphere as shading normal\r
        if (dot(NgW, NsW) < 0.0) NgW *= -1.0;\r
\r
        // Construct local shading frame\r
        Basis basis;\r
\r
        if (smooth_normals)\r
        {\r
            // If the surface is opaque, but the incident ray lies below the hemisphere of the normal,\r
            // which can occur due to shading normals, apply the "Flipping hack" to prevent artifacts\r
            // (see Schüßler, "Microfacet-based Normal Mapping for Robust Monte Carlo Path Tracing")\r
            if (openpbr_is_opaque() && dot(NsW, dW) > 0.0)\r
                NsW = 2.0*NgW*dot(NgW, NsW) - NsW;\r
            basis = makeBasis(NsW, TsW_next, baryCoord);\r
        }\r
        else\r
            basis = makeBasis(NgW, TsW_next, baryCoord);\r
\r
        vec3 winputW = -dW; // winputW, points *towards* the incident direction (parallel to photon)\r
        vec3 winputL = worldToLocal(winputW, basis);\r
\r
        // Prepare OpenPBR if that material is used at the current vertex\r
        if (material == MATERIAL_OPENPBR)\r
            openpbr_prepare(pW, basis, winputL, rndSeed);\r
\r
        // Sample BSDF for the continuation ray direction\r
        float bsdfPdf_continuation;\r
        Volume internal_medium;\r
        vec3 surface_throughput;\r
        {\r
            vec3 woutputL; // points *towards* the outgoing ray direction (opposite to photon)\r
            vec3 f = sampleBsdf(pW, basis, winputL, rndSeed, material, woutputL, bsdfPdf_continuation, internal_medium);\r
            vec3 woutputW = localToWorld(woutputL, basis);\r
            surface_throughput = f / max(PDF_EPSILON, bsdfPdf_continuation) * abs(dot(woutputW, basis.nW));\r
            dW = woutputW; // Update continuation ray direction to the BSDF-sampled direction\r
        }\r
\r
        // Add emission from the surface point, if present\r
        //L += throughput * evaluateEdf(pW, basis, winputL);\r
\r
        // Prepare for tracing the direct lighting and continuation rays\r
        pW += NgW * sign(dot(dW, NgW)) * RAY_OFFSET; // perturb vertex into geometric half-space of scattered ray\r
\r
        // Check if a transmission has occurred, and update the current_medium accordingly.\r
        bool transmitted = (material == MATERIAL_OPENPBR) && (dot(winputW, NgW) * dot(dW, NgW) < 0.0);\r
        if (transmitted)\r
        {\r
            if (!in_dielectric && !dispersive)\r
            {\r
                // On first transmission into dielectric, apply associated color of stochastically chosen wavelength\r
                // (where the color channel normalization here is just an approximation)\r
                if (transmission_dispersion_scale > 0.0)\r
                    surface_throughput *= xyzToRgb(xyzFit_1931(wavelength_nm)) * vec3(2.7, 3.3, 3.45);\r
                dispersive = true;\r
            }\r
\r
            // Update in_dielectric state\r
            in_dielectric = !in_dielectric;\r
\r
            // Thus update current medium\r
            if (in_dielectric)\r
                current_medium = internal_medium;\r
            else\r
                current_medium = exterior_medium;\r
        }\r
\r
        // Add direct lighting term at the current surface vertex\r
        misWeightBSDF = 1.0;\r
        if (!in_dielectric && !transmitted)\r
        {\r
            vec3 shadowL, shadowW; // sampled shadow ray direction\r
            float lightPdf;\r
            vec3 Li = LiDirect(pW, basis, shadowL, shadowW, lightPdf, rndSeed);\r
            if (maxComponent(Li) > RADIANCE_EPSILON)\r
            {\r
                float bsdfPdf_shadow = PDF_EPSILON;\r
                vec3 fshadow = evaluateBsdf(pW, basis, winputL, shadowL, material, bsdfPdf_shadow);\r
                float misWeightLight = powerHeuristic(lightPdf, bsdfPdf_shadow);\r
                L += throughput * misWeightLight * fshadow * abs(dot(shadowW, basis.nW)) * Li / max(PDF_EPSILON, lightPdf);\r
                misWeightBSDF = powerHeuristic(bsdfPdf_continuation, lightPdf);\r
            }\r
        }\r
\r
        // Update path continuation throughput\r
        throughput *= surface_throughput;\r
\r
        // TODO: Russian roulette\r
\r
    }\r
\r
    gl_FragColor.rgb = L;\r
    gl_FragColor.a = accumulation_weight; // Implements Monte-Carlo accumulation via alpha blending\r
}\r
`;function Zo(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Gf={exports:{}};(function(r,e){(function(t){r.exports=t()})(function(){return function(){function t(n,i,s){function o(c,u){if(!i[c]){if(!n[c]){var h=typeof Zo=="function"&&Zo;if(!u&&h)return h(c,!0);if(a)return a(c,!0);var f=new Error("Cannot find module '"+c+"'");throw f.code="MODULE_NOT_FOUND",f}var d=i[c]={exports:{}};n[c][0].call(d.exports,function(_){var g=n[c][1][_];return o(g||_)},d,d.exports,t,n,i,s)}return i[c].exports}for(var a=typeof Zo=="function"&&Zo,l=0;l<s.length;l++)o(s[l]);return o}return t}()({1:[function(t,n,i){(function(s){(function(){var o=200,a="__lodash_hash_undefined__",l=800,c=16,u=9007199254740991,h="[object Arguments]",f="[object Array]",d="[object AsyncFunction]",_="[object Boolean]",g="[object Date]",m="[object Error]",p="[object Function]",b="[object GeneratorFunction]",v="[object Map]",y="[object Number]",x="[object Null]",E="[object Object]",T="[object Proxy]",I="[object RegExp]",S="[object Set]",A="[object String]",z="[object Undefined]",O="[object WeakMap]",G="[object ArrayBuffer]",D="[object DataView]",H="[object Float32Array]",K="[object Float64Array]",Z="[object Int8Array]",ce="[object Int16Array]",ie="[object Int32Array]",se="[object Uint8Array]",me="[object Uint8ClampedArray]",ve="[object Uint16Array]",Q="[object Uint32Array]",oe=/[\\^$.*+?()[\]{}|]/g,Se=/^\[object .+?Constructor\]$/,Pe=/^(?:0|[1-9]\d*)$/,_e={};_e[H]=_e[K]=_e[Z]=_e[ce]=_e[ie]=_e[se]=_e[me]=_e[ve]=_e[Q]=!0,_e[h]=_e[f]=_e[G]=_e[_]=_e[D]=_e[g]=_e[m]=_e[p]=_e[v]=_e[y]=_e[E]=_e[I]=_e[S]=_e[A]=_e[O]=!1;var Xe=typeof s=="object"&&s&&s.Object===Object&&s,Ge=typeof self=="object"&&self&&self.Object===Object&&self,Ne=Xe||Ge||Function("return this")(),Ye=typeof i=="object"&&i&&!i.nodeType&&i,W=Ye&&typeof n=="object"&&n&&!n.nodeType&&n,Rt=W&&W.exports===Ye,Le=Rt&&Xe.process,$e=function(){try{var L=W&&W.require&&W.require("util").types;return L||Le&&Le.binding&&Le.binding("util")}catch{}}(),Be=$e&&$e.isTypedArray;function mt(L,U,Y){switch(Y.length){case 0:return L.call(U);case 1:return L.call(U,Y[0]);case 2:return L.call(U,Y[0],Y[1]);case 3:return L.call(U,Y[0],Y[1],Y[2])}return L.apply(U,Y)}function Ke(L,U){for(var Y=-1,Te=Array(L);++Y<L;)Te[Y]=U(Y);return Te}function ze(L){return function(U){return L(U)}}function st(L,U){return L==null?void 0:L[U]}function Mt(L,U){return function(Y){return L(U(Y))}}var Lt=Array.prototype,C=Function.prototype,w=Object.prototype,X=Ne["__core-js_shared__"],le=C.toString,re=w.hasOwnProperty,fe=function(){var L=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||"");return L?"Symbol(src)_1."+L:""}(),Ee=w.toString,pe=le.call(Object),ye=RegExp("^"+le.call(re).replace(oe,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),N=Rt?Ne.Buffer:void 0,de=Ne.Symbol,ne=Ne.Uint8Array,Fe=N?N.allocUnsafe:void 0,Ae=Mt(Object.getPrototypeOf,Object),Ce=Object.create,Me=w.propertyIsEnumerable,be=Lt.splice,He=de?de.toStringTag:void 0,F=function(){try{var L=it(Object,"defineProperty");return L({},"",{}),L}catch{}}(),ge=N?N.isBuffer:void 0,ae=Math.max,ee=Date.now,he=it(Ne,"Map"),Re=it(Object,"create"),tt=function(){function L(){}return function(U){if(!$i(U))return{};if(Ce)return Ce(U);L.prototype=U;var Y=new L;return L.prototype=void 0,Y}}();function _t(L){var U=-1,Y=L==null?0:L.length;for(this.clear();++U<Y;){var Te=L[U];this.set(Te[0],Te[1])}}function Ht(){this.__data__=Re?Re(null):{},this.size=0}function ut(L){var U=this.has(L)&&delete this.__data__[L];return this.size-=U?1:0,U}function ht(L){var U=this.__data__;if(Re){var Y=U[L];return Y===a?void 0:Y}return re.call(U,L)?U[L]:void 0}function yn(L){var U=this.__data__;return Re?U[L]!==void 0:re.call(U,L)}function ti(L,U){var Y=this.__data__;return this.size+=this.has(L)?0:1,Y[L]=Re&&U===void 0?a:U,this}_t.prototype.clear=Ht,_t.prototype.delete=ut,_t.prototype.get=ht,_t.prototype.has=yn,_t.prototype.set=ti;function on(L){var U=-1,Y=L==null?0:L.length;for(this.clear();++U<Y;){var Te=L[U];this.set(Te[0],Te[1])}}function Li(){this.__data__=[],this.size=0}function gr(L){var U=this.__data__,Y=vt(U,L);if(Y<0)return!1;var Te=U.length-1;return Y==Te?U.pop():be.call(U,Y,1),--this.size,!0}function ni(L){var U=this.__data__,Y=vt(U,L);return Y<0?void 0:U[Y][1]}function vr(L){return vt(this.__data__,L)>-1}function xr(L,U){var Y=this.__data__,Te=vt(Y,L);return Te<0?(++this.size,Y.push([L,U])):Y[Te][1]=U,this}on.prototype.clear=Li,on.prototype.delete=gr,on.prototype.get=ni,on.prototype.has=vr,on.prototype.set=xr;function Vn(L){var U=-1,Y=L==null?0:L.length;for(this.clear();++U<Y;){var Te=L[U];this.set(Te[0],Te[1])}}function Ci(){this.size=0,this.__data__={hash:new _t,map:new(he||on),string:new _t}}function vs(L){var U=Ue(this,L).delete(L);return this.size-=U?1:0,U}function R(L){return Ue(this,L).get(L)}function k(L){return Ue(this,L).has(L)}function j(L,U){var Y=Ue(this,L),Te=Y.size;return Y.set(L,U),this.size+=Y.size==Te?0:1,this}Vn.prototype.clear=Ci,Vn.prototype.delete=vs,Vn.prototype.get=R,Vn.prototype.has=k,Vn.prototype.set=j;function $(L){var U=this.__data__=new on(L);this.size=U.size}function q(){this.__data__=new on,this.size=0}function we(L){var U=this.__data__,Y=U.delete(L);return this.size=U.size,Y}function De(L){return this.__data__.get(L)}function ke(L){return this.__data__.has(L)}function We(L,U){var Y=this.__data__;if(Y instanceof on){var Te=Y.__data__;if(!he||Te.length<o-1)return Te.push([L,U]),this.size=++Y.size,this;Y=this.__data__=new Vn(Te)}return Y.set(L,U),this.size=Y.size,this}$.prototype.clear=q,$.prototype.delete=we,$.prototype.get=De,$.prototype.has=ke,$.prototype.set=We;function Qe(L,U){var Y=Gn(L),Te=!Y&&Tn(L),ct=!Y&&!Te&&pc(L),wt=!Y&&!Te&&!ct&&_c(L),Pt=Y||Te||ct||wt,lt=Pt?Ke(L.length,String):[],Dt=lt.length;for(var Nn in L)(U||re.call(L,Nn))&&!(Pt&&(Nn=="length"||ct&&(Nn=="offset"||Nn=="parent")||wt&&(Nn=="buffer"||Nn=="byteLength"||Nn=="byteOffset")||bt(Nn,Dt)))&&lt.push(Nn);return lt}function je(L,U,Y){(Y!==void 0&&!hn(L[U],Y)||Y===void 0&&!(U in L))&&Vt(L,U,Y)}function Ze(L,U,Y){var Te=L[U];(!(re.call(L,U)&&hn(Te,Y))||Y===void 0&&!(U in L))&&Vt(L,U,Y)}function vt(L,U){for(var Y=L.length;Y--;)if(hn(L[Y][0],U))return Y;return-1}function Vt(L,U,Y){U=="__proto__"&&F?F(L,U,{configurable:!0,enumerable:!0,value:Y,writable:!0}):L[U]=Y}var Ut=Ie();function an(L){return L==null?L===void 0?z:x:He&&He in Object(L)?ft(L):ri(L)}function ot(L){return xs(L)&&an(L)==h}function Je(L){if(!$i(L)||tn(L))return!1;var U=ya(L)?ye:Se;return U.test(Zt(L))}function Yi(L){return xs(L)&&mc(L.length)&&!!_e[an(L)]}function xt(L){if(!$i(L))return ii(L);var U=mi(L),Y=[];for(var Te in L)Te=="constructor"&&(U||!re.call(L,Te))||Y.push(Te);return Y}function In(L,U,Y,Te,ct){L!==U&&Ut(U,function(wt,Pt){if(ct||(ct=new $),$i(wt))yr(L,U,Pt,Y,In,Te,ct);else{var lt=Te?Te(si(L,Pt),wt,Pt+"",L,U,ct):void 0;lt===void 0&&(lt=wt),je(L,Pt,lt)}},gc)}function yr(L,U,Y,Te,ct,wt,Pt){var lt=si(L,Y),Dt=si(U,Y),Nn=Pt.get(Dt);if(Nn){je(L,Y,Nn);return}var An=wt?wt(lt,Dt,Y+"",L,U,Pt):void 0,ys=An===void 0;if(ys){var ba=Gn(Dt),Sa=!ba&&pc(Dt),xc=!ba&&!Sa&&_c(Dt);An=Dt,ba||Sa||xc?Gn(lt)?An=lt:Xf(lt)?An=te(lt):Sa?(ys=!1,An=Gt(Dt,!0)):xc?(ys=!1,An=B(Dt,!0)):An=[]:jf(Dt)||Tn(Dt)?(An=lt,Tn(lt)?An=qf(lt):(!$i(lt)||ya(lt))&&(An=Nt(Dt))):ys=!1}ys&&(Pt.set(Dt,An),ct(An,Dt,Te,wt,Pt),Pt.delete(Dt)),je(L,Y,An)}function Kt(L,U){return oi(St(L,U,vc),L+"")}var en=F?function(L,U){return F(L,"toString",{configurable:!0,enumerable:!1,value:$f(U),writable:!0})}:vc;function Gt(L,U){if(U)return L.slice();var Y=L.length,Te=Fe?Fe(Y):new L.constructor(Y);return L.copy(Te),Te}function M(L){var U=new L.constructor(L.byteLength);return new ne(U).set(new ne(L)),U}function B(L,U){var Y=U?M(L.buffer):L.buffer;return new L.constructor(Y,L.byteOffset,L.length)}function te(L,U){var Y=-1,Te=L.length;for(U||(U=Array(Te));++Y<Te;)U[Y]=L[Y];return U}function V(L,U,Y,Te){var ct=!Y;Y||(Y={});for(var wt=-1,Pt=U.length;++wt<Pt;){var lt=U[wt],Dt=Te?Te(Y[lt],L[lt],lt,Y,L):void 0;Dt===void 0&&(Dt=L[lt]),ct?Vt(Y,lt,Dt):Ze(Y,lt,Dt)}return Y}function ue(L){return Kt(function(U,Y){var Te=-1,ct=Y.length,wt=ct>1?Y[ct-1]:void 0,Pt=ct>2?Y[2]:void 0;for(wt=L.length>3&&typeof wt=="function"?(ct--,wt):void 0,Pt&&Ct(Y[0],Y[1],Pt)&&(wt=ct<3?void 0:wt,ct=1),U=Object(U);++Te<ct;){var lt=Y[Te];lt&&L(U,lt,Te,wt)}return U})}function Ie(L){return function(U,Y,Te){for(var ct=-1,wt=Object(U),Pt=Te(U),lt=Pt.length;lt--;){var Dt=Pt[L?lt:++ct];if(Y(wt[Dt],Dt,wt)===!1)break}return U}}function Ue(L,U){var Y=L.__data__;return Bt(U)?Y[typeof U=="string"?"string":"hash"]:Y.map}function it(L,U){var Y=st(L,U);return Je(Y)?Y:void 0}function ft(L){var U=re.call(L,He),Y=L[He];try{L[He]=void 0;var Te=!0}catch{}var ct=Ee.call(L);return Te&&(U?L[He]=Y:delete L[He]),ct}function Nt(L){return typeof L.constructor=="function"&&!mi(L)?tt(Ae(L)):{}}function bt(L,U){var Y=typeof L;return U=U??u,!!U&&(Y=="number"||Y!="symbol"&&Pe.test(L))&&L>-1&&L%1==0&&L<U}function Ct(L,U,Y){if(!$i(Y))return!1;var Te=typeof U;return(Te=="number"?br(Y)&&bt(U,Y.length):Te=="string"&&U in Y)?hn(Y[U],L):!1}function Bt(L){var U=typeof L;return U=="string"||U=="number"||U=="symbol"||U=="boolean"?L!=="__proto__":L===null}function tn(L){return!!fe&&fe in L}function mi(L){var U=L&&L.constructor,Y=typeof U=="function"&&U.prototype||w;return L===Y}function ii(L){var U=[];if(L!=null)for(var Y in Object(L))U.push(Y);return U}function ri(L){return Ee.call(L)}function St(L,U,Y){return U=ae(U===void 0?L.length-1:U,0),function(){for(var Te=arguments,ct=-1,wt=ae(Te.length-U,0),Pt=Array(wt);++ct<wt;)Pt[ct]=Te[U+ct];ct=-1;for(var lt=Array(U+1);++ct<U;)lt[ct]=Te[ct];return lt[U]=Y(Pt),mt(L,this,lt)}}function si(L,U){if(!(U==="constructor"&&typeof L[U]=="function")&&U!="__proto__")return L[U]}var oi=_i(en);function _i(L){var U=0,Y=0;return function(){var Te=ee(),ct=c-(Te-Y);if(Y=Te,ct>0){if(++U>=l)return arguments[0]}else U=0;return L.apply(void 0,arguments)}}function Zt(L){if(L!=null){try{return le.call(L)}catch{}try{return L+""}catch{}}return""}function hn(L,U){return L===U||L!==L&&U!==U}var Tn=ot(function(){return arguments}())?ot:function(L){return xs(L)&&re.call(L,"callee")&&!Me.call(L,"callee")},Gn=Array.isArray;function br(L){return L!=null&&mc(L.length)&&!ya(L)}function Xf(L){return xs(L)&&br(L)}var pc=ge||Kf;function ya(L){if(!$i(L))return!1;var U=an(L);return U==p||U==b||U==d||U==T}function mc(L){return typeof L=="number"&&L>-1&&L%1==0&&L<=u}function $i(L){var U=typeof L;return L!=null&&(U=="object"||U=="function")}function xs(L){return L!=null&&typeof L=="object"}function jf(L){if(!xs(L)||an(L)!=E)return!1;var U=Ae(L);if(U===null)return!0;var Y=re.call(U,"constructor")&&U.constructor;return typeof Y=="function"&&Y instanceof Y&&le.call(Y)==pe}var _c=Be?ze(Be):Yi;function qf(L){return V(L,gc(L))}function gc(L){return br(L)?Qe(L,!0):xt(L)}var Yf=ue(function(L,U,Y){In(L,U,Y)});function $f(L){return function(){return L}}function vc(L){return L}function Kf(){return!1}n.exports=Yf}).call(this)}).call(this,typeof Ul<"u"?Ul:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(t,n,i){/*! For license information please see shifty.js.LICENSE.txt */(function(s,o){typeof i=="object"&&typeof n=="object"?n.exports=o():typeof i=="object"?i.shifty=o():s.shifty=o()})(self,function(){return function(){var s={720:function(l,c,u){u.r(c),u.d(c,{Scene:function(){return Gt},Tweenable:function(){return ht},interpolate:function(){return Yi},processTweens:function(){return ae},setBezierFunction:function(){return $e},shouldScheduleUpdate:function(){return Re},tween:function(){return yn},unsetBezierFunction:function(){return Be}});var h={};u.r(h),u.d(h,{bounce:function(){return _e},bouncePast:function(){return Xe},easeFrom:function(){return Ne},easeFromTo:function(){return Ge},easeInBack:function(){return se},easeInCirc:function(){return K},easeInCubic:function(){return p},easeInExpo:function(){return G},easeInOutBack:function(){return ve},easeInOutCirc:function(){return ce},easeInOutCubic:function(){return v},easeInOutExpo:function(){return H},easeInOutQuad:function(){return m},easeInOutQuart:function(){return E},easeInOutQuint:function(){return S},easeInOutSine:function(){return O},easeInQuad:function(){return _},easeInQuart:function(){return y},easeInQuint:function(){return T},easeInSine:function(){return A},easeOutBack:function(){return me},easeOutBounce:function(){return ie},easeOutCirc:function(){return Z},easeOutCubic:function(){return b},easeOutExpo:function(){return D},easeOutQuad:function(){return g},easeOutQuart:function(){return x},easeOutQuint:function(){return I},easeOutSine:function(){return z},easeTo:function(){return Ye},elastic:function(){return Q},linear:function(){return d},swingFrom:function(){return Se},swingFromTo:function(){return oe},swingTo:function(){return Pe}});var f={};u.r(f),u.d(f,{afterTween:function(){return vt},beforeTween:function(){return Ze},doesApply:function(){return Qe},tweenCreated:function(){return je}});var d=function(M){return M},_=function(M){return Math.pow(M,2)},g=function(M){return-(Math.pow(M-1,2)-1)},m=function(M){return(M/=.5)<1?.5*Math.pow(M,2):-.5*((M-=2)*M-2)},p=function(M){return Math.pow(M,3)},b=function(M){return Math.pow(M-1,3)+1},v=function(M){return(M/=.5)<1?.5*Math.pow(M,3):.5*(Math.pow(M-2,3)+2)},y=function(M){return Math.pow(M,4)},x=function(M){return-(Math.pow(M-1,4)-1)},E=function(M){return(M/=.5)<1?.5*Math.pow(M,4):-.5*((M-=2)*Math.pow(M,3)-2)},T=function(M){return Math.pow(M,5)},I=function(M){return Math.pow(M-1,5)+1},S=function(M){return(M/=.5)<1?.5*Math.pow(M,5):.5*(Math.pow(M-2,5)+2)},A=function(M){return 1-Math.cos(M*(Math.PI/2))},z=function(M){return Math.sin(M*(Math.PI/2))},O=function(M){return-.5*(Math.cos(Math.PI*M)-1)},G=function(M){return M===0?0:Math.pow(2,10*(M-1))},D=function(M){return M===1?1:1-Math.pow(2,-10*M)},H=function(M){return M===0?0:M===1?1:(M/=.5)<1?.5*Math.pow(2,10*(M-1)):.5*(2-Math.pow(2,-10*--M))},K=function(M){return-(Math.sqrt(1-M*M)-1)},Z=function(M){return Math.sqrt(1-Math.pow(M-1,2))},ce=function(M){return(M/=.5)<1?-.5*(Math.sqrt(1-M*M)-1):.5*(Math.sqrt(1-(M-=2)*M)+1)},ie=function(M){return M<1/2.75?7.5625*M*M:M<2/2.75?7.5625*(M-=1.5/2.75)*M+.75:M<2.5/2.75?7.5625*(M-=2.25/2.75)*M+.9375:7.5625*(M-=2.625/2.75)*M+.984375},se=function(M){var B=1.70158;return M*M*((B+1)*M-B)},me=function(M){var B=1.70158;return(M-=1)*M*((B+1)*M+B)+1},ve=function(M){var B=1.70158;return(M/=.5)<1?M*M*((1+(B*=1.525))*M-B)*.5:.5*((M-=2)*M*((1+(B*=1.525))*M+B)+2)},Q=function(M){return-1*Math.pow(4,-8*M)*Math.sin((6*M-1)*(2*Math.PI)/2)+1},oe=function(M){var B=1.70158;return(M/=.5)<1?M*M*((1+(B*=1.525))*M-B)*.5:.5*((M-=2)*M*((1+(B*=1.525))*M+B)+2)},Se=function(M){var B=1.70158;return M*M*((B+1)*M-B)},Pe=function(M){var B=1.70158;return(M-=1)*M*((B+1)*M+B)+1},_e=function(M){return M<1/2.75?7.5625*M*M:M<2/2.75?7.5625*(M-=1.5/2.75)*M+.75:M<2.5/2.75?7.5625*(M-=2.25/2.75)*M+.9375:7.5625*(M-=2.625/2.75)*M+.984375},Xe=function(M){return M<1/2.75?7.5625*M*M:M<2/2.75?2-(7.5625*(M-=1.5/2.75)*M+.75):M<2.5/2.75?2-(7.5625*(M-=2.25/2.75)*M+.9375):2-(7.5625*(M-=2.625/2.75)*M+.984375)},Ge=function(M){return(M/=.5)<1?.5*Math.pow(M,4):-.5*((M-=2)*Math.pow(M,3)-2)},Ne=function(M){return Math.pow(M,4)},Ye=function(M){return Math.pow(M,.25)};function W(M,B,te,V,ue,Ie){var Ue,it,ft,Nt,bt,Ct=0,Bt=0,tn=0,mi=function(St){return((Ct*St+Bt)*St+tn)*St},ii=function(St){return(3*Ct*St+2*Bt)*St+tn},ri=function(St){return St>=0?St:0-St};return Ct=1-(tn=3*B)-(Bt=3*(V-B)-tn),ft=1-(bt=3*te)-(Nt=3*(ue-te)-bt),Ue=M,it=function(St){return 1/(200*St)}(Ie),function(St){return((ft*St+Nt)*St+bt)*St}(function(St,si){var oi,_i,Zt,hn,Tn,Gn;for(Zt=St,Gn=0;Gn<8;Gn++){if(hn=mi(Zt)-St,ri(hn)<si)return Zt;if(Tn=ii(Zt),ri(Tn)<1e-6)break;Zt-=hn/Tn}if((Zt=St)<(oi=0))return oi;if(Zt>(_i=1))return _i;for(;oi<_i;){if(hn=mi(Zt),ri(hn-St)<si)return Zt;St>hn?oi=Zt:_i=Zt,Zt=.5*(_i-oi)+oi}return Zt}(Ue,it))}var Rt,Le=function(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:.25,B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.25,te=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.75,V=arguments.length>3&&arguments[3]!==void 0?arguments[3]:.75;return function(ue){return W(ue,M,B,te,V,1)}},$e=function(M,B,te,V,ue){var Ie=Le(B,te,V,ue);return Ie.displayName=M,Ie.x1=B,Ie.y1=te,Ie.x2=V,Ie.y2=ue,ht.formulas[M]=Ie},Be=function(M){return delete ht.formulas[M]};function mt(M,B){if(!(M instanceof B))throw new TypeError("Cannot call a class as a function")}function Ke(M,B){for(var te=0;te<B.length;te++){var V=B[te];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(M,V.key,V)}}function ze(M){return ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},ze(M)}function st(M){return function(B){if(Array.isArray(B))return Mt(B)}(M)||function(B){if(typeof Symbol<"u"&&Symbol.iterator in Object(B))return Array.from(B)}(M)||function(B,te){if(B){if(typeof B=="string")return Mt(B,te);var V=Object.prototype.toString.call(B).slice(8,-1);return V==="Object"&&B.constructor&&(V=B.constructor.name),V==="Map"||V==="Set"?Array.from(B):V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V)?Mt(B,te):void 0}}(M)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Mt(M,B){(B==null||B>M.length)&&(B=M.length);for(var te=0,V=new Array(B);te<B;te++)V[te]=M[te];return V}function Lt(M,B){var te=Object.keys(M);if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(M);B&&(V=V.filter(function(ue){return Object.getOwnPropertyDescriptor(M,ue).enumerable})),te.push.apply(te,V)}return te}function C(M){for(var B=1;B<arguments.length;B++){var te=arguments[B]!=null?arguments[B]:{};B%2?Lt(Object(te),!0).forEach(function(V){w(M,V,te[V])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(te)):Lt(Object(te)).forEach(function(V){Object.defineProperty(M,V,Object.getOwnPropertyDescriptor(te,V))})}return M}function w(M,B,te){return B in M?Object.defineProperty(M,B,{value:te,enumerable:!0,configurable:!0,writable:!0}):M[B]=te,M}var X,le,re,fe="linear",Ee=typeof window<"u"?window:u.g,pe="afterTween",ye="afterTweenEnd",N="beforeTween",de="tweenCreated",ne="function",Fe="string",Ae=Ee.requestAnimationFrame||Ee.webkitRequestAnimationFrame||Ee.oRequestAnimationFrame||Ee.msRequestAnimationFrame||Ee.mozCancelRequestAnimationFrame&&Ee.mozRequestAnimationFrame||setTimeout,Ce=function(){},Me=null,be=null,He=C({},h),F=function(M,B,te,V,ue,Ie,Ue){var it,ft,Nt,bt=M<Ie?0:(M-Ie)/ue,Ct=!1;for(var Bt in Ue&&Ue.call&&(Ct=!0,it=Ue(bt)),B)Ct||(it=((ft=Ue[Bt]).call?ft:He[ft])(bt)),Nt=te[Bt],B[Bt]=Nt+(V[Bt]-Nt)*it;return B},ge=function(M,B){var te=M._timestamp,V=M._currentState,ue=M._delay;if(!(B<te+ue)){var Ie=M._duration,Ue=M._targetState,it=te+ue+Ie,ft=B>it?it:B;M._hasEnded=ft>=it;var Nt=Ie-(it-ft),bt=M._filters.length>0;if(M._hasEnded)return M._render(Ue,M._data,Nt),M.stop(!0);bt&&M._applyFilter(N),ft<te+ue?te=Ie=ft=1:te+=ue,F(ft,V,M._originalState,Ue,Ie,te,M._easing),bt&&M._applyFilter(pe),M._render(V,M._data,Nt)}},ae=function(){for(var M,B=ht.now(),te=Me;te;)M=te._next,ge(te,B),te=M},ee=Date.now||function(){return+new Date},he=!1,Re=function(M){M&&he||(he=M,M&&tt())},tt=function M(){X=ee(),he&&Ae.call(Ee,M,16.666666666666668),ae()},_t=function(M){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fe,te=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(Array.isArray(B)){var V=Le.apply(void 0,st(B));return V}var ue=ze(B);if(He[B])return He[B];if(ue===Fe||ue===ne)for(var Ie in M)te[Ie]=B;else for(var Ue in M)te[Ue]=B[Ue]||fe;return te},Ht=function(M){M===Me?(Me=M._next)?Me._previous=null:be=null:M===be?(be=M._previous)?be._next=null:Me=null:(le=M._previous,re=M._next,le._next=re,re._previous=le),M._previous=M._next=null},ut=typeof Promise=="function"?Promise:null;Rt=Symbol.toStringTag;var ht=function(){function M(){var V=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},ue=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;mt(this,M),w(this,Rt,"Promise"),this._config={},this._data={},this._delay=0,this._filters=[],this._next=null,this._previous=null,this._timestamp=null,this._hasEnded=!1,this._resolve=null,this._reject=null,this._currentState=V||{},this._originalState={},this._targetState={},this._start=Ce,this._render=Ce,this._promiseCtor=ut,ue&&this.setConfig(ue)}var B,te;return B=M,te=[{key:"_applyFilter",value:function(V){for(var ue=this._filters.length;ue>0;ue--){var Ie=this._filters[ue-ue][V];Ie&&Ie(this)}}},{key:"tween",value:function(){var V=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;return this._isPlaying&&this.stop(),!V&&this._config||this.setConfig(V),this._pausedAtTime=null,this._timestamp=M.now(),this._start(this.get(),this._data),this._delay&&this._render(this._currentState,this._data,0),this._resume(this._timestamp)}},{key:"setConfig",value:function(){var V=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},ue=this._config;for(var Ie in V)ue[Ie]=V[Ie];var Ue=ue.promise,it=Ue===void 0?this._promiseCtor:Ue,ft=ue.start,Nt=ft===void 0?Ce:ft,bt=ue.finish,Ct=ue.render,Bt=Ct===void 0?this._config.step||Ce:Ct,tn=ue.step,mi=tn===void 0?Ce:tn;this._data=ue.data||ue.attachment||this._data,this._isPlaying=!1,this._pausedAtTime=null,this._scheduleId=null,this._delay=V.delay||0,this._start=Nt,this._render=Bt||mi,this._duration=ue.duration||500,this._promiseCtor=it,bt&&(this._resolve=bt);var ii=V.from,ri=V.to,St=ri===void 0?{}:ri,si=this._currentState,oi=this._originalState,_i=this._targetState;for(var Zt in ii)si[Zt]=ii[Zt];var hn=!1;for(var Tn in si){var Gn=si[Tn];hn||ze(Gn)!==Fe||(hn=!0),oi[Tn]=Gn,_i[Tn]=St.hasOwnProperty(Tn)?St[Tn]:Gn}if(this._easing=_t(this._currentState,ue.easing,this._easing),this._filters.length=0,hn){for(var br in M.filters)M.filters[br].doesApply(this)&&this._filters.push(M.filters[br]);this._applyFilter(de)}return this}},{key:"then",value:function(V,ue){var Ie=this;return this._promise=new this._promiseCtor(function(Ue,it){Ie._resolve=Ue,Ie._reject=it}),this._promise.then(V,ue)}},{key:"catch",value:function(V){return this.then().catch(V)}},{key:"finally",value:function(V){return this.then().finally(V)}},{key:"get",value:function(){return C({},this._currentState)}},{key:"set",value:function(V){this._currentState=V}},{key:"pause",value:function(){if(this._isPlaying)return this._pausedAtTime=M.now(),this._isPlaying=!1,Ht(this),this}},{key:"resume",value:function(){return this._resume()}},{key:"_resume",value:function(){var V=arguments.length>0&&arguments[0]!==void 0?arguments[0]:M.now();return this._timestamp===null?this.tween():this._isPlaying?this._promise:(this._pausedAtTime&&(this._timestamp+=V-this._pausedAtTime,this._pausedAtTime=null),this._isPlaying=!0,Me===null?(Me=this,be=this):(this._previous=be,be._next=this,be=this),this)}},{key:"seek",value:function(V){V=Math.max(V,0);var ue=M.now();return this._timestamp+V===0||(this._timestamp=ue-V,ge(this,ue)),this}},{key:"stop",value:function(){var V=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(!this._isPlaying)return this;this._isPlaying=!1,Ht(this);var ue=this._filters.length>0;return V&&(ue&&this._applyFilter(N),F(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),ue&&(this._applyFilter(pe),this._applyFilter(ye))),this._resolve&&this._resolve({data:this._data,state:this._currentState,tweenable:this}),this._resolve=null,this._reject=null,this}},{key:"cancel",value:function(){var V=arguments.length>0&&arguments[0]!==void 0&&arguments[0],ue=this._currentState,Ie=this._data,Ue=this._isPlaying;return Ue?(this._reject&&this._reject({data:Ie,state:ue,tweenable:this}),this._resolve=null,this._reject=null,this.stop(V)):this}},{key:"isPlaying",value:function(){return this._isPlaying}},{key:"hasEnded",value:function(){return this._hasEnded}},{key:"setScheduleFunction",value:function(V){M.setScheduleFunction(V)}},{key:"data",value:function(){var V=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return V&&(this._data=C({},V)),this._data}},{key:"dispose",value:function(){for(var V in this)delete this[V]}}],te&&Ke(B.prototype,te),M}();function yn(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},B=new ht;return B.tween(M),B.tweenable=B,B}w(ht,"now",function(){return X}),w(ht,"setScheduleFunction",function(M){return Ae=M}),w(ht,"filters",{}),w(ht,"formulas",He),Re(!0);var ti,on,Li=/(\d|-|\.)/,gr=/([^\-0-9.]+)/g,ni=/[0-9.-]+/g,vr=(ti=ni.source,on=/,\s*/.source,new RegExp("rgba?\\(".concat(ti).concat(on).concat(ti).concat(on).concat(ti,"(").concat(on).concat(ti,")?\\)"),"g")),xr=/^.*\(/,Vn=/#([0-9]|[a-f]){3,6}/gi,Ci="VAL",vs=function(M,B){return M.map(function(te,V){return"_".concat(B,"_").concat(V)})};function R(M){return parseInt(M,16)}var k=function(M){return"rgb(".concat((B=M,(B=B.replace(/#/,"")).length===3&&(B=(B=B.split(""))[0]+B[0]+B[1]+B[1]+B[2]+B[2]),[R(B.substr(0,2)),R(B.substr(2,2)),R(B.substr(4,2))]).join(","),")");var B},j=function(M,B,te){var V=B.match(M),ue=B.replace(M,Ci);return V&&V.forEach(function(Ie){return ue=ue.replace(Ci,te(Ie))}),ue},$=function(M){for(var B in M){var te=M[B];typeof te=="string"&&te.match(Vn)&&(M[B]=j(Vn,te,k))}},q=function(M){var B=M.match(ni),te=B.slice(0,3).map(Math.floor),V=M.match(xr)[0];if(B.length===3)return"".concat(V).concat(te.join(","),")");if(B.length===4)return"".concat(V).concat(te.join(","),",").concat(B[3],")");throw new Error("Invalid rgbChunk: ".concat(M))},we=function(M){return M.match(ni)},De=function(M,B){var te={};return B.forEach(function(V){te[V]=M[V],delete M[V]}),te},ke=function(M,B){return B.map(function(te){return M[te]})},We=function(M,B){return B.forEach(function(te){return M=M.replace(Ci,+te.toFixed(4))}),M},Qe=function(M){for(var B in M._currentState)if(typeof M._currentState[B]=="string")return!0;return!1};function je(M){var B=M._currentState;[B,M._originalState,M._targetState].forEach($),M._tokenData=function(te){var V,ue,Ie={};for(var Ue in te){var it=te[Ue];typeof it=="string"&&(Ie[Ue]={formatString:(V=it,ue=void 0,ue=V.match(gr),ue?(ue.length===1||V.charAt(0).match(Li))&&ue.unshift(""):ue=["",""],ue.join(Ci)),chunkNames:vs(we(it),Ue)})}return Ie}(B)}function Ze(M){var B=M._currentState,te=M._originalState,V=M._targetState,ue=M._easing,Ie=M._tokenData;(function(Ue,it){var ft=function(bt){var Ct=it[bt].chunkNames,Bt=Ue[bt];if(typeof Bt=="string"){var tn=Bt.split(" "),mi=tn[tn.length-1];Ct.forEach(function(ii,ri){return Ue[ii]=tn[ri]||mi})}else Ct.forEach(function(ii){return Ue[ii]=Bt});delete Ue[bt]};for(var Nt in it)ft(Nt)})(ue,Ie),[B,te,V].forEach(function(Ue){return function(it,ft){var Nt=function(Ct){we(it[Ct]).forEach(function(Bt,tn){return it[ft[Ct].chunkNames[tn]]=+Bt}),delete it[Ct]};for(var bt in ft)Nt(bt)}(Ue,Ie)})}function vt(M){var B=M._currentState,te=M._originalState,V=M._targetState,ue=M._easing,Ie=M._tokenData;[B,te,V].forEach(function(Ue){return function(it,ft){for(var Nt in ft){var bt=ft[Nt],Ct=bt.chunkNames,Bt=bt.formatString,tn=We(Bt,ke(De(it,Ct),Ct));it[Nt]=j(vr,tn,q)}}(Ue,Ie)}),function(Ue,it){for(var ft in it){var Nt=it[ft].chunkNames,bt=Ue[Nt[0]];Ue[ft]=typeof bt=="string"?Nt.map(function(Ct){var Bt=Ue[Ct];return delete Ue[Ct],Bt}).join(" "):bt}}(ue,Ie)}function Vt(M,B){var te=Object.keys(M);if(Object.getOwnPropertySymbols){var V=Object.getOwnPropertySymbols(M);B&&(V=V.filter(function(ue){return Object.getOwnPropertyDescriptor(M,ue).enumerable})),te.push.apply(te,V)}return te}function Ut(M){for(var B=1;B<arguments.length;B++){var te=arguments[B]!=null?arguments[B]:{};B%2?Vt(Object(te),!0).forEach(function(V){an(M,V,te[V])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(te)):Vt(Object(te)).forEach(function(V){Object.defineProperty(M,V,Object.getOwnPropertyDescriptor(te,V))})}return M}function an(M,B,te){return B in M?Object.defineProperty(M,B,{value:te,enumerable:!0,configurable:!0,writable:!0}):M[B]=te,M}var ot=new ht,Je=ht.filters,Yi=function(M,B,te,V){var ue=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,Ie=Ut({},M),Ue=_t(M,V);for(var it in ot._filters.length=0,ot.set({}),ot._currentState=Ie,ot._originalState=M,ot._targetState=B,ot._easing=Ue,Je)Je[it].doesApply(ot)&&ot._filters.push(Je[it]);ot._applyFilter("tweenCreated"),ot._applyFilter("beforeTween");var ft=F(te,Ie,M,B,1,ue,Ue);return ot._applyFilter("afterTween"),ft};function xt(M,B){(B==null||B>M.length)&&(B=M.length);for(var te=0,V=new Array(B);te<B;te++)V[te]=M[te];return V}function In(M,B){if(!(M instanceof B))throw new TypeError("Cannot call a class as a function")}function yr(M,B){for(var te=0;te<B.length;te++){var V=B[te];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(M,V.key,V)}}function Kt(M,B){var te=B.get(M);if(!te)throw new TypeError("attempted to get private field on non-instance");return te.get?te.get.call(M):te.value}var en=new WeakMap,Gt=function(){function M(){In(this,M),en.set(this,{writable:!0,value:[]});for(var V=arguments.length,ue=new Array(V),Ie=0;Ie<V;Ie++)ue[Ie]=arguments[Ie];ue.forEach(this.add.bind(this))}var B,te;return B=M,(te=[{key:"add",value:function(V){return Kt(this,en).push(V),V}},{key:"remove",value:function(V){var ue=Kt(this,en).indexOf(V);return~ue&&Kt(this,en).splice(ue,1),V}},{key:"empty",value:function(){return this.tweenables.map(this.remove.bind(this))}},{key:"isPlaying",value:function(){return Kt(this,en).some(function(V){return V.isPlaying()})}},{key:"play",value:function(){return Kt(this,en).forEach(function(V){return V.tween()}),this}},{key:"pause",value:function(){return Kt(this,en).forEach(function(V){return V.pause()}),this}},{key:"resume",value:function(){return this.playingTweenables.forEach(function(V){return V.resume()}),this}},{key:"stop",value:function(V){return Kt(this,en).forEach(function(ue){return ue.stop(V)}),this}},{key:"tweenables",get:function(){return function(ue){if(Array.isArray(ue))return xt(ue)}(V=Kt(this,en))||function(ue){if(typeof Symbol<"u"&&Symbol.iterator in Object(ue))return Array.from(ue)}(V)||function(ue,Ie){if(ue){if(typeof ue=="string")return xt(ue,Ie);var Ue=Object.prototype.toString.call(ue).slice(8,-1);return Ue==="Object"&&ue.constructor&&(Ue=ue.constructor.name),Ue==="Map"||Ue==="Set"?Array.from(ue):Ue==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ue)?xt(ue,Ie):void 0}}(V)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}();var V}},{key:"playingTweenables",get:function(){return Kt(this,en).filter(function(V){return!V.hasEnded()})}},{key:"promises",get:function(){return Kt(this,en).map(function(V){return V.then()})}}])&&yr(B.prototype,te),M}();ht.filters.token=f}},o={};function a(l){if(o[l])return o[l].exports;var c=o[l]={exports:{}};return s[l](c,c.exports,a),c.exports}return a.d=function(l,c){for(var u in c)a.o(c,u)&&!a.o(l,u)&&Object.defineProperty(l,u,{enumerable:!0,get:c[u]})},a.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),a.o=function(l,c){return Object.prototype.hasOwnProperty.call(l,c)},a.r=function(l){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},a(720)}()})},{}],3:[function(t,n,i){var s=t("./shape"),o=t("./utils"),a=function(c,u){this._pathTemplate="M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",this.containerAspectRatio=1,s.apply(this,arguments)};a.prototype=new s,a.prototype.constructor=a,a.prototype._pathString=function(c){var u=c.strokeWidth;c.trailWidth&&c.trailWidth>c.strokeWidth&&(u=c.trailWidth);var h=50-u/2;return o.render(this._pathTemplate,{radius:h,"2radius":h*2})},a.prototype._trailString=function(c){return this._pathString(c)},n.exports=a},{"./shape":8,"./utils":10}],4:[function(t,n,i){var s=t("./shape"),o=t("./utils"),a=function(c,u){this._pathTemplate=u.vertical?"M {center},100 L {center},0":"M 0,{center} L 100,{center}",s.apply(this,arguments)};a.prototype=new s,a.prototype.constructor=a,a.prototype._initializeSvg=function(c,u){var h=u.vertical?"0 0 "+u.strokeWidth+" 100":"0 0 100 "+u.strokeWidth;c.setAttribute("viewBox",h),c.setAttribute("preserveAspectRatio","none")},a.prototype._pathString=function(c){return o.render(this._pathTemplate,{center:c.strokeWidth/2})},a.prototype._trailString=function(c){return this._pathString(c)},n.exports=a},{"./shape":8,"./utils":10}],5:[function(t,n,i){n.exports={Line:t("./line"),Circle:t("./circle"),SemiCircle:t("./semicircle"),Square:t("./square"),Path:t("./path"),Shape:t("./shape"),utils:t("./utils")}},{"./circle":3,"./line":4,"./path":6,"./semicircle":7,"./shape":8,"./square":9,"./utils":10}],6:[function(t,n,i){var s=t("shifty"),o=t("./utils"),a=s.Tweenable,l={easeIn:"easeInCubic",easeOut:"easeOutCubic",easeInOut:"easeInOutCubic"},c=function u(h,f){if(!(this instanceof u))throw new Error("Constructor was called without new keyword");f=o.extend({delay:0,duration:800,easing:"linear",from:{},to:{},step:function(){}},f);var d;o.isString(h)?d=document.querySelector(h):d=h,this.path=d,this._opts=f,this._tweenable=null;var _=this.path.getTotalLength();this.path.style.strokeDasharray=_+" "+_,this.set(0)};c.prototype.value=function(){var h=this._getComputedDashOffset(),f=this.path.getTotalLength(),d=1-h/f;return parseFloat(d.toFixed(6),10)},c.prototype.set=function(h){this.stop(),this.path.style.strokeDashoffset=this._progressToOffset(h);var f=this._opts.step;if(o.isFunction(f)){var d=this._easing(this._opts.easing),_=this._calculateTo(h,d),g=this._opts.shape||this;f(_,g,this._opts.attachment)}},c.prototype.stop=function(){this._stopTween(),this.path.style.strokeDashoffset=this._getComputedDashOffset()},c.prototype.animate=function(h,f,d){f=f||{},o.isFunction(f)&&(d=f,f={});var _=o.extend({},f),g=o.extend({},this._opts);f=o.extend(g,f);var m=this._easing(f.easing),p=this._resolveFromAndTo(h,m,_);this.stop(),this.path.getBoundingClientRect();var b=this._getComputedDashOffset(),v=this._progressToOffset(h),y=this;this._tweenable=new a,this._tweenable.tween({from:o.extend({offset:b},p.from),to:o.extend({offset:v},p.to),duration:f.duration,delay:f.delay,easing:m,step:function(x){y.path.style.strokeDashoffset=x.offset;var E=f.shape||y;f.step(x,E,f.attachment)}}).then(function(x){o.isFunction(d)&&d()}).catch(function(x){throw console.error("Error in tweening:",x),x})},c.prototype._getComputedDashOffset=function(){var h=window.getComputedStyle(this.path,null);return parseFloat(h.getPropertyValue("stroke-dashoffset"),10)},c.prototype._progressToOffset=function(h){var f=this.path.getTotalLength();return f-h*f},c.prototype._resolveFromAndTo=function(h,f,d){return d.from&&d.to?{from:d.from,to:d.to}:{from:this._calculateFrom(f),to:this._calculateTo(h,f)}},c.prototype._calculateFrom=function(h){return s.interpolate(this._opts.from,this._opts.to,this.value(),h)},c.prototype._calculateTo=function(h,f){return s.interpolate(this._opts.from,this._opts.to,h,f)},c.prototype._stopTween=function(){this._tweenable!==null&&(this._tweenable.stop(!0),this._tweenable=null)},c.prototype._easing=function(h){return l.hasOwnProperty(h)?l[h]:h},n.exports=c},{"./utils":10,shifty:2}],7:[function(t,n,i){var s=t("./shape"),o=t("./circle"),a=t("./utils"),l=function(u,h){this._pathTemplate="M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0",this.containerAspectRatio=2,s.apply(this,arguments)};l.prototype=new s,l.prototype.constructor=l,l.prototype._initializeSvg=function(u,h){u.setAttribute("viewBox","0 0 100 50")},l.prototype._initializeTextContainer=function(u,h,f){u.text.style&&(f.style.top="auto",f.style.bottom="0",u.text.alignToBottom?a.setStyle(f,"transform","translate(-50%, 0)"):a.setStyle(f,"transform","translate(-50%, 50%)"))},l.prototype._pathString=o.prototype._pathString,l.prototype._trailString=o.prototype._trailString,n.exports=l},{"./circle":3,"./shape":8,"./utils":10}],8:[function(t,n,i){var s=t("./path"),o=t("./utils"),a="Object is destroyed",l=function c(u,h){if(!(this instanceof c))throw new Error("Constructor was called without new keyword");if(arguments.length!==0){this._opts=o.extend({color:"#555",strokeWidth:1,trailColor:null,trailWidth:null,fill:null,text:{style:{color:null,position:"absolute",left:"50%",top:"50%",padding:0,margin:0,transform:{prefix:!0,value:"translate(-50%, -50%)"}},autoStyleContainer:!0,alignToBottom:!0,value:null,className:"progressbar-text"},svgStyle:{display:"block",width:"100%"},warnings:!1},h,!0),o.isObject(h)&&h.svgStyle!==void 0&&(this._opts.svgStyle=h.svgStyle),o.isObject(h)&&o.isObject(h.text)&&h.text.style!==void 0&&(this._opts.text.style=h.text.style);var f=this._createSvgView(this._opts),d;if(o.isString(u)?d=document.querySelector(u):d=u,!d)throw new Error("Container does not exist: "+u);this._container=d,this._container.appendChild(f.svg),this._opts.warnings&&this._warnContainerAspectRatio(this._container),this._opts.svgStyle&&o.setStyles(f.svg,this._opts.svgStyle),this.svg=f.svg,this.path=f.path,this.trail=f.trail,this.text=null;var _=o.extend({attachment:void 0,shape:this},this._opts);this._progressPath=new s(f.path,_),o.isObject(this._opts.text)&&this._opts.text.value!==null&&this.setText(this._opts.text.value)}};l.prototype.animate=function(u,h,f){if(this._progressPath===null)throw new Error(a);this._progressPath.animate(u,h,f)},l.prototype.stop=function(){if(this._progressPath===null)throw new Error(a);this._progressPath!==void 0&&this._progressPath.stop()},l.prototype.pause=function(){if(this._progressPath===null)throw new Error(a);this._progressPath!==void 0&&this._progressPath._tweenable&&this._progressPath._tweenable.pause()},l.prototype.resume=function(){if(this._progressPath===null)throw new Error(a);this._progressPath!==void 0&&this._progressPath._tweenable&&this._progressPath._tweenable.resume()},l.prototype.destroy=function(){if(this._progressPath===null)throw new Error(a);this.stop(),this.svg.parentNode.removeChild(this.svg),this.svg=null,this.path=null,this.trail=null,this._progressPath=null,this.text!==null&&(this.text.parentNode.removeChild(this.text),this.text=null)},l.prototype.set=function(u){if(this._progressPath===null)throw new Error(a);this._progressPath.set(u)},l.prototype.value=function(){if(this._progressPath===null)throw new Error(a);return this._progressPath===void 0?0:this._progressPath.value()},l.prototype.setText=function(u){if(this._progressPath===null)throw new Error(a);this.text===null&&(this.text=this._createTextContainer(this._opts,this._container),this._container.appendChild(this.text)),o.isObject(u)?(o.removeChildren(this.text),this.text.appendChild(u)):this.text.innerHTML=u},l.prototype._createSvgView=function(u){var h=document.createElementNS("http://www.w3.org/2000/svg","svg");this._initializeSvg(h,u);var f=null;(u.trailColor||u.trailWidth)&&(f=this._createTrail(u),h.appendChild(f));var d=this._createPath(u);return h.appendChild(d),{svg:h,path:d,trail:f}},l.prototype._initializeSvg=function(u,h){u.setAttribute("viewBox","0 0 100 100")},l.prototype._createPath=function(u){var h=this._pathString(u);return this._createPathElement(h,u)},l.prototype._createTrail=function(u){var h=this._trailString(u),f=o.extend({},u);return f.trailColor||(f.trailColor="#eee"),f.trailWidth||(f.trailWidth=f.strokeWidth),f.color=f.trailColor,f.strokeWidth=f.trailWidth,f.fill=null,this._createPathElement(h,f)},l.prototype._createPathElement=function(u,h){var f=document.createElementNS("http://www.w3.org/2000/svg","path");return f.setAttribute("d",u),f.setAttribute("stroke",h.color),f.setAttribute("stroke-width",h.strokeWidth),h.fill?f.setAttribute("fill",h.fill):f.setAttribute("fill-opacity","0"),f},l.prototype._createTextContainer=function(u,h){var f=document.createElement("div");f.className=u.text.className;var d=u.text.style;return d&&(u.text.autoStyleContainer&&(h.style.position="relative"),o.setStyles(f,d),d.color||(f.style.color=u.color)),this._initializeTextContainer(u,h,f),f},l.prototype._initializeTextContainer=function(c,u,h){},l.prototype._pathString=function(u){throw new Error("Override this function for each progress bar")},l.prototype._trailString=function(u){throw new Error("Override this function for each progress bar")},l.prototype._warnContainerAspectRatio=function(u){if(this.containerAspectRatio){var h=window.getComputedStyle(u,null),f=parseFloat(h.getPropertyValue("width"),10),d=parseFloat(h.getPropertyValue("height"),10);o.floatEquals(this.containerAspectRatio,f/d)||(console.warn("Incorrect aspect ratio of container","#"+u.id,"detected:",h.getPropertyValue("width")+"(width)","/",h.getPropertyValue("height")+"(height)","=",f/d),console.warn("Aspect ratio of should be",this.containerAspectRatio))}},n.exports=l},{"./path":6,"./utils":10}],9:[function(t,n,i){var s=t("./shape"),o=t("./utils"),a=function(c,u){this._pathTemplate="M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}",this._trailTemplate="M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}",s.apply(this,arguments)};a.prototype=new s,a.prototype.constructor=a,a.prototype._pathString=function(c){var u=100-c.strokeWidth/2;return o.render(this._pathTemplate,{width:u,strokeWidth:c.strokeWidth,halfOfStrokeWidth:c.strokeWidth/2})},a.prototype._trailString=function(c){var u=100-c.strokeWidth/2;return o.render(this._trailTemplate,{width:u,strokeWidth:c.strokeWidth,halfOfStrokeWidth:c.strokeWidth/2,startMargin:c.strokeWidth/2-c.trailWidth/2})},n.exports=a},{"./shape":8,"./utils":10}],10:[function(t,n,i){var s=t("lodash.merge"),o="Webkit Moz O ms".split(" "),a=.001;function l(v,y){var x=v;for(var E in y)if(y.hasOwnProperty(E)){var T=y[E],I="\\{"+E+"\\}",S=new RegExp(I,"g");x=x.replace(S,T)}return x}function c(v,y,x){for(var E=v.style,T=0;T<o.length;++T){var I=o[T];E[I+h(y)]=x}E[y]=x}function u(v,y){m(y,function(x,E){x!=null&&(g(x)&&x.prefix===!0?c(v,E,x.value):v.style[E]=x)})}function h(v){return v.charAt(0).toUpperCase()+v.slice(1)}function f(v){return typeof v=="string"||v instanceof String}function d(v){return typeof v=="function"}function _(v){return Object.prototype.toString.call(v)==="[object Array]"}function g(v){if(_(v))return!1;var y=typeof v;return y==="object"&&!!v}function m(v,y){for(var x in v)if(v.hasOwnProperty(x)){var E=v[x];y(E,x)}}function p(v,y){return Math.abs(v-y)<a}function b(v){for(;v.firstChild;)v.removeChild(v.firstChild)}n.exports={extend:s,render:l,setStyle:c,setStyles:u,capitalize:h,isString:f,isFunction:d,isObject:g,forEachObject:m,floatEquals:p,removeChildren:b}},{"lodash.merge":1}]},{},[5])(5)})})(Gf);var db=Gf.exports;class pb{constructor(){this.result=null,this.loader=new ix}reset(){this.result=null}async load(e){this.result&&Promise.resolve(this.result);let t=await this.loader.loadAsync(e),n=Array.isArray(t.scene)?t.scene:[t.scene];for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(o=>{if(o.isMesh){const a=new $y(o);a.attributes=["position","color","normal","tangent","uv","uv2"],a.applyWorldTransforms=!1;const l={strategy:Of,maxLeafTris:1};let c=new hc(a.generate(),l);return new Mn(a.generate(),o.material),this.result={scene:t.scene,bvh:c,mesh:o},console.log("==> loaded mesh ",e),this.result}});return this.result}}function qn(r){return new P(r[0],r[1],r[2])}const J={smooth_normals:!0,bounces:6,wireframe:!0,neutral_color:[.5,.5,.5],skyPower:.5,skyColor:[.8,.8,1],sunPower:.35,sunAngularSize:40,sunLatitude:40,sunLongitude:180,sunColor:[1,1,.8],base_weight:1,base_color:[.8,.8,.8],base_roughness:0,base_metalness:0,specular_weight:1,specular_color:[1,1,1],specular_roughness:.1,specular_anisotropy:0,specular_rotation:0,specular_ior:1.5,transmission_weight:0,transmission_color:[1,1,1],transmission_depth:0,transmission_scatter:[0,0,0],transmission_scatter_anisotropy:0,transmission_dispersion_abbe_number:20,transmission_dispersion_scale:0,subsurface_weight:0,subsurface_color:[.8,.8,.8],subsurface_radius:.2,subsurface_radius_scale:[1,.5,.25],subsurface_anisotropy:0,coat_weight:0,coat_color:[1,1,1],coat_roughness:0,coat_anisotropy:0,coat_rotation:0,coat_ior:1.6,fuzz_weight:0,fuzz_color:[1,1,1],fuzz_roughness:.5,geometry_opacity:1,geometry_thin_walled:!1};let qt,Sn,cr,Os,jl,ca,Et,Wf,Js,sr=0,or,Zr,yl,bl;var pn,dc,ua,js;_b();ql();function mb(){let r=(90-J.sunLatitude)*Math.PI/180,e=J.sunLongitude*Math.PI/180,t=Math.cos(r),n=Math.sin(r),i=Math.cos(e),s=Math.sin(e),o=n*i,a=n*s,l=t;J.sunDir=[o,l,a]}function _b(){console.log("init"),pn=new db.Circle("#progress_overlay",{color:"rgba(255, 128, 64, 0.75)",strokeWidth:5,trailColor:"rgba(255, 128, 64, 0.333)",trailWidth:3,svgStyle:{display:"block",width:"100%"},text:{value:"",className:"progressbar__label",style:{color:"rgba(169, 85, 42, 1.0)",position:"absolute",fontWeight:"bold",left:"50%",top:"50%",padding:0,margin:0,transform:{prefix:!0,value:"translate(-50%, -50%)"}},autoStyleContainer:!0,alignToBottom:!0},fill:null,duration:2e3,easing:"linear",from:{color:"rgba( 0,   0,  0, 0.0)"},to:{color:"rgba(32, 255, 32, 1.0)"},warnings:!0}),pn.set(0),pn.setText(""),ua=!1,or=null,Zr=null,yl=null,bl=null,qt=new Mf({antialias:!1}),qt.setPixelRatio(window.devicePixelRatio),qt.setClearColor(594970),qt.setSize(window.innerWidth,window.innerHeight),qt.outputEncoding=Wi,document.body.appendChild(qt.domElement),cr=new f0,Sn=new mn(75,window.innerWidth/window.innerHeight,.1,50),Sn.position.set(4,4,4),Sn.far=100,Sn.updateProjectionMatrix();const r=new Pf(16777215,1);r.position.set(1,1,1),cr.add(r),cr.add(new H0(11583173,.5)),jl=new zx,document.body.appendChild(jl.dom),Et=new ji({defines:{BOUNCES:J.bounces},uniforms:{bvh_surface:{value:new Fh},normalAttribute_surface:{value:new Bs},tangentAttribute_surface:{value:new Bs},has_normals_surface:{value:1},has_tangents_surface:{value:0},bvh_props:{value:new Fh},normalAttribute_props:{value:new Bs},tangentAttribute_props:{value:new Bs},has_normals_props:{value:1},has_tangents_props:{value:0},cameraWorldMatrix:{value:new Ve},invProjectionMatrix:{value:new Ve},invModelMatrix:{value:new Ve},resolution:{value:new Oe},samples:{value:0},accumulation_weight:{value:1},wireframe:{value:J.wireframe},neutral_color:{value:new P().fromArray(J.neutral_color)},smooth_normals:{value:J.smooth_normals},skyPower:{value:J.skyPower},skyColor:{value:qn(J.skyColor)},sunPower:{value:Math.pow(10,J.sunPower)},sunAngularSize:{value:J.sunAngularSize},sunColor:{value:qn(J.sunColor)},sunDir:{value:qn([0,0,0])},base_weight:{value:J.base_weight},base_color:{value:qn(J.base_color)},base_roughness:{value:J.base_roughness},base_metalness:{value:J.base_metalness},specular_weight:{value:J.specular_weight},specular_color:{value:qn(J.specular_color)},specular_roughness:{value:J.specular_roughness},specular_anisotropy:{value:J.specular_anisotropy},specular_rotation:{value:J.specular_rotation},specular_ior:{value:J.specular_ior},transmission_weight:{value:J.transmission_weight},transmission_color:{value:qn(J.transmission_color)},transmission_depth:{value:J.transmission_depth},transmission_scatter:{value:qn(J.transmission_scatter)},transmission_scatter_anisotropy:{value:J.transmission_scatter_anisotropy},transmission_dispersion_abbe_number:{value:J.transmission_dispersion_abbe_number},transmission_dispersion_scale:{value:J.transmission_dispersion_scale},subsurface_weight:{value:J.subsurface_weight},subsurface_color:{value:qn(J.subsurface_color)},subsurface_radius:{value:J.subsurface_radius},subsurface_radius_scale:{value:qn(J.subsurface_radius_scale)},subsurface_anisotropy:{value:J.subsurface_anisotropy},coat_weight:{value:J.coat_weight},coat_color:{value:qn(J.coat_color)},coat_roughness:{value:J.coat_roughness},coat_anisotropy:{value:J.coat_anisotropy},coat_rotation:{value:J.coat_rotation},coat_ior:{value:J.coat_ior},fuzz_weight:{value:J.fuzz_weight},fuzz_color:{value:qn(J.fuzz_color)},fuzz_roughness:{value:J.fuzz_roughness},geometry_opacity:{value:J.geometry_opacity},geometry_thin_walled:{value:J.geometry_thin_walled}},vertexShader:`
            varying vec2 vUv;
            void main()
            {
                vec4 mvPosition = vec4( position, 1.0 );
                mvPosition = modelViewMatrix * mvPosition;
                gl_Position = projectionMatrix * mvPosition;
                vUv = uv;
            }
        `,fragmentShader:`precision highp isampler2D;
                         precision highp usampler2D;
                         precision highp int;
                         ${Gy}
                         ${Wy}
                        `+sb+ob+lb+cb+ab+ub+hb+fb}),pn.setText("loading meshes..."),pn.animate(.5);const e=new pb;e.load("standard-shader-ball/neutral_objects.gltf").then(()=>{cr.add(e.result.scene),Zr=e.result.mesh,bl=e.result.bvh,Et.uniforms.bvh_props.value.updateFrom(bl),Et.uniforms.has_normals_props.value=!1,Et.uniforms.has_tangents_props.value=!1,Zr.geometry.attributes.normal&&(Et.uniforms.normalAttribute_props.value.updateFrom(Zr.geometry.attributes.normal),Et.uniforms.has_normals_props.value=!0),Zr.geometry.attributes.tangent&&(Et.uniforms.tangentAttribute_props.value.updateFrom(Zr.geometry.attributes.tangent),Et.uniforms.has_tangents_props.value=!0),console.log("  has_normals_scene:  ",Et.uniforms.has_normals_props),console.log("  has_tangents_scene: ",Et.uniforms.has_tangents_props),pn.animate(.75),e.reset(),e.load("standard-shader-ball/shaderball.gltf").then(()=>{cr.add(e.result.scene),or=e.result.mesh,yl=e.result.bvh,Et.uniforms.bvh_surface.value.updateFrom(yl),Et.uniforms.has_normals_surface.value=!1,Et.uniforms.has_tangents_surface.value=!1,or.geometry.attributes.normal&&(Et.uniforms.normalAttribute_surface.value.updateFrom(or.geometry.attributes.normal),Et.uniforms.has_normals_surface.value=!0),or.geometry.attributes.tangent&&(Et.uniforms.tangentAttribute_surface.value.updateFrom(or.geometry.attributes.tangent),Et.uniforms.has_tangents_surface.value=!0),console.log("  has_normals_surface:  ",Et.uniforms.has_normals_surface),console.log("  has_tangents_surface: ",Et.uniforms.has_tangents_surface),console.log("===> LOADED"),ua=!0,gb(),pn.animate(1),document.getElementById("progress_overlay"),dc=performance.now()})})}function gb(){let r=new Q0(Sn,qt.domElement);r.addEventListener("change",()=>{qe()});let e=new kt;e.setFromObject(or);let t=e.min,n=e.max,i=Math.max(n.x-t.x,n.y-t.y,n.z-t.z),s=[t.x,t.y,t.z],o=[n.x-t.x,n.y-t.y,n.z-t.z],a=new P(s[0]+.5*o[0],s[1]+.5*o[1],s[2]+.5*o[2]),l=new P(s[0]+o[0],s[1]+o[1],s[2]+o[2]),c=a.clone();c.sub(l),c.normalize();let u=a.clone();u.addScaledVector(c,-2*i),Sn.position.copy(u),r.target.copy(a),r.zoomSpeed=1.5,r.update(),ca=new fh(Et),Et.transparent=!0,Et.depthWrite=!1,Js=new Xi(1,1,{format:nn,type:_n}),Wf=new fh(new ki({map:Js.texture})),Vh(),Os=new fc({width:300});const h=Os.addFolder("Material"),f=h.addFolder("Base");f.add(J,"base_weight",0,1).onChange(x=>{qe()}),f.addColor(J,"base_color").onChange(x=>{qe()}),f.add(J,"base_roughness",0,1).onChange(x=>{qe()}),f.add(J,"base_metalness",0,1).onChange(x=>{qe()});const d=h.addFolder("Specular");d.add(J,"specular_weight",0,1).onChange(x=>{qe()}),d.addColor(J,"specular_color").onChange(x=>{qe()}),d.add(J,"specular_roughness",0,1).onChange(x=>{qe()}),d.add(J,"specular_ior",1,5).onChange(x=>{qe()}),d.add(J,"specular_anisotropy",0,1).onChange(x=>{qe()}),d.add(J,"specular_rotation",0,1).onChange(x=>{qe()});const _=h.addFolder("Transmission");_.add(J,"transmission_weight",0,1).onChange(x=>{qe()}),_.addColor(J,"transmission_color").onChange(x=>{qe()}),_.add(J,"transmission_depth",0,1).onChange(x=>{qe()}),_.addColor(J,"transmission_scatter").onChange(x=>{qe()}),_.add(J,"transmission_scatter_anisotropy",-1,1).onChange(x=>{qe()}),_.add(J,"transmission_dispersion_abbe_number",9,91).onChange(x=>{qe()}),_.add(J,"transmission_dispersion_scale",0,1).onChange(x=>{qe()}),_.close();const g=h.addFolder("Subsurface");g.add(J,"subsurface_weight",0,1).onChange(x=>{qe()}),g.addColor(J,"subsurface_color").onChange(x=>{qe()}),g.add(J,"subsurface_radius",0,1).onChange(x=>{qe()}),g.addColor(J,"subsurface_radius_scale").onChange(x=>{qe()}),g.add(J,"subsurface_anisotropy",-1,1).onChange(x=>{qe()}),g.close();const m=h.addFolder("Coat");m.add(J,"coat_weight",0,1).onChange(x=>{qe()}),m.addColor(J,"coat_color").onChange(x=>{qe()}),m.add(J,"coat_roughness",0,1).onChange(x=>{qe()}),m.add(J,"coat_ior",1,3).onChange(x=>{qe()}),m.add(J,"coat_anisotropy",0,1).onChange(x=>{qe()}),m.add(J,"coat_rotation",0,1).onChange(x=>{qe()});const p=h.addFolder("Fuzz");p.add(J,"fuzz_weight",0,1).onChange(x=>{qe()}),p.addColor(J,"fuzz_color").onChange(x=>{qe()}),p.add(J,"fuzz_roughness",0,1).onChange(x=>{qe()}),p.close();const b=h.addFolder("Geometry");b.add(J,"geometry_opacity",0,1).onChange(x=>{qe()}),b.add(J,"geometry_thin_walled").onChange(x=>{qe()}),b.close();const v=Os.addFolder("Lighting");v.add(J,"skyPower",0,2).onChange(x=>{qe()}),v.addColor(J,"skyColor").onChange(x=>{qe()}),v.add(J,"sunPower",-4,4).onChange(x=>{qe()}),v.add(J,"sunAngularSize",0,40).onChange(x=>{qe()}),v.add(J,"sunLatitude",0,90).onChange(x=>{qe()}),v.add(J,"sunLongitude",0,360).onChange(x=>{qe()}),v.addColor(J,"sunColor").onChange(x=>{qe()}),v.close();const y=Os.addFolder("Renderer");y.add(J,"smooth_normals").onChange(x=>{qe()}),y.add(J,"wireframe").onChange(x=>{qe()}),y.addColor(J,"neutral_color").onChange(x=>{qe()}),y.add(J,"bounces",1,16,1).onChange(x=>{Et.defines.BOUNCES=parseInt(x),qe(),Vh()}),y.close(),Os.open(),window.addEventListener("resize",Gh,!1),Gh()}function Vh(){qt.setRenderTarget(Js);let r=new to(-1,1,1,-1,0,1);vb(),qt.compileAsync(ca._mesh,r).then(t=>{console.log("shaders successfully compiled."),xb()}).catch(t=>{console.log("shader compilation error: "+t)}).finally(()=>{})}function vb(){let r=document.getElementById("progress_overlay");r.style.display="block",r.style.opacity=1,pn.set(0),pn.setText("shaders compiling..."),js=!0}function xb(){pn.set(1),dc=performance.now(),js=!1}function Gh(){Sn.aspect=window.innerWidth/window.innerHeight,Sn.updateProjectionMatrix();const r=window.innerWidth,e=window.innerHeight;qt.setSize(r,e),qt.setPixelRatio(1),Js.setSize(r,e),qe()}function On(r){return new P(r[0],r[1],r[2])}function qe(){Et&&(Et.needsUpdate=!0),sr=0}function yb(r){let e=document.getElementById("progress_overlay");var t=setInterval(function(){e.style.opacity||(e.style.opacity=1),e.style.opacity>0?e.style.opacity-=.025:(e.style.display="none",e.style.opacity=0,clearInterval(t))},r)}function ql(){if(!ua){console.log("not LOADED"),requestAnimationFrame(ql);return}if(jl.update(),requestAnimationFrame(ql),qt.domElement.style.imageRendering="auto",!(sr>=8192)){if(!js&&ua){Sn.updateMatrixWorld();const e=ca.material.uniforms,t=window.innerWidth,n=window.innerHeight;e.cameraWorldMatrix.value.copy(Sn.matrixWorld),e.invProjectionMatrix.value.copy(Sn.projectionMatrixInverse),e.invModelMatrix.value.copy(cr.matrixWorld).invert();let i=new Oe(t,n);e.resolution.value.copy(i),e.accumulation_weight.value=1/(sr+1),e.samples.value=sr,e.wireframe.value=J.wireframe,e.neutral_color.value.copy(On(J.neutral_color)),e.smooth_normals.value=J.smooth_normals,e.base_weight.value=J.base_weight,e.base_color.value.copy(On(J.base_color)),e.base_roughness.value=J.base_roughness,e.base_metalness.value=J.base_metalness,e.specular_weight.value=J.specular_weight,e.specular_color.value.copy(On(J.specular_color)),e.specular_roughness.value=J.specular_roughness,e.specular_anisotropy.value=J.specular_anisotropy,e.specular_rotation.value=J.specular_rotation,e.specular_ior.value=J.specular_ior,e.transmission_weight.value=J.transmission_weight,e.transmission_color.value.copy(On(J.transmission_color)),e.transmission_depth.value=J.transmission_depth,e.transmission_scatter.value.copy(On(J.transmission_scatter)),e.transmission_scatter_anisotropy.value=J.transmission_scatter_anisotropy,e.transmission_dispersion_abbe_number.value=J.transmission_dispersion_abbe_number,e.transmission_dispersion_scale.value=J.transmission_dispersion_scale,e.subsurface_weight.value=J.subsurface_weight,e.subsurface_color.value.copy(On(J.subsurface_color)),e.subsurface_radius.value=J.subsurface_radius,e.subsurface_radius_scale.value.copy(On(J.subsurface_radius_scale)),e.subsurface_anisotropy.value=J.subsurface_anisotropy,e.coat_weight.value=J.coat_weight,e.coat_color.value.copy(On(J.coat_color)),e.coat_roughness.value=J.coat_roughness,e.coat_anisotropy.value=J.coat_anisotropy,e.coat_rotation.value=J.coat_rotation,e.coat_ior.value=J.coat_ior,e.fuzz_weight.value=J.fuzz_weight,e.fuzz_color.value.copy(On(J.fuzz_color)),e.fuzz_roughness.value=J.fuzz_roughness,e.geometry_opacity.value=J.geometry_opacity,e.geometry_thin_walled.value=J.geometry_thin_walled,e.skyPower.value=J.skyPower,e.skyColor.value.copy(On(J.skyColor)),e.sunPower.value=Math.pow(10,J.sunPower),e.sunAngularSize.value=J.sunAngularSize,e.sunColor.value.copy(On(J.sunColor)),mb(),e.sunDir.value.copy(On(J.sunDir)),qt.autoClear=sr===0,qt.setRenderTarget(Js),ca.render(qt),qt.setRenderTarget(null),Wf.render(qt),qt.autoClear=!0,sr++}else qe(),Sn.updateProjectionMatrix(),Sn.clearViewOffset(),qt.render(cr,Sn);document.getElementById("samples").innerText=`samples: ${sr}`,js||document.getElementById("progress_overlay").style.display!="none"&&performance.now()-dc>400&&yb(400),js&&(pn.value()<.01?pn.animate(1):pn.value()>.99&&(pn.set(0),pn.animate(1)))}}
