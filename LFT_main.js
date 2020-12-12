// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

const address =(words.get('address1'));
const pathoname=(words.get('pathoname1'));
const sex=(words.get('sex1'));
const doctorname=(words.get('doctorname1'));

const name1 = (words.get('name1'));
const patientid = (words.get('patientid1'));
const phone1= (words.get('phone1'));
const age1  = (words.get('age1'));
const pathophone= (words.get('phonepatho'));
const age=`${age1}/${sex}`;
const receivedate  = (words.get('receivedate'));
const printdate  = (words.get('printdate'));
const Direct  = (words.get('direct'));
const indirect  = (words.get('indirect'));
const totalb=Number(indirect)+Number(Direct);
var totalbf =totalb.toFixed(2);
const sgot  = (words.get('sgot'));
const sgpt = (words.get('sgpt'));
const  gamma = (words.get('gamma'));
const  alp = (words.get('alp'));
const  ldh = (words.get('ldh'));
const  albumin= (words.get('albumin'));
const  globulin=(words.get('globulin'));
const totalp=Number(albumin)+Number(globulin);
const ratio=Number(albumin)/Number(globulin);
var ratiof = ratio.toFixed(2);

var primaryr =new Array('Range_1','Range_2','Range_3','Range_4')
var primaryu =new Array('Unit_1','Unit_2','Unit_3','Unit_4')
var primaryv =new Array('Value_1','Value_2','Value_3','Value_4')
var primaryp =new Array('Parameter_1','Parameter_2','Parameter_3','Parameter_4' )

var dlcr =new Array('Range_5','Range_6','Range_7','Range_8')
var dlcv =new Array('Value_5','Value_6','Value_7','Value_8')
var dlcp =new Array('Parameter_5','Parameter_6','Parameter_7','Parameter_8')
var rbctabler =new Array('Range_9','Range_10','Range_11','Range_12')
var rbctablev =new Array('Value_9','Value_10','Value_11','Value_12')
var rbctablep =new Array('Parameter_9','Parameter_10','Parameter_11','Parameter_12')

var i=0;
var j=0;
var k=0;
var rbccheck=0;
var haemocheck=0;
var plateletscheck=0;
var wbccheck=0;
var neutrocheck=0;
var monocheck=0;
var lymphocheck=0;
var eosinocheck=0;
var pcvcheck=0;
var mchcheck=0;
var mchccheck=0;
var mcvcheck=0;
console.log(primaryr[i]);
console.log(dlcv[j]);

const nameChange=document.getElementById('Name_ds');
const AgeChange = document.getElementById("AgeSex_dt");
//const RegNoChange = document.getElementById("Reg_No__dv");
const doctornameChange = document.getElementById("Referred_By_dy");
const DateChange = document.getElementById("Date_du");
const PhoneNoChange= document.getElementById("Phone_No__dw");
const addresschange= document.getElementById("ADDRESS");
const pathonamechange=document.getElementById("NAME_PATHOLOGY_LAB");
const patientidchange=document.getElementById("Reg_No__dv");
const pathophonechange=document.getElementById("PHONE_NO");
const directchange=document.getElementById("ID037");
const Indirectchange=document.getElementById("ID037_cg");
const Totalbchange=document.getElementById("ID153");
const sgotchange=document.getElementById("SGOT_db");
const sgptchange=document.getElementById("SGPT_dd");
const gammachange=document.getElementById("Gamma_dd");
const alpchange=document.getElementById("ALP_df");
const ldhchange=document.getElementById("LDH_de");
const totalpchange=document.getElementById("ID153_cw");
const albuminchange=document.getElementById("ID178_c");
const globulinchange=document.getElementById("ID037_ct");
const ratiochange=document.getElementById("ID278_da");



