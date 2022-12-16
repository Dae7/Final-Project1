function bmiCalc()
{
 var Inputf= document.bmicalc.uInf.value;
 var InputI= document.bmicalc.uIni.value;
 var Inputw= document.bmicalc.uInw.value;
 var resf = (Inputf * 12);
 var resfi = parseFloat(resf) + parseFloat(InputI);
 var final = (703 * (parseFloat(Inputw)/(parseFloat(resfi**2))));
 var final2 = Math.round(parseFloat(final))
 alert( final2 + " " + "kg/m^2");
}


