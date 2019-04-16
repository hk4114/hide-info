const HideInfo = (param,left=0,right=0) => {
    const len = param.length
    const r = new RegExp("^(.{"+left+"})(?:\\d+)(.{"+right+"})$","gim");
    let c = "";
    for(let i=0;i<len-left-right;i++){
      c+="*"
    }
    return param.replace(r, "$1"+c+"$2");
  };
  export default HideInfo;