pathonamechange.innerHTML=pathoname;
PhoneNoChange.innerHTML=phone1;
addresschange.innerHTML=address;
doctornameChange.innerHTML =doctorname;
nameChange.innerHTML = name1;
patientidchange.innerHTML = patientid ; 
AgeChange.innerHTML =age;
DateChange.innerHTML = printdate;
pathophonechange.innerHTML=pathophone;
directchange.innerHTML=Direct;
Indirectchange.innerHTML=indirect;
Totalbchange.innerHTML=totalbf;
sgotchange.innerHTML=sgot;
sgptchange.innerHTML=sgpt;
gammachange.innerHTML=gamma;
alpchange.innerHTML=alp;
ldhchange.innerHTML=ldh;
totalpchange.innerHTML=totalp;
albuminchange.innerHTML=albumin;
globulinchange.innerHTML=globulin;
ratiochange.innerHTML=ratiof;

var dbb1=0,dbb2=0,dbb3=0;
if(Direct >0.3||Direct <0){
  document.getElementById("ID037").style.color="red";

}else{
  document.getElementById("ID037").style.color="green";

}
if(indirect>1||indirect<0){
   document.getElementById("ID037_cg").style.color="red";
}else{
  document.getElementById("ID037_cg").style.color="green";

}
if(totalb>1.2||totalb<0){
  document.getElementById("ID153").style.color="red";
}else{
  document.getElementById("ID153").style.color="green";

}
if(Direct>0.3||indirect>1||totalb>1.2){
  document.getElementById("LOW_ALBUMIN_LEVEL_fr").innerHTML="HIGH BILIRUBIN LEVEL";
  document.getElementById("Albumin_is_one_of_several_prot_fl").innerHTML=" Bilirubin is a substance produced during the normal breakdown of red blood cells.<br>Bilirubin passes through the liver and is excreted in stool.";
  document.getElementById("Low_level_may_indicate_liver_d_fo").innerHTML="Elevated levels of bilirubin (jaundice) might indicate liver damage or disease or certain types of anemia.";
  document.getElementById("Include_protein-rich_food_incl_fq").innerHTML="Drink more fluids and, opt for fruits like papaya and mango, which are rich in digestive enzymes. <br>Eat lots of veggies, fruit and high-fiber foods(oatmeal, berries).";
  dbb1=1;
}
if(sgot>35||sgot<0){
  document.getElementById("SGOT_db").style.color="red";
}else{
  document.getElementById("SGOT_db").style.color="green";
}
if(sgot>35){
  if(dbb1==0){
    document.getElementById("LOW_ALBUMIN_LEVEL_fr").innerHTML="HIGH SGOT(AST) ENZYME LEVEL";
  document.getElementById("Albumin_is_one_of_several_prot_fl").innerHTML="  AST is an enzyme that helps metabolize amino acids. AST is normally present in blood at low levels. ";
  document.getElementById("Low_level_may_indicate_liver_d_fo").innerHTML="An increase in AST levels may indicate liver damage, disease or muscle damage.";
  document.getElementById("Include_protein-rich_food_incl_fq").innerHTML=" Include lean proteins, such as fish, or beans, and low-fat dairy products in daily diet.<br> Reduce refined carbohydrates and sugars in diet,eat foods high in folate.";
  dbb1=1;
  }else if(dbb2==0){
    document.getElementById("LOW_ALBUMIN_LEVEL").innerHTML="HIGH SGOT(AST) ENZYME LEVEL";
    document.getElementById("Albumin_is_one_of_several_prot").innerHTML="  AST is an enzyme that helps metabolize amino acids. AST is normally present in blood at low levels. ";
  document.getElementById("Low_level_may_indicate_liver_d").innerHTML="An increase in AST levels may indicate liver damage, disease or muscle damage.";
  document.getElementById("Include_protein-rich_food_incl").innerHTML=" Include lean proteins, such as fish, or beans, and low-fat dairy products in daily diet.<br> Reduce refined carbohydrates and sugars in diet,eat foods high in folate.";
  dbb2=1;
  }
}
if(sgpt>49||sgpt<0){
  document.getElementById("SGPT_dd").style.color="red";
}else{
  document.getElementById("SGPT_dd").style.color="green";
}
if(sgot>49){
  if(dbb1==0){
    document.getElementById("LOW_ALBUMIN_LEVEL_fr").innerHTML="HIGH SGPT(ALT) ENZYME LEVEL";
  document.getElementById("Albumin_is_one_of_several_prot_fl").innerHTML="ALT is an enzyme found in the liver that helps convert proteins into energy for the liver cells. ";
  document.getElementById("Low_level_may_indicate_liver_d_fo").innerHTML="When the liver is damaged, ALT is released into the bloodstream and levels increase";
  document.getElementById("Include_protein-rich_food_incl_fq").innerHTML="Eat food high in omega-3 fatty acids. Opt for zero/low-fat milk and dairy products.<br> Avoid fruits and vegetables served with high-calorie sauces or added sugar and salt.";
  dbb1=1;
  }else if(dbb2==0){
     document.getElementById("LOW_ALBUMIN_LEVEL").innerHTML="HIGH SGPT(ALT) ENZYME LEVEL";
  document.getElementById("Albumin_is_one_of_several_prot").innerHTML="ALT is an enzyme found in the liver that helps convert proteins into energy for the liver cells. ";
  document.getElementById("Low_level_may_indicate_liver_d").innerHTML="When the liver is damaged, ALT is released into the bloodstream and levels increase";
  document.getElementById("Include_protein-rich_food_incl").innerHTML="Eat food high in omega-3 fatty acids. Opt for zero/low-fat milk and dairy products.<br> Avoid fruits and vegetables served with high-calorie sauces or added sugar and salt.";
  dbb2=1;
  }else if(dbb3==0){
            document.getElementById("LOW_ALBUMIN_LEVEL_fj").innerHTML="HIGH SGPT(ALT) ENZYME LEVEL";
  document.getElementById("Albumin_is_one_of_several_prot_fd").innerHTML="ALT is an enzyme found in the liver that helps convert proteins into energy for the liver cells. ";
  document.getElementById("Low_level_may_indicate_liver_d_fg").innerHTML="When the liver is damaged, ALT is released into the bloodstream and levels increase";
  document.getElementById("Include_protein-rich_food_incl_fi").innerHTML="Eat food high in omega-3 fatty acids. Opt for zero/low-fat milk and dairy products.<br> Avoid fruits and vegetables served with high-calorie sauces or added sugar and salt.";
  dbb3=1;
  }
}
if(gamma>37||gamma<0){
  document.getElementById("Gamma_dd").style.color="red";
}else{
   document.getElementById("Gamma_dd").style.color="green";
}
if(gamma>37){
if(dbb1==0){
    document.getElementById("LOW_ALBUMIN_LEVEL_fr").innerHTML="HIGH GAMMA(GT) ENZYME LEVEL";
  document.getElementById("Albumin_is_one_of_several_prot_fl").innerHTML="GT is an enzyme in the blood.";
  document.getElementById("Low_level_may_indicate_liver_d_fo").innerHTML=" Higher-than-normal levels may indicate liver or bile duct damage.";
  document.getElementById("Include_protein-rich_food_incl_fq").innerHTML=".";
  dbb1=1;
  }else if(dbb2==0){
     document.getElementById("LOW_ALBUMIN_LEVEL").innerHTML="HIGH GAMMA(GT) ENZYME LEVEL";
  document.getElementById("Albumin_is_one_of_several_prot").innerHTML="GT is an enzyme in the blood.";
  document.getElementById("Low_level_may_indicate_liver_d").innerHTML="Higher-than-normal levels may indicate liver or bile duct damage.";
  document.getElementById("Include_protein-rich_food_incl").innerHTML=".";
  dbb2=1;
  }else if(dbb3==0){
            document.getElementById("LOW_ALBUMIN_LEVEL_fj").innerHTML="HIGH GAMMA(GT) ENZYME LEVEL";
  document.getElementById("Albumin_is_one_of_several_prot_fd").innerHTML="GT is an enzyme in the blood.";
  document.getElementById("Low_level_may_indicate_liver_d_fg").innerHTML="Higher-than-normal levels may indicate liver or bile duct damage.";
  document.getElementById("Include_protein-rich_food_incl_fi").innerHTML=".";
  dbb3=1;
  }

}

if(alp>129||alp<45){
  document.getElementById("ALP_df").style.color="red";
}else{
  document.getElementById("ALP_df").style.color="green";
}
if(alp>129){
  if(dbb1==0){
    document.getElementById("LOW_ALBUMIN_LEVEL_fr").innerHTML="HIGH ALP ENZYME LEVEL";
  document.getElementById("Albumin_is_one_of_several_prot_fl").innerHTML="ALP is an enzyme found in the liver and bone and is important for breaking down proteins.";
  document.getElementById("Low_level_may_indicate_liver_d_fo").innerHTML=" May indicate liver damage or disease, such as a blocked bile duct, or certain bone diseases.";
  document.getElementById("Include_protein-rich_food_incl_fq").innerHTML="Include food rich in vitamin D, Healthy diet in association with physical exercise and exposure <br> to sunlight, increases the production of vitamin D helps to lower ALP levels";
  dbb1=1;
  }else if(dbb2==0){
     document.getElementById("LOW_ALBUMIN_LEVEL").innerHTML="HIGH ALP ENZYME LEVEL";
  document.getElementById("Albumin_is_one_of_several_prot").innerHTML="ALP is an enzyme found in the liver and bone and is important for breaking down proteins.";
  document.getElementById("Low_level_may_indicate_liver_d").innerHTML="May indicate liver damage or disease, such as a blocked bile duct, or certain bone diseases.";
  document.getElementById("Include_protein-rich_food_incl").innerHTML="Include food rich in vitamin D, Healthy diet in association with physical exercise and exposure <br> to sunlight, increases the production of vitamin D helps to lower ALP levels";
  dbb2=1;
  }else if(dbb3==0){
            document.getElementById("LOW_ALBUMIN_LEVEL_fj").innerHTML="HIGH ALP ENZYME LEVEL";
  document.getElementById("Albumin_is_one_of_several_prot_fd").innerHTML="ALP is an enzyme found in the liver and bone and is important for breaking down proteins.";
  document.getElementById("Low_level_may_indicate_liver_d_fg").innerHTML="May indicate liver damage or disease, such as a blocked bile duct, or certain bone diseases.";
  document.getElementById("Include_protein-rich_food_incl_fi").innerHTML="Include food rich in vitamin D, Healthy diet in association with physical exercise and exposure <br> to sunlight, increases the production of vitamin D helps to lower ALP levels";
  dbb3=1;
  }
}
if(ldh>450||ldh<225){
  document.getElementById("LDH_de").style.color="red";
}else{
  document.getElementById("LDH_de").style.color="green";
}
if(ldh>450){
  if(dbb1==0){
    document.getElementById("LOW_ALBUMIN_LEVEL_fr").innerHTML="HIGH LDH ENZYME LEVEL.";
  document.getElementById("Albumin_is_one_of_several_prot_fl").innerHTML="LDH is an enzyme found in the liver..";
  document.getElementById("Low_level_may_indicate_liver_d_fo").innerHTML="Elevated levels may indicate liver damage but can be elevated in many other disorders .";
  document.getElementById("Include_protein-rich_food_incl_fq").innerHTML=".";
  dbb1=1;
  }else if(dbb2==0){
     document.getElementById("LOW_ALBUMIN_LEVEL").innerHTML="HIGH LDH ENZYME LEVEL.";
  document.getElementById("Albumin_is_one_of_several_prot").innerHTML="LDH is an enzyme found in the liver..";
  document.getElementById("Low_level_may_indicate_liver_d").innerHTML="Elevated levels may indicate liver damage but can be elevated in many other disorders.";
  document.getElementById("Include_protein-rich_food_incl").innerHTML=".";
  dbb2=1;
  }else if(dbb3==0){
            document.getElementById("LOW_ALBUMIN_LEVEL_fj").innerHTML="HIGH LDH ENZYME LEVEL.";
  document.getElementById("Albumin_is_one_of_several_prot_fd").innerHTML="LDH is an enzyme found in the liver..";
  document.getElementById("Low_level_may_indicate_liver_d_fg").innerHTML="Elevated levels may indicate liver damage but can be elevated in many other disorders.";
  document.getElementById("Include_protein-rich_food_incl_fi").innerHTML=".";
  dbb3=1;
  }
}
if(totalp>8.2||totalp<5.7){
  document.getElementById("ID153_cw").style.color="red";
}else{document.getElementById("ID153_cw").style.color="green";}
if(totalp<5.7){
  if(dbb1==0){
    document.getElementById("LOW_ALBUMIN_LEVEL_fr").innerHTML="LOW TOTAL PROTEIN LEVEL";
  document.getElementById("Albumin_is_one_of_several_prot_fl").innerHTML="This includes all the proteins made in the liver. Your body needs these proteins to <br> fight infections and to perform other functions.";
  document.getElementById("Low_level_may_indicate_liver_d_fo").innerHTML="Low level may indicate liver damage or disease.";
  document.getElementById("Include_protein-rich_food_incl_fq").innerHTML="Include protein-rich food including nuts, eggs, and dairy products to raise your protein levels.";
  dbb1=1;
  }else if(dbb2==0){
     document.getElementById("LOW_ALBUMIN_LEVEL").innerHTML="LOW TOTAL PROTEIN LEVEL";
  document.getElementById("Albumin_is_one_of_several_prot").innerHTML="This includes all the proteins made in the liver. Your body needs these proteins to <br> fight infections and to perform other functions.";
  document.getElementById("Low_level_may_indicate_liver_d").innerHTML="Low level may indicate liver damage or disease.";
  document.getElementById("Include_protein-rich_food_incl").innerHTML="Include protein-rich food including nuts, eggs, and dairy products to raise your protein levels.";
  dbb2=1;
  }else if(dbb3==0){
            document.getElementById("LOW_ALBUMIN_LEVEL_fj").innerHTML="LOW TOTAL PROTEIN LEVEL.";
  document.getElementById("Albumin_is_one_of_several_prot_fd").innerHTML="This includes all the proteins made in the liver. Your body needs these proteins to <br> fight infections and to perform other functions.";
  document.getElementById("Low_level_may_indicate_liver_d_fg").innerHTML="Low level may indicate liver damage or disease.";
  document.getElementById("Include_protein-rich_food_incl_fi").innerHTML="Include protein-rich food including nuts, eggs, and dairy products to raise your protein levels.";
  dbb3=1;
  }
}
if(albumin>4.8||albumin<3.2){
  document.getElementById("ID178_c").style.color="red";
}else{document.getElementById("ID178_c").style.color="green";}
if(albumin<3.2){
  if(dbb1==0){
    document.getElementById("LOW_ALBUMIN_LEVEL_fr").innerHTML="LOW ALBUMIN LEVEL";
  document.getElementById("Albumin_is_one_of_several_prot_fl").innerHTML="Albumin is one of several proteins made in the liver. Your body needs these proteins to <br> fight infections and to perform other functions.";
  document.getElementById("Low_level_may_indicate_liver_d_fo").innerHTML=" Low level may indicate liver damage or disease.";
  document.getElementById("Include_protein-rich_food_incl_fq").innerHTML="Include protein-rich food including nuts, eggs, and dairy products to raise your albumin levels.";
  dbb1=1;
  }else if(dbb2==0){
     document.getElementById("LOW_ALBUMIN_LEVEL").innerHTML="LOW ALBUMIN LEVEL";
  document.getElementById("Albumin_is_one_of_several_prot").innerHTML="Albumin is one of several proteins made in the liver. Your body needs these proteins to <br> fight infections and to perform other functions.";
  document.getElementById("Low_level_may_indicate_liver_d").innerHTML=" Low level may indicate liver damage or disease.";
  document.getElementById("Include_protein-rich_food_incl").innerHTML="Include protein-rich food including nuts, eggs, and dairy products to raise your albumin levels.";
  dbb2=1;
  }else if(dbb3==0){
            document.getElementById("LOW_ALBUMIN_LEVEL_fj").innerHTML="LOW ALBUMIN LEVEL";
  document.getElementById("Albumin_is_one_of_several_prot_fd").innerHTML="Albumin is one of several proteins made in the liver. Your body needs these proteins to <br> fight infections and to perform other functions.";
  document.getElementById("Low_level_may_indicate_liver_d_fg").innerHTML=" Low level may indicate liver damage or disease.";
  document.getElementById("Include_protein-rich_food_incl_fi").innerHTML="Include protein-rich food including nuts, eggs, and dairy products to raise your albumin levels.";
  dbb3=1;
  }
}
if(globulin>3.5||globulin<2.3){
  document.getElementById("ID037_ct").style.color="red";
}else{document.getElementById("ID037_ct").style.color="green";}
if(globulin<2.3){
  if(dbb1==0){
    document.getElementById("LOW_ALBUMIN_LEVEL_fr").innerHTML="LOW GLOBULIN LEVEL";
  document.getElementById("Albumin_is_one_of_several_prot_fl").innerHTML="Globulin is one of several proteins made in the liver. Your body needs these proteins to <br> fight infections and to perform other functions.";
  document.getElementById("Low_level_may_indicate_liver_d_fo").innerHTML="Low level may indicate liver damage or disease.";
  document.getElementById("Include_protein-rich_food_incl_fq").innerHTML=".";
  dbb1=1;
  }else if(dbb2==0){
     document.getElementById("LOW_ALBUMIN_LEVEL").innerHTML="LOW GLOBULIN LEVEL";
  document.getElementById("Albumin_is_one_of_several_prot").innerHTML="Globulin is one of several proteins made in the liver. Your body needs these proteins to <br> fight infections and to perform other functions.";
  document.getElementById("Low_level_may_indicate_liver_d").innerHTML="Low level may indicate liver damage or disease.";
  document.getElementById("Include_protein-rich_food_incl").innerHTML=".";
  dbb2=1;
  }else if(dbb3==0){
            document.getElementById("LOW_ALBUMIN_LEVEL_fj").innerHTML="LOW GLOBULIN LEVEL";
  document.getElementById("Albumin_is_one_of_several_prot_fd").innerHTML="Globulin is one of several proteins made in the liver. Your body needs these proteins to <br> fight infections and to perform other functions.";
  document.getElementById("Low_level_may_indicate_liver_d_fg").innerHTML="Low level may indicate liver damage or disease.";
  document.getElementById("Include_protein-rich_food_incl_fi").innerHTML=" Include protein-rich food including nuts, eggs, and dairy products to raise your globulin levels.";
  dbb3=1;
  }
}
if(ratio>2||ratio<1.2){
  document.getElementById("ID278_da").style.color="red";
}else{document.getElementById("ID278_da").style.color="green";}
if(ratio==Infinity){
  document.getElementById("ID278_da").innerHTML="Inf";
}

if(dbb1==0){
    document.getElementById("LOW_ALBUMIN_LEVEL_fr").innerHTML="ABOUT BILIRUBIN TEST";
  document.getElementById("Albumin_is_one_of_several_prot_fl").innerHTML="Bilirubin testing is usually done as part of a group of tests to check the health of your liver.<br>It can be done to investigate Jaundice, or to detect/monitor the progression of Liver disease.";
  document.getElementById("Low_level_may_indicate_liver_d_fo").innerHTML="Your normal level indicates everything is in safe range, which is a good indicator for healthy lifestyle!";
  document.getElementById("Include_protein-rich_food_incl_fq").innerHTML="Follow your regular healthy lifestyle.";
  dbb1=1;
  
     document.getElementById("LOW_ALBUMIN_LEVEL").innerHTML="ABOUT ENZYMES TEST";
  document.getElementById("Albumin_is_one_of_several_prot").innerHTML="Enzymes are proteins found in your body that speed up certain chemical reactions.Liver enzymes perform <br>thesejobs within the liver.Elevated liver enzymes may be sign that a person’s liver is not working properly.";
  document.getElementById("Low_level_may_indicate_liver_d").innerHTML="Your normal level indicates everything is in safe range, which is a good indicator for healthy lifestyle!";
  document.getElementById("Include_protein-rich_food_incl").innerHTML="Follow your routine lifestyle.";
  dbb2=1;
              document.getElementById("LOW_ALBUMIN_LEVEL_fj").innerHTML="ABOUT PROTEIN TEST";
  document.getElementById("Albumin_is_one_of_several_prot_fd").innerHTML="Proteins normally help the body repair tissue. They also prevent fatty buildup and damage to the liver cells.<br>In people with badly damaged livers, proteins are not properly processed.";
  document.getElementById("Low_level_may_indicate_liver_d_fg").innerHTML="Your normal level indicates everything is in safe range, which is a good indicator for healthy lifestyle!";
  document.getElementById("Include_protein-rich_food_incl_fi").innerHTML=" Follow your healthy lifestyle.";
  dbb3=1;
  
}
if(dbb1==1&&dbb2==0){
   document.getElementById("LOW_ALBUMIN_LEVEL").innerHTML="ABOUT BILIRUBIN TEST";
  document.getElementById("Albumin_is_one_of_several_prot").innerHTML="Bilirubin testing is usually done as part of a group of tests to check the health of your liver.<br>It can be done to investigate Jaundice, or to detect/monitor the progression of Liver disease.";
   document.getElementById("Low_level_may_indicate_liver_d").innerHTML="Your normal level indicates everything is in safe range, which is a good indicator for healthy lifestyle!";
  document.getElementById("Include_protein-rich_food_incl").innerHTML="Follow your regular healthy lifestyle.";
  dbb2=1;
              document.getElementById("LOW_ALBUMIN_LEVEL_fj").innerHTML="ABOUT ENZYMES TEST";
  document.getElementById("Albumin_is_one_of_several_prot_fd").innerHTML="Enzymes are proteins found in your body that speed up certain chemical reactions.Liver enzymes perform <br>thesejobs within the liver.Elevated liver enzymes may be sign that a person’s liver is not working properly.";
  document.getElementById("Low_level_may_indicate_liver_d_fg").innerHTML="Your normal level indicates everything is in safe range, which is a good indicator for healthy lifestyle!";
  document.getElementById("Include_protein-rich_food_incl_fi").innerHTML=" Follow your healthy lifestyle.";
  dbb3=1;
}
if(dbb1==1&&dbb2==1&&dbb3==0){
   document.getElementById("LOW_ALBUMIN_LEVEL_fj").innerHTML="ABOUT BILIRUBIN TEST";
  document.getElementById("Albumin_is_one_of_several_prot_fd").innerHTML="Bilirubin testing is usually done as part of a group of tests to check the health of your liver.<br>It can be done to investigate Jaundice, or to detect/monitor the progression of Liver disease.";
  document.getElementById("Low_level_may_indicate_liver_d_fg").innerHTML="Your normal level indicates everything is fine and in safe range, which is a good indicator for healthy lifestyle!";
  document.getElementById("Include_protein-rich_food_incl_fi").innerHTML=" Follow your healthy lifestyle.";
  dbb3=1;
}

 









